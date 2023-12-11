let profileName = document.querySelector('#form_name');
console.log(`Имя = ${profileName.placeholder}`);

let profilePhone = document.querySelector('#form_phone');
console.log(`Телефон = ${profilePhone.placeholder}`);

let profileStreet = document.querySelector('#form_street');
console.log(`Улица = ${profileStreet.placeholder}`);

let buttonProfile = document.querySelector('.form__button');

var nameErr =  true;
var mobileErr =  true;

function printError(elemId, hintMsg) {
  document.getElementById(elemId).innerHTML = hintMsg;
}

function showClick() {
  var regexName = /^[А-Яа-яЁё\s]+$/;
  if(regexName.test(profileName.value) === false) {
  printError("nameErr", "Пожалуйста, используйте кириллицу ");
  }
  var regexPhone = /[+]7\s[\(]\d{3}[\)]\s\d{3}[\-]\d{2}[\-]\d{2}/;
  if(regexPhone.test(profilePhone.value) === false) {
  printError("mobileErr", "Пожалуйста, введите 10-значный номер мобильного телефона формат  +7 (777) 777-77-77");
  }
  console.log(`Имя = ${profileName.value}\nТелефон = ${profilePhone.value}\nУлица = ${profileStreet.value}`);

}

buttonProfile.addEventListener('click', showClick);
