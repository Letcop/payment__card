const inputs = document.querySelectorAll('.input_card');
const buttons = document.querySelectorAll('.get_button');
const inputCardAdvance = document.querySelectorAll('.input_card_advance');


const [visaNumber, visaCvv, visaDate, visaName, webMoney, qiwi, yandex] = inputs;
const [visaBtn, webMbtn, qiwiBtn, yandexBtn] = buttons;
const [checkVisa, checkWebMoney, checkQiwi, checkYandex] = inputCardAdvance;


visaNumber.addEventListener('keydown', visaCardNumberValidate);
visaDate.addEventListener('keydown', cardDateValidate);
yandex.addEventListener('keydown', yandexCardDateValidate);

console.log(inputs)

function visaCardNumberValidate(e) {
  let value = this.value.replace(/\s+/g, '');
  let isBackspace = e.key === 'Backspace';
  if ((e.key.length === 1 && /^[^\d\s]+$/.test(e.key)) || (!isBackspace && value.length === 16) ) {
    visaNumber.style.border = '1px solid green'
    e.preventDefault();
    return false;
  } else if (!isBackspace && value.length <= 15) {
    visaNumber.style.border = '1px solid red'
  }

  this.value = value.split('').reverse().join('').replace(/\B(?=(\d{4})+(?!\d))/g, " ").split('').reverse().join('').trim();
};

function cardDateValidate(e) {
  let value = this.value.replace(/\s+/g, '');
  let isBackspace = e.key === 'Backspace';

  if ((e.key.length === 1 && /^[^\d\s]+$/.test(e.key)) || (!isBackspace && value.length === 5)) {
    visaDate.style.border = '1px solid green'
    e.preventDefault();
    return false;
  }else if (!isBackspace && value.length <4) {
    visaDate.style.border = '1px solid red'
  }

  this.value = value.split('').reverse().join('').replace(/\B(?=(\d{2})+(?!\d))/g, "/").split('').reverse().join('').trim();
};

visaCvv.addEventListener('keypress', () => {
  if(visaCvv.value.length < 2) {
    visaCvv.style.border = '1px solid red'
  } else {
    visaCvv.style.border = '1px solid green'
  }
})

visaName.addEventListener('keypress', () => {
  if(visaName.value.length < 3 || visaName.value === ' ') {
    visaName.style.border = '1px solid red'
  } else {
    visaName.style.border = '1px solid green'
  }
});

function yandexCardDateValidate(e) {
  let value = this.value.replace(/\s+/g, '');
  let isBackspace = e.key === 'Backspace';
  if ((e.key.length === 1 && /^[^\d\s]+$/.test(e.key)) || (!isBackspace && value.length === 16) ) {
    yandex.style.border = '1px solid green'
    e.preventDefault();
    return false;
  } else if (!isBackspace && value.length <= 15) {
    yandex.style.border = '1px solid red'
  }

  this.value = value.split('').reverse().join('').replace(/\B(?=(\d{4})+(?!\d))/g, " ").split('').reverse().join('').trim();
};