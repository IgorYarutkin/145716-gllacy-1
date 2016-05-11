(function() {
var btnFeedbackOpen = document.querySelector(".feedback-btn");
var popupFeedback = document.querySelector(".modal-feedback");
var btnFeedbackClose = document.querySelector(".feedback-close-btn");
var overlay = document.querySelector(".modal-overlay");
var nameField = document.querySelector('.field-your-name');
var emailField = document.querySelector('.field-your-email');
var commentsField = document.querySelector('.field-comments');
var btnSubmit = document.querySelector('.feedback-submit-btn');

var onBtnClose = function(evt) {
  evt.preventDefault();
  popupClose();
};
var onEscClose = function(evt) {
  if (evt.keyCode === 27) {
    popupClose();
  }
};

var popupClose = function() {
  btnFeedbackClose.removeEventListener("click", onBtnClose);
  window.removeEventListener("keydown", onEscClose);
  btnSubmit.removeEventListener("click", onBtnSubmit);
  popupFeedback.classList.remove("modal-error");
  popupFeedback.classList.remove("on");
  overlay.classList.remove("on");
};

var onBtnSubmit = function(evt) {
  if (!nameField.value || !emailField.value) {
    evt.preventDefault();
    popupFeedback.classList.remove("modal-error");
    popupFeedback.offsetWidth = popupFeedback.offsetWidth;
    popupFeedback.classList.add("modal-error");
    if (!nameField.value) {
      nameField.focus();
    } else {
      emailField.focus();
    }
  } else {
    localStorage.setItem("userName", nameField.value);
    localStorage.setItem("userEmail", emailField.value);
  }
};

var popupOpen = function(evt) {
  evt.preventDefault();
  popupFeedback.classList.add("on");
  overlay.classList.add("on");
  btnFeedbackClose.addEventListener("click", onBtnClose);
  btnSubmit.addEventListener("click", onBtnSubmit);
  window.addEventListener("keydown", onEscClose);
  nameField.value = localStorage.getItem("userName") || "";
  emailField.value = localStorage.getItem("userEmail") || "";
  if(nameField.value === "") {
    nameField.focus();
  } else if (emailField.value === "") {
    emailField.focus();
  } else {
    commentsField.focus();
  }
};

btnFeedbackOpen.addEventListener("click", popupOpen);

})();

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

  myMap.geoObjects.add(myPlacemark);
}
