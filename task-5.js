const inputRef = document.querySelector('#name-input');
const titleRef = document.querySelector('#name-output');

inputRef.addEventListener('input', inputHandlerFocus);

function inputHandlerFocus(event) {
  if (event.target.value) {
    
    return (titleRef.textContent = event.target.value);
  }
  return (titleRef.textContent = 'незнакомец');
}
