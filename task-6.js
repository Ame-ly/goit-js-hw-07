const inputRef = document.querySelector('#validation-input');
console.log();

inputRef.onblur = function () {
  const number = inputRef.value.length;
  number === Number(inputRef.getAttribute('data-length')) ? inputRef.className = 'valid': inputRef.className = 'invalid';
   if (number === 0) {
    inputRef.className = '';
  }
};

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
