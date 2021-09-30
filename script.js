const birthDate = document.querySelector('#date-of-birth');
const luckyNumber = document.querySelector('#lucky-number');
const checkBtn = document.querySelector('#check-btn');
const outputText = document.querySelector('#output');

function sumOfDOB(dob) {
  dob = dob.replaceAll('-', '');
  let sumDob = 0;
  for (let index = 0; index < dob.length; index++) {
    sumDob = sumDob + Number(dob.charAt(index));
  }
  return sumDob;
}
function compareDobLuckyNumber(birthdaySum, luckyNum) {
  if (birthdaySum % luckyNum === 0) {
    outputText.innerHTML = 'Your Birthday is Lucky 😊';
  } else {
    outputText.innerHTML = 'Your Birthday is Not Lucky 😌';
  }
}
function checkBirthdayLucky() {
  const sumDob = sumOfDOB(birthDate.value);
  if (luckyNumber.value && birthDate.value) {
    compareDobLuckyNumber(sumDob, Number(luckyNumber.value));
  } else {
    outputText.innerHTML = 'enter all fields';
  }
}
checkBtn.addEventListener('click', checkBirthdayLucky);
