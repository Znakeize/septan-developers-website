// Smooth page transitions (fade on load)
window.addEventListener('load', () => {
    document.body.style.opacity = 1;
});

// Scroll-based animations using Intersection Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in, .slide-left').forEach(el => {
    observer.observe(el);
});

// Load projects from JSON (for projects.html)
if (document.getElementById('project-grid')) {
    fetch('projects.json')
        .then(response => response.json())
        .then(data => {
            const grid = document.getElementById('project-grid');
            data.projects.forEach(project => {
                const card = document.createElement('div');
                card.classList.add('project-card', 'fade-in');
                card.innerHTML = `
                    <img src="${project.image}" alt="${project.title} Image" loading="lazy">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                `;
                grid.appendChild(card);
            });
            // Re-observe new elements
            document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
        })
        .catch(error => console.error('Error loading projects:', error));
}

// Placeholder form submission (console log for demo)
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('Form submitted:', new FormData(form));
        alert('Message sent! (Demo)');
    });
}