const header = document.querySelector('#header');
const footer = document.querySelector('#footer');

window.addEventListener('load', function(){
  
  
  header.innerHTML = `
  <a href="index.html">Home</a>
  `;
  this.document.head.insertAdjacentHTML('beforeend', '<link rel="stylesheet" href="style.css"/>');
});
