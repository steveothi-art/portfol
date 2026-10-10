// 1) MENU MOBILE
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

function closeMenu() {
  menuToggle?.classList.remove("active");
  mobileMenu?.classList.remove("open");
  menuToggle?.setAttribute("aria-expanded", "false");
  document.body.classList.remove("menu-open");
}

menuToggle?.addEventListener("click", () => {
  const open = mobileMenu.classList.toggle("open");
  menuToggle.classList.toggle("active", open);
  menuToggle.setAttribute("aria-expanded", String(open));
  document.body.classList.toggle("menu-open", open);
});

mobileMenu?.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", closeMenu);
});

// 2) APPARITION DES ELEMENTS AU SCROLL
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");

      if (entry.target.classList.contains("skills-board")) {
        entry.target.classList.add("animate-bars");
      }
    }
  });
}, { threshold: 0.14 });

document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

// 3) FILTRES DES PROJETS
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card[data-category]");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;

    projectCards.forEach(card => {
      const visible = filter === "all" || card.dataset.category === filter;
      card.classList.toggle("is-hidden", !visible);
    });
  });
});

const profileUpload = document.getElementById("profileUpload");
const profileImage = document.getElementById("profileImage");

profileUpload?.addEventListener("change", event => {
  const file = event.target.files?.[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = e => {
    profileImage.src = e.target.result;
  };
  reader.readAsDataURL(file);
});

// 5) PREVISUALISATION DU NOM DE CV SELECTIONNE
const cvUpload = document.getElementById("cvUpload");
const cvFileName = document.getElementById("cvFileName");

cvUpload?.addEventListener("change", event => {
  const file = event.target.files?.[0];

  if (!file) {
    cvFileName.textContent = "Aucun CV local sélectionné.";
    return;
  }

  cvFileName.textContent = `CV sélectionné : ${file.name}`;
});


const whatsappNumber = "2250704147883";

const whatsappMessage = encodeURIComponent(
  "Bonjour Steve, je viens de visiter Maewens Portfolio et je souhaite échanger avec vous au sujet d'un projet."
);

const whatsappBtn = document.getElementById("whatsappBtn");
if (whatsappBtn) {
  whatsappBtn.href = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
}

// 7) BOUTON RETOUR EN HAUT
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  backToTop?.classList.toggle("show", window.scrollY > 550);
});

backToTop?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// 8) EFFET 3D LEGER SUR LES CARTES (souris uniquement)
document.querySelectorAll(".tilt-card").forEach(card => {
  card.addEventListener("mousemove", e => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    card.style.transform =
      `perspective(900px) rotateX(${y * -4}deg) rotateY(${x * 5}deg) translateY(-4px)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "";
  });
});

// 9) ANNEE AUTOMATIQUE
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

// Fallback pour navigateur ancien ne supportant pas IntersectionObserver
if (!("IntersectionObserver" in window)) {
  document.querySelectorAll(".reveal").forEach(el => el.classList.add("visible"));
  document.querySelector(".skills-board")?.classList.add("animate-bars");
}
