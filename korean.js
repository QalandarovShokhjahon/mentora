
document.addEventListener('DOMContentLoaded', function() {
    // Korean Alphabet Learning Functionality
    const alphabetLink = document.querySelector('.lesson-link[href="#"]');
    if (alphabetLink) {
        alphabetLink.addEventListener('click', function(e) {
            e.preventDefault();
            startAlphabetLearning();
        });
    }
    
    function startAlphabetLearning() {
        // Create modal for alphabet learning
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            z-index: 10000;
            display: flex;
            align-items: center;
            justify-content: center;
            animation: fadeIn 0.3s ease;
        `;
        
        modal.innerHTML = `
            <div style="
                background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
                border-radius: 20px;
                padding: 2rem;
                max-width: 800px;
                width: 90%;
                max-height: 90vh;
                overflow-y: auto;
                border: 1px solid rgba(96, 165, 250, 0.3);
                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
            ">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
                    <h2 style="color: #f9fafb; font-size: 2rem; margin: 0;">🔤 Hangul Alifbosi - Bosqichma-bosqich o'rganish</h2>
                    <button id="close-modal" style="
                        background: none;
                        border: none;
                        color: #f9fafb;
                        font-size: 2rem;
                        cursor: pointer;
                        padding: 0.5rem;
                        border-radius: 8px;
                        transition: all 0.3s ease;
                    " onmouseover="this.style.background='rgba(239, 68, 68, 0.2)'" onmouseout="this.style.background='none'">×</button>
                </div>
                
                <div id="learning-content">
                    <div style="text-align: center; margin-bottom: 2rem;">
                        <div style="display: flex; justify-content: center; gap: 1rem; margin-bottom: 2rem; flex-wrap: wrap;">
                            <button class="step-btn" data-step="1" style="
                                background: linear-gradient(135deg, rgba(239, 68, 68, 0.2), rgba(251, 146, 60, 0.2));
                                border: 1px solid rgba(239, 68, 68, 0.5);
                                color: #f9fafb;
                                padding: 1rem 1.5rem;
                                border-radius: 12px;
                                cursor: pointer;
                                font-size: 1rem;
                                transition: all 0.3s ease;
                            ">1-qadam: Asosiy unlilar</button>
                            <button class="step-btn" data-step="2" style="
                                background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2));
                                border: 1px solid rgba(59, 130, 246, 0.5);
                                color: #f9fafb;
                                padding: 1rem 1.5rem;
                                border-radius: 12px;
                                cursor: pointer;
                                font-size: 1rem;
                                transition: all 0.3s ease;
                            ">2-qadam: Y tovushli unlilar</button>
                            <button class="step-btn" data-step="3" style="
                                background: linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(219, 39, 119, 0.2));
                                border: 1px solid rgba(236, 72, 153, 0.5);
                                color: #f9fafb;
                                padding: 1rem 1.5rem;
                                border-radius: 12px;
                                cursor: pointer;
                                font-size: 1rem;
                                transition: all 0.3s ease;
                            ">3-qadam: Qo'shma unlilar</button>
                            <button class="step-btn" data-step="4" style="
                                background: linear-gradient(135deg, rgba(245, 158, 11, 0.2), rgba(251, 146, 60, 0.2));
                                border: 1px solid rgba(245, 158, 11, 0.5);
                                color: #f9fafb;
                                padding: 1rem 1.5rem;
                                border-radius: 12px;
                                cursor: pointer;
                                font-size: 1rem;
                                transition: all 0.3s ease;
                            ">4-qadam: Asosiy undoshlar</button>
                            <button class="step-btn" data-step="5" style="
                                background: linear-gradient(135deg, rgba(34, 197, 94, 0.2), rgba(16, 185, 129, 0.2));
                                border: 1px solid rgba(34, 197, 94, 0.5);
                                color: #f9fafb;
                                padding: 1rem 1.5rem;
                                border-radius: 12px;
                                cursor: pointer;
                                font-size: 1rem;
                                transition: all 0.3s ease;
                            ">5-qadam: Qattiq undoshlar</button>
                            <button class="step-btn" data-step="6" style="
                                background: linear-gradient(135deg, rgba(251, 146, 60, 0.2), rgba(245, 158, 11, 0.2));
                                border: 1px solid rgba(251, 146, 60, 0.5);
                                color: #f9fafb;
                                padding: 1rem 1.5rem;
                                border-radius: 12px;
                                cursor: pointer;
                                font-size: 1rem;
                                transition: all 0.3s ease;
                            ">6-qadam: Qo'shma undoshlar</button>
                        </div>
                    </div>
                    
                    <div id="step-content" style="min-height: 400px;">
                        <!-- Dynamic content will be loaded here -->
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Add fade in animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            .step-btn:hover {
                transform: translateY(-2px);
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            }
            .step-btn.active {
                background: linear-gradient(135deg, rgba(96, 165, 250, 0.3), rgba(59, 130, 246, 0.3)) !important;
                border-color: rgba(96, 165, 250, 0.8) !important;
                transform: translateY(-2px);
                box-shadow: 0 10px 30px rgba(96, 165, 250, 0.3);
            }
            .letter-card {
                background: rgba(15, 23, 42, 0.5);
                border: 1px solid rgba(96, 165, 250, 0.2);
                border-radius: 12px;
                padding: 1.5rem;
                text-align: center;
                transition: all 0.3s ease;
                cursor: pointer;
            }
            .letter-card:hover {
                background: rgba(96, 165, 250, 0.1);
                border-color: rgba(96, 165, 250, 0.5);
                transform: translateY(-5px);
                box-shadow: 0 15px 40px rgba(96, 165, 250, 0.2);
            }
            .letter-card.selected {
                background: rgba(34, 197, 94, 0.2);
                border-color: rgba(34, 197, 94, 0.5);
            }
            .practice-area {
                background: rgba(15, 23, 42, 0.8);
                border: 1px solid rgba(96, 165, 250, 0.3);
                border-radius: 12px;
                padding: 2rem;
                margin-top: 2rem;
            }
            .practice-input {
                background: rgba(30, 41, 59, 0.8);
                border: 1px solid rgba(96, 165, 250, 0.3);
                border-radius: 8px;
                padding: 1rem;
                color: #f9fafb;
                font-size: 1.2rem;
                width: 100%;
                margin: 1rem 0;
            }
            .practice-input:focus {
                outline: none;
                border-color: rgba(96, 165, 250, 0.6);
                box-shadow: 0 0 20px rgba(96, 165, 250, 0.2);
            }
            .check-btn {
                background: linear-gradient(135deg, rgba(34, 197, 94, 0.3), rgba(16, 185, 129, 0.3));
                border: 1px solid rgba(34, 197, 94, 0.5);
                color: #f9fafb;
                padding: 1rem 2rem;
                border-radius: 8px;
                cursor: pointer;
                font-size: 1rem;
                transition: all 0.3s ease;
            }
            .check-btn:hover {
                background: linear-gradient(135deg, rgba(34, 197, 94, 0.4), rgba(16, 185, 129, 0.4));
                transform: translateY(-2px);
                box-shadow: 0 10px 30px rgba(34, 197, 94, 0.3);
            }
        `;
        document.head.appendChild(style);
        
        // Close modal functionality
        document.getElementById('close-modal').addEventListener('click', function() {
            document.body.removeChild(modal);
            document.head.removeChild(style);
        });
        
        // Load first step by default
        loadStep(1);
        
        // Step button click handlers
        document.querySelectorAll('.step-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const step = parseInt(this.dataset.step);
                loadStep(step);
                
                // Update active button
                document.querySelectorAll('.step-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
            });
        });
        
        // Set first button as active
        document.querySelector('.step-btn[data-step="1"]').classList.add('active');
    }
    
    function loadStep(step) {
        const stepContent = document.getElementById('step-content');
        
        const steps = {
            1: {
                title: '1-qadam: Asosiy Unli Tovushlar',
                description: 'Koreys tilining 8 ta asosiy unli tovushini o\'rganing. Bu harflar boshqa unli harflar uchun asos hisoblanadi.',
                letters: [
                    { korean: 'ㅏ', latin: 'a', example: '아 (ya)', description: 'Keng, ochiq tovush - "a" kabi' },
                    { korean: 'ㅓ', latin: 'eo', example: '어 (eo)', description: 'Orqa, past tovush - "o" va "u" orasida' },
                    { korean: 'ㅗ', latin: 'o', example: '오 (o)', description: 'Yumaloq, qisqa tovush - "o" kabi' },
                    { korean: 'ㅜ', latin: 'u', example: '우 (u)', description: 'Chuqur, yumaloq tovush - "u" kabi' },
                    { korean: 'ㅡ', latin: 'eu', example: '으 (eu)', description: 'Orqa, yassi tovush - "i" va "e" orasida' },
                    { korean: 'ㅣ', latin: 'i', example: '이 (i)', description: 'Oldingi, ingichka tovush - "i" kabi' },
                    { korean: 'ㅐ', latin: 'ae', example: '애 (ae)', description: 'Keng, "e" ga yaqin tovush' },
                    { korean: 'ㅔ', latin: 'e', example: '에 (e)', description: 'Ingichka, "e" tovushi' }
                ],
                practice: 'Ushbu unlilardan foydalanib "a, eo, o, u, eu, i, ae, e" tovushlarini yozing va ularning talaffuzini mashq qiling.'
            },
            2: {
                title: '2-qadam: Y Tovushli Unlilar',
                description: 'Asosiy unlilarga "y" tovushi qo\'shilishi orqali hosil bo\'lgan 4 ta harf.',
                letters: [
                    { korean: 'ㅑ', latin: 'ya', example: '야 (ya)', description: 'ㅏ + y = "ya" tovushi' },
                    { korean: 'ㅕ', latin: 'yeo', example: '여 (yeo)', description: 'ㅓ + y = "yeo" tovushi' },
                    { korean: 'ㅛ', latin: 'yo', example: '요 (yo)', description: 'ㅗ + y = "yo" tovushi' },
                    { korean: 'ㅠ', latin: 'yu', example: '유 (yu)', description: 'ㅜ + y = "yu" tovushi' }
                ],
                practice: 'ㅏ, ㅓ, ㅗ, ㅜ harflariga y tovushini qo\'shib yangi harflarni yozing: ㅑ, ㅕ, ㅛ, ㅠ'
            },
            3: {
                title: '3-qadam: Qo\'shma Unlilar',
                description: 'Ikki xil tovushning birlashmasidan hosil bo\'lgan 9 ta murakkab unli harf.',
                letters: [
                    { korean: 'ㅒ', latin: 'yae', example: '얘 (yae)', description: 'ㅐ + y = "yae" tovushi' },
                    { korean: 'ㅖ', latin: 'ye', example: '예 (ye)', description: 'ㅔ + y = "ye" tovushi' },
                    { korean: 'ㅘ', latin: 'wa', example: '과 (wa)', description: 'ㅗ + ㅗ = "wa" tovushi' },
                    { korean: 'ㅙ', latin: 'wae', example: '왜 (wae)', description: 'ㅗ + ㅐ = "wae" tovushi' },
                    { korean: 'ㅚ', latin: 'oe', example: '외 (oe)', description: 'ㅗ + ㅣ = "oe" tovushi' },
                    { korean: 'ㅝ', latin: 'wo', example: '워 (wo)', description: 'ㅜ + ㅜ = "wo" tovushi' },
                    { korean: 'ㅞ', latin: 'we', example: '웨 (we)', description: 'ㅜ + ㅔ = "we" tovushi' },
                    { korean: 'ㅟ', latin: 'wi', example: '위 (wi)', description: 'ㅜ + ㅣ = "wi" tovushi' },
                    { korean: 'ㅢ', latin: 'ui', example: '의 (ui)', description: 'ㅡ + ㅣ = "ui" tovushi' }
                ],
                practice: 'Qo\'shma unlilarni tarkibidagi asosiy unlilarni aniqlang: ㅒ(ㅐ+y), ㅖ(ㅔ+y), ㅘ(ㅗ+ㅗ) va hokazo.'
            },
            4: {
                title: '4-qadam: Asosiy Undosh Tovushlar',
                description: 'Koreys tilining 9 ta asosiy undosh tovushi. Ular so\'z boshi va oxirida har xil talqin qilinadi.',
                letters: [
                    { korean: 'ㄱ', latin: 'g/k', example: '가 (ga)', description: 'So\'z boshida "g", oxirida "k"' },
                    { korean: 'ㄴ', latin: 'n', example: '나 (na)', description: 'Doim "n" tovushi' },
                    { korean: 'ㄷ', latin: 'd/t', example: '다 (da)', description: 'So\'z boshida "d", oxirida "t"' },
                    { korean: 'ㄹ', latin: 'r/l', example: '라 (ra)', description: 'So\'z boshida "r", oxirida "l"' },
                    { korean: 'ㅁ', latin: 'm', example: '마 (ma)', description: 'Doim "m" tovushi' },
                    { korean: 'ㅂ', latin: 'b/p', example: '바 (ba)', description: 'So\'z boshida "b", oxirida "p"' },
                    { korean: 'ㅅ', latin: 's', example: '사 (sa)', description: 'Doim "s" tovushi' },
                    { korean: 'ㅇ', latin: 'ng/-', example: '아 (a)', description: 'So\'z boshida ovozli, oxirida "ng"' },
                    { korean: 'ㅈ', latin: 'j', example: '자 (ja)', description: 'Doim "j" tovushi' }
                ],
                practice: 'Har bir undoshning so\'z boshi va oxiridagi talqinini yodlang: ㄱ(g/k), ㄷ(d/t), ㄹ(r/l), ㅂ(b/p), ㅇ(ng/-)'
            },
            5: {
                title: '5-qadam: Qattiq Undoshlar',
                description: 'Kuchli va aniq talaffuz qilinadigan 5 ta qattiq undosh tovushi.',
                letters: [
                    { korean: 'ㅊ', latin: 'ch', example: '차 (cha)', description: 'Kuchli "ch" tovushi' },
                    { korean: 'ㅋ', latin: 'k', example: '카 (ka)', description: 'Kuchli "k" tovushi' },
                    { korean: 'ㅌ', latin: 't', example: '타 (ta)', description: 'Kuchli "t" tovushi' },
                    { korean: 'ㅍ', latin: 'p', example: '파 (pa)', description: 'Kuchli "p" tovushi' },
                    { korean: 'ㅎ', latin: 'h', example: '하 (ha)', description: 'Kuchli "h" tovushi' }
                ],
                practice: 'Qattiq undoshlarni kuchli hovur bilan talaffuz qiling. Ular oddiy undoshlardan kuchliroq eshitiladi.'
            },
            6: {
                title: '6-qadam: Qo\'shma Undoshlar',
                description: 'Ikki xil undoshning birlashmasidan hosil bo\'lgan 5 ta kuchaytirilgan undosh.',
                letters: [
                    { korean: 'ㄲ', latin: 'kk', example: '까 (kka)', description: 'Kuchaytirilgan ㄱ - "kk"' },
                    { korean: 'ㄸ', latin: 'tt', example: '따 (tta)', description: 'Kuchaytirilgan ㄷ - "tt"' },
                    { korean: 'ㅃ', latin: 'pp', example: '빠 (ppa)', description: 'Kuchaytirilgan ㅂ - "pp"' },
                    { korean: 'ㅆ', latin: 'ss', example: '싸 (ssa)', description: 'Kuchaytirilgan ㅅ - "ss"' },
                    { korean: 'ㅉ', latin: 'jj', example: '짜 (jja)', description: 'Kuchaytirilgan ㅈ - "jj"' }
                ],
                practice: 'Qo\'shma undoshlarni juda qisqa va kuchli talaffuz qiling. Ular ikki marta takrorlangan tovush kabi eshitiladi.'
            }
        };
        
        const currentStep = steps[step];
        
        stepContent.innerHTML = `
            <div style="color: #f9fafb;">
                <h3 style="font-size: 1.5rem; margin-bottom: 1rem; color: #60a5fa;">${currentStep.title}</h3>
                <p style="font-size: 1.1rem; margin-bottom: 2rem; line-height: 1.6; color: #cbd5e1;">${currentStep.description}</p>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 2rem;">
                    ${currentStep.letters.map(letter => `
                        <div class="letter-card" onclick="selectLetter('${letter.korean}', '${letter.example}')">
                            <div style="font-size: 3rem; font-weight: bold; margin-bottom: 0.5rem;">${letter.korean}</div>
                            <div style="font-size: 1.2rem; color: #60a5fa; margin-bottom: 0.3rem;">${letter.latin}</div>
                            <div style="font-size: 1rem; color: #fbbf24; margin-bottom: 0.3rem;">${letter.example}</div>
                            <div style="font-size: 0.9rem; color: #94a3b8;">${letter.description}</div>
                        </div>
                    `).join('')}
                </div>
                
                <div class="practice-area">
                    <h4 style="color: #60a5fa; margin-bottom: 1rem;">🎯 Amaliyot mashqlari</h4>
                    <p style="color: #cbd5e1; margin-bottom: 1rem;">${currentStep.practice}</p>
                    <textarea class="practice-input" placeholder="Bu yerda mashq qiling..." rows="4"></textarea>
                    <div style="display: flex; gap: 1rem; justify-content: center;">
                        <button class="check-btn" onclick="checkPractice()">Tekshirish</button>
                        <button class="check-btn" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.3));" onclick="showHint()">Ishora</button>
                    </div>
                </div>
                
                <div style="display: flex; justify-content: space-between; margin-top: 2rem;">
                    ${step > 1 ? `<button class="check-btn" onclick="loadStep(${step - 1})">← Oldingi qadam</button>` : '<div></div>'}
                    ${step < 6 ? `<button class="check-btn" onclick="loadStep(${step + 1})">Keyingi qadam →</button>` : '<button class="check-btn" style="background: linear-gradient(135deg, rgba(34, 197, 94, 0.3), rgba(16, 185, 129, 0.3));" onclick="completeAlphabet()">🎉 Alifbosi tugatildi!</button>'}
                </div>
            </div>
        `;
        
        // Update active button
        document.querySelectorAll('.step-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelector(`.step-btn[data-step="${step}"]`).classList.add('active');
    }
    
    // Global functions for the modal
    window.selectLetter = function(korean, example) {
        const cards = document.querySelectorAll('.letter-card');
        cards.forEach(card => {
            if (card.textContent.includes(korean)) {
                card.classList.add('selected');
            } else {
                card.classList.remove('selected');
            }
        });
        
        // Add to practice area
        const input = document.querySelector('.practice-input');
        if (input) {
            input.value += korean + ' ';
        }
        
        showNotification(`${korean} - ${example} tanlandi!`);
    };
    
    window.checkPractice = function() {
        const input = document.querySelector('.practice-input');
        if (input && input.value.trim()) {
            showNotification('Ajoyib! Mashqni muvaffaqiyatli bajardingiz! 🎉');
        } else {
            showNotification('Iltimos, avval mashqni bajaring! 📝');
        }
    };
    
    window.showHint = function() {
        showNotification('Ishora: Yuqoridagi harflardan misol olaylik, ularning talaffuzini takrorlang! 🔤');
    };
    
    window.loadStep = function(step) {
        if (step >= 1 && step <= 6) {
            loadStep(step);
        }
    };
    
    window.completeAlphabet = function() {
        showNotification('🎉 Tabriklaymiz! Siz butun Hangul alifbosini muvaffaqiyatli o\'rgandingiz! Endi Koreys tilida o\'qish va yozishni boshlashingiz mumkin! 🇰🇷');
        
        // Close modal after delay
        setTimeout(() => {
            const modal = document.querySelector('div[style*="position: fixed"]');
            if (modal) {
                document.body.removeChild(modal);
            }
        }, 3000);
    };
    
    // Korean Test Functionality
    const koreanTestStartButton = document.getElementById('korean-test-start');
    const koreanTestContent = document.getElementById('korean-test-content');
    const koreanTestResults = document.getElementById('korean-test-results');
    const koreanTestCard = document.querySelector('.test-card');
    const koreanQuestionContainer = document.getElementById('korean-question-container');
    const koreanCurrentQuestionSpan = document.getElementById('korean-current-question');
    const koreanTotalQuestionsSpan = document.getElementById('korean-total-questions');
    const koreanProgressFill = document.getElementById('korean-progress-fill');
    const koreanPrevButton = document.getElementById('korean-prev-question');
    const koreanNextButton = document.getElementById('korean-next-question');
    const koreanSubmitButton = document.getElementById('korean-submit-test');
    
    // Korean test data
    const koreanTestQuestions = [
        {
            question: "Hangul alifbosida nechta harf bor?",
            options: ["24 ta", "28 ta", "40 ta", "36 ta"],
            correct: 2,
            explanation: "Koreys alifbosida (Hangul) jami 40 ta harf bor: 21 ta unli va 19 ta undosh."
        },
        {
            question: "'안녕하세요' so'zi nimani anglatadi?",
            options: ["Rahmat", "Uzr", "Salom", "Xayr"],
            correct: 2,
            explanation: "'안녕하세요' (Annyeonghaseyo) - hurmatli salomlashish ifodasi."
        },
        {
            question: "Qaysi biri asosiy undosh harf emas?",
            options: ["ㄱ", "ㅇ", "ㅏ", "ㄴ"],
            correct: 2,
            explanation: "'ㅏ' - bu unli harf, qolganlari asosiy undosh harflardir."
        },
        {
            question: "'감사합니다' so'zi nimani anglatadi?",
            options: ["Kechirasiz", "Rahmat", "Salom", "Xayr"],
            correct: 1,
            explanation: "'감사합니다' (Gamsahamnida) - hurmatli rahmat ifodasi."
        },
        {
            question: "Koreys tilida nechta asosiy unli harf bor?",
            options: ["8 ta", "10 ta", "12 ta", "6 ta"],
            correct: 0,
            explanation: "Koreys tilida 8 ta asosiy unli harf bor: ㅏ, ㅓ, ㅗ, ㅜ, ㅡ, ㅣ, ㅐ, ㅔ."
        },
        {
            question: "'하나' so'zi qanday raqamni bildiradi?",
            options: ["Ikki", "Uch", "Bir", "To'rt"],
            correct: 2,
            explanation: "'하나' (Hana) - kundalik suhbatda 'bir' raqamini bildiradi."
        },
        {
            question: "Qaysi kun '월요일' (Woryoil) deb ataladi?",
            options: ["Seshanba", "Dushanba", "Chorshanba", "Payshanba"],
            correct: 1,
            explanation: "'월요일' (Woryoil) - dushanba kuniga to'g'ri keladi."
        },
        {
            question: "'죄송합니다' so'zi nimani anglatadi?",
            options: ["Rahmat", "Salom", "Uzr so'rayman", "Xayr"],
            correct: 2,
            explanation: "'죄송합니다' (Joesonghamnida) - hurmatli uzr so'rash ifodasi."
        },
        {
            question: "Qaysi biri koreys taomi emas?",
            options: ["김치", "불고기", "비빔밥", "사과"],
            correct: 3,
            explanation: "'사과' (Sagwa) - olma, meva. Qolganlari mashhur koreys taomlari."
        },
        {
            question: "Hangul alifbosi qaysi asrda yaratilgan?",
            options: ["15-asr", "18-asr", "20-asr", "13-asr"],
            correct: 0,
            explanation: "Hangul alifbosi 1446 yilda Sejong Buyuk tomonidan yaratilgan (15-asr)."
        }
    ];
    
    let koreanCurrentQuestion = 0;
    let koreanUserAnswers = [];
    
    // Start Korean test
    if (koreanTestStartButton) {
        koreanTestStartButton.addEventListener('click', function() {
            startKoreanTest();
        });
    }
    
    function startKoreanTest() {
        koreanCurrentQuestion = 0;
        koreanUserAnswers = [];
        
        // Hide test card, show test content
        if (koreanTestCard) koreanTestCard.style.display = 'none';
        if (koreanTestContent) koreanTestContent.style.display = 'block';
        if (koreanTestResults) koreanTestResults.style.display = 'none';
        
        // Set total questions
        if (koreanTotalQuestionsSpan) {
            koreanTotalQuestionsSpan.textContent = koreanTestQuestions.length;
        }
        
        // Load first question
        loadKoreanQuestion();
        
        showNotification('Koreys tili testi boshlandi! Hush kelibsiz! 🇰🇷');
    }
    
    function loadKoreanQuestion() {
        const question = koreanTestQuestions[koreanCurrentQuestion];
        
        // Update progress
        if (koreanCurrentQuestionSpan) {
            koreanCurrentQuestionSpan.textContent = koreanCurrentQuestion + 1;
        }
        if (koreanProgressFill) {
            koreanProgressFill.style.width = `${((koreanCurrentQuestion + 1) / koreanTestQuestions.length) * 100}%`;
        }
        
        // Create question HTML
        let questionHTML = `
            <div class="question-text">
                <strong>Savol ${koreanCurrentQuestion + 1}:</strong> ${question.question}
            </div>
            <div class="options-list">
        `;
        
        question.options.forEach((option, index) => {
            const isChecked = koreanUserAnswers[koreanCurrentQuestion] === index ? 'checked' : '';
            questionHTML += `
                <div class="option-item">
                    <label class="option-label">
                        <input type="radio" 
                               name="korean-question-${koreanCurrentQuestion}" 
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
        if (koreanQuestionContainer) {
            koreanQuestionContainer.innerHTML = questionHTML;
        }
        
        // Update navigation buttons
        updateKoreanNavigationButtons();
        
        // Add event listeners
        setTimeout(() => {
            const radioButtons = document.querySelectorAll(`input[name="korean-question-${koreanCurrentQuestion}"]`);
            const labels = document.querySelectorAll('.option-label');
            
            radioButtons.forEach((radio, index) => {
                radio.addEventListener('change', function() {
                    selectKoreanOption(index);
                });
            });
            
            labels.forEach((label, index) => {
                label.addEventListener('click', function() {
                    const radio = label.querySelector('.option-radio');
                    if (radio) {
                        radio.checked = true;
                        selectKoreanOption(index);
                    }
                });
            });
        }, 100);
    }
    
    function selectKoreanOption(optionIndex) {
        koreanUserAnswers[koreanCurrentQuestion] = optionIndex;
        
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
    
    function updateKoreanNavigationButtons() {
        if (koreanPrevButton) {
            koreanPrevButton.disabled = koreanCurrentQuestion === 0;
        }
        
        if (koreanNextButton) {
            if (koreanCurrentQuestion === koreanTestQuestions.length - 1) {
                koreanNextButton.style.display = 'none';
                if (koreanSubmitButton) koreanSubmitButton.style.display = 'inline-block';
            } else {
                koreanNextButton.style.display = 'inline-block';
                if (koreanSubmitButton) koreanSubmitButton.style.display = 'none';
            }
        }
    }
    
    // Navigation event listeners
    if (koreanPrevButton) {
        koreanPrevButton.addEventListener('click', function() {
            if (koreanCurrentQuestion > 0) {
                koreanCurrentQuestion--;
                loadKoreanQuestion();
            }
        });
    }
    
    if (koreanNextButton) {
        koreanNextButton.addEventListener('click', function() {
            if (koreanCurrentQuestion < koreanTestQuestions.length - 1) {
                koreanCurrentQuestion++;
                loadKoreanQuestion();
            }
        });
    }
    
    if (koreanSubmitButton) {
        koreanSubmitButton.addEventListener('click', function() {
            submitKoreanTest();
        });
    }
    
    function submitKoreanTest() {
        let correct = 0;
        koreanTestQuestions.forEach((question, index) => {
            if (koreanUserAnswers[index] === question.correct) {
                correct++;
            }
        });
        
        const percentage = Math.round((correct / koreanTestQuestions.length) * 100);
        
        // Show results
        if (koreanTestContent) koreanTestContent.style.display = 'none';
        if (koreanTestResults) koreanTestResults.style.display = 'block';
        
        // Update score display
        const koreanScorePercentage = document.getElementById('korean-score-percentage');
        const koreanCorrectCount = document.getElementById('korean-correct-count');
        const koreanTotalCount = document.getElementById('korean-total-count');
        const koreanScorePoints = document.getElementById('korean-score-points');
        
        if (koreanScorePercentage) koreanScorePercentage.textContent = percentage + '%';
        if (koreanCorrectCount) koreanCorrectCount.textContent = correct;
        if (koreanTotalCount) koreanTotalCount.textContent = koreanTestQuestions.length;
        if (koreanScorePoints) koreanScorePoints.textContent = correct * 10;
        
        // Show download certificate if score is good
        const koreanDownloadButton = document.getElementById('korean-download-certificate');
        if (percentage >= 70 && koreanDownloadButton) {
            koreanDownloadButton.style.display = 'inline-block';
        }
        
        showNotification(`Koreys tili testi tugadi! Siz ${koreanTestQuestions.length} dan ${correct} tasini to'g'ri javob berdingiz! 🎉`);
    }
    
    // Retake test functionality
    const koreanRetakeButton = document.getElementById('korean-retake-test');
    if (koreanRetakeButton) {
        koreanRetakeButton.addEventListener('click', function() {
            // Reset everything
            koreanCurrentQuestion = 0;
            koreanUserAnswers = [];
            
            // Show test card, hide results
            if (koreanTestCard) koreanTestCard.style.display = 'block';
            if (koreanTestResults) koreanTestResults.style.display = 'none';
            if (koreanTestContent) koreanTestContent.style.display = 'none';
            
            showNotification('Koreys tili testi qayta boshlandi! 🇰🇷');
        });
    }
    
    // Download certificate functionality
    const koreanDownloadButton = document.getElementById('korean-download-certificate');
    if (koreanDownloadButton) {
        koreanDownloadButton.addEventListener('click', function() {
            generateKoreanCertificate();
        });
    }
    
    function generateKoreanCertificate() {
        const koreanScorePercentage = document.getElementById('korean-score-percentage');
        const koreanCorrectCount = document.getElementById('korean-correct-count');
        const percentage = parseInt(koreanScorePercentage.textContent);
        const correct = parseInt(koreanCorrectCount.textContent);
        
        // Create certificate content
        const certificateContent = `
            <!DOCTYPE html>
            <html lang="uz">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Koreys Tili Sertifikati</title>
                <style>
                    body {
                        font-family: 'Arial', sans-serif;
                        margin: 0;
                        padding: 20px;
                        background: linear-gradient(135deg, #e74c3c 0%, #3498db 50%, #2ecc71 100%);
                        min-height: 100vh;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                    .certificate {
                        background: white;
                        padding: 50px;
                        border-radius: 20px;
                        box-shadow: 0 30px 80px rgba(0,0,0,0.3);
                        text-align: center;
                        max-width: 700px;
                        border: 15px solid transparent;
                        background-clip: padding-box;
                        position: relative;
                    }
                    .certificate::before {
                        content: '';
                        position: absolute;
                        top: -15px;
                        left: -15px;
                        right: -15px;
                        bottom: -15px;
                        background: linear-gradient(45deg, #e74c3c, #3498db, #2ecc71, #f39c12);
                        border-radius: 20px;
                        z-index: -1;
                    }
                    .certificate h1 {
                        font-size: 3.5rem;
                        margin-bottom: 1rem;
                        background: linear-gradient(45deg, #e74c3c, #3498db);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                    }
                    .certificate h2 {
                        font-size: 2rem;
                        margin-bottom: 2rem;
                        color: #2c3e50;
                    }
                    .certificate p {
                        font-size: 1.3rem;
                        line-height: 1.8;
                        color: #34495e;
                        margin: 20px 0;
                    }
                    .certificate .score {
                        font-size: 2rem;
                        color: #27ae60;
                        font-weight: bold;
                        margin: 30px 0;
                        padding: 20px;
                        background: rgba(39, 174, 96, 0.1);
                        border-radius: 10px;
                    }
                    .certificate .date {
                        color: #7f8c8d;
                        font-style: italic;
                        margin-top: 40px;
                        font-size: 1.1rem;
                    }
                    .certificate .signature {
                        margin-top: 60px;
                        border-top: 3px solid #3498db;
                        padding-top: 30px;
                    }
                    .certificate .korean-flag {
                        font-size: 4rem;
                        margin-bottom: 20px;
                    }
                </style>
            </head>
            <body>
                <div class="certificate">
                    <div class="korean-flag">🇰🇷</div>
                    <h1>🏆 SERTIFIKAT</h1>
                    <h2>Koreys Tili Darslari</h2>
                    <p>Ushbu sertifikat bilan tasdiqlanadi ki,</p>
                    <p><strong>Mentora o'quvchisi</strong> muvaffaqiyatli koreys tili bo'yicha testni yakunladi.</p>
                    <div class="score">
                        🎯 Natija: ${percentage}% (${correct}/${koreanTestQuestions.length} to'g'ri javob)
                    </div>
                    <p>Hangul alifbosi, kundalik iboralar va grammatika bo'yicha bilimlarni ko'rsatdi.</p>
                    <div class="date">
                        Sana: ${new Date().toLocaleDateString('uz-UZ')}
                    </div>
                    <div class="signature">
                        <p>_________________________</p>
                        <p><strong>Mentora</strong></p>
                        <p style="font-size: 0.9rem; color: #95a5a6;">Direktor</p>
                    </div>
                </div>
            </body>
            </html>
        `;
        
        // Create and download certificate
        const blob = new Blob([certificateContent], { type: 'text/html' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `Koreys-Tili-Sertifikat-${new Date().getTime()}.html`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
        
        showNotification('Koreys tili sertifikati yuklab olindi! 🎉🇰🇷');
    }
    
    // Notification system
    function showNotification(message) {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-info-circle"></i>
                <span>${message}</span>
            </div>
        `;
        
        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: #020617;
            border: 1px solid rgba(96, 165, 250, 0.5);
            border-radius: 12px;
            padding: 1rem 1.5rem;
            color: #f9fafb;
            z-index: 10000;
            box-shadow: 0 10px 30px rgba(15, 23, 42, 0.9);
            transform: translateX(400px);
            transition: transform 0.3s ease;
            max-width: 350px;
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }
    
    // Online Writing Board Functionality
    let canvas, ctx;
    let isDrawing = false;
    let currentColor = '#000000';
    let currentSize = 5;
    let isEraser = false;
    
    function initWritingBoard() {
        canvas = document.getElementById('korean-writing-board');
        if (!canvas) return;
        
        ctx = canvas.getContext('2d');
        
        // Set canvas size
        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = 400;
        
        // Set initial drawing settings
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.strokeStyle = currentColor;
        ctx.lineWidth = currentSize;
        
        // Clear canvas with white background
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Mouse events
        canvas.addEventListener('mousedown', startDrawing);
        canvas.addEventListener('mousemove', draw);
        canvas.addEventListener('mouseup', stopDrawing);
        canvas.addEventListener('mouseout', stopDrawing);
        
        // Touch events for mobile
        canvas.addEventListener('touchstart', handleTouch);
        canvas.addEventListener('touchmove', handleTouch);
        canvas.addEventListener('touchend', stopDrawing);
        
        // Color buttons
        document.querySelectorAll('.color-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                currentColor = this.dataset.color;
                isEraser = false;
                updateColorButtons();
                updateCursor();
            });
        });
        
        // Size buttons
        document.querySelectorAll('.size-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                currentSize = parseInt(this.dataset.size);
                updateSizeButtons();
                updateCursor();
            });
        });
        
        // Clear button
        document.getElementById('clear-board').addEventListener('click', clearBoard);
        
        // Download button
        document.getElementById('download-board').addEventListener('click', downloadBoard);
        
        // Eraser button
        document.getElementById('eraser-btn').addEventListener('click', function() {
            isEraser = !isEraser;
            this.style.background = isEraser ? 
                'linear-gradient(135deg, rgba(239, 68, 68, 0.3), rgba(251, 146, 60, 0.3))' : 
                'linear-gradient(135deg, rgba(156, 163, 175, 0.2), rgba(107, 114, 128, 0.2))';
            updateCursor();
        });
        
        // Sample letter hover effects
        document.querySelectorAll('.sample-letter').forEach(letter => {
            letter.addEventListener('mouseenter', function() {
                this.style.background = 'rgba(96, 165, 250, 0.2)';
                this.style.borderColor = 'rgba(96, 165, 250, 0.5)';
            });
            letter.addEventListener('mouseleave', function() {
                this.style.background = 'rgba(15, 23, 42, 0.5)';
                this.style.borderColor = 'rgba(96, 165, 250, 0.3)';
            });
        });
    }
    
    function startDrawing(e) {
        isDrawing = true;
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        ctx.beginPath();
        ctx.moveTo(x, y);
    }
    
    function draw(e) {
        if (!isDrawing) return;
        
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        ctx.globalCompositeOperation = isEraser ? 'destination-out' : 'source-over';
        ctx.strokeStyle = currentColor;
        ctx.lineWidth = currentSize;
        
        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x, y);
    }
    
    function stopDrawing() {
        if (!isDrawing) return;
        isDrawing = false;
        ctx.beginPath();
    }
    
    function handleTouch(e) {
        e.preventDefault();
        const touch = e.touches[0];
        const mouseEvent = new MouseEvent(e.type === 'touchstart' ? 'mousedown' : 
                                         e.type === 'touchmove' ? 'mousemove' : 'mouseup', {
            clientX: touch.clientX,
            clientY: touch.clientY
        });
        canvas.dispatchEvent(mouseEvent);
    }
    
    function updateColorButtons() {
        document.querySelectorAll('.color-btn').forEach(btn => {
            if (btn.dataset.color === currentColor) {
                btn.style.border = '2px solid #60a5fa';
            } else {
                btn.style.border = '2px solid transparent';
            }
        });
    }
    
    function updateSizeButtons() {
        document.querySelectorAll('.size-btn').forEach(btn => {
            if (parseInt(btn.dataset.size) === currentSize) {
                btn.style.background = 'rgba(96, 165, 250, 0.3)';
                btn.style.borderColor = 'rgba(96, 165, 250, 0.8)';
            } else {
                btn.style.background = 'rgba(96, 165, 250, 0.2)';
                btn.style.borderColor = 'rgba(96, 165, 250, 0.5)';
            }
        });
    }
    
    function updateCursor() {
        if (isEraser) {
            canvas.style.cursor = 'grab';
        } else {
            canvas.style.cursor = 'crosshair';
        }
    }
    
    function clearBoard() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        showNotification('Doska tozalandi! 🧹');
    }
    
    function downloadBoard() {
        const link = document.createElement('a');
        link.download = `korean-writing-practice-${new Date().getTime()}.png`;
        link.href = canvas.toDataURL();
        link.click();
        showNotification('Yozish rasmga saqlandi! 💾');
    }
    
    // Global function for sample letters
    window.showSampleLetter = function(letter) {
        showNotification(`${letter} harfini doskada yozib ko'ring! ✍️`);
        
        // Make sure canvas context is available
        if (!ctx) {
            const canvas = document.getElementById('korean-writing-board');
            if (canvas) {
                ctx = canvas.getContext('2d');
            }
        }
        
        if (!ctx) {
            showNotification('Doska hali tayyor emas! Iltimos, biroz kutib turing... ⏳');
            return;
        }
        
        // Draw sample letter on canvas
        ctx.save();
        
        // Clear a small area in the center for the sample
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const clearSize = 100;
        
        ctx.globalCompositeOperation = 'destination-out';
        ctx.fillRect(centerX - clearSize/2, centerY - clearSize/2, clearSize, clearSize);
        
        // Draw the sample letter
        ctx.globalCompositeOperation = 'source-over';
        ctx.font = 'bold 60px "Noto Sans KR", "Malgun Gothic", Arial, sans-serif';
        ctx.fillStyle = '#e5e7eb'; // Light gray for sample
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        // Add shadow for better visibility
        ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
        ctx.shadowBlur = 4;
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 2;
        
        ctx.fillText(letter, centerX, centerY);
        ctx.restore();
        
        showNotification(`${letter} harfi doskaga chizildi! Endi ustiga yozib mashq qiling! ✍️`);
    };
    
    // Global function for writing practice
    window.startWritingPractice = function() {
        // Scroll to the writing board
        const board = document.getElementById('korean-writing-board');
        if (board) {
            board.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            // Highlight the board briefly
            board.style.boxShadow = '0 0 30px rgba(96, 165, 250, 0.5)';
            setTimeout(() => {
                board.style.boxShadow = '0 0 0 2px rgba(96, 165, 250, 0.3)';
            }, 1000);
        }
        
        showNotification('Yozish praktikasi boshlandi! Koreys harflarini yozing! ✍️');
    };
    
    // Initialize board when page loads
    if (document.getElementById('korean-writing-board')) {
        // Wait for DOM to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initWritingBoard);
        } else {
            initWritingBoard();
        }
    }
    
    // Also re-initialize on window resize to fix canvas issues
    window.addEventListener('resize', function() {
        if (document.getElementById('korean-writing-board')) {
            const canvas = document.getElementById('korean-writing-board');
            const rect = canvas.getBoundingClientRect();
            
            // Save current canvas content
            const imageData = ctx ? ctx.getImageData(0, 0, canvas.width, canvas.height) : null;
            
            // Resize canvas
            canvas.width = rect.width;
            
            // Restore canvas content
            if (imageData && ctx) {
                ctx.putImageData(imageData, 0, 0);
            } else {
                // Re-initialize if no content
                initWritingBoard();
            }
        }
    });
    
    console.log('Korean page loaded successfully');
});
