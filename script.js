// Configuración completa de tsParticles
document.addEventListener("DOMContentLoaded", function () {
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
          default: "bounce",
        },
      },
      opacity: { value: 0.9 },
      links: {
        enable: true,
        color: "#ec4899",
        opacity: 0.4,
        distance: 120,
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },
      },
      modes: {
        repulse: {
          distance: 100,
        },
      },
    },
  });

  // Validación del formulario con reCAPTCHA
  const form = document.getElementById('formularioProyecto');
  const submitBtn = document.getElementById('submitBtn');

  // Inicialmente deshabilitar el botón
  submitBtn.disabled = true;
  submitBtn.innerHTML = '<i class="fa-solid fa-lock"></i> Complete el reCAPTCHA';

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Verificar si el reCAPTCHA fue completado
    const recaptchaResponse = grecaptcha.getResponse();
    
    if (recaptchaResponse.length === 0) {
      alert('Por favor, complete el reCAPTCHA antes de enviar el formulario.');
      return false;
    }

    // Verificar que todos los campos requeridos estén llenos
    const requiredFields = form.querySelectorAll('[required]');
    let allFieldsValid = true;
    
    requiredFields.forEach(field => {
      if (!field.value.trim()) {
        allFieldsValid = false;
        field.focus();
      }
    });

    if (!allFieldsValid) {
      alert('Por favor, complete todos los campos requeridos.');
      return false;
    }

    // Verificar que al menos una categoría esté seleccionada
    const checkboxes = form.querySelectorAll('input[type="checkbox"]');
    const isAnyChecked = Array.from(checkboxes).some(cb => cb.checked);
    
    if (!isAnyChecked) {
      alert('Por favor, seleccione al menos una categoría para su proyecto.');
      return false;
    }

    // Si todo está correcto, proceder con el envío
    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Enviando...';
    submitBtn.disabled = true;

    // Aquí puedes agregar tu lógica de envío del formulario
    // Por ejemplo: enviar datos a un servidor
    
    setTimeout(() => {
      alert('¡Proyecto enviado exitosamente!');
      form.reset();
      grecaptcha.reset();
      updateSubmitButton();
    }, 2000);
  });

  // Función para actualizar el estado del botón
  function updateSubmitButton() {
    const recaptchaResponse = grecaptcha.getResponse();
    
    if (recaptchaResponse.length === 0) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fa-solid fa-lock"></i> Complete el reCAPTCHA';
    } else {
      submitBtn.disabled = false;
      submitBtn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Enviar Proyecto';
    }
  }

  // Hacer la función disponible globalmente para el callback del reCAPTCHA
  window.updateSubmitButton = updateSubmitButton;
});

// Callback para cuando el reCAPTCHA se completa
function onRecaptchaSuccess() {
  window.updateSubmitButton();
}

// Callback para cuando el reCAPTCHA expira
function onRecaptchaExpired() {
  window.updateSubmitButton();
}
