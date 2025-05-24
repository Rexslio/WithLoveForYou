document.addEventListener("DOMContentLoaded", () => {
  const playBtn = document.getElementById("playBtn");
  const audio = document.getElementById("cancion");
  const mensaje = document.getElementById("mensaje");
  const intro = document.getElementById("intro");
  const constelacion = document.getElementById("constelacion");
  const videoContainer = document.getElementById("videoContainer");
  const video = document.getElementById("miVideo");

  audio.volume = 0.3;

  const frases = [
    "Eres mi luz en la oscuridad, mi Evangeline.",
    "Cada nota de esta canción me recuerda a ti...",
    "Tu nombre brilla en mi cielo todas las noches.",
    "Siempre estaré contigo, mi Alejandra."
  ];

  let index = 0;
  let intervaloFrases;

  function mostrarFrase() {
    index++;
    if (index < frases.length) {
      mensaje.style.opacity = 0;
      setTimeout(() => {
        mensaje.textContent = frases[index];
        mensaje.style.opacity = 1;
      }, 500);
    } else {
      clearInterval(intervaloFrases);
    }
  }

  function crearConstelacion(nombre) {
    constelacion.innerHTML = "";
    constelacion.style.position = "absolute";
    constelacion.style.top = "60%";
    constelacion.style.left = "50%";
    constelacion.style.transform = "translate(-50%, -50%)";
    constelacion.style.display = "flex";
    constelacion.style.gap = "10px";

    [...nombre].forEach((letra, i) => {
      const estrella = document.createElement("span");
      estrella.textContent = letra;
      estrella.style.color = "#fff9c4";
      estrella.style.fontSize = "26px";
      estrella.style.opacity = "0";
      estrella.style.animation = `aparecerEstrella 1s forwards ${i * 0.3}s`;
      estrella.style.textShadow = "0 0 15px #ffffffaa";
      constelacion.appendChild(estrella);
    });

    const final = document.createElement("div");
    final.textContent = "✨ Gracias por existir, Alejandra ✨";
    final.style.marginTop = "40px";
    final.style.fontSize = "20px";
    final.style.color = "#ffcdd2";
    final.style.opacity = "0";
    final.style.animation = "aparecerEstrella 2s forwards 3.5s";
    final.style.textAlign = "center";
    final.style.textShadow = "0 0 12px #f8bbd0";
    constelacion.appendChild(final);
  }

  playBtn.addEventListener("click", () => {
    audio.play();

    // 🔧 MOSTRAR VIDEO Y FORZAR SU VISIBILIDAD
    videoContainer.style.display = "block";
    video.style.opacity = "1";
    video.style.visibility = "visible";
    video.style.animation = "none"; // quitar animación que oculta
    video.currentTime = 0;

    video.play().catch(err => {
      console.error("No se pudo reproducir el video:", err);
    });

    playBtn.disabled = true;
    playBtn.innerText = "🎶 Reproduciendo...";

    index = 0;
    mensaje.textContent = frases[0];
    intervaloFrases = setInterval(mostrarFrase, 10000);

    audio.addEventListener("ended", () => {
      playBtn.disabled = false;
      playBtn.innerText = "🌙 Volver a escuchar";
      mensaje.textContent = frases[0];
      index = 0;
      crearConstelacion("ALEJANDRA");
    });
  });

  setTimeout(() => {
    intro.style.display = "none";
  }, 8000);
});












// Animación CSS para constelación (incluir en CSS):
// @keyframes aparecerEstrella {
//   from { opacity: 0; transform: translateY(10px); }
//   to { opacity: 1; transform: translateY(-5px); }
// }

// Esperamos que el DOM esté cargado
document.addEventListener("DOMContentLoaded", () => {
  const playBtn = document.getElementById("playBtn");
  if (!playBtn) return;

  playBtn.addEventListener("click", () => {
    window.location.href = "recuerdos.html";
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const imagenes = [
    { src: "img1.jpg", texto: " 💫" },
    { src: "img2.jpg", texto: " 🌟" },
    { src: "img3.jpg", texto: " 🎁" },
    { src: "img4.jpg", texto: " 💖" }
  ];

  let index = 0;
  const galeria = document.getElementById("galeria");
  if (!galeria) return;

  function actualizarGaleria() {
    galeria.innerHTML = `
      <div class="marco">
        <img src="${imagenes[index].src}" alt="Imagen ${index + 1}" />
        <p>${imagenes[index].texto}</p>
      </div>
    `;
  }

  actualizarGaleria();

  setInterval(() => {
    index = (index + 1) % imagenes.length;
    actualizarGaleria();
  }, 8000);
});







