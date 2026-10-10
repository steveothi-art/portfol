document.addEventListener("DOMContentLoaded", function () {
    // === THEME SOMBRE ===
    const themeBtn = document.getElementById("themeBtn");
   
    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        
        localStorage.setItem("theme", 
            document.body.classList.contains("dark") ? "dark" : "light");
    });

    // Charger le thème sauvegardé
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
    }
    
    // === SIDEBAR / MENU MOBILE ===
    const sidebar = document.querySelector('.sidebar');
    const menuIcon = document.querySelector('.menu-icon');

    function toggleMenu() {
        sidebar.classList.toggle('active');
        menuIcon.classList.toggle('active');
    }

    menuIcon.addEventListener("click", toggleMenu);

    // === ANIMATION SERVICES ===
    const cards = document.querySelectorAll('.service-card');
    const servicesObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = "running";
            }
        });
    }, { threshold: 0.2 });

    cards.forEach(card => {
        card.style.animationPlayState = "paused";
        servicesObserver.observe(card);
    });

    // === ANIMATION ABOUT ===
    const aboutElements = document.querySelectorAll("#apropos p, #apropos .skill-item");
    const aboutObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add("appear");

                // Animation des barres de compétence
                if(entry.target.classList.contains("skill-item")){
                    const level = entry.target.querySelector(".skill-level");
                    if(level){
                        const width = level.getAttribute("style").match(/width:\s*(\d+)%/)[1];
                        level.style.width = width + "%";
                    }
                }

                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    aboutElements.forEach(el => aboutObserver.observe(el));

    // === ANIMATION CONTACT ===
    const contactContainer = document.querySelector(".contact-container");
    const contactItems = document.querySelectorAll(".contact-info, .contact-item, .social-links a");

    const contactObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                if(contactContainer){ contactContainer.classList.add("rotate-in"); }
                contactItems.forEach(el => el.classList.add("appear"));
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    contactItems.forEach(el => contactObserver.observe(el));
});