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
  nameCheck();
  var regexPhone = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
  if(regexPhone.test(profilePhone.value) === false) {
  printError("mobileErr", "Пожалуйста, введите 10-значный номер мобильного телефона формат  +7 (777) 777-77-77");
  }
  else{
    printError("mobileErr", "");
  }
  console.log(`Имя = ${profileName.value}\nТелефон = ${profilePhone.value}\nУлица = ${profileStreet.value}`);
 
}

function nameCheck(){
  var regexName = /^[А-Яа-яЁё\s]+$/;
  if(regexName.test(profileName.value) === false) {
  printError("nameErr", "Пожалуйста, используйте кириллицу ");
  }
  else{
    printError("nameErr", "");
  }
}
/*function phoneStandartization(){
  var number = profilePhone.value;
  var regex = /^[0-9]+$/;
  let num;
  for(let i=0;i++;i<number.size()){
    if(regex.test(number[i])===false){
      num = num +number[i];
    }
  }
  return num;
}*/

function isNumber(char){
  return /^-?\d+$/.test(char);
}

function getOnlyNumbers(string){
  let newString = '';
  for(let i = 0; i < string.length; i++){
    if(isNumber(string[i])){
      newString = newString + string[i];
    }
  }
  return newString;
}

function phoneFormat(phone){
  let newPhone = getOnlyNumbers(phone);

  if(newPhone[0] !== '7'){
    newPhone = '7' + newPhone;
  }
  let returnPhone = '';
  for(let i = 0; i < newPhone.length; i++){
    if(i === 1){
      returnPhone = returnPhone + ' (';
    }
    if(i === 4){
      returnPhone = returnPhone + ') ';
    }
    if(i === 7 || i === 9){
      returnPhone = returnPhone + '-';
    }
    returnPhone = returnPhone + newPhone[i];
  }
  return '+' + returnPhone;
}

function phoneCheck(){
  profilePhone.value =  phoneFormat(profilePhone.value);
}
function phoneStandart(){
  if(profilePhone.value.length<2){
    profilePhone.value = "+7";
  }
  if(profilePhone.value.length<4){
    profilePhone.value = "+7";
  }
}
profileName.addEventListener('input',nameCheck);
profilePhone.addEventListener('input',phoneCheck);
profilePhone.addEventListener('input',phoneStandart);
buttonProfile.addEventListener('click', showClick);