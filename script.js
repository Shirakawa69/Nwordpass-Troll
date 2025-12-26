
// Royal fortunes and messages for the decree
const fortuneMessages = [
    "May your memes be forever dank and your downloads swift.",
    "Your grace shall echo through the halls of the internet.",
    "By royal decree, you are hereby protected by ancient meme law.",
    "Your legacy shall inspire thousands of awkward group chats.",
    "Congratulations! You are now royalty in the kingdom of chaos.",
    "Your wit is sharper than a golden sword.",
    "May your group chats forever remember this moment.",
    "You have been touched by the golden hand of internet royalty.",
    "Your name shall be whispered in legend.",
    "The crown recognizes true nobility when it sees it.",
    "Memes respects you now. Even the spicy ones.",
    "You have unlocked the ability to explain memes without laughing.",
    "Congratulations, you are immune to 'it's not that funny' comments.",
    "Your parents still don't understand, but that's okay.",
    "This decree grants you eternal deniability.",
    "You are now a certified internet archaeologist."
];

// Claim button event listener
document.addEventListener('DOMContentLoaded', function() {
    const passButton = document.getElementById('passButton');
    if (passButton) {
        passButton.addEventListener('click', function() {
            const message = document.getElementById('message');
            const button = this;
            
            // Prevent multiple clicks
            if (button.disabled) return;
            button.disabled = true;
            
            // Button animation
            button.style.transform = 'scale(0.95)';
            
            setTimeout(() => {
                button.style.opacity = '0.6';
                button.setAttribute('aria-disabled', 'true');
            }, 200);
            
            // Show message with delay
            setTimeout(() => {
                if (message) {
                    message.classList.remove('hidden');

                    // Set random fortune
                    const fortuneElement = document.getElementById('fortuneText');
                    if (fortuneElement) {
                        const randomFortune = fortuneMessages[Math.floor(Math.random() * fortuneMessages.length)];
                        fortuneElement.textContent = `"${randomFortune}"`;
                    }

                    // Create effects
                    createConfetti();
                    createSparkles();
                    createRoyalFlares();
                    
                    // Show toast notification
                    showToast('Pass Claimed! ✨');
                }
            }, 400);
        });
    }
});

// Create floating confetti particles
function createConfetti() {
    const message = document.querySelector('.message-content');
    const colors = ['#ffd700', '#d4af37', '#ffed4e', '#8b6914', '#f4c430'];

    for (let i = 0; i < 60; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'absolute';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-10px';
        confetti.style.width = Math.random() * 10 + 5 + 'px';
        confetti.style.height = confetti.style.width;
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0%';
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '10';
        confetti.style.opacity = '0.9';
        confetti.style.boxShadow = `0 0 ${Math.random() * 10 + 5}px ${confetti.style.background}`;

        message.appendChild(confetti);

        const angle = Math.random() * 360;
        const distance = 200 + Math.random() * 300;
        const x = Math.cos(angle * Math.PI / 180) * distance;
        const y = Math.sin(angle * Math.PI / 180) * distance + 400;

        confetti.animate([
            { transform: 'translate(0, 0) rotate(0deg)', opacity: 1 },
            { transform: `translate(${x}px, ${y}px) rotate(${Math.random() * 720}deg)`, opacity: 0 }
        ], {
            duration: 2000 + Math.random() * 1000,
            easing: 'ease-out',
            delay: Math.random() * 500
        }).onfinish = () => confetti.remove();
    }
}

// Create sparkling effects from button
function createSparkles() {
    const button = document.getElementById('passButton');
    const rect = button.getBoundingClientRect();
    
    for (let i = 0; i < 40; i++) {
        const sparkle = document.createElement('div');
        sparkle.style.position = 'fixed';
        sparkle.style.left = rect.left + rect.width / 2 + 'px';
        sparkle.style.top = rect.top + rect.height / 2 + 'px';
        sparkle.style.width = Math.random() * 10 + 6 + 'px';
        sparkle.style.height = sparkle.style.width;
        sparkle.style.background = ['#ffd700', '#d4af37', '#ffed4e'][Math.floor(Math.random() * 3)];
        sparkle.style.borderRadius = '50%';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.boxShadow = `0 0 ${Math.random() * 20 + 10}px ${sparkle.style.background}`;
        sparkle.style.zIndex = '9999';
        
        const angle = (Math.PI * 2 * i) / 40 + Math.random() * 0.5;
        const distance = 150 + Math.random() * 150;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;
        
        document.body.appendChild(sparkle);
        
        sparkle.animate([
            { transform: 'translate(0, 0) scale(1) rotate(0deg)', opacity: 1 },
            { transform: `translate(${x}px, ${y}px) scale(0) rotate(360deg)`, opacity: 0 }
        ], {
            duration: 1200 + Math.random() * 600,
            easing: 'ease-out'
        }).onfinish = () => sparkle.remove();
    }
}

