
const div = document.getElementById('loading');
const span = document.getElementById('loading-status')
let radios = [];
let currentRadio = 0;

setup();

function setup() {
  span.innerHTML = "Thinking ...";
  
  for (let i = 0; i < 8; ++i) {
    let radio = document.createElement('input');
    radio.setAttribute('type', 'radio');
    radio.setAttribute('tabindex', '-1');
    div.appendChild(radio);
    radios.push(radio);
  }
  
  resetRadios();
  setTimeout(updateRadios, 200);
}


function updateRadios() {
  checkRadios();
  radios[currentRadio].checked = false;
  currentRadio++;
  if (currentRadio >= radios.length) {
    currentRadio = 0;
  }
  radios[currentRadio].checked = true;
  setTimeout(updateRadios, 200);
}

function checkRadios() {
  let sum = 0;
  for (let i = 0; i < radios.length; ++i) {
    if (radios[i].checked) {
      sum++;
    }
  }
  if (sum != 1) {
    resetRadios();
    window.location.href = '/ponderings';
  }
}

function resetRadios() {
  for (let i = 0; i < radios.length; ++i) {
    radios[i].checked = false;
  }
  currentRadio = 0;
  radios[currentRadio].checked = true;
}

setTimeout(hint, 12000);
function hint() {
  span.innerHTML = "Thinking ... Have you done it yet?";
}
