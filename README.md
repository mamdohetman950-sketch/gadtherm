# Frontend Design & Content Improvement Plan — `gad`

> Note: this plan assumes a React + component-based CSS stack (the most common
> setup for a project like this). Section 4 shows how each piece adapts if
> your project is actually plain HTML/CSS/JS instead — tell me which and I'll
> regenerate exact diffs.

---

## 1. UI/UX Improvements

### Typography
- Pair a **display/heading font** with a **body font** for contrast without noise.
  - Headings: `Inter` or `Sora` (700/600 weight)
  - Body: `Inter` (400/500 weight)
- Use a modular type scale (1.25 ratio) instead of ad-hoc font sizes:
  ```css
  :root {
    --fs-xs: 0.75rem;
    --fs-sm: 0.875rem;
    --fs-base: 1rem;
    --fs-lg: 1.25rem;
    --fs-xl: 1.563rem;
    --fs-2xl: 1.953rem;
    --fs-3xl: 2.441rem;
    --lh-tight: 1.2;
    --lh-normal: 1.5;
  }
  ```

### Color palette
- Define a semantic palette in CSS custom properties (not hard-coded hex in components) so theming/dark mode is trivial later:
  ```css
  :root {
    --color-primary: #2563eb;
    --color-primary-hover: #1d4ed8;
    --color-accent: #f97316;
    --color-bg: #ffffff;
    --color-surface: #f8fafc;
    --color-text: #0f172a;
    --color-text-muted: #64748b;
    --color-border: #e2e8f0;
    --color-success: #16a34a;
    --color-danger: #dc2626;
  }
  ```
- Check contrast ratios (WCAG AA: 4.5:1 for body text, 3:1 for large text) with a tool like WebAIM's contrast checker before finalizing.

### Responsive layout
- Move to a CSS Grid-based product layout with fluid columns instead of fixed breakpoints only:
  ```css
  .product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 1.5rem;
  }
  ```
- Breakpoints: 480px (mobile), 768px (tablet), 1024px (desktop), 1440px (wide).
- Use `clamp()` for fluid type/spacing instead of separate media-query overrides where possible:
  ```css
  h1 { font-size: clamp(1.75rem, 1.2rem + 2vw, 2.75rem); }
  ```

### Icons — DECIDED: Heroicons
- Style: outline/stroke icons (24px grid), MIT licensed, tree-shakeable React components, no icon-font weight penalty.
- Sizing: standardize on a `--icon-size` scale (16 / 20 / 24 / 32px) rather than ad-hoc `width`/`height` per instance.
- Accessibility:
  - Decorative icons: `aria-hidden="true"` and no alt text.
  - Functional/interactive icons (e.g. icon-only buttons): wrap in a labeled control, e.g. `<button aria-label="Add to cart"><CartIcon aria-hidden="true" /></button>`.
  - Never convey state (error/success) by color alone — pair icon + color + text.

---

## 2. Imagery

### Product images & banners
- Product shots: consistent aspect ratio (recommend 1:1 or 4:5), consistent background (white or light neutral), consistent lighting — inconsistency is the #1 thing that makes a product grid look unpolished.
- Banners: 21:9 or 16:9 for hero sections, with a mobile-specific crop (don't just scale down a wide banner — art-direct it with `<picture>`).

### Formats & optimization — DECIDED: optimized JPEG/PNG (no WebP/AVIF)
- JPEG for photos (mozjpeg, quality ~75-80 — visually near-lossless at roughly half the file size of quality-95 defaults); PNG only for flat-color/transparent assets (banners with logos, icons).
- Without format-level savings from WebP, `srcset`/`sizes` matters more — always serve the resolution the layout actually needs, not one oversized master image:
  ```html
  <img
    srcset="/images/product-1-400.jpg 400w,
            /images/product-1-800.jpg 800w,
            /images/product-1-1200.jpg 1200w"
    sizes="(max-width: 600px) 100vw, 33vw"
    src="/images/product-1-800.jpg"
    alt="Matte black ceramic mug, 350ml"
    width="800" height="800"
    loading="lazy" decoding="async" />
  ```
- Build-time optimization: run `sharp` or `imagemin` (with `imagemin-mozjpeg` / `imagemin-pngquant`) as a pre-build script to compress + generate the three widths above from a single full-res source, rather than hand-exporting every size.
- Target: hero banner ≤ 200KB, product thumbnail ≤ 60KB after compression (JPEG/PNG budgets run higher than WebP equivalents — worth revisiting WebP later if these prove hard to hit without visible quality loss).

---

## 3. D3 Data Visualization

### Recommended charts
| Chart | Purpose | Type |
|---|---|---|
| **Price/sales trend** | Show price history or sales over time per product | Line chart with area fill |
| **Category comparison** | Compare sales/stock across categories | Grouped bar chart |
| **Rating distribution** | Show star-rating breakdown for a product | Horizontal bar chart |
| **Stock/inventory share** | Proportion of inventory by category | Donut chart |

### Data schema (example)
```ts
interface ProductTimePoint {
  date: string;       // ISO 8601
  productId: string;
  price: number;
  unitsSold: number;
}

interface CategorySummary {
  category: string;
  totalSales: number;
  unitsInStock: number;
}
```

### Interactivity
- Hover tooltips showing exact value + date (via a single shared tooltip `<div>` positioned with `pointer events`, not per-point tooltips — much cheaper to manage).
- Click-to-filter: clicking a legend category dims/highlights the corresponding series.
- Smooth transitions on data updates (`d3.transition().duration(300)`) when filters change.
- Optional: brush-to-zoom on the time-series chart for longer date ranges.

### Integration approach: D3 + React — DECIDED: vanilla D3 via refs
Let D3 own the math (scales, shapes, axes) and React own the DOM — this avoids the two libraries fighting over the same nodes, which is the most common source of bugs in D3-in-React code:

```jsx
// components/PriceTrendChart.jsx
import { useRef, useEffect } from 'react';
import * as d3 from 'd3';

export default function PriceTrendChart({ data, width = 640, height = 320 }) {
  const svgRef = useRef(null);

  useEffect(() => {
    const margin = { top: 20, right: 20, bottom: 30, left: 50 };
    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove(); // clear on re-render

    const x = d3.scaleTime()
      .domain(d3.extent(data, d => new Date(d.date)))
      .range([margin.left, width - margin.right]);

    const y = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.price) * 1.1])
      .range([height - margin.bottom, margin.top]);

    const line = d3.line()
      .x(d => x(new Date(d.date)))
      .y(d => y(d.price))
      .curve(d3.curveMonotoneX);

    svg.append('g')
      .attr('transform', `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x))
      .attr('aria-hidden', 'true');

    svg.append('g')
      .attr('transform', `translate(${margin.left},0)`)
      .call(d3.axisLeft(y))
      .attr('aria-hidden', 'true');

    svg.append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', 'var(--color-primary)')
      .attr('stroke-width', 2)
      .attr('d', line);

    // Tooltip dots
    svg.selectAll('circle')
      .data(data)
      .join('circle')
      .attr('cx', d => x(new Date(d.date)))
      .attr('cy', d => y(d.price))
      .attr('r', 4)
      .attr('fill', 'var(--color-primary)')
      .attr('tabindex', 0)
      .attr('role', 'img')
      .attr('aria-label', d => `${d.date}: $${d.price}`);
  }, [data, width, height]);

  return (
    <svg
      ref={svgRef}
      width={width}
      height={height}
      role="img"
      aria-label="Price trend over time"
    />
  );
}
```

If you'd rather not hand-roll axes/tooltips, `visx` (Airbnb's D3-based React chart primitives) gives the same low-level control with less boilerplate — worth considering if you'll build many chart types.

---

## 4. Technical Scope

### Assets & code integration (illustrative — exact paths depend on your repo)
```jsx
// Before
<img src="/img/mug1.png" />

