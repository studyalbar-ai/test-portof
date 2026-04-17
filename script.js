// Liquid Cursor Effect
const cursor = document.getElementById('cursor');
const trails = [];
const trailCount = 8;

// Create trail elements
for (let i = 0; i < trailCount; i++) {
    const trail = document.createElement('div');
    trail.className = 'liquid-trail';
    trail.style.opacity = (1 - i / trailCount) * 0.5;
    trail.style.transform = `scale(${1 - i / trailCount})`;
    document.body.appendChild(trail);
    trails.push({ element: trail, x: 0, y: 0 });
}

let mouseX = 0, mouseY = 0;
let currentX = 0, currentY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {
    // Smooth follow with delay
    currentX += (mouseX - currentX) * 0.15;
    currentY += (mouseY - currentY) * 0.15;

    // Main cursor
    cursor.style.left = currentX - 15 + 'px';
    cursor.style.top = currentY - 15 + 'px';

    // Trail effect
    trails.forEach((trail, index) => {
        const delay = (index + 1) * 0.08;
        trail.x += (mouseX - trail.x) * delay * 0.3;
        trail.y += (mouseY - trail.y) * delay * 0.3;
        trail.element.style.left = trail.x - 7 + 'px';
        trail.element.style.top = trail.y - 7 + 'px';
    });

    requestAnimationFrame(animateCursor);
}

animateCursor();

// Create background particles
const particlesContainer = document.getElementById('particles');
for (let i = 0; i < 20; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 10 + 's';
    particle.style.animationDuration = (10 + Math.random() * 10) + 's';
    particlesContainer.appendChild(particle);
}

// Form submission
document.getElementById('quoteForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your quote request! We will contact you within 24 hours.');
    this.reset();
});

// Hide default cursor
document.body.style.cursor = 'none';

// Show default cursor on form inputs
document.querySelectorAll('input, textarea, select, button').forEach(el => {
    el.style.cursor = 'default';
});
