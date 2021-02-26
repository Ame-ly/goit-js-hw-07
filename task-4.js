const addListenerBtn = document.querySelector("[data-action='increment']");
const removeListenerBtn = document.querySelector("[data-action='decrement']");
const counterRef = document.querySelector('#value');

let counterValue = 0;
const increment = () => {

  counterValue += 1;
  counterRef.textContent = counterValue;
};

const decrement = () => {
    
  counterValue -= 1;
  counterRef.textContent = counterValue;
};

addListenerBtn.addEventListener('click', increment);
removeListenerBtn.addEventListener('click', decrement);
