window.onload = function () {
  var barraCarga = document.getElementById("barra-carga");
  barraCarga.style.visibility = "hidden";
  barraCarga.style.display = "none";
};

$("document").ready(function () {
  // Animación de "revelación" de texto para la profesión
  const profesion = baffle(".profesion");
  profesion.set({
    characters: "█▓▓ ░░>██ ▓█▓>▓ ▓<█ ░<▒░▓ █░<█ █▒> ▓░▓< ▒▓░░",
    speed: 90,
  });
  profesion.start();
  profesion.reveal(3000);

  // Asegúrate de que el ID "tagline" esté aplicado correctamente
  $("#tagline").t({
    speed: 20, // Velocidad entre caracteres (ms)
    delay: 0, // Elimina retraso inicial
    duration: 1000, // Duración total (ms) - ajústala si el texto es largo
    beep: false,
    caret: '<span style="color:hotpink;">•</span>',
    typing: function (elm, chr) {
      if (chr.match(/\-trigger/)) $("#pow-txt").show().delay(500).fadeOut(0);
    },
  });

  //Botón de +
const tarjetaInput = document.querySelectorAll(".tarjeta input");

tarjetaInput.forEach((button) => {
  button.addEventListener("click", (event) => {
    const tarjeta = event.currentTarget.closest('.tarjeta');        
    const buttonColor = tarjeta.querySelector('.red, .black');    
    
    if (buttonColor.classList.contains('red')) {
      buttonColor.classList.toggle("active-red");
    } else if (buttonColor.classList.contains('black')) {
      buttonColor.classList.toggle("active-black");
    }
  });
});

  // Código para el botón de volver al inicio
  $("#boton-arriba").click(function () {
    $("body, html").animate(
      {
        scrollTop: "0px",
      },
      300
    );
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $("#boton-arriba").slideDown(300);
    } else {
      $("#boton-arriba").slideUp(300);
    }
  });
});
