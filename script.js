// Form submission handling
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    alert(`Thank you, ${name}! Your message has been sent.`);
    document.getElementById("contactForm").reset();
});
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        
        document.querySelectorAll('.project-card').forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.fade-in');

    const observerOptions = {
        root: null, // Use the viewport as the container
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible'); // Add class when in view
                observer.unobserve(entry.target); // Stop observing after it becomes visible
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach(section => {
        observer.observe(section); // Observe each section
    });
});


let valueDisplays = document.querySelectorAll(".num");
let interval = 5000;
valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);

    let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue + (endValue > 10 ? '+' : '');
        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, duration);
});

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('.animate-section');
    
    sections.forEach(section => {
        section.style.animation = 'none'; // Remove animation
        // Trigger reflow to reset animation
        section.offsetHeight; // This will force reflow
        section.style.animation = ''; // Re-apply the animation
    });
});
