// Frontend Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Tab functionality for code editor
    const tabButtons = document.querySelectorAll('.tab-btn');
    const codeEditors = {
        html: document.getElementById('html-editor'),
        css: document.getElementById('css-editor'),
        js: document.getElementById('js-editor')
    };

    // Get textareas
    const textareas = {
        html: document.querySelector('#html-editor .code-textarea'),
        css: document.querySelector('#css-editor .code-textarea'),
        js: document.querySelector('#js-editor .code-textarea')
    };

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            
            // Remove active class from all tabs and editors
            tabButtons.forEach(btn => btn.classList.remove('active'));
            Object.values(codeEditors).forEach(editor => {
                if (editor) editor.classList.remove('active');
            });
            
            // Add active class to clicked tab and corresponding editor
            this.classList.add('active');
            if (codeEditors[tabName]) {
                codeEditors[tabName].classList.add('active');
                codeEditors[tabName].style.display = 'block';
            }
            
            // Hide other editors
            Object.keys(codeEditors).forEach(key => {
                if (key !== tabName && codeEditors[key]) {
                    codeEditors[key].style.display = 'none';
                }
            });
        });
    });

    // HTML Darslari Modal va Tog'ri ishlashi
    const moduleButtons = document.querySelectorAll('.module-btn');
    
    // Dars ma'lumotlari
    const lessonContent = {
        '1-Dars: HTML Nima?': {
            title: '1-Dars: HTML Nima?',
            content: `
                <h3>📖 HTML - bu nima?</h3>
                <p>HTML (HyperText Markup Language) - bu veb-sahifalarni yaratish uchun ishlatiladigan asosiy til. U veb-sahifaning "skeleti" vazifasini bajaradi.</p>
                
                <h4>🌐 Veb-sahifa qanday ishlaydi?</h4>
                <ol>
                    <li>Siz brauzerga manzilni yozasiz (masalan: google.com)</li>
                    <li>Brauzer serverdan HTML faylini so'raydi</li>
                    <li>Server HTML faylini yuboradi</li>
                    <li>Brauzer HTML kodini o'qib, uni chiroyli sahifaga aylantiradi</li>
                </ol>
                
                <h4>🏗️ HTML tuzilmasi</h4>
                <div style="background: #1e293b; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                    <pre style="color: #cbd5e1; margin: 0;"><code>&lt;!DOCTYPE html&gt;
&lt;html lang="uz"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;Mening saytim&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Salom Dunyo!&lt;/h1&gt;
    &lt;p&gt;Bu mening birinchi sahifam.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
                </div>
                
                <h4>📝 Asosiy teglar:</h4>
                <ul>
                    <li><strong>&lt;!DOCTYPE html&gt;</strong> - HTML5 hujjatini bildiradi</li>
                    <li><strong>&lt;html&gt;</strong> - Butun hujjatni o'rab oladi</li>
                    <li><strong>&lt;head&gt;</strong> - Sarlavha qismi (ko'rinmaydi)</li>
                    <li><strong>&lt;body&gt;</strong> - Asosiy kontent qismi (ko'rinadi)</li>
                    <li><strong>&lt;h1&gt;</strong> - Katta sarlavha</li>
                    <li><strong>&lt;p&gt;</strong> - Paragraf (matn)</li>
                </ul>
                
                <h4>✅ Amaliy mashq:</h4>
                <div style="background: #065f46; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                    <p style="color: #10b981; margin: 0;"><strong>O'zingizning birinchi sahifangizni yarating:</strong></p>
                    <ol style="color: #cbd5e1; margin-top: 0.5rem;">
                        <li>Yangi fayl yarating va uni "index.html" deb nomlang</li>
                        <li>Yuqoridagi kodni nusxalab qo'ying</li>
                        <li>Faylni saqlang va brauzerda oching</li>
                        <li>Natijani ko'ring! 🎉</li>
                    </ol>
                </div>
                
                <div style="background: #fbbf24; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                    <p style="color: #92400e; margin: 0;"><strong>💡 Esda tuting:</strong> HTML teglari har doim ochiladi va yopiladi. Masalan: &lt;h1&gt;...&lt;/h1&gt;</p>
                </div>
            `
        },
        '2-Dars: Matnlarni Yozish': {
            title: '2-Dars: Matnlarni Yozish',
            content: `
                <h3>✏️ Matnlarni formatlash</h3>
                <p>HTML da matnlarni turli xil usullarda formatlash mumkin. Keling, bularni o'rganamiz!</p>
                
                <h4>📝 Sarlavha teglari</h4>
                <p>HTML da 6 xil sarlavha mavjud: h1 dan h6 gacha</p>
                <div style="background: #1e293b; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                    <pre style="color: #cbd5e1; margin: 0;"><code>&lt;h1&gt;Eng katta sarlavha&lt;/h1&gt;
&lt;h2&gt;Katta sarlavha&lt;/h2&gt;
&lt;h3&gt;O'rta sarlavha&lt;/h3&gt;
&lt;h4&gt;Kichik sarlavha&lt;/h4&gt;
&lt;h5&gt;Juda kichik sarlavha&lt;/h5&gt;
&lt;h6&gt;Eng kichik sarlavha&lt;/h6&gt;</code></pre>
                </div>
                
                <h4>📄 Paragraflar</h4>
                <div style="background: #1e293b; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                    <pre style="color: #cbd5e1; margin: 0;"><code>&lt;p&gt;Bu birinchi paragraf. Paragraflar matn bloklarini ajratish uchun ishlatiladi.&lt;/p&gt;
&lt;p&gt;Bu ikkinchi paragraf. Har bir paragraf yangi qatordan boshlanadi.&lt;/p&gt;</code></pre>
                </div>
                
                <h4>🎨 Matnni belgilash</h4>
                <ul>
                    <li><strong>&lt;strong&gt;</strong> - Muhim matn (qalin)</li>
                    <li><strong>&lt;em&gt;</strong> - Uzatilgan matn (qiyalik)</li>
                    <li><strong>&lt;b&gt;</strong> - Qalin matn</li>
                    <li><strong>&lt;i&gt;</strong> - Qiyalik matn</li>
                    <li><strong>&lt;u&gt;</strong> - Osti chizilgan matn</li>
                    <li><strong>&lt;mark&gt;</strong> - Belgilangan matn</li>
                </ul>
                
                <div style="background: #1e293b; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                    <pre style="color: #cbd5e1; margin: 0;"><code>&lt;p&gt;Bu &lt;strong&gt;muhim&lt;/strong&gt; matn.&lt;/p&gt;
&lt;p&gt;Bu &lt;em&gt;uzatilgan&lt;/em&gt; matn.&lt;/p&gt;
&lt;p&gt;Bu &lt;u&gt;osti chizilgan&lt;/u&gt; matn.&lt;/p&gt;
&lt;p&gt;Bu &lt;mark&gt;belgilangan&lt;/mark&gt; matn.&lt;/p&gt;</code></pre>
                </div>
                
                <h4>📏 Chiziqli elementlar</h4>
                <ul>
                    <li><strong>&lt;br&gt;</strong> - Yangi qator (yopilmaydi)</li>
                    <li><strong>&lt;hr&gt;</strong> - Gorizontal chiziq (yopilmaydi)</li>
                </ul>
                
                <div style="background: #1e293b; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                    <pre style="color: #cbd5e1; margin: 0;"><code>&lt;p&gt;Birinchi qator&lt;br&gt;Ikkinchi qator&lt;/p&gt;
&lt;hr&gt;
&lt;p&gt;Chiziqdan keyingi matn&lt;/p&gt;</code></pre>
                </div>
                
                <h4>✅ Amaliy mashq:</h4>
                <div style="background: #065f46; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                    <p style="color: #10b981; margin: 0;"><strong>O'zingiz haqingizda sahifa yarating:</strong></p>
                    <ol style="color: #cbd5e1; margin-top: 0.5rem;">
                        <li>h1 tegida ismingizni yozing</li>
                        <li>h2 tegida "Haqimda" deb yozing</li>
                        <li>3 ta paragrafda o'zingiz haqingizda yozing</li>
                        <li>Muhim so'zlarni strong tegi bilan ajrating</li>
                        <li>hr tegi bilan chiziq torting</li>
                    </ol>
                </div>
            `
        },
        '3-Dars: Ro\'yxatlar Yaratish': {
            title: '3-Dars: Ro\'yxatlar Yaratish',
            content: `
                <h3>📋 Ro'yxatlar turlari</h3>
                <p>HTML da 3 xil asosiy ro'yxat turi mavjud. Keling, ularni o'rganamiz!</p>
                
                <h4>🔢 Raqamli ro'yxat (Ordered List)</h4>
                <p>ol tegi ishlatiladi, avtomatik raqamlanadi</p>
                <div style="background: #1e293b; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                    <pre style="color: #cbd5e1; margin: 0;"><code>&lt;ol&gt;
    &lt;li&gt;Birinchi band&lt;/li&gt;
    &lt;li&gt;Ikkinchi band&lt;/li&gt;
    &lt;li&gt;Uchinchi band&lt;/li&gt;
&lt;/ol&gt;</code></pre>
                </div>
                <p><strong>Natija:</strong></p>
                <ol style="background: #f8f9fa; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                    <li>Birinchi band</li>
                    <li>Ikkinchi band</li>
                    <li>Uchinchi band</li>
                </ol>
                
                <h4>🔘 Raqamsiz ro'yxat (Unordered List)</h4>
                <p>ul tegi ishlatiladi, nuqtalar bilan ko'rsatiladi</p>
                <div style="background: #1e293b; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                    <pre style="color: #cbd5e1; margin: 0;"><code>&lt;ul&gt;
    &lt;li&gt;Olma&lt;/li&gt;
    &lt;li&gt;Banan&lt;/li&gt;
    &lt;li&gt;Apelsin&lt;/li&gt;
&lt;/ul&gt;</code></pre>
                </div>
                <p><strong>Natija:</strong></p>
                <ul style="background: #f8f9fa; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                    <li>Olma</li>
                    <li>Banan</li>
                    <li>Apelsin</li>
                </ul>
                
                <h4>📖 Ta'rif ro'yxati (Definition List)</h4>
                <p>dl, dt, dd teglari ishlatiladi</p>
                <div style="background: #1e293b; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                    <pre style="color: #cbd5e1; margin: 0;"><code>&lt;dl&gt;
    &lt;dt&gt;HTML&lt;/dt&gt;
    &lt;dd&gt;HyperText Markup Language&lt;/dd&gt;
    &lt;dt&gt;CSS&lt;/dt&gt;
    &lt;dd&gt;Cascading Style Sheets&lt;/dd&gt;
&lt;/dl&gt;</code></pre>
                </div>
                
                <h4>🔄 Ichki ro'yxatlar</h4>
                <div style="background: #1e293b; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                    <pre style="color: #cbd5e1; margin: 0;"><code>&lt;ul&gt;
    &lt;li&gt;Meva&lt;/li&gt;
    &lt;li&gt;Sabzavotlar
        &lt;ul&gt;
            &lt;li&gt;Piyoz&lt;/li&gt;
            &lt;li&gt;Sabzi&lt;/li&gt;
        &lt;/ul&gt;
    &lt;/li&gt;
    &lt;li&gt;Don&lt;/li&gt;
&lt;/ul&gt;</code></pre>
                </div>
                
                <h4>✅ Amaliy mashq:</h4>
                <div style="background: #065f46; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                    <p style="color: #10b981; margin: 0;"><strong>O'qish rejangizni yarating:</strong></p>
                    <ol style="color: #cbd5e1; margin-top: 0.5rem;">
                        <li>Bugungi darslar ro'yxatini yarating (ol)</li>
                        <li>Har bir dars ostida vazifalar ro'yxati qo'shing (ul)</li>
                        <li>HTML terminlar lug'atini yarating (dl)</li>
                        <li>Ichki ro'yxatlardan foydalaning</li>
                    </ol>
                </div>
            `
        },
        '4-Dars: Rasmlarni Qo\'yish': {
            title: '4-Dars: Rasmlarni Qo\'yish',
            content: `
                <h3>🖼️ Rasmlarni qo'shish</h3>
                <p>Veb-sahifaga rasmlar qo'shish juda oson! img tegi yordamida buni amalga oshiramiz.</p>
                
                <h4>📸 Asosiy img tegi</h4>
                <div style="background: #1e293b; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                    <pre style="color: #cbd5e1; margin: 0;"><code>&lt;img src="rasm.jpg" alt="Tavsif"&gt;</code></pre>
                </div>
                
                <h4>⚙️ Asosiy atributlar:</h4>
                <ul>
                    <li><strong>src</strong> - Rasm manzili (majburiy)</li>
                    <li><strong>alt</strong> - Rasm tavsifi (majburiy, SEO uchun muhim)</li>
                    <li><strong>width</strong> - Rasm eni</li>
                    <li><strong>height</strong> - Rasm bo'yi</li>
                    <li><strong>title</strong> - Sichqoncha ustiga kelganda ko'rinadigan matn</li>
                </ul>
                
                <h4>📁 Rasm manzillari:</h4>
                <div style="background: #1e293b; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                    <pre style="color: #cbd5e1; margin: 0;"><code>&lt;!-- Bir xil papkada --&gt;
&lt;img src="rasm.jpg" alt="Mahalliy rasm"&gt;

&lt;!-- Images papkasida --&gt;
&lt;img src="images/rasm.jpg" alt="Papkadagi rasm"&gt;

&lt;!-- Yuqori papkada --&gt;
&lt;img src="../rasm.jpg" alt="Yuqoridagi rasm"&gt;

&lt;--- Internetdan --&gt;
&lt;img src="https://example.com/rasm.jpg" alt="Internet rasm"&gt;</code></pre>
                </div>
                
                <h4>📏 O'lchamlarni belgilash:</h4>
                <div style="background: #1e293b; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                    <pre style="color: #cbd5e1; margin: 0;"><code>&lt;img src="rasm.jpg" alt="Rasm" width="300" height="200"&gt;
&lt;img src="rasm.jpg" alt="Rasm" width="50%"&gt;
&lt;img src="rasm.jpg" alt="Rasm" style="max-width: 100%;"&gt;</code></pre>
                </div>
                
                <h4>🎯 To'g'ri rasm formatlari:</h4>
                <ul>
                    <li><strong>JPG/JPEG</strong> - Fotosuratlar uchun</li>
                    <li><strong>PNG</strong> - Shaffof rasmlar uchun</li>
                    <li><strong>GIF</strong> - Animatsiya uchun</li>
                    <li><strong>WebP</strong> - Zamonaviy, tez yuklanadi</li>
                    <li><strong>SVG</strong> - Vektor rasmlar (o'lchami o'zgaradi)</li>
                </ul>
                
                <h4>✅ Amaliy mashq:</h4>
                <div style="background: #065f46; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                    <p style="color: #10b981; margin: 0;"><strong>Galeriya yarating:</strong></p>
                    <ol style="color: #cbd5e1; margin-top: 0.5rem;">
                        <li>3 ta rasm toping (yoki internetdan yuklab oling)</li>
                        <li>Har biriga to'g'ri alt tavsifi bering</li>
                        <li>O'lchamlarni belgilang (width="300")</li>
                        <li>Raslarni qatorga joylashtiring</li>
                        <li>Har rasm ostida sarlavha qo'shing</li>
                    </ol>
                </div>
                
                <div style="background: #fbbf24; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                    <p style="color: #92400e; margin: 0;"><strong>💡 Muhim maslahat:</strong> Har doim alt atributini ishlating! U SEO uchun muhim va ko'rmaydiganlar uchun rasm haqida ma'lumot beradi.</p>
                </div>
            `
        },
        '5-Dars: Havolalar Yaratish': {
            title: '5-Dars: Havolalar Yaratish',
            content: `
                <h3>🔗 Havolalar (Links)</h3>
                <p>Havolalar - bu veb-sahifalarning eng muhim elementi. Ular sahifalarni bir-biriga bog'laydi.</p>
                
                <h4>🌐 Asosiy a tegi</h4>
                <div style="background: #1e293b; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                    <pre style="color: #cbd5e1; margin: 0;"><code>&lt;a href="manzil"&gt;Havola matni&lt;/a&gt;</code></pre>
                </div>
                
                <h4>📍 Havola turlari:</h4>
                
                <h5>🔗 Tashqi havola (boshqa saytga)</h5>
                <div style="background: #1e293b; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                    <pre style="color: #cbd5e1; margin: 0;"><code>&lt;a href="https://www.google.com"&gt;Google'ga o'tish&lt;/a&gt;
&lt;a href="https://www.uznews.uz"&gt;Yangiliklar&lt;/a&gt;</code></pre>
                </div>
                
                <h5>📁 Ichki havola (o'z saytingizda)</h5>
                <div style="background: #1e293b; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                    <pre style="color: #cbd5e1; margin: 0;"><code>&lt;!-- Bir xil papkada --&gt;
&lt;a href="about.html"&gt;Biz haqimizda&lt;/a&gt;

&lt;!-- Boshqa papkada --&gt;
&lt;a href="pages/contact.html"&gt;Aloqa&lt;/a&gt;

&lt;!-- Yuqori papkaga --&gt;
&lt;a href="../index.html"&gt;Bosh sahifa&lt;/a&gt;</code></pre>
                </div>
                
                <h5>📧 Maxsus havolalar</h5>
                <div style="background: #1e293b; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                    <pre style="color: #cbd5e1; margin: 0;"><code>&lt;!-- Email yuborish --&gt;
&lt;a href="mailto:info@example.com"&gt;Email yozish&lt;/a&gt;

&lt;!-- Telefon qilish --&gt;
&lt;a href="tel:+998901234567"&gt;Telefon qilish&lt;/a&gt;

&lt;!-- Faks yuborish --&gt;
&lt;a href="fax:+998901234567"&gt;Faks yuborish&lt;/a&gt;</code></pre>
                </div>
                
                <h4>⚙️ Qo'shimcha atributlar:</h4>
                <ul>
                    <li><strong>target="_blank"</strong> - Yangi oynada ochish</li>
                    <li><strong>title</strong> - Sichqoncha ustiga kelganda ko'rsatish</li>
                    <li><strong>download</strong> - Faylni yuklab olish</li>
                    <li><strong>rel</strong> - Bog'lanish turi (SEO uchun muhim)</li>
                </ul>
                
                <div style="background: #1e293b; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                    <pre style="color: #cbd5e1; margin: 0;"><code>&lt;a href="https://example.com" target="_blank" title="Yangi oynada ochiladi"&gt;
    Yangi oynada ochish
&lt;/a&gt;

&lt;a href="document.pdf" download&gt;
    PDF yuklab olish
&lt;/a&gt;</code></pre>
                </div>
                
                <h4>🔝 Sahifa ichida havola</h4>
                <div style="background: #1e293b; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                    <pre style="color: #cbd5e1; margin: 0;"><code>&lt;!-- Yerga belgi qo'yish --&gt;
&lt;h2 id="contact"&gt;Aloqa&lt;/h2&gt;

&lt;!-- Shu yerga havola --&gt;
&lt;a href="#contact"&gt;Aloqaga o'tish&lt;/a&gt;

&lt;!-- Boshqa sahifaning qismiga --&gt;
&lt;a href="about.html#team"&gt;Jamoamiz haqida&lt;/a&gt;</code></pre>
                </div>
                
                <h4>✅ Amaliy mashq:</h4>
                <div style="background: #065f46; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                    <p style="color: #10b981; margin: 0;"><strong>Menyu yarating:</strong></p>
                    <ol style="color: #cbd5e1; margin-top: 0.5rem;">
                        <li>Asosiy menyu yarating (ul bilan)</li>
                        <li>Bosh sahifa, Biz haqimizda, Xizmatlar, Aloqa havolalari</li>
                        <li>Tashqi saytlarga havolalar qo'shing</li>
                        <li>Email va telefon raqamiga havolalar</li>
                        <li>Barcha havolalarga title atributi qo'shing</li>
                    </ol>
                </div>
            `
        },
        '6-Dars: Jadvallar': {
            title: '6-Dars: Jadvallar',
            content: `
                <h3>📊 Jadvallar (Tables)</h3>
                <p>Jadvallar ma'lumotlarni qator va ustunlarda tashkilash uchun ishlatiladi.</p>
                
                <h4>🏗️ Asosiy tuzilma</h4>
                <div style="background: #1e293b; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                    <pre style="color: #cbd5e1; margin: 0;"><code>&lt;table&gt;
    &lt;tr&gt;
        &lt;td&gt;1-qator, 1-ustun&lt;/td&gt;
        &lt;td&gt;1-qator, 2-ustun&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;2-qator, 1-ustun&lt;/td&gt;
        &lt;td&gt;2-qator, 2-ustun&lt;/td&gt;
    &lt;/tr&gt;
&lt;/table&gt;</code></pre>
                </div>
                
                <h4>📋 Jadval teglari:</h4>
                <ul>
                    <li><strong>&lt;table&gt;</strong> - Jadvalni boshlaydi</li>
                    <li><strong>&lt;tr&gt;</strong> - Qator (table row)</li>
                    <li><strong>&lt;td&gt;</strong> - Oddiy yacheyka (table data)</li>
                    <li><strong>&lt;th&gt;</strong> - Sarlavha yacheykasi (table header)</li>
                    <li><strong>&lt;thead&gt;</strong> - Sarlavha qismi</li>
                    <li><strong>&lt;tbody&gt;</strong> - Asosiy qism</li>
                    <li><strong>&lt;tfoot&gt;</strong> - Pastki qism</li>
                </ul>
                
                <h4>🎯 To'liq misol</h4>
                <div style="background: #1e293b; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                    <pre style="color: #cbd5e1; margin: 0;"><code>&lt;table border="1"&gt;
    &lt;thead&gt;
        &lt;tr&gt;
            &lt;th&gt;Ism&lt;/th&gt;
            &lt;th&gt;Yosh&lt;/th&gt;
            &lt;th&gt;Shahar&lt;/th&gt;
        &lt;/tr&gt;
    &lt;/thead&gt;
    &lt;tbody&gt;
        &lt;tr&gt;
            &lt;td&gt;Ali&lt;/td&gt;
            &lt;td&gt;25&lt;/td&gt;
            &lt;td&gt;Toshkent&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
            &lt;td&gt;Vali&lt;/td&gt;
            &lt;td&gt;30&lt;/td&gt;
            &lt;td&gt;Samarqand&lt;/td&gt;
        &lt;/tr&gt;
    &lt;/tbody&gt;
&lt;/table&gt;</code></pre>
                </div>
                
                <h4>🔗 Yacheykalarni birlashtirish</h4>
                
                <h5>↔️ colspan (ustunlarni birlashtirish)</h5>
                <div style="background: #1e293b; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                    <pre style="color: #cbd5e1; margin: 0;"><code>&lt;table border="1"&gt;
    &lt;tr&gt;
        &lt;th colspan="2"&gt;Shaxsiy ma'lumotlar&lt;/th&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;Ism&lt;/td&gt;
        &lt;td&gt;Ali&lt;/td&gt;
    &lt;/tr&gt;
&lt;/table&gt;</code></pre>
                </div>
                
                <h5>↕️ rowspan (qatorlarni birlashtirish)</h5>
                <div style="background: #1e293b; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                    <pre style="color: #cbd5e1; margin: 0;"><code>&lt;table border="1"&gt;
    &lt;tr&gt;
        &lt;td rowspan="2"&gt;Guruh&lt;/td&gt;
        &lt;td&gt;Ali&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;Vali&lt;/td&gt;
    &lt;/tr&gt;
&lt;/table&gt;</code></pre>
                </div>
                
                <h4>🎨 Jadvalni stilizatsiya qilish</h4>
                <div style="background: #1e293b; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                    <pre style="color: #cbd5e1; margin: 0;"><code>&lt;table style="width: 100%; border-collapse: collapse;"&gt;
    &lt;tr style="background: #f0f0f0;"&gt;
        &lt;th style="padding: 10px; border: 1px solid #ddd;"&gt;Ism&lt;/th&gt;
        &lt;th style="padding: 10px; border: 1px solid #ddd;"&gt;Yosh&lt;/th&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td style="padding: 10px; border: 1px solid #ddd;"&gt;Ali&lt;/td&gt;
        &lt;td style="padding: 10px; border: 1px solid #ddd;"&gt;25&lt;/td&gt;
    &lt;/tr&gt;
&lt;/table&gt;</code></pre>
                </div>
                
                <h4>✅ Amaliy mashq:</h4>
                <div style="background: #065f46; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                    <p style="color: #10b981; margin: 0;"><strong>Jadval yarating:</strong></p>
                    <ol style="color: #cbd5e1; margin-top: 0.5rem;">
                        <li>O'quvchilar jadvalini yarating</li>
                        <li>Ism, Familiya, Yosh, Sinf, Baholarni kiriting</li>
                        <li>Kamida 5 ta o'quvchi ma'lumotini qo'shing</li>
                        <li>Sarlavha qismini thead bilan ajrating</li>
                        <li colspan yoki rowdpan ishlatib birlashtiring</li>
                    </ol>
                </div>
            `
        },
        '7-Dars: Formalar': {
            title: '7-Dars: Formalar',
            content: `
                <h3>📝 Formalar (Forms)</h3>
                <p>Formalar - foydalanuvchidan ma'lumot olish uchun eng muhim vosita.</p>
                
                <h4>🏗️ Asosiy form tuzilmasi</h4>
                <div style="background: #1e293b; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                    <pre style="color: #cbd5e1; margin: 0;"><code>&lt;form action="server.php" method="POST"&gt;
    &lt;!-- Form elementlari bu yerga keladi --&gt;
    &lt;input type="submit" value="Yuborish"&gt;
&lt;/form&gt;</code></pre>
                </div>
                
                <h4>⚙️ Form atributlari:</h4>
                <ul>
                    <li><strong>action</strong> - Ma'lumot yuboriladigan manzil</li>
                    <li><strong>method</strong> - Yuborish usuli (GET yoki POST)</li>
                    <li><strong>enctype</strong> - Ma'lumot turi (fayllar uchun kerak)</li>
                    <li><strong>target</strong> - Qayerda ochish</li>
                </ul>
                
                <h4>📝 Input turlari</h4>
                
                <h5>🔤 Matn kiritish</h5>
                <div style="background: #1e293b; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                    <pre style="color: #cbd5e1; margin: 0;"><code>&lt;label for="ism"&gt;Ismingiz:&lt;/label&gt;
&lt;input type="text" id="ism" name="ism" placeholder="Ismingizni kiriting"&gt;

&lt;label for="email"&gt;Email:&lt;/label&gt;
&lt;input type="email" id="email" name="email" placeholder="email@example.com"&gt;

&lt;label for="tel"&gt;Telefon:&lt;/label&gt;
&lt;input type="tel" id="tel" name="tel" placeholder="+998901234567"&gt;</code></pre>
                </div>
                
                <h5>🔐 Parol kiritish</h5>
                <div style="background: #1e293b; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                    <pre style="color: #cbd5e1; margin: 0;"><code>&lt;label for="parol"&gt;Parol:&lt;/label&gt;
&lt;input type="password" id="parol" name="parol" placeholder="Parolni kiriting"&gt;</code></pre>
                </div>
                
                <h5>🔘 Tanlash elementlari</h5>
                <div style="background: #1e293b; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                    <pre style="color: #cbd5e1; margin: 0;"><code>&lt;!-- Checkbox (bir nechta tanlash) --&gt;
&lt;input type="checkbox" id="html" name="skill" value="html"&gt;
&lt;label for="html"&gt;HTML&lt;/label&gt;

&lt;!-- Radio (bittasini tanlash) --&gt;
&lt;input type="radio" id="erkak" name="jins" value="erkak"&gt;
&lt;label for="erkak"&gt;Erkak&lt;/label&gt;</code></pre>
                </div>
                
                <h5>📋 Tanlash ro'yxati</h5>
                <div style="background: #1e293b; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                    <pre style="color: #cbd5e1; margin: 0;"><code>&lt;label for="shahar"&gt;Shahar:&lt;/label&gt;
&lt;select id="shahar" name="shahar"&gt;
    &lt;option value=""&gt;Shaharni tanlang&lt;/option&gt;
    &lt;option value="toshkent"&gt;Toshkent&lt;/option&gt;
    &lt;option value="samarqand"&gt;Samarqand&lt;/option&gt;
    &lt;option value="buxoro"&gt;Buxoro&lt;/option&gt;
&lt;/select&gt;</code></pre>
                </div>
                
                <h5>📄 Ko'p qatorli matn</h5>
                <div style="background: #1e293b; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                    <pre style="color: #cbd5e1; margin: 0;"><code>&lt;label for="xabar"&gt;Xabar:&lt;/label&gt;
&lt;textarea id="xabar" name="xabar" rows="4" cols="50" 
          placeholder="Xabaringizni bu yerga yozing..."&gt;&lt;/textarea&gt;</code></pre>
                </div>
                
                <h5>📎 Fayl yuklash</h5>
                <div style="background: #1e293b; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                    <pre style="color: #cbd5e1; margin: 0;"><code>&lt;label for="rasm"&gt;Rasm yuklang:&lt;/label&gt;
&lt;input type="file" id="rasm" name="rasm" accept="image/*"&gt;</code></pre>
                </div>
                
                <h4>🎯 To'liq misol</h4>
                <div style="background: #1e293b; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                    <pre style="color: #cbd5e1; margin: 0;"><code>&lt;form action="register.php" method="POST"&gt;
    &lt;h3&gt;Ro'yxatdan o'tish&lt;/h3&gt;
    
    &lt;label for="ism"&gt;Ism:&lt;/label&gt;
    &lt;input type="text" id="ism" name="ism" required&gt;&lt;br&gt;&lt;br&gt;
    
    &lt;label for="email"&gt;Email:&lt;/label&gt;
    &lt;input type="email" id="email" name="email" required&gt;&lt;br&gt;&lt;br&gt;
    
    &lt;label for="parol"&gt;Parol:&lt;/label&gt;
    &lt;input type="password" id="parol" name="parol" required&gt;&lt;br&gt;&lt;br&gt;
    
    &lt;label&gt;Jinsingiz:&lt;/label&gt;
    &lt;input type="radio" name="jins" value="erkak" required&gt; Erkak
    &lt;input type="radio" name="jins" value="ayol" required&gt; Ayol&lt;br&gt;&lt;br&gt;
    
    &lt;input type="submit" value="Ro'yxatdan o'tish"&gt;
&lt;/form&gt;</code></pre>
                </div>
                
                <h4>✅ Amaliy mashq:</h4>
                <div style="background: #065f46; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                    <p style="color: #10b981; margin: 0;"><strong>Kontakt forma yarating:</strong></p>
                    <ol style="color: #cbd5e1; margin-top: 0.5rem;">
                        <li>Ism, familiya, email, telefon maydonlari</li>
                        <li>Xabar yozish uchun textarea</li>
                        <li>Mavzu tanlash uchun select</li>
                        <li>Tegishli label lar qo'shing</li>
                        <li>required atributidan foydalaning</li>
                        <li>Yuborish tugmasi qo'shing</li>
                    </ol>
                </div>
            `
        },
        '8-Dars: Zamonaviy HTML5': {
            title: '8-Dars: Zamonaviy HTML5',
            content: `
                <h3>🆕 HTML5 Semantic Teglar</h3>
                <p>HTML5 veb-sahifalarni tushunarliroq qilish uchun yangi semantic teglarni kiritdi.</p>
                
                <h4>🏗️ Asosiy semantic teglar</h4>
                
                <h5>📄 header</h5>
                <p>Sahifa yoki bo'limning sarlavhasi uchun</p>
                <div style="background: #1e293b; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                    <pre style="color: #cbd5e1; margin: 0;"><code>&lt;header&gt;
    &lt;h1&gt;Mening Saytim&lt;/h1&gt;
    &lt;nav&gt;
        &lt;ul&gt;
            &lt;li&gt;&lt;a href="#"&gt;Bosh sahifa&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a href="#"&gt;Biz haqimizda&lt;/a&gt;&lt;/li&gt;
        &lt;/ul&gt;
    &lt;/nav&gt;
&lt;/header&gt;</code></pre>
                </div>
                
                <h5>🧭 nav</h5>
                <p>Navigatsiya menyu uchun</p>
                <div style="background: #1e293b; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                    <pre style="color: #cbd5e1; margin: 0;"><code>&lt;nav&gt;
    &lt;ul&gt;
        &lt;li&gt;&lt;a href="#home"&gt;Bosh sahifa&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="#about"&gt;Biz haqimizda&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="#services"&gt;Xizmatlar&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="#contact"&gt;Aloqa&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
&lt;/nav&gt;</code></pre>
                </div>
                
                <h5>📖 main</h5>
                <p>Sahifaning asosiy, takrorlanmaydigan kontenti uchun</p>
                <div style="background: #1e293b; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                    <pre style="color: #cbd5e1; margin: 0;"><code>&lt;main&gt;
    &lt;article&gt;
        &lt;h2&gt;Eng yangi maqola&lt;/h2&gt;
        &lt;p&gt;Bu maqolaning matni...&lt;/p&gt;
    &lt;/article&gt;
    
    &lt;section&gt;
        &lt;h2&gt;Xizmatlarimiz&lt;/h2&gt;
        &lt;p&gt;Bizning xizmatlar...&lt;/p&gt;
    &lt;/section&gt;
&lt;/main&gt;</code></pre>
                </div>
                
                <h5>📝 article</h5>
                <p>Mustaqil, to'liq mazmunli kontent uchun (maqola, blog post, yangilik)</p>
                <div style="background: #1e293b; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                    <pre style="color: #cbd5e1; margin: 0;"><code>&lt;article&gt;
    &lt;header&gt;
        &lt;h1&gt;HTML5 haqida&lt;/h1&gt;
        &lt;time datetime="2024-01-15"&gt;15-yanvar, 2024&lt;/time&gt;
    &lt;/header&gt;
    
    &lt;p&gt;HTML5 - bu veb-dasturlashning zamonaviy standarti...&lt;/p&gt;
    
    &lt;footer&gt;
        &lt;p&gt;Muallif: Web Dasturchi&lt;/p&gt;
    &lt;/footer&gt;
&lt;/article&gt;</code></pre>
                </div>
                
                <h5>📂 section</h5>
                <p>Mavzuga oid kontent guruhlari uchun</p>
                <div style="background: #1e293b; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                    <pre style="color: #cbd5e1; margin: 0;"><code>&lt;section&gt;
    &lt;h2&gt;Bizning jamoa&lt;/h2&gt;
    &lt;p&gt;Bizning jamoa haqida ma'lumot...&lt;/p&gt;
    
    &lt;section&gt;
        &lt;h3&gt;Dasturchilar&lt;/h3&gt;
        &lt;p&gt;Dasturchilar guruhi...&lt;/p&gt;
    &lt;/section&gt;
&lt;/section&gt;</code></pre>
                </div>
                
                <h5>📋 aside</h5>
                <p>Asosiy kontentga oid bo'lmagan, qo'shimcha ma'lumotlar uchun</p>
                <div style="background: #1e293b; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                    <pre style="color: #cbd5e1; margin: 0;"><code>&lt;aside&gt;
    &lt;h3&gt;Reklama&lt;/h3&gt;
    &lt;p&gt;Bu yerda reklama bo'lishi mumkin&lt;/p&gt;
    
    &lt;h3&gt;Tegishli maqolalar&lt;/h3&gt;
    &lt;ul&gt;
        &lt;li&gt;&lt;a href="#"&gt;CSS haqida&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="#"&gt;JavaScript haqida&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
&lt;/aside&gt;</code></pre>
                </div>
                
                <h5>🦶 footer</h5>
                <p>Sahifa yoki bo'limning pastki qismi uchun</p>
                <div style="background: #1e293b; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                    <pre style="color: #cbd5e1; margin: 0;"><code>&lt;footer&gt;
    &lt;p&gt;&copy; 2024 Mening Saytim. Barcha huquqlar himoyalangan.&lt;/p&gt;
    &lt;nav&gt;
        &lt;ul&gt;
            &lt;li&gt;&lt;a href="#"&gt;Maxfiylik siyosati&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a href="#"&gt;Foydalanish shartlari&lt;/a&gt;&lt;/li&gt;
        &lt;/ul&gt;
    &lt;/nav&gt;
&lt;/footer&gt;</code></pre>
                </div>
                
                <h4>🎯 To'liq HTML5 sahifa misoli</h4>
                <div style="background: #1e293b; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                    <pre style="color: #cbd5e1; margin: 0;"><code>&lt;!DOCTYPE html&gt;
&lt;html lang="uz"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;HTML5 Sahifa&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;header&gt;
        &lt;h1&gt;Mening Saytim&lt;/h1&gt;
        &lt;nav&gt;...menyu...&lt;/nav&gt;
    &lt;/header&gt;
    
    &lt;main&gt;
        &lt;article&gt;...maqola...&lt;/article&gt;
        &lt;aside&gt;...qo'shimcha...&lt;/aside&gt;
    &lt;/main&gt;
    
    &lt;footer&gt;...pastki qism...&lt;/footer&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
                </div>
                
                <h4>✅ Amaliy mashq:</h4>
                <div style="background: #065f46; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                    <p style="color: #10b981; margin: 0;"><strong>HTML5 sahifa yarating:</strong></p>
                    <ol style="color: #cbd5e1; margin-top: 0.5rem;">
                        <li>header da logotip va menyu joylashtiring</li>
                        <li>main da 2 ta article qo'shing</li>
                        <li>aside da tegishli havolalar qo'shing</li>
                        <li>footer da muallif huquqlari va kontaktlar</li>
                        <li>Barcha semantic teglardan foydalaning</li>
                    </ol>
                </div>
                
                <div style="background: #fbbf24; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                    <p style="color: #92400e; margin: 0;"><strong>💡 Semantic teglar afzallatlari:</strong></p>
                    <ul style="color: #78350f; margin-top: 0.5rem;">
                        <li>SEO uchun yaxshi (Google tushunadi)</li>
                        <li>Kodni o'qish oson</li>
                        <li>Accessibility (nogironlar uchun qulay)</li>
                        <li>Brauzerlar tomonidan yaxshi qo'llab-quvvatlanadi</li>
                    </ul>
                </div>
            `
        },
        '🏆 Amaliy Loyiha': {
            title: '🏆 Amaliy Loyiha',
            content: `
                <h3>🎉 Shaxsiy veb-sahifa yaratish!</h3>
                <p>Barcha o'rganilgan bilimlarni birlashtirib, o'zingizning birinchi veb-sahifangizni yarating!</p>
                
                <h4>🎯 Loyiha maqsadi</h4>
                <p>O'zingiz haqingizda to'liq ma'lumot beruvchi shaxsiy veb-sahifa yarating. Bu sizning portfoliongiz bo'ladi!</p>
                
                <h4>📋 Loyiha tarkibi</h4>
                
                <h5>🏠 Header (Sarlavha)</h5>
                <ul>
                    <li>Ismingiz yoki logotip</li>
                    <li>Navigatsiya menyu: Bosh sahifa, Haqimda, Ko'nikmalar, Aloqa</li>
                    <li>Slogan yoki qisqa ta'rif</li>
                </ul>
                
                <h5>👤 Asosiy qism</h5>
                <ul>
                    <li><strong>Bosh sahifa:</strong> Qisqa tanishtirish, rasmingiz</li>
                    <li><strong>Haqimda:</strong> To'liq biografiya, ta'lim, tajriba</li>
                    <li><strong>Ko'nikmalar:</strong> Biladigan dasturlash tillari, texnologiyalar</li>
                    <li><strong>Loyihalar:</strong> Qilgan ishlaringiz (agar bo'lsa)</li>
                </ul>
                
                <h5>📞 Kontakt</h5>
                <ul>
                    <li>Email, telefon, manzil</li>
                    <li>Ijtimoiy tarmoqlar havolalari</li>
                    <li>Kontakt forma</li>
                </ul>
                
                <h4>🛠️ Texnik talablar</h4>
                
                <h5>📋 HTML tuzilmasi</h5>
                <div style="background: #1e293b; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                    <pre style="color: #cbd5e1; margin: 0;"><code>&lt;!DOCTYPE html&gt;
&lt;html lang="uz"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Ism Familiya - Portfolio&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;header&gt;
        &lt;!-- Logotip va menyu --&gt;
    &lt;/header&gt;
    
    &lt;main&gt;
        &lt;section id="home"&gt;
            &lt;!-- Bosh sahifa --&gt;
        &lt;/section&gt;
        
        &lt;section id="about"&gt;
            &lt;!-- Haqimda --&gt;
        &lt;/section&gt;
        
        &lt;section id="skills"&gt;
            &lt;!-- Ko'nikmalar --&gt;
        &lt;/section&gt;
        
        &lt;section id="contact"&gt;
            &lt;!-- Kontakt --&gt;
        &lt;/section&gt;
    &lt;/main&gt;
    
    &lt;footer&gt;
        &lt;!-- Pastki qism --&gt;
    &lt;/footer&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
                </div>
                
                <h5>🎨 HTML elementlari ro'yxati</h5>
                <div style="background: #065f46; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                    <p style="color: #10b981; margin: 0;"><strong>Ishlatish shart bo'lgan elementlar:</strong></p>
                    <ul style="color: #cbd5e1; margin-top: 0.5rem;">
                        <li>✅ Semantic teglar: header, nav, main, section, footer</li>
                        <li>✅ Sarlavhalar: h1, h2, h3</li>
                        <li>✅ Matn elementlari: p, strong, em</li>
                        <li>✅ Ro'yxatlar: ul, ol, li</li>
                        <li>✅ Rasmlar: img (to'g'ri alt bilan)</li>
                        <li>✅ Havolalar: a (ichki va tashqi)</li>
                        <li>✅ Forma: form, input, textarea, button</li>
                    </ul>
                </div>
                
                <h4>📝 Qadam-baqadam yo'riqnoma</h4>
                
                <h5>1-qadam: Tuzilmani rejalashtirish</h5>
                <ol>
                    <li>Qog'ozga sahifa strukturasini chizing</li>
                    <li>Qaysi bo'limlar bo'lishini belgilang</li>
                    <li>Kerakli rasmlarni tayyorlang</li>
                </ol>
                
                <h5>2-qadam: HTML faylini yaratish</h5>
                <ol>
                    <li>index.html faylini yarating</li>
                    <li>Asosiy HTML5 strukturasini yozing</li>
                    <li>Header va footer ni yarating</li>
                </ol>
                
                <h5>3-qadam: Asosiy kontentni qo'shish</h5>
                <ol>
                    <li>Har bir section ni to'ldiring</li>
                    <li>Rasmlar va matnlarni joylashtiring</li>
                    <li>Havolalarni qo'shing</li>
                </ol>
                
                <h5>4-qadam: Kontakt formani yaratish</h5>
                <ol>
                    <li>Ism, email, xabar maydonlari</li>
                    <li>Tegishli label lar qo'shing</li>
                    <li>Yuborish tugmasi</li>
                </ol>
                
                <h5>5-qadam: Tekshirish va tuzatish</h5>
                <ol>
                    <li>Barcha teglar to'g'ri yopilganini tekshiring</li>
                    <li>Havolalar ishlayotganini tekshiring</li>
                    <li>Rasmlar yuklanayotganini tekshiring</li>
                </ol>
                
                <h4>🎯 Qo'shimcha imkoniyatlar</h4>
                <ul>
                    <li><strong>Jadval:</strong> Ta'lim yoki tajriba jadvali</li>
                    <li><strong>Video:</strong> O'zingiz haqingizda video</li>
                    <li><strong>Galeriya:</strong> Ishlar rasmlari galereyasi</li>
                    <li><strong>Testimonial:</strong> Boshqalar siz haqingizda nima deydi</li>
                </ul>
                
                <h4>🏆 Muvaffaqiyat mezonlari</h4>
                <div style="background: #fbbf24; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                    <p style="color: #92400e; margin: 0;"><strong>✅ Muvaffaqiyatli deb hisoblanadi, agar:</strong></p>
                    <ul style="color: #78350f; margin-top: 0.5rem;">
                        <li>Sahifa to'g'ri ochiladi</li>
                        <li>Barcha havolalar ishlaydi</li>
                        <li>Rasmlar ko'rinadi</li>
                        <li>Forma to'g'ri ko'rinadi</li>
                        <li>HTML kodlari toza va tushunarli</li>
                        <li>Semantic teglar to'g'ri ishlatilgan</li>
                    </ul>
                </div>
                
                <h4>🎉 Tabriklaymiz!</h4>
                <p>Bu loyiha sizning birinchi veb-sahifangiz bo'ladi! Uni tugatgandan so'ng:</p>
                <ul>
                    <li>🎓 HTML asoslarini to'liq o'rgandingiz</li>
                    <li>💻 Amaliy tajriba oldingiz</li>
                    <li>🚀 Keyingi darslar (CSS, JavaScript) uchun tayyorsiz</li>
                    <li>📋 Portfolioningizni yaratingiz</li>
                </ul>
                
                <div style="background: #059669; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                    <p style="color: #10b981; margin: 0;"><strong>🚀 Endi CSS o'rganish vaqti keldi!</strong></p>
                </div>
            `
        }
    };

    // Modal yaratish va ko'rsatish funksiyasi
    function showModal(title, content) {
        // Modal bor yo'qligini tekshirish
        let modal = document.getElementById('lesson-modal');
        if (modal) {
            modal.remove();
        }

        // Yangi modal yaratish
        modal = document.createElement('div');
        modal.id = 'lesson-modal';
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            animation: fadeIn 0.3s ease;
        `;

        const modalContent = document.createElement('div');
        modalContent.style.cssText = `
            background: linear-gradient(135deg, #1e293b, #334155);
            border-radius: 16px;
            padding: 2rem;
            max-width: 90%;
            max-height: 90%;
            overflow-y: auto;
            position: relative;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
            animation: slideUp 0.3s ease;
        `;

        modalContent.innerHTML = `
            <button id="close-modal" style="
                position: absolute;
                top: 1rem;
                right: 1rem;
                background: #ef4444;
                color: white;
                border: none;
                border-radius: 50%;
                width: 40px;
                height: 40px;
                font-size: 1.5rem;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.3s ease;
            ">&times;</button>
            
            <div style="color: #f9fafb;">
                ${content}
            </div>
            
            <div style="margin-top: 2rem; text-align: center;">
                <button id="complete-lesson" style="
                    background: linear-gradient(135deg, #10b981, #059669);
                    color: white;
                    border: none;
                    padding: 1rem 2rem;
                    border-radius: 8px;
                    font-size: 1.1rem;
                    font-weight: bold;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    margin-right: 1rem;
                ">✅ Darsni Tugatish</button>
                
                <button id="next-lesson" style="
                    background: linear-gradient(135deg, #3b82f6, #2563eb);
                    color: white;
                    border: none;
                    padding: 1rem 2rem;
                    border-radius: 8px;
                    font-size: 1.1rem;
                    font-weight: bold;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    display: none;
                ">⏭️ Keyingi Dars</button>
            </div>
        `;

        modal.appendChild(modalContent);
        document.body.appendChild(modal);

        // CSS animatsiyalarini qo'shish
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            @keyframes slideUp {
                from { 
                    transform: translateY(50px);
                    opacity: 0;
                }
                to { 
                    transform: translateY(0);
                    opacity: 1;
                }
            }
            #lesson-modal::-webkit-scrollbar {
                width: 8px;
            }
            #lesson-modal::-webkit-scrollbar-track {
                background: #1e293b;
                border-radius: 4px;
            }
            #lesson-modal::-webkit-scrollbar-thumb {
                background: #4b5563;
                border-radius: 4px;
            }
            #lesson-modal::-webkit-scrollbar-thumb:hover {
                background: #6b7280;
            }
        `;
        document.head.appendChild(style);

        // Modal yopish
        const closeModal = () => {
            modal.style.animation = 'fadeIn 0.3s ease reverse';
            setTimeout(() => {
                if (modal.parentNode) {
                    modal.parentNode.removeChild(modal);
                }
                if (style.parentNode) {
                    style.parentNode.removeChild(style);
                }
            }, 300);
        };

        document.getElementById('close-modal').addEventListener('click', closeModal);
        
        // Modal tashqarisiga bosganda yopish
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });

        // Darsni tugatish
        document.getElementById('complete-lesson').addEventListener('click', () => {
            // Progress saqlash
            saveProgress(title);
            
            // Xabarnoma ko'rsatish
            showNotification(`🎉 "${title}" darsini muvaffaqiyatli tugatdingiz!`);
            
            // Keyingi dars tugmasini ko'rsatish
            const nextBtn = document.getElementById('next-lesson');
            const nextLessonTitle = getNextLesson(title);
            if (nextLessonTitle) {
                nextBtn.style.display = 'inline-block';
                nextBtn.onclick = () => {
                    closeModal();
                    setTimeout(() => {
                        showModal(nextLessonTitle, lessonContent[nextLessonTitle].content);
                    }, 400);
                };
            }
        });

        // ESC tugmasi bilan yopish
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.parentNode) {
                closeModal();
            }
        });
    }

    // Progress saqlash
    function saveProgress(lessonTitle) {
        let progress = JSON.parse(localStorage.getItem('html-lessons-progress') || '{}');
        progress[lessonTitle] = {
            completed: true,
            date: new Date().toISOString()
        };
        localStorage.setItem('html-lessons-progress', JSON.stringify(progress));
        updateProgressDisplay();
    }

    // Keyingi darsni olish
    function getNextLesson(currentTitle) {
        const lessons = Object.keys(lessonContent);
        const currentIndex = lessons.indexOf(currentTitle);
        if (currentIndex < lessons.length - 1) {
            return lessons[currentIndex + 1];
        }
        return null;
    }

    // Progressni yangilash
    function updateProgressDisplay() {
        const progress = JSON.parse(localStorage.getItem('html-lessons-progress') || '{}');
        const completedCount = Object.keys(progress).length;
        const totalCount = Object.keys(lessonContent).length;
        
        // Progress bar yangilash (agar mavjud bo'lsa)
        const progressBar = document.getElementById('lessons-progress');
        if (progressBar) {
            const percentage = Math.round((completedCount / totalCount) * 100);
            progressBar.style.width = percentage + '%';
            progressBar.textContent = `${completedCount}/${totalCount} dars (${percentage}%)`;
        }
    }

    // Xabarnoma ko'rsatish
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #10b981, #059669);
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
            z-index: 10001;
            animation: slideInRight 0.3s ease;
            max-width: 300px;
        `;
        notification.textContent = message;

        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
        `;
        document.head.appendChild(style);

        document.body.appendChild(notification);

        // 3 soniyadan keyin avtomatik yo'qolish
        setTimeout(() => {
            notification.style.animation = 'slideInRight 0.3s ease reverse';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
                if (style.parentNode) {
                    style.parentNode.removeChild(style);
                }
            }, 300);
        }, 3000);
    }

    // Tugmalarga event listener qo'shish
    moduleButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Module card ni topish
            const moduleCard = this.closest('.module-card');
            if (!moduleCard) return;

            // Dars nomini olish
            const titleElement = moduleCard.querySelector('h3');
            const lessonTitle = titleElement ? titleElement.textContent.trim() : '';

            // Agar dars mavjud bo'lsa, modalni ko'rsatish
            if (lessonContent[lessonTitle]) {
                showModal(lessonTitle, lessonContent[lessonTitle].content);
            } else {
                showNotification('❌ Bu dars hozircha tayyor emas');
            }
        });
    });

    // Sahifa yuklanganda progressni yangilash
    updateProgressDisplay();

    // VS Code tugmalari funksiyalari
    const downloadVSCodeBtn = document.getElementById('download-vscode');
    const onlineEditorBtn = document.getElementById('online-editor');
    
    // VS Code yuklab olish
    if (downloadVSCodeBtn) {
        downloadVSCodeBtn.addEventListener('click', function() {
            showNotification('🔄 VS Code rasmiy sahifasiga o\'tilyapti...');
            
            // 2 soniyadan keyin rasmiy sahifaga o'tish
            setTimeout(() => {
                window.open('https://code.visualstudio.com/download', '_blank');
                showNotification('✅ VS Code yuklab olish sahifasi ochildi!');
            }, 2000);
        });
    }
    
    // Online kod editöriga o'tish
    if (onlineEditorBtn) {
        onlineEditorBtn.addEventListener('click', function() {
            showNotification('🚀 Kod editöriga o\'tilyapti...');
            
            // Kod editöriga scroll qilish
            const editorSection = document.querySelector('.editor-section');
            if (editorSection) {
                editorSection.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                });
                
                // Editörni ajratib ko'rsatish
                editorSection.style.transition = 'all 0.5s ease';
                editorSection.style.transform = 'scale(1.02)';
                editorSection.style.boxShadow = '0 20px 60px rgba(59, 130, 246, 0.3)';
                
                setTimeout(() => {
                    editorSection.style.transform = 'scale(1)';
                    editorSection.style.boxShadow = '';
                }, 1000);
                
                setTimeout(() => {
                    showNotification('💻 Kod editöriga o\'tdingiz! Endi kod yozingni boshlang.');
                }, 1500);
            } else {
                showNotification('❌ Kod editör topilmadi');
            }
        });
    }

    // Tugmalarga hover effektlari
    if (downloadVSCodeBtn) {
        downloadVSCodeBtn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
            this.style.boxShadow = '0 8px 30px rgba(59, 130, 246, 0.4)';
        });
        
        downloadVSCodeBtn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 20px rgba(59, 130, 246, 0.3)';
        });
    }
    
    if (onlineEditorBtn) {
        onlineEditorBtn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
            this.style.boxShadow = '0 8px 30px rgba(16, 185, 129, 0.4)';
        });
        
        onlineEditorBtn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 20px rgba(16, 185, 129, 0.3)';
        });
    }

    // Run code functionality
    const runButton = document.getElementById('run-code');
    const clearButton = document.getElementById('clear-code');
    const previewFrame = document.querySelector('#preview iframe');

    if (runButton && previewFrame) {
        runButton.addEventListener('click', function() {
            const htmlCode = textareas.html ? textareas.html.value : '';
            const cssCode = textareas.css ? textareas.css.value : '';
            const jsCode = textareas.js ? textareas.js.value : '';

            const combinedCode = `
                <!DOCTYPE html>
                <html lang="uz">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Preview</title>
                    <style>
                        ${cssCode}
                    </style>
                </head>
                <body>
                    ${htmlCode}
                    <script>
                        ${jsCode}
                    <\/script>
                </body>
                </html>
            `;

            previewFrame.srcdoc = combinedCode;
        });
    }

    if (clearButton) {
        clearButton.addEventListener('click', function() {
            Object.values(textareas).forEach(textarea => {
                if (textarea) textarea.value = '';
            });
            if (previewFrame) {
                previewFrame.srcdoc = '';
            }
        });
    }

    // Frontend Test Functionality
    const testStartButton = document.getElementById('start-test');
    const testContent = document.getElementById('test-content');
    const testResults = document.getElementById('test-results');
    const testCard = document.querySelector('.test-card');
    const questionContainer = document.getElementById('question-container');
    const currentQuestionSpan = document.getElementById('current-question');
    const totalQuestionsSpan = document.getElementById('total-questions');
    const progressFill = document.getElementById('progress-fill');
    const prevButton = document.getElementById('prev-question');
    const nextButton = document.getElementById('next-question');
    const submitButton = document.getElementById('submit-test');

    // Frontend test questions
    const frontendQuestions = [
        {
            question: "HTML qisqartmasi nimani anglatadi?",
            options: ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "Hyperlink and Text Markup Language"],
            correct: 0,
            explanation: "HTML - Hyper Text Markup Language, veb-sahifalarni yaratish uchun ishlatiladigan markup tili."
        },
        {
            question: "CSS da elementlarni bir qatorga joylashtirish uchun qaysi property ishlatiladi?",
            options: ["display: block", "display: inline", "display: flex", "display: none"],
            correct: 2,
            explanation: "display: flex - elementlarni flexbox orqali bir qatorga joylashtirish uchun ishlatiladi."
        },
        {
            question: "JavaScript da o'zgaruvchi e'lon qilish uchun qaysi kalit so'z ishlatilmaydi?",
            options: ["var", "let", "const", "int"],
            correct: 3,
            explanation: "JavaScript da 'int' kalit so'zi yo'q. 'var', 'let', 'const' ishlatiladi."
        },
        {
            question: "React da componentlarni yaratish uchun qaysi funksiya ishlatiladi?",
            options: ["createComponent()", "React.createElement()", "useState()", "ReactDOM.render()"],
            correct: 1,
            explanation: "React.createElement() - React da elementlarni yaratish uchun asosiy funksiya."
        },
        {
            question: "Responsive dizayn nima uchun kerak?",
            options: ["Faqat desktop uchun", "Har qanday ekran o'lchamiga moslashish uchun", "Faqat mobil uchun", "Tezlik uchun"],
            correct: 1,
            explanation: "Responsive dizayn veb-sahifani har qanday ekran o'lchamiga moslashishi uchun kerak."
        },
        {
            question: "Git qanday dastur?",
            options: ["Text editor", "Version control system", "Database", "Programming language"],
            correct: 1,
            explanation: "Git - versiyalarni boshqarish tizimi, kod o'zgarishlarini kuzatish uchun ishlatiladi."
        },
        {
            question: "DOM qisqartmasi nimani anglatadi?",
            options: ["Document Object Model", "Data Object Management", "Dynamic Object Model", "Document Oriented Model"],
            correct: 0,
            explanation: "DOM - Document Object Model, HTML hujjatining dasturiy ifodasi."
        },
        {
            question: "CSS da rangni belgilash uchun qaysi property ishlatiladi?",
            options: ["font-color", "text-color", "color", "background-color"],
            correct: 2,
            explanation: "color property - matn rangini belgilash uchun ishlatiladi."
        },
        {
            question: "JavaScript da massivning oxirgi elementini olish uchun qaysi metod ishlatiladi?",
            options: ["first()", "last()", "pop()", "push()"],
            correct: 2,
            explanation: "pop() - massivning oxirgi elementini olib tashlaydi va qaytaradi."
        },
        {
            question: "API nima degani?",
            options: ["Application Programming Interface", "Advanced Programming Interface", "Application Process Interface", "Advanced Process Integration"],
            correct: 0,
            explanation: "API - Application Programming Interface, dasturlar o'rtasida aloqa qilish uchun interfeys."
        }
    ];

    let currentQuestion = 0;
    let userAnswers = [];

    // Start test
    if (testStartButton) {
        testStartButton.addEventListener('click', function() {
            startTest();
        });
    }

    function startTest() {
        currentQuestion = 0;
        userAnswers = [];
        
        // Hide test card, show test content
        if (testCard) testCard.style.display = 'none';
        if (testContent) testContent.style.display = 'block';
        if (testResults) testResults.style.display = 'none';
        
        // Set total questions
        if (totalQuestionsSpan) {
            totalQuestionsSpan.textContent = frontendQuestions.length;
        }
        
        // Load first question
        loadQuestion();
        
        showNotification('Frontend testi boshlandi! Omad! 💻');
    }

    function loadQuestion() {
        const question = frontendQuestions[currentQuestion];
        
        // Update progress
        if (currentQuestionSpan) {
            currentQuestionSpan.textContent = currentQuestion + 1;
        }
        if (progressFill) {
            progressFill.style.width = `${((currentQuestion + 1) / frontendQuestions.length) * 100}%`;
        }
        
        // Create question HTML
        let questionHTML = `
            <div class="question-text">
                <strong>Savol ${currentQuestion + 1}:</strong> ${question.question}
            </div>
            <div class="options-list">
        `;
        
        question.options.forEach((option, index) => {
            const isChecked = userAnswers[currentQuestion] === index ? 'checked' : '';
            questionHTML += `
                <div class="option-item">
                    <label class="option-label">
                        <input type="radio" 
                               name="question-${currentQuestion}" 
                               value="${index}" 
                               class="option-radio"
                               ${isChecked}>
                        <span class="option-text">${option}</span>
                    </label>
                </div>
            `;
        });
        
        questionHTML += '</div>';
        
        // Insert HTML
        if (questionContainer) {
            questionContainer.innerHTML = questionHTML;
        }
        
        // Update navigation buttons
        updateNavigationButtons();
        
        // Add event listeners
        setTimeout(() => {
            const radioButtons = document.querySelectorAll(`input[name="question-${currentQuestion}"]`);
            const labels = document.querySelectorAll('.option-label');
            
            radioButtons.forEach((radio, index) => {
                radio.addEventListener('change', function() {
                    selectOption(index);
                });
            });
            
            labels.forEach((label, index) => {
                label.addEventListener('click', function() {
                    const radio = label.querySelector('.option-radio');
                    if (radio) {
                        radio.checked = true;
                        selectOption(index);
                    }
                });
            });
        }, 100);
    }

    function selectOption(optionIndex) {
        userAnswers[currentQuestion] = optionIndex;
        
        // Update visual selection
        const currentLabels = document.querySelectorAll('.option-label');
        currentLabels.forEach((label, index) => {
            if (index === optionIndex) {
                label.classList.add('selected');
                const radio = label.querySelector('.option-radio');
                if (radio) radio.checked = true;
            } else {
                label.classList.remove('selected');
            }
        });
    }

    function updateNavigationButtons() {
        if (prevButton) {
            prevButton.disabled = currentQuestion === 0;
        }
        
        if (nextButton) {
            if (currentQuestion === frontendQuestions.length - 1) {
                nextButton.style.display = 'none';
                if (submitButton) submitButton.style.display = 'inline-block';
            } else {
                nextButton.style.display = 'inline-block';
                if (submitButton) submitButton.style.display = 'none';
            }
        }
    }

    // Navigation event listeners
    if (prevButton) {
        prevButton.addEventListener('click', function() {
            if (currentQuestion > 0) {
                currentQuestion--;
                loadQuestion();
            }
        });
    }

    if (nextButton) {
        nextButton.addEventListener('click', function() {
            if (currentQuestion < frontendQuestions.length - 1) {
                currentQuestion++;
                loadQuestion();
            }
        });
    }

    if (submitButton) {
        submitButton.addEventListener('click', function() {
            submitTest();
        });
    }

    function submitTest() {
        let correct = 0;
        frontendQuestions.forEach((question, index) => {
            if (userAnswers[index] === question.correct) {
                correct++;
            }
        });
        
        const percentage = Math.round((correct / frontendQuestions.length) * 100);
        
        // Show results
        if (testContent) testContent.style.display = 'none';
        if (testResults) testResults.style.display = 'block';
        
        // Update score display
        const scorePercentage = document.getElementById('score-percentage');
        const correctCount = document.getElementById('correct-count');
        const totalCount = document.getElementById('total-count');
        const scorePoints = document.getElementById('score-points');
        
        if (scorePercentage) scorePercentage.textContent = percentage + '%';
        if (correctCount) correctCount.textContent = correct;
        if (totalCount) totalCount.textContent = frontendQuestions.length;
        if (scorePoints) scorePoints.textContent = correct * 10;
        
        // Show detailed results
        const resultsDetails = document.getElementById('results-details');
        if (resultsDetails) {
            let detailsHTML = '<h4>Batafsil natijalar:</h4><div class="results-list">';
            
            frontendQuestions.forEach((question, index) => {
                const isCorrect = userAnswers[index] === question.correct;
                detailsHTML += `
                    <div class="result-item ${isCorrect ? 'correct' : 'incorrect'}">
                        <div class="result-question">
                            <strong>Savol ${index + 1}:</strong> ${question.question}
                        </div>
                        <div class="result-answer">
                            Sizning javobingiz: ${question.options[userAnswers[index] || '-']}
                        </div>
                        <div class="result-correct">
                            To'g'ri javob: ${question.options[question.correct]}
                        </div>
                        <div class="result-explanation">
                            <strong>Izoh:</strong> ${question.explanation}
                        </div>
                    </div>
                `;
            });
            
            detailsHTML += '</div>';
            resultsDetails.innerHTML = detailsHTML;
        }
        
        // Show download certificate if score is good
        const downloadButton = document.getElementById('download-certificate');
        if (percentage >= 70 && downloadButton) {
            downloadButton.style.display = 'inline-block';
        }
        
        showNotification(`Frontend testi tugadi! Siz ${frontendQuestions.length} dan ${correct} tasini to'g'ri javob berdingiz! 🎉`);
    }

    // Retake test functionality
    const retakeButton = document.getElementById('retake-test');
    if (retakeButton) {
        retakeButton.addEventListener('click', function() {
            // Reset everything
            currentQuestion = 0;
            userAnswers = [];
            
            // Show test card, hide results
            if (testCard) testCard.style.display = 'block';
            if (testResults) testResults.style.display = 'none';
            if (testContent) testContent.style.display = 'none';
            
            showNotification('Frontend testi qayta boshlandi! 💻');
        });
    }

    // Download certificate functionality
    const downloadButton = document.getElementById('download-certificate');
    if (downloadButton) {
        downloadButton.addEventListener('click', function() {
            const percentage = Math.round((userAnswers.filter((answer, index) => answer === frontendQuestions[index].correct).length / frontendQuestions.length) * 100);
            
            // Create certificate content
            const certificateContent = `
                <div style="text-align: center; padding: 50px; font-family: Arial, sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white;">
                    <h1 style="font-size: 3em; margin-bottom: 20px;">🏆 Sertifikat</h1>
                    <h2 style="font-size: 2em; margin-bottom: 30px;">Frontend Dasturlash Testi</h2>
                    <p style="font-size: 1.2em; margin-bottom: 20px;">Bu sertifikat bilan tasdiqlanadiki:</p>
                    <p style="font-size: 1.5em; font-weight: bold; margin-bottom: 30px;">Foydalanuvchi</p>
                    <p style="font-size: 1.2em; margin-bottom: 20px;">Frontend dasturlash bo'yicha testni muvaffaqiyatli topshirdi</p>
                    <div style="font-size: 2em; font-weight: bold; margin: 30px 0; border: 3px solid white; padding: 20px; border-radius: 10px;">
                        ${percentage}%
                    </div>
                    <p style="font-size: 1em; margin-top: 40px;">Sana: ${new Date().toLocaleDateString('uz-UZ')}</p>
                </div>
            `;
            
            // Create download link
            const blob = new Blob([certificateContent], { type: 'text/html' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `frontend-certificate-${new Date().getTime()}.html`;
            a.click();
            URL.revokeObjectURL(url);
            
            showNotification('Sertifikat muvaffaqiyatli yuklab olindi! 🎉');
        });
    }

    // Notification function
    function showNotification(message) {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, rgba(59, 130, 246, 0.9), rgba(147, 51, 234, 0.9));
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            z-index: 1000;
            animation: slideIn 0.3s ease;
        `;
        
        // Add to page
        document.body.appendChild(notification);
        
        // Remove after 3 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 3000);
    }

    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        .option-label.selected {
            background: rgba(59, 130, 246, 0.2) !important;
            border-color: rgba(59, 130, 246, 0.5) !important;
        }
        
        .result-item {
            background: rgba(15, 23, 42, 0.5);
            border-radius: 8px;
            padding: 1rem;
            margin-bottom: 1rem;
            border-left: 4px solid #475569;
        }
        
        .result-item.correct {
            border-left-color: #10b981;
        }
        
        .result-item.incorrect {
            border-left-color: #ef4444;
        }
        
        .result-question {
            font-weight: bold;
            margin-bottom: 0.5rem;
        }
        
        .result-answer {
            color: #94a3b8;
            margin-bottom: 0.3rem;
        }
        
        .result-correct {
            color: #10b981;
            margin-bottom: 0.3rem;
        }
        
        .result-explanation {
            color: #cbd5e1;
            font-size: 0.9rem;
            padding-top: 0.5rem;
            border-top: 1px solid rgba(148, 163, 184, 0.2);
        }
    `;
    document.head.appendChild(style);

    console.log('Frontend page loaded successfully');
});
