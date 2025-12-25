
// Claim button event listener
document.getElementById('passButton').addEventListener('click', function() {
    const message = document.getElementById('message');
    const button = this;
    
    // Prevent multiple clicks - disable button immediately
    if (button.disabled) return;
    button.disabled = true;
    button.classList.add('clicked');
    
    // Button animation
    button.style.transform = 'scale(0.95) rotateX(10deg)';
    setTimeout(() => {
        button.style.transform = '';
        button.style.opacity = '0.7';
        button.setAttribute('aria-disabled', 'true');
    }, 300);
    
    // Show message with delay
    setTimeout(() => {
        message.classList.remove('hidden');
        createConfetti();
        createSparkles();
    }, 400);
});

function createSparkles() {
    const button = document.getElementById('passButton');
    const rect = button.getBoundingClientRect();
    
    for (let i = 0; i < 30; i++) {
        const sparkle = document.createElement('div');
        sparkle.style.position = 'fixed';
        sparkle.style.left = rect.left + rect.width / 2 + 'px';
        sparkle.style.top = rect.top + rect.height / 2 + 'px';
        sparkle.style.width = Math.random() * 8 + 6 + 'px';
        sparkle.style.height = sparkle.style.width;
        sparkle.style.background = ['#ffd700', '#d4af37', '#ffed4e'][Math.floor(Math.random() * 3)];
        sparkle.style.borderRadius = '50%';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.boxShadow = `0 0 ${Math.random() * 15 + 10}px ${sparkle.style.background}, 0 0 ${Math.random() * 25 + 15}px ${sparkle.style.background}`;
        sparkle.style.zIndex = '9999';
        
        const angle = (Math.PI * 2 * i) / 30 + Math.random() * 0.5;
        const distance = 150 + Math.random() * 100;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;
        
        document.body.appendChild(sparkle);
        
        sparkle.animate([
            { transform: 'translate(0, 0) scale(1) rotate(0deg)', opacity: 1 },
            { transform: `translate(${x}px, ${y}px) scale(0) rotate(360deg)`, opacity: 0 }
        ], {
            duration: 1000 + Math.random() * 500,
            easing: 'ease-out'
        }).onfinish = () => sparkle.remove();
    }
}

function createConfetti() {
    const message = document.querySelector('.message-content');
    const colors = ['#ffd700', '#d4af37', '#ffed4e', '#8b6914', '#f4c430'];

    for (let i = 0; i < 50; i++) {
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

// Close message button
document.getElementById('closeMessage').addEventListener('click', function() {
    const message = document.getElementById('message');
    message.classList.add('hidden');
    // Re-enable the button
    const button = document.getElementById('passButton');
    button.disabled = false;
    button.classList.remove('clicked');
    button.style.opacity = '';
    button.removeAttribute('aria-disabled');
});

