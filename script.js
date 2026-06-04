// SCROLL SUAVE PARA ENLACES INTERNOS

document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener("click", function (e) {

    const target = document.querySelector(this.getAttribute("href"));

    if (!target) return;

    e.preventDefault();

    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  });

});

// ANIMACIÓN AL APARECER LAS SECCIONES

const observer = new IntersectionObserver(

  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {
        entry.target.classList.add("show-section");
      }

    });

  },

  {
    threshold: 0.15
  }

);

// OBSERVAR TODAS LAS SECCIONES

document.querySelectorAll("section").forEach((section) => {
  observer.observe(section);
});

const servicesData = {
  individual: {
    title: "Terapia Individual",
    text: "La terapia individual es un espacio confidencial donde podrás explorar tus pensamientos, emociones y experiencias en un entorno seguro..."
  },

  ansiedad: {
    title: "Ansiedad y Estrés",
    text: "Aprenderás herramientas prácticas para gestionar la ansiedad y reducir el estrés..."
  },

  autoestima: {
    title: "Autoestima",
    text: "Trabajaremos en el fortalecimiento de tu autoconcepto y confianza personal..."
  },

  familia: {
    title: "Orientación Familiar",
    text: "Acompañamiento para mejorar la comunicación y fortalecer los vínculos familiares..."
  }
};
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalText = document.getElementById("modal-text");
const closeModal = document.getElementById("close-modal");


document.querySelectorAll(".service-card").forEach(card => {

  card.addEventListener("click", () => {

    const service = card.dataset.service;

    modalTitle.textContent = servicesData[service].title;
    modalText.textContent = servicesData[service].text;

    modal.classList.add("show");

  });

});

closeModal.addEventListener("click", () => {
  modal.classList.remove("show");
});

modal.addEventListener("click", (e) => {

  if (e.target === modal) {
    modal.classList.remove("show");
  }

});

const activarPago = document.getElementById("activarPago");
const paypalBtn = document.getElementById("paypalBtn");
const stripeBtn = document.getElementById("stripeBtn");

activarPago.addEventListener("change", () => {

  paypalBtn.disabled = !activarPago.checked;

  if (activarPago.checked) {
    stripeBtn.classList.remove("disabled");
  } else {
    stripeBtn.classList.add("disabled");
  }

});