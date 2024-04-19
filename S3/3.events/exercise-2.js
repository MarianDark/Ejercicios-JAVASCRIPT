let myInput = document.getElementById('myInput');

let focusFunct = function(event){
  console.log("El input es: ", event.target.value);
}

myInput.addEventListener("focus", focusFunct);