// Create royal flare effects
function createRoyalFlares() {
    const container = document.querySelector('.container');
    
    for (let i = 0; i < 8; i++) {
        const flare = document.createElement('div');
        flare.style.position = 'fixed';
        flare.style.left = Math.random() * window.innerWidth + 'px';
        flare.style.top = Math.random() * window.innerHeight + 'px';
        flare.style.width = '100px';
        flare.style.height = '100px';
        flare.style.background = `radial-gradient(circle, ${['#ffd700', '#d4af37'][Math.floor(Math.random() * 2)]} 0%, transparent 70%)`;
        flare.style.borderRadius = '50%';
        flare.style.pointerEvents = 'none';
        flare.style.zIndex = '1000';
        flare.style.filter = 'blur(30px)';
        
        document.body.appendChild(flare);
        
        flare.animate([
            { opacity: 0, transform: 'scale(0)' },
            { opacity: 0.8, transform: 'scale(1)' },
            { opacity: 0, transform: 'scale(0)' }
        ], {
            duration: 1500 + Math.random() * 800,
            easing: 'ease-in-out',
            delay: i * 100
        }).onfinish = () => flare.remove();
    }
}

// Close message button
document.addEventListener('DOMContentLoaded', function() {
    const closeBtn = document.getElementById('closeMessage');
    if (closeBtn) {
        closeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const message = document.getElementById('message');
            if (message) {
                message.classList.add('hidden');

                // Re-enable the button
                const button = document.getElementById('passButton');
                if (button) {
                    button.disabled = false;
                    button.style.opacity = '';
                    button.style.transform = '';
                    button.removeAttribute('aria-disabled');
                }
            }
        });
    }
});

// Add keyboard support for accessibility
document.addEventListener('DOMContentLoaded', function() {
    const passButton = document.getElementById('passButton');
    if (passButton) {
        passButton.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                this.click();
            }
        });
    }
    
    const closeMessage = document.getElementById('closeMessage');
    if (closeMessage) {
        closeMessage.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                this.click();
            }
        });
    }
});

// Random interactive elements on page load
window.addEventListener('load', function() {
    // Add floating animation to feature cards
    const cards = document.querySelectorAll('.feature-card');
    cards.forEach((card, index) => {
        card.style.animation = `cardFloat 3s ease-in-out infinite`;
        card.style.animationDelay = (index * 0.3) + 's';
    });

    // Start floating royal words
    startFloatingWords();

    // Add random surprise animations
    addSurpriseAnimations();
});

// Smooth scroll to message when it appears
function smoothScrollToElement(element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Add observer for message appearance
const messageObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
            const message = document.getElementById('message');
            if (!message.classList.contains('hidden')) {
                setTimeout(() => smoothScrollToElement(message), 200);
            }
        }
    });
});

messageObserver.observe(document.getElementById('message'), {
    attributes: true,
    attributeFilter: ['class']
});

// Add some Easter eggs - random royal events
document.addEventListener('click', function(e) {
    // Random sparkle on any click
    if (e.target.closest('.royal-card') && !e.target.closest('button')) {
        const sparkleX = e.clientX;
        const sparkleY = e.clientY;
        
        for (let i = 0; i < 5; i++) {
            const sparkle = document.createElement('div');
            sparkle.style.position = 'fixed';
            sparkle.style.left = sparkleX + 'px';
            sparkle.style.top = sparkleY + 'px';
            sparkle.style.width = '6px';
            sparkle.style.height = '6px';
            sparkle.style.background = '#d4af37';
            sparkle.style.borderRadius = '50%';
            sparkle.style.pointerEvents = 'none';
            sparkle.style.zIndex = '999';
            sparkle.style.boxShadow = '0 0 10px #d4af37';
            
            const angle = (Math.PI * 2 * i) / 5;
            const distance = 50;
            const x = Math.cos(angle) * distance;
            const y = Math.sin(angle) * distance;
            
            document.body.appendChild(sparkle);
            
            sparkle.animate([
                { transform: 'translate(0, 0) scale(1)', opacity: 1 },
                { transform: `translate(${x}px, ${y}px) scale(0)`, opacity: 0 }
            ], {
                duration: 800,
                easing: 'ease-out'
            }).onfinish = () => sparkle.remove();
        }
    }
});

