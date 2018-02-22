// example of closure in JavaScript

function returnIndex(thisIndex) {
  return function() {
    alert('clicked button at index ' + thisIndex);
  }
}

var buttons = document.querySelectorAll('button');

for (var a=0; a<buttons.length; a++) {
  buttons[a].addEventListener('click',returnIndex(a));
}