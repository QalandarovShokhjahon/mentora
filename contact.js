// Modern Contact Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            // Close other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
    
    // Modern Form Handler
    const modernForm = document.getElementById('modernContactForm');
    
    if (modernForm) {
        modernForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(modernForm);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                subject: formData.get('subject'),
                message: formData.get('message')
            };
            
            // Validate form
            if (!validateModernForm(data)) {
                return;
            }
            
            // Show loading state
            const submitBtn = modernForm.querySelector('.btn-modern.primary');
            const originalContent = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Yuborilmoqda...';
            submitBtn.disabled = true;
            
            // Send to Telegram Bot API
            sendToTelegramBot(data)
                .then(function(response) {
                    if (response.ok) {
                        showNotification('Xabaringiz muvaffaqiyatli yuborildi! Tez orada siz bilan bog\'lanamiz.', 'success');
                        modernForm.reset();
                    } else {
                        showNotification('Xatolik yuz berdi. Iltimos, qayta urinib ko\'ring.', 'error');
                    }
                })
                .catch(function(error) {
                    console.error('Telegram API error:', error);
                    showNotification('Xatolik yuz berdi. Iltimos, qayta urinib ko\'ring.', 'error');
                })
                .finally(function() {
                    // Reset button
                    submitBtn.innerHTML = originalContent;
                    submitBtn.disabled = false;
                });
        });
    }
    
    // Send message to Telegram Bot
    function sendToTelegramBot(data) {
        // Bot token va chat ID ni o'rniga o'zingiznikini kiriting
        const BOT_TOKEN = '8373254192:AAH6bHB2hO1rNVPuPFX7Haypx-zEF6V59Dk'; // @BotFather dan oling
        const CHAT_ID = '8479298376'; // Sizning Telegram IDingiz
        
        // Xabar matnini tayyorlash
        const message = `🆕 Yangi xabar TechWebby dan!\n\n` +
            `👤 Ism: ${data.name}\n` +
            `📧 Email: ${data.email}\n` +
            `📱 Telefon: ${data.phone || "Ko'rsatilmagan"}\n` +
            `📋 Mavzu: ${getSubjectLabel(data.subject)}\n` +
            `💬 Xabar:\n${data.message}\n\n` +
            `🕐 Vaqt: ${new Date().toLocaleString('uz-UZ')}\n` +
            `🌐 Sahifa: ${window.location.href}`;
        
        // Telegram API ga so'rov yuborish
        const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
        
        return fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: message,
                parse_mode: 'HTML',
                disable_web_page_preview: false
            })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        });
    }
    
    // Get subject label in Uzbek
    function getSubjectLabel(subject) {
        const subjects = {
            'kurs': 'Kurslar haqida',
            'registration': "Ro'yhatdan o'tish",
            'support': 'Texnik yordam',
            'partnership': 'Hamkorlik',
            'other': 'Boshqa'
        };
        return subjects[subject] || subject;
    }
    
    // Form validation
    function validateModernForm(data) {
        if (!data.name || data.name.length < 2) {
            showNotification('Iltimos, to\'g\'ri ism kiriting', 'error');
            return false;
        }
        
        if (!data.email || !isValidEmail(data.email)) {
            showNotification('Iltimos, to\'g\'ri email manzilini kiriting', 'error');
            return false;
        }
        
        if (!data.subject) {
            showNotification('Iltimos, mavzuni tanlang', 'error');
            return false;
        }
        
        if (!data.message || data.message.length < 10) {
            showNotification('Xabar kamida 10 ta belgidan iborat bo\'lishi kerak', 'error');
            return false;
        }
        
        return true;
    }
    
    // Email validation
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Show notification
    function showNotification(message, type) {
        // Remove existing notification
        const existingNotif = document.querySelector('.notification');
        if (existingNotif) {
            existingNotif.remove();
        }
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
                <span>${message}</span>
            </div>
        `;
        
        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 10000;
            padding: 1rem 1.5rem;
            border-radius: 12px;
            background: ${type === 'success' ? 'rgba(34, 197, 94, 0.9)' : 'rgba(239, 68, 68, 0.9)'};
            color: white;
            font-weight: 500;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            backdrop-filter: blur(10px);
            transform: translateX(100%);
            transition: transform 0.3s ease;
            max-width: 400px;
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove after 5 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 5000);
    }
    
    // Phone number formatting
    const phoneInput = document.querySelector('input[name="phone"]');
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 0) {
                if (value.startsWith('998')) {
                    value = '+' + value.slice(0, 12);
                } else if (value.length <= 9) {
                    value = '+998 ' + value;
                } else {
                    value = '+998 ' + value.slice(0, 9);
                }
                e.target.value = value;
            }
        });
    }
    
    // Add input animations
    const inputs = document.querySelectorAll('.modern-form input, .modern-form select, .modern-form textarea');
    
    inputs.forEach(input => {
        // Add focus effect
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            if (!this.value) {
                this.parentElement.classList.remove('focused');
            }
        });
        
        // Check if input has value on load
        if (input.value) {
            input.parentElement.classList.add('focused');
        }
    });
    
    // Smooth scroll for contact links
    const contactLinks = document.querySelectorAll('.contact-link');
    contactLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Add ripple effect
            const ripple = document.createElement('span');
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(59, 130, 246, 0.3);
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;
            
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = '50%';
            ripple.style.top = '50%';
            ripple.style.marginLeft = -size/2 + 'px';
            ripple.style.marginTop = -size/2 + 'px';
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
    
    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        .form-group.focused label {
            color: #3b82f6;
            transform: translateY(-2px);
        }
        
        .notification-content {
            display: flex;
            align-items: center;
            gap: 0.8rem;
        }
        
        .notification-content i {
            font-size: 1.2rem;
        }
    `;
    document.head.appendChild(style);
});