// Floating royal words
function startFloatingWords() {
    const royalWords = ['Majesty', 'Decree', 'Noble', 'Crown', 'Royal', 'Grace', 'Honor', 'Legacy'];
    const container = document.body;

    function createFloatingWord() {
        const word = royalWords[Math.floor(Math.random() * royalWords.length)];
        const wordElement = document.createElement('div');

        wordElement.textContent = word;
        wordElement.style.position = 'fixed';
        wordElement.style.left = Math.random() * window.innerWidth + 'px';
        wordElement.style.top = window.innerHeight + 'px';
        wordElement.style.fontSize = Math.random() * 20 + 15 + 'px';
        wordElement.style.fontFamily = 'Cinzel, serif';
        wordElement.style.color = ['#ffd700', '#d4af37', '#b8860b'][Math.floor(Math.random() * 3)];
        wordElement.style.opacity = '0.3';
        wordElement.style.pointerEvents = 'none';
        wordElement.style.zIndex = '1';
        wordElement.style.textShadow = '0 0 10px rgba(255, 215, 0, 0.5)';
        wordElement.style.animation = 'word-float 8s ease-in-out infinite';

        container.appendChild(wordElement);

        // Remove word after animation
        setTimeout(() => {
            if (wordElement.parentNode) {
                wordElement.remove();
            }
        }, 8000);
    }

    // Create words at random intervals
    setInterval(createFloatingWord, 3000 + Math.random() * 4000);
}

// Add surprise animations on hover
function addSurpriseAnimations() {
    const royalCards = document.querySelectorAll('.royal-card');

    royalCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Random surprise effect
            const surpriseType = Math.floor(Math.random() * 3);

            switch (surpriseType) {
                case 0:
                    // Crown burst
                    createCrownBurst(this);
                    break;
                case 1:
                    // Golden particles
                    createGoldenParticles(this);
                    break;
                case 2:
                    // Royal glow pulse
                    this.style.animation = 'glow-shift 1s ease-in-out';
                    break;
            }
        });
    });
}

// Create crown burst effect
function createCrownBurst(element) {
    const rect = element.getBoundingClientRect();

    for (let i = 0; i < 8; i++) {
        const crown = document.createElement('div');
        crown.textContent = '👑';
        crown.style.position = 'fixed';
        crown.style.left = rect.left + rect.width / 2 + 'px';
        crown.style.top = rect.top + rect.height / 2 + 'px';
        crown.style.fontSize = '20px';
        crown.style.pointerEvents = 'none';
        crown.style.zIndex = '999';
        crown.style.opacity = '0.8';

        const angle = (Math.PI * 2 * i) / 8;
        const distance = 100;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;

        document.body.appendChild(crown);

        crown.animate([
            { transform: 'translate(0, 0) scale(1) rotate(0deg)', opacity: 1 },
            { transform: `translate(${x}px, ${y}px) scale(0.5) rotate(360deg)`, opacity: 0 }
        ], {
            duration: 1000,
            easing: 'ease-out'
        }).onfinish = () => crown.remove();
    }
}

// Create golden particles
function createGoldenParticles(element) {
    const rect = element.getBoundingClientRect();

    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.left = rect.left + Math.random() * rect.width + 'px';
        particle.style.top = rect.top + Math.random() * rect.height + 'px';
        particle.style.width = Math.random() * 6 + 2 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = ['#ffd700', '#d4af37', '#ffed4e'][Math.floor(Math.random() * 3)];
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '999';
        particle.style.boxShadow = `0 0 10px ${particle.style.background}`;

        document.body.appendChild(particle);

        const angle = Math.random() * Math.PI * 2;
        const distance = 50 + Math.random() * 100;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;

        particle.animate([
            { transform: 'translate(0, 0) scale(1)', opacity: 1 },
            { transform: `translate(${x}px, ${y}px) scale(0)`, opacity: 0 }
        ], {
            duration: 1500 + Math.random() * 500,
            easing: 'ease-out',
            delay: Math.random() * 300
        }).onfinish = () => particle.remove();
    }
}

