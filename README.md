:root {
    --primary-color: #0056b3;
    --secondary-color: #00b300;
    --bg-color: #f4f7f6;
    --text-color: #333;
    
    /* Custom Motion Easing Curves */
    --ease-out-quint: cubic-bezier(0.22, 1, 0.36, 1);
    --ease-in-out-smooth: cubic-bezier(0.4, 0, 0.2, 1);
}

body { 
    font-family: 'Tajawal', sans-serif; 
    background-color: var(--bg-color); 
    color: var(--text-color); 
    margin: 0; 
    padding: 0; 
}

/* Header */
header { 
    background-color: var(--primary-color); 
    color: white; 
    text-align: center; 
    padding: 2rem 1rem; 
    box-shadow: 0 4px 12px rgba(0,0,0,0.12); 
}

header h1 { 
    margin: 0; 
    font-size: 2.5rem; 
    font-weight: 900; 
}

/* Tactile Tab Buttons */
.tabs { 
    display: flex; 
    justify-content: center; 
    gap: 10px; 
    margin: 2rem 0; 
    flex-wrap: wrap; 
}

.tab-btn { 
    background-color: white; 
    border: 2px solid var(--primary-color); 
    color: var(--primary-color); 
    padding: 10px 20px; 
    font-size: 1.1rem; 
    font-weight: 700; 
    border-radius: 8px; 
    cursor: pointer; 
    
    /* Hardware-accelerated smooth state transitions */
    transition: transform 0.2s var(--ease-out-quint),
                background-color 0.25s var(--ease-in-out-smooth),
                color 0.25s var(--ease-in-out-smooth),
                box-shadow 0.2s var(--ease-out-quint);
    will-change: transform;
}

.tab-btn:hover { 
    background-color: var(--primary-color); 
    color: white; 
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 86, 179, 0.25);
}

.tab-btn:active {
    transform: translateY(0);
    box-shadow: none;
}

.tab-btn.active { 
    background-color: var(--primary-color); 
    color: white; 
    box-shadow: 0 4px 10px rgba(0, 86, 179, 0.3);
}

/* Tab Content Container */
.tab-content { 
    display: none; 
    max-width: 1200px; 
    margin: 0 auto; 
    padding: 0 1rem; 
}

.tab-content.active { 
    display: block; 
}

/* Interactive Product Cards */
.product-card { 
    display: flex; 
    background: white; 
    border-radius: 10px; 
    box-shadow: 0 4px 15px rgba(0,0,0,0.05); 
    margin-bottom: 2rem; 
    overflow: hidden; 
    flex-wrap: wrap; 

    /* Elevation Transition */
    transition: transform 0.3s var(--ease-out-quint),
                box-shadow 0.3s var(--ease-out-quint);
    will-change: transform, box-shadow;
}

.product-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.1);
}

/* Product Image Hover Zoom */
.product-image { 
    flex: 1; 
    min-width: 250px; 
    background-color: #fff; 
    display: flex; 
    align-items: center; 
    justify-content: center; 
    padding: 1rem; 
    border-left: 2px solid #eee; 
    overflow: hidden;
}

.product-image img { 
    max-width: 100%; 
    height: auto; 
    border-radius: 8px; 
    object-fit: contain; 
    
    /* Subtle Image Scaling */
    transition: transform 0.4s var(--ease-out-quint);
    will-change: transform;
}

.product-card:hover .product-image img {
    transform: scale(1.04);
}

.product-details { 
    flex: 2; 
    min-width: 300px; 
    padding: 1.5rem; 
}

.product-details h3 { 
    color: var(--secondary-color); 
    border-bottom: 2px solid var(--secondary-color); 
    padding-bottom: 10px; 
    margin-top: 0; 
}

/* Smooth Table Highlight */
table { 
    width: 100%; 
    border-collapse: collapse; 
    margin-top: 1rem; 
    text-align: center; 
}

th, td { 
    padding: 12px; 
    border: 1px solid #ddd; 
}

th { 
    background-color: var(--primary-color); 
    color: white; 
}

tr {
    transition: background-color 0.2s ease;
}

tr:nth-child(even) { 
    background-color: #f9f9f9; 
}

tr:hover { 
    background-color: #eaf2fb; 
}

/* Staggered Card Reveal Animation */
.tab-content.active .product-card {
    animation: slideUpFade 0.4s var(--ease-out-quint) both;
}

/* Cascade delays for top cards */
.tab-content.active .product-card:nth-child(1) { animation-delay: 0.04s; }
.tab-content.active .product-card:nth-child(2) { animation-delay: 0.08s; }
.tab-content.active .product-card:nth-child(3) { animation-delay: 0.12s; }
.tab-content.active .product-card:nth-child(4) { animation-delay: 0.16s; }
.tab-content.active .product-card:nth-child(5) { animation-delay: 0.20s; }

@keyframes slideUpFade { 
    from { 
        opacity: 0; 
        transform: translateY(16px); 
    } 
    to { 
        opacity: 1; 
        transform: translateY(0); 
    } 
}

/* Mobile Adjustments */
@media (max-width: 768px) { 
    .product-card { flex-direction: column; } 
    .product-image { border-left: none; border-bottom: 2px solid #eee; } 
}

footer { 
    background-color: #222; 
    color: white; 
    text-align: center; 
    padding: 2rem 1rem; 
    margin-top: 3rem; 
}

/* ACCESSIBILITY: Reduced Motion Support */
@media (prefers-reduced-motion: reduce) {
    .tab-btn,
    .product-card,
    .product-image img,
    tr {
        transition: none !important;
        transform: none !important;
    }

    .tab-content.active .product-card {
        animation: none !important;
    }
}