// After
import mugImg from '../assets/products/mug-1.jpg';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

<img
  src={mugImg}
  alt="Matte black ceramic mug, 350ml"
  width={600} height={600}
  loading="lazy" decoding="async"
/>
<button aria-label="Add to cart">
  <ShoppingCartIcon aria-hidden="true" className="icon icon-24" />
</button>
```

### Example patch-style diff (illustrative shape — will match your real files once shared)
```diff
--- a/src/components/ProductCard.jsx
+++ b/src/components/ProductCard.jsx
@@ -1,14 +1,17 @@
-import React from 'react';
-import './ProductCard.css';
+import React from 'react';
+import { HeartIcon } from '@heroicons/react/24/outline';
+import './ProductCard.css';

 export default function ProductCard({ product }) {
   return (
     <div className="product-card">
-      <img src={product.image} />
+      <img
+        src={product.image}
+        alt={product.name}
+        width="300" height="300"
+        loading="lazy" decoding="async"
+      />
+      <button aria-label={`Save ${product.name} to wishlist`}>
+        <HeartIcon aria-hidden="true" className="icon icon-20" />
+      </button>
       <h3>{product.name}</h3>
       <p>${product.price}</p>
     </div>
   );
 }
```

### Asset pipeline
- Add an image-optimization step to the build (`sharp` or `imagemin` pre-build script) so source images stay full-res in a `/src/assets/originals` folder and compressed JPEG/PNG variants at 3 widths are generated automatically — don't hand-export every size.
- Install deps:
  ```
  npm install @heroicons/react d3
  npm install --save-dev imagemin imagemin-mozjpeg imagemin-pngquant
  ```

---

## 5. Accessibility & Performance

- **Alt text**: describe content/function, not appearance-for-appearance's-sake ("Matte black ceramic mug, 350ml" not "mug1.png" or "image of a mug").
- **ARIA roles**: landmark roles (`role="navigation"`, `role="main"`) if not using semantic HTML5 tags already; `aria-label` on icon-only buttons; `role="img"` + `aria-label` on SVG charts (as shown above), since D3-generated SVGs have no inherent accessible name.
- **Keyboard access**: every interactive element (including chart data points if they carry tooltips) needs `tabindex="0"` and visible focus states — don't rely on hover-only tooltips.
- **Lazy loading**: `loading="lazy"` on all below-the-fold images; for charts, consider an `IntersectionObserver` to defer D3 render until the chart scrolls into view (avoids paying render cost on page load for off-screen charts).
- **Performance targets**: Lighthouse Performance ≥ 90, LCP < 2.5s, CLS < 0.1 (set explicit `width`/`height` on all images to prevent layout shift — see snippets above).

---

## 6. Milestones

| Phase | Scope | Deliverable |
|---|---|---|
| **MVP** | Icon library integrated site-wide, product/banner images converted to WebP with responsive `srcset`, one D3 chart (price trend) on product detail page | Working build + PR |
| **Enhancement 1** | Category comparison bar chart + rating distribution chart, chart filtering/legend interactivity | PR |
| **Enhancement 2** | Typography/color system rollout across all components, dark-mode support, chart entrance animations, brush-to-zoom | PR |

---

## 7. Tech preferences — confirmed

| Decision | Choice |
|---|---|
| Icon library | Heroicons (outline, 24px grid) |
| Image format | Optimized JPEG/PNG, no WebP/AVIF |
| D3 integration | Vanilla D3 via React refs |

**Still needed to generate an exact diff against your repo:** a copy of `package.json` and one or two real component files, pasted here — GitHub's robots.txt is currently blocking me from reading the repo directly.
