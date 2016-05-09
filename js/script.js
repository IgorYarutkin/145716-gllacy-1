
  var btnFeedbackSubmit = document.querySelector(".feedback-btn");
  var popupFeedback = document.querySelector(".modal-feedback");
  var btnFeedbackClose = document.querySelector(".feedback-close-btn");
  var overlay = document.querySelector(".modal-overlay");



  btnFeedbackSubmit.addEventListener("click", function(event) {
    event.preventDefault();
    popupFeedback.classList.add("on");
    overlay.classList.add("on");
    comments.focus();
    });

  btnFeedbackClose.addEventListener("click", function(event) {
    event.preventDefault();
    popupFeedback.classList.remove("on");
    overlay.classList.remove("on");
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (popupFeedback.classList.contains("on")) {
        popupFeedback.classList.remove("on");
      }
      if (overlay.classList.contains("on")) {
        overlay.classList.remove("on");
      }
    }
  });

// Подключение карты

ymaps.ready(init);
var myMap;
  function init() {
      myMap = new ymaps.Map("yandex-map", {
        center: [59.938694, 30.324896],
        zoom: [16],
        controls: []
        }),
    myMap.behaviors.disable("scrollZoom");
    myMap.controls.add("zoomControl");

    myPlacemark = new ymaps.Placemark([59.938882, 30.32318], {
      hintContent: "Офф-лайн магазин мороженого Глейси",
      balloonContent: ""
    }, {
      iconLayout: "default#image",
      iconImageHref: "img/de-marker.png",
      iconImageSize: [218, 142],
      iconImageOffset: [-45, -120]
    });

    myMap.geoObjects.add(myPlacemark);}
