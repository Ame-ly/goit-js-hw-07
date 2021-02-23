const inputRef = document.querySelector('#validation-input');

inputRef.onblur = function () {
  if (Number(inputRef.dataset.length) === Number(inputRef.value.length)) {

    inputRef.classList.remove('invalid');
    inputRef.classList.add('valid');
  } else if (inputRef.value.length === 0) {

    inputRef.classList.remove('valid');
    inputRef.classList.remove('invalid');
  } else {
    
    inputRef.classList.add('invalid');
  }
};
