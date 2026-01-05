const header = document.querySelector('#header');
const footer = document.querySelector('#footer');

window.addEventListener('load', function(){
  this.document.head.insertAdjacentHTML('beforeend', '<link rel="stylesheet" href="style.css"/>');
  
  header.innerHTML = `
  <a href="index.html">Home</a>
  `;

});
