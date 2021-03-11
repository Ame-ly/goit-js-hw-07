const inputRef = document.querySelector('#validation-input');
inputRef.addEventListener('blur', checkInput);

function checkInput(e) {

  const numberEvent = e.target.value.length;
  const numberRef = Number(inputRef.getAttribute('data-length'));
  
  numberEvent === numberRef
    ? (inputRef.className = 'valid')
    : (inputRef.className = 'invalid');
  if (numberEvent === 0) {
    inputRef.className = '';
  }
}

// function checkInput(e) {
//  const number = Number(inputRef.getAttribute('data-length'));
//   const length=e.currentTarget.value.length
//   if (length === 0) {
//      inputRef.className = '';
//   } else if (length === number) {
//     updateClass('valid', 'invalid');
//   } else {
//     updateClass('invalid', 'valid');
//   }

// }

// function updateClass(addClass, remClass) {
//   inputRef.classList.add(addClass);
//   inputRef.classList.remove(remClass);
// }

// inputRef.onblur = function () {
//   const number = inputRef.value.length;
//   if (number === Number(inputRef.getAttribute('data-length'))) {
//     inputRef.className = 'valid';
//   } else if (number === 0) {
//     inputRef.className = '';
//   } else {
//     inputRef.className = 'invalid';
//   }
// };

// inputRef.onblur = function () {
//   if (Number(inputRef.dataset.length) === Number(inputRef.value.length)) {

//     inputRef.classList.remove('invalid');
//     inputRef.classList.add('valid');
//   } else if (inputRef.value.length === 0) {

//     inputRef.classList.remove('valid');
//     inputRef.classList.remove('invalid');
//   } else {

//     inputRef.classList.add('invalid');
//   }
