var cidades = ["São Paulo","Alphaville","Barueri","Santana de Parnaíba","Guarulhos","Santo André","São Bernardo do Campo","São Caetano do Sul","Osasco","Mogi das Cruzes","Itapecerica da Serra","Embu-Guaçu"];
var cidadesEl = document.getElementById("cidades");
if (cidadesEl) {
  cidadesEl.innerHTML = cidades.map(function(c){return "<li>"+c+"</li>";}).join("");
}

var lightbox = document.querySelector(".photo-lightbox");
var lightboxImage = document.querySelector(".lightbox-image");
var lightboxCaption = document.querySelector(".lightbox-caption");
var lightboxClose = document.querySelector(".lightbox-close");

if (lightbox && lightboxImage && lightboxCaption && lightboxClose) {
  document.querySelectorAll(".photo-trigger").forEach(function(trigger) {
    trigger.addEventListener("click", function() {
      var image = trigger.querySelector("img");
      if (!image) return;

      trigger.focus();
      lightboxImage.src = image.currentSrc || image.src;
      lightboxImage.alt = image.alt;
      lightboxCaption.textContent = image.alt;
      lightbox.showModal();
      lightboxClose.focus();
    });
  });

  lightboxClose.addEventListener("click", function() {
    lightbox.close();
  });

  lightbox.addEventListener("click", function(event) {
    if (event.target === lightbox) lightbox.close();
  });

  document.addEventListener("keydown", function(event) {
    if (event.key === "Escape" && lightbox.open) {
      event.preventDefault();
      lightbox.close();
    }
  });
}
