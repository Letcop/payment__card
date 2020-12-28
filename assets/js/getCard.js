let getAdvanceBoxs = document.querySelectorAll(".get_advance_box");
let paymentCardsInfo = document.querySelectorAll(".payment_card_info");
let webMoneyInput = document.getElementById('webMoney');
const visaInputs = document.querySelectorAll('.form_visaCard input');


const [visaCard, webMoneyCard, qiwiCard, yandexCard] = paymentCardsInfo;
const [number, cvv, date, name] = visaInputs;
let visaCardInfo = [];
let webMoneyCardInfo = [];

addEventListenerToButtons(getAdvanceBoxs);

function onclick(e) {
  switch (e.target.id) {
    case 'get_visa': {
      getVisa();
      break;
    }
    case 'get_webMoney': {
      getWebMoney();
      break;
    }
    case 'get_qiwi': {
      getQiwi();
      break;
    }
    case 'get_yandex': {
      getYandex();
      break;
    }
  }
}

function addEventListenerToButtons(getAdvanceBoxs) {
  let buttonsArray = Array.from(getAdvanceBoxs)
  buttonsArray.forEach((getBox) => {
    getBox.addEventListener('click', {
      handleEvent: onclick,
    })
  })
}

for(let visaInput of visaInputs) {
  visaInput.addEventListener('keyup', eventHandlerVisaCard)
}

function eventHandlerVisaCard(e) {
  if(e.target.id == 'card_number') {
    window.visaNumberValue = this.value
  } else if(e.target.id == 'card_cvv') {
    window.visaCvvValue = this.value
  } 
  else if(e.target.id == 'card_date') {
    window.visaDateValue = this.value
  } 
  else if(e.target.id == 'card_name') {
    window.visaNameValue = this.value
  }
}



function getVisa(e) {
  visaCardInfo = {
   visaNumber: visaNumberValue,
   visaCvv: visaCvvValue,
   visaDate: visaDateValue,
   visaUserName: visaNameValue,
 }
 console.log(visaCardInfo)
}

function getWebMoney() {
 
}

function getQiwi() {
  addPaymentTitleText()
  qiwiAdvance.style.display = "block";
  qiwiCard.style.display = "none";
}

function getYandex() {
}
