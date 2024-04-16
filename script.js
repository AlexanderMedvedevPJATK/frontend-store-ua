const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");
const clickPopUpInner = document.querySelector('.oneclick-popup__inner');
const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
  clickPopUpInner.classList.toggle("oneclick-popup__inner-active")
});

optionsList.forEach(o => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
	clickPopUpInner.classList.remove("oneclick-popup__inner-active")
  });
});

const buyButton = document.querySelectorAll('.card-button'),
      oneClickPopUp = document.querySelector('.oneclick-popup'),
      closeOneClickPopUp = document.querySelector(".close-oneclick");

function showPopUp() {
  oneClickPopUp.classList.add("active")
}

window.addEventListener('click', function (e) {
    if (!clickPopUpInner.contains(e.target) && oneClickPopUp.contains(e.target)) {
      oneClickPopUp.classList.remove('active');
    }
});

buyButton.forEach((el) => {
  el.addEventListener("click", showPopUp)
})

closeOneClickPopUp.addEventListener("click", function() {
  oneClickPopUp.classList.remove("active");
})

const callBackForm = document.querySelector(".call-back-form"),
      callBackFormInner = document.querySelector(".call-back-form__inner"),
      navCallMe = document.querySelector(".nav_button");
      closeCallPopUp = document.querySelector(".close-call")

navCallMe.addEventListener("click", function() {
  callBackForm.classList.add("active")
})

window.addEventListener('click', function (eq) {
    if (!callBackFormInner.contains(eq.target) && callBackForm.contains(eq.target)) {
      callBackForm.classList.remove("active");
    }
});

closeCallPopUp.addEventListener("click", function() {
  callBackForm.classList.remove("active");
})

const makeOwnPopUp = document.querySelector(".make-own-popup"),
      makeOwnPopUpInner = document.querySelector(".make-own-popup__inner"),
      closeMakeOwn = document.querySelector(".close-make-own"),
      pickSetButton = document.querySelector(".pick-set");

pickSetButton.addEventListener("click", function() {
  makeOwnPopUp.classList.add("active");
})

window.addEventListener('click', function (es) {
    if (!makeOwnPopUpInner.contains(es.target) && makeOwnPopUp.contains(es.target)) {
      makeOwnPopUp.classList.remove("active");
    }
});

closeMakeOwn.addEventListener("click", function() {
   makeOwnPopUp.classList.remove("active");
});

const deliveryCond = document.querySelector(".delivery-conditions"),
      deliveryCondInner = document.querySelector(".delivery-conditions__inner"),
      closeDeliveryCond = document.querySelector(".close-delivery-table"),
      deliveryCondButton = document.querySelector(".delivery-car");

deliveryCondButton.addEventListener("click", function() {
  deliveryCond.classList.add("active");
})

window.addEventListener('click', function (ed) {
    if (!deliveryCondInner.contains(ed.target) && deliveryCond.contains(ed.target)) {
      deliveryCond.classList.remove("active");
    }
});

closeDeliveryCond.addEventListener("click", function() {
   deliveryCond.classList.remove("active");
});

const sizeTable = document.querySelector(".size-table"),
      sizeTableInner = document.querySelector(".size-table__inner"),
      closeSizeTable = document.querySelector(".close-size-table"),
      sizeTableButton = document.querySelector(".size-table-button");

sizeTableButton.addEventListener("click", function() {
  sizeTable.classList.add("active");
})

window.addEventListener('click', function (ep) {
    if (!sizeTableInner.contains(ep.target) && sizeTable.contains(ep.target)) {
      sizeTable.classList.remove("active");
    }
});

closeSizeTable.addEventListener("click", function() {
   sizeTable.classList.remove("active");
});

