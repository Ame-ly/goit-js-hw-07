const rangeRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

rangeRef.addEventListener('input', handleInputRange);

function handleInputRange(e) {
  
  console.log((textRef.style.fontSize = e.currentTarget.value + 'px'));
}



