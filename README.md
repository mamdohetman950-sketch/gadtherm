<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>جاد ثيرم - للصناعات البلاستيكية والمعدنية</title>
    
    <!-- استدعاء خط تجوال -->
    <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;900&display=swap" rel="stylesheet">
    
    <!-- استدعاء مكتبة الأيقونات Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

    <style>
        :root {
            --primary-color: #004b99;
            --secondary-color: #009900;
            --bg-color: #f8fafc;
            --card-bg: #ffffff;
            --text-main: #1e293b;
            --text-muted: #64748b;
            --border-color: #e2e8f0;
            --transition: all 0.3s ease;
        }

        * { box-sizing: border-box; }

        body { 
            font-family: 'Tajawal', sans-serif; 
            background-color: var(--bg-color); 
            color: var(--text-main); 
            margin: 0; 
            padding: 0; 
            line-height: 1.6;
        }

        /* تصميم الهيدر (الجزء العلوي) */
        header { 
            background: linear-gradient(135deg, var(--primary-color), #0066cc);
            color: white; 
            text-align: center; 
            padding: 3rem 1rem; 
            box-shadow: 0 4px 12px rgba(0,0,0,0.1); 
        }
        
        header h1 { 
            margin: 0 0 10px 0; 
            font-size: 3rem; 
            font-weight: 900; 
            letter-spacing: 1px;
        }
        
        header p {
            margin: 5px 0;
            font-size: 1.2rem;
            opacity: 0.9;
        }

        /* تصميم أزرار الأقسام (Tabs) */
        .tabs { 
            display: flex; 
            justify-content: center; 
            gap: 15px; 
            margin: 2rem auto; 
            flex-wrap: wrap; 
            max-width: 800px;
            padding: 0 1rem;
        }
        
        .tab-btn { 
            background-color: white; 
            border: 2px solid var(--primary-color); 
            color: var(--primary-color); 
            padding: 12px 25px; 
            font-size: 1.1rem; 
            font-weight: 700; 
            font-family: 'Tajawal', sans-serif;
            border-radius: 50px; 
            cursor: pointer; 
            transition: var(--transition); 
            display: flex;
            align-items: center;
            gap: 8px;
        }
        
        .tab-btn:hover, .tab-btn.active { 
            background-color: var(--primary-color); 
            color: white; 
            box-shadow: 0 4px 10px rgba(0, 75, 153, 0.3);
        }

        /* محتوى الأقسام */
        .tab-content { 
            display: none; 
            animation: fadeIn 0.4s ease-out; 
            max-width: 1200px; 
            margin: 0 auto; 
            padding: 0 1rem; 
        }
        
        .tab-content.active { display: block; }
        
        @keyframes fadeIn { 
            from { opacity: 0; transform: translateY(15px); } 
            to { opacity: 1; transform: translateY(0); } 
        }

        /* تصميم كروت المنتجات */
        .product-card { 
            display: flex; 
            background: var(--card-bg); 
            border-radius: 12px; 
            box-shadow: 0 5px 20px rgba(0,0,0,0.04); 
            margin-bottom: 2rem; 
            overflow: hidden; 
            flex-wrap: wrap; 
            border: 1px solid var(--border-color);
            transition: var(--transition);
        }

        .product-card:hover {
            box-shadow: 0 8px 25px rgba(0,0,0,0.08);
            transform: translateY(-2px);
        }

        .product-image { 
            flex: 1; 
            min-width: 250px; 
            background-color: #fff; 
            display: flex; 
            align-items: center; 
            justify-content: center; 
            padding: 2rem; 
            border-left: 1px solid var(--border-color); 
        }
        
        .product-image img { 
            max-width: 100%; 
            height: auto; 
            max-height: 200px;
            object-fit: contain; 
            transition: var(--transition);
        }

        .product-image img:hover {
            transform: scale(1.05);
        }

        .product-details { 
            flex: 2; 
            min-width: 300px; 
            padding: 2rem; 
        }
        
        .product-details h3 { 
            color: var(--primary-color); 
            border-bottom: 2px solid var(--secondary-color); 
            padding-bottom: 12px; 
            margin-top: 0; 
            font-size: 1.5rem;
            display: inline-block;
        }

        /* تصميم الجداول */
        .table-responsive {
            overflow-x: auto;
        }

        table { 
            width: 100%; 
            border-collapse: collapse; 
            margin-top: 1.5rem; 
            text-align: center; 
        }
        
        th, td { 
            padding: 15px 10px; 
            border: 1px solid var(--border-color); 
        }
        
        th { 
            background-color: #f1f5f9; 
            color: var(--primary-color); 
            font-weight: 700;
        }
        
        tr:nth-child(even) { background-color: #f8fafc; }
        tr:hover { background-color: #f1f5f9; }

        /* تصميم الفوتر (الجزء السفلي) */
        footer { 
            background-color: #1e293b; 
            color: white; 
            text-align: center; 
            padding: 3rem 1rem; 
            margin-top: 4rem; 
        }

        footer h4 {
            font-size: 1.5rem;
            margin-bottom: 1.5rem;
        }

        .contact-info {
            display: flex;
            justify-content: center;
            gap: 20px;
            flex-wrap: wrap;
            font-size: 1.1rem;
        }

        .contact-info p {
            margin: 5px 10px;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .contact-info i {
            color: var(--secondary-color);
        }

        @media (max-width: 768px) { 
            .product-card { flex-direction: column; } 
            .product-image { border-left: none; border-bottom: 1px solid var(--border-color); } 
            header h1 { font-size: 2.2rem; }
        }
    </style>
</head>
<body>

    <header>
        <h1><i class="fa-solid fa-industry"></i> GAD-THERM</h1>
        <p>شركة جاد ثيرم لأنظمة المياه والصرف - قمة التكنولوجيا الألمانية</p>
        <p><i class="fa-solid fa-shield-halved"></i> ضمان خمسين عاماً | قائمة أسعار 2026</p>
    </header>

    <!-- أزرار الأقسام -->
    <div class="tabs">
        <button class="tab-btn active" onclick="openTab('gawan', this)">
            <i class="fa-solid fa-ring"></i> قائمة أسعار الجوان
        </button>
        <button class="tab-btn" onclick="openTab('poly', this)">
            <i class="fa-solid fa-pipe"></i> قائمة أسعار البولي
        </button>
        <button class="tab-btn" onclick="openTab('white', this)">
            <i class="fa-solid fa-droplet"></i> قائمة أسعار الأبيض
        </button>
    </div>

    <!-- قسم الجوان -->
    <div id="gawan" class="tab-content active">
        <!-- المنتج الأول كمثال -->
        <div class="product-card">
            <div class="product-image">
                <img src="images/gawan_1.png" alt="كوع عادة 90">
            </div>
            <div class="product-details">
                <h3>كوع عادة 90</h3>
                <div class="table-responsive">
                    <table>
                        <thead>
                            <tr>
                                <th>المقاس</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>4</th>
                                <th>6</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>السعر</strong></td>
                                <td>22</td>
                                <td>40</td>
                                <td>45</td>
                                <td>84.2</td>
                                <td>189</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <!-- يمكنك نسخ ولصق كود المنتج المطور هنا لباقي منتجات الجوان -->
    </div>

    <!-- قسم البولي -->
    <div id="poly" class="tab-content">
        <!-- المنتج الأول كمثال -->
        <div class="product-card">
            <div class="product-image">
                <img src="images/poly_1.png" alt="مواسير اخضر ضغط 20 بار">
            </div>
            <div class="product-details">
                <h3>مواسير اخضر ضغط 20 بار</h3>
                <div class="table-responsive">
                    <table>
                        <thead>
                            <tr>
                                <th>المقاس</th>
                                <th>السعر</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>م . ماسورة ض 2020</td>
                                <td>28.30</td>
                            </tr>
                            <tr>
                                <td>م ماسورة 20y/25</td>
                                <td>55.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <!-- قسم الأبيض -->
    <div id="white" class="tab-content">
         <!-- المنتج الأول كمثال -->
         <div class="product-card">
            <div class="product-image">
                <img src="images/white_1.png" alt="مواسير مواصفات امريكي">
            </div>
            <div class="product-details">
                <h3>مواسير مواصفات امريكي</h3>
                <div class="table-responsive">
                    <table>
                        <thead>
                            <tr>
                                <th>المقاس</th>
                                <th>السعر</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1 بوصة 4 مللى</td>
                                <td>58</td>
                            </tr>
                            <tr>
                                <td>2 بوصة 4 مللى</td>
                                <td>112</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <!-- الفوتر المطور -->
    <footer>
        <h4><i class="fa-solid fa-building"></i> جاد ثيرم للصناعات البلاستيكية والمعدنية</h4>
        <div class="contact-info">
            <p><i class="fa-solid fa-location-dot"></i> المحلة الكبرى - منشية البكري</p>
            <p><i class="fa-solid fa-phone"></i> 01559558978</p>
            <p><i class="fa-solid fa-globe"></i> www.gadtherm.net</p>
        </div>
    </footer>

    <!-- سكربت التحكم في الأقسام -->
    <script>
        function openTab(tabId, btn) {
            // إخفاء جميع الأقسام
            let contents = document.querySelectorAll(".tab-content");
            contents.forEach(content => content.classList.remove("active"));
            
            // إزالة التفعيل من جميع الأزرار
            let buttons = document.querySelectorAll(".tab-btn");
            buttons.forEach(button => button.classList.remove("active"));
            
            // إظهار القسم المطلوب وتفعيل الزر المضغوط
            document.getElementById(tabId).classList.add("active");
            btn.classList.add("active");
        }
    </script>
</body>
</html>
