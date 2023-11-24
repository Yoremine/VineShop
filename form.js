let profileName = document.querySelector('#form_name');
console.log(`Имя = ${profileName.placeholder}`);

let profilePhone = document.querySelector('#form_phone');
console.log(`Телефон = ${profilePhone.placeholder}`);

let profileStreet = document.querySelector('#form_street');
console.log(`Улица = ${profileStreet.placeholder}`);

let buttonProfile = document.querySelector('.form__button');

function showClick() {
  console.log(`Имя = ${profileName.value}\nТелефон = ${profilePhone.value}\nУлица = ${profileStreet.value}`);
}

buttonProfile.addEventListener('click', showClick);