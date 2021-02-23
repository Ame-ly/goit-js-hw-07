const inputRef = document.querySelector('input[type="number"]');
const createBtnRef = document.querySelector('button[data-action="render"]');
const removeBtnRef = document.querySelector('button[data-action="destroy"]');
const boxesRef = document.querySelector('#boxes');

createBtnRef.addEventListener('click', createBoxes);
removeBtnRef.addEventListener('click', removeBoxes);

function createBoxes(amount) {
  // boxesRef.style.
  amount = inputRef.value;
  let size = 30;

  for (let i = 0; i < amount; i += 1) {
    boxesRef.appendChild(
      document.createElement('div'),
    ).style = `width: ${size}px; height: ${size}px; background-color: 
     rgb(${createRandomColor()}, ${createRandomColor()}, ${createRandomColor()}); margin: auto`;

    size += 10;
  }
}

function removeBoxes() {
  boxesRef.innerHTML = '';
  inputRef.value = '';
}

function createRandomColor() {
  return Math.floor(Math.random() * 256);
}