// Show toast notification
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => toast.remove(), 3000);
}

// Scroll animations for feature cards
function setupScrollAnimations() {
    const cards = document.querySelectorAll('.feature-card');
    
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'card-reveal 0.8s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        observer.observe(card);
    });
}

window.addEventListener('load', setupScrollAnimations);

// More Easter eggs - random effects on card clicks
document.addEventListener('click', function(e) {
    if (e.target.closest('.feature-card') && !e.target.closest('button')) {
        const card = e.target.closest('.feature-card');
        const rect = card.getBoundingClientRect();
        
        // Random Easter egg effects
        const easterEggs = [
            () => createGoldenRain(rect),
            () => createStarBurst(rect),
            () => createHeartBurst(rect)
        ];
        
        const randomEgg = easterEggs[Math.floor(Math.random() * easterEggs.length)];
        randomEgg();
    }
});

// Golden rain effect
function createGoldenRain(rect) {
    for (let i = 0; i < 20; i++) {
        const drop = document.createElement('div');
        drop.style.position = 'fixed';
        drop.style.left = rect.left + Math.random() * rect.width + 'px';
        drop.style.top = rect.top + 'px';
        drop.style.width = '4px';
        drop.style.height = '15px';
        drop.style.background = '#ffd700';
        drop.style.pointerEvents = 'none';
        drop.style.zIndex = '999';
        drop.style.borderRadius = '2px';
        drop.style.boxShadow = '0 0 10px #d4af37';
        
        document.body.appendChild(drop);
        
        drop.animate([
            { transform: 'translateY(0)', opacity: 1 },
            { transform: 'translateY(300px) rotate(360deg)', opacity: 0 }
        ], {
            duration: 2000 + Math.random() * 500,
            easing: 'ease-in'
        }).onfinish = () => drop.remove();
    }
}

// Star burst effect
function createStarBurst(rect) {
    for (let i = 0; i < 12; i++) {
        const star = document.createElement('div');
        star.textContent = '⭐';
        star.style.position = 'fixed';
        star.style.left = rect.left + rect.width / 2 + 'px';
        star.style.top = rect.top + rect.height / 2 + 'px';
        star.style.fontSize = '1.5rem';
        star.style.pointerEvents = 'none';
        star.style.zIndex = '999';
        
        const angle = (Math.PI * 2 * i) / 12;
        const distance = 150;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;
        
        document.body.appendChild(star);
        
        star.animate([
            { transform: 'translate(0, 0) scale(1)', opacity: 1 },
            { transform: `translate(${x}px, ${y}px) scale(0)`, opacity: 0 }
        ], {
            duration: 1200,
            easing: 'ease-out'
        }).onfinish = () => star.remove();
    }
}

// Heart burst effect
function createHeartBurst(rect) {
    for (let i = 0; i < 8; i++) {
        const heart = document.createElement('div');
        heart.textContent = '💛';
        heart.style.position = 'fixed';
        heart.style.left = rect.left + rect.width / 2 + 'px';
        heart.style.top = rect.top + rect.height / 2 + 'px';
        heart.style.fontSize = '1.8rem';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '999';
        
        const angle = (Math.PI * 2 * i) / 8;
        const distance = 120;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;
        
        document.body.appendChild(heart);
        
        heart.animate([
            { transform: 'translate(0, 0) scale(1) rotate(0deg)', opacity: 1 },
            { transform: `translate(${x}px, ${y}px) scale(0) rotate(360deg)`, opacity: 0 }
        ], {
            duration: 1500 + Math.random() * 500,
            easing: 'ease-out'
        }).onfinish = () => heart.remove();
    }
}

// Console Easter egg
console.log('%c👑 WELCOME TO THE ROYAL PASS 👑', 'color: #ffd700; font-size: 20px; font-weight: bold; text-shadow: 0 0 10px #d4af37;');
console.log('%cYou have been granted access to the most exclusive decree in internet history.', 'color: #d4af37; font-size: 14px; font-style: italic;');


