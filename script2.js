        /* =====================================================
           MENU MOBILE
        ===================================================== */

        const hamburger =
            document.getElementById("hamburger");

        const navbar =
            document.getElementById("navbar");

        hamburger.addEventListener("click", () => {

            navbar.classList.toggle("mobile-open");

            const icon =
                hamburger.querySelector("i");

            if (navbar.classList.contains("mobile-open")) {

                icon.classList.remove("fa-bars");

                icon.classList.add("fa-xmark");

            } else {

                icon.classList.remove("fa-xmark");

                icon.classList.add("fa-bars");

            }

        });


        /* Fermer menu après clic */

        document.querySelectorAll(".nav-links a")
            .forEach(link => {

                link.addEventListener("click", () => {

                    navbar.classList.remove("mobile-open");

                    const icon =
                        hamburger.querySelector("i");

                    icon.classList.remove("fa-xmark");

                    icon.classList.add("fa-bars");

                });

            });



        /* =====================================================
           HEADER AU SCROLL
        ===================================================== */

        const header =
            document.getElementById("header");

        window.addEventListener("scroll", () => {

            if (window.scrollY > 50) {

                header.classList.add("scrolled");

            } else {

                header.classList.remove("scrolled");

            }

        });



        /* =====================================================
           ANIMATION APPARITION
        ===================================================== */

        const revealElements =
            document.querySelectorAll(".reveal");

        const observer =
            new IntersectionObserver(
                (entries) => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add("active");

                        }

                    });

                },
                {
                    threshold: 0.12
                }
            );


        revealElements.forEach(element => {

            observer.observe(element);

        });



        /* =====================================================
           BARRES DE COMPETENCES
        ===================================================== */

        const skillBars =
            document.querySelectorAll(".skill-progress");

        const skillObserver =
            new IntersectionObserver(
                (entries) => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

                            const width =
                                entry.target.dataset.width;

                            entry.target.style.width = width;

                            skillObserver.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: .5
                }
            );


        skillBars.forEach(bar => {

            skillObserver.observe(bar);

        });



        /* =====================================================
           ANNEE AUTOMATIQUE
        ===================================================== */

        document.getElementById("year")
            .textContent =
            new Date().getFullYear();



        /* =====================================================
           PETIT EFFET PARALLAXE SUR LA PHOTO
        ===================================================== */

        const profileCard =
            document.querySelector(".profile-card");

        document.addEventListener("mousemove", (e) => {

            if (window.innerWidth < 900) return;

            const x =
                (window.innerWidth / 2 - e.clientX) / 60;

            const y =
                (window.innerHeight / 2 - e.clientY) / 60;

            profileCard.style.transform =
                `rotateY(${-x}deg) rotateX(${y}deg)`;

        });


        document.addEventListener("mouseleave", () => {

            profileCard.style.transform =
                "rotateY(0deg) rotateX(0deg)";

        });
