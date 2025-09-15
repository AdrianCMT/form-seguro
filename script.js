// Configuración completa de tsParticles
document.addEventListener('DOMContentLoaded', function() {
  tsParticles.load("particles", {
    fpsLimit: 60,
    fullScreen: { enable: false }, // 👈 clave: desactiva el modo pantalla completa
    background: { color: "transparent" },
    particles: {
      color: { value: ["#ffffff"] },
      shape: { type: "circle" },
      number: { value: 60 },
      size: { value: { min: 2, max: 6 } },
      move: { 
        enable: true, 
        speed: 1.5,
        direction: "none",
        random: false,
        straight: false,
        outModes: {
          default: "bounce"
        }
      },
      opacity: { value: 0.9 },
      links: { 
        enable: true, 
        color: "#ec4899", 
        opacity: 0.4, 
        distance: 120 
      },
    },
    interactivity: {
      events: { 
        onHover: { 
          enable: true, 
          mode: "repulse" 
        } 
      },
      modes: { 
        repulse: { 
          distance: 100 
        } 
      },
    },
  });
});