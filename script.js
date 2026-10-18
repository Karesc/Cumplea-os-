
const friendName = "Alin";

// Personaliza el nombre
document.getElementById("friendName").textContent = friendName;

// Revelar el mensaje sorpresa
const surpriseButton = document.getElementById("surpriseButton");
const surprise = document.getElementById("surprise");

surpriseButton.addEventListener("click", () => {
  surprise.classList.toggle("hidden");

  if (surprise.classList.contains("hidden")) {
    surpriseButton.textContent = "Abrir una sorpresa 🎁";
  } else {
    surpriseButton.textContent = "Cerrar sorpresa 💌";
    lanzarConfeti(45);
    surprise.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    });
  }
});

// Botón de confeti
document.getElementById("confettiButton")
  .addEventListener("click", () => {
    lanzarConfeti(140);
  });

// Generador de confeti
function lanzarConfeti(cantidad) {
  const contenedor = document.getElementById("confetti");

  const colores = [
    "#f48fb1",
    "#ce93d8",
    "#ffd166",
    "#ff8a80",
    "#80cbc4",
    "#b39ddb",
    "#ffffff"
  ];

  for (let i = 0; i < cantidad; i++) {
    const pieza = document.createElement("span");

    pieza.className = "confetti-piece";
    pieza.style.left = Math.random() * 100 + "vw";
    pieza.style.backgroundColor =
      colores[Math.floor(Math.random() * colores.length)];

    pieza.style.setProperty(
      "--duration",
      (2.5 + Math.random() * 3) + "s"
    );

    pieza.style.setProperty(
      "--drift",
      (Math.random() * 240 - 120) + "px"
    );

    pieza.style.animationDelay = (Math.random() * 0.8) + "s";

    contenedor.appendChild(pieza);

    pieza.addEventListener("animationend", () => {
      pieza.remove();
    });
  }
}

// Pequeña lluvia inicial al abrir la página
window.addEventListener("load", () => {
  setTimeout(() => lanzarConfeti(35), 700);
});
