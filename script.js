const modal = document.getElementById("modal");

const servicesData = {
  consulta: {
    title: "Consulta",
    text: "Evaluación completa con diagnóstico."
  },
  plan: {
    title: "Plan personalizado",
    text: "Diseñado según tus objetivos."
  },
  seguimiento: {
    title: "Seguimiento",
    text: "Acompañamiento continuo."
  },
  tratamiento: {
    title: "Tratamiento",
    text: "Opciones adaptadas a cada paciente."
  }
};

document.querySelectorAll(".service-card").forEach(card => {
  card.addEventListener("click", () => {
    const key = card.dataset.service;

    document.getElementById("modal-title").innerText = servicesData[key].title;
    document.getElementById("modal-text").innerText = servicesData[key].text;

    modal.classList.add("show");
  });
});

modal.addEventListener("click", e => {
  if (e.target === modal) modal.classList.remove("show");
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") modal.classList.remove("show");
});