// Configuración inicial de tsParticles
document.addEventListener('DOMContentLoaded', function() {
  tsParticles.load("particles", {
    fpsLimit: 60,
    fullScreen: { enable: false },
    background: { color: "transparent" },
    particles: {
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      number: { value: 40 },
      size: { value: { min: 2, max: 4 } },
      move: { 
        enable: true, 
        speed: 1,
        direction: "none",
        random: false,
        straight: false,
        outModes: {
          default: "bounce"
        }
      },
      opacity: { value: 0.7 }
    }
  });
});