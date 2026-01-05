const header = document.querySelector('#header');
const footer = document.querySelector('#footer');

window.addEventListener('load', function(){
  this.document.head.insertAdjacentHTML('beforeend', '<link rel="stylesheet" href="style.css"/>');
  
  header.innerHTML = `
  <a href="index.html">Home</a>
  <a href="kauf-student.html">Werde Teil der Nabutor-Community</a>
  `;

  footer.innerHTML = `
  <a href="barrierefreiheitserklärung.html">Barrierefreiheitserklärung</a>
    <a href="about.html">Über uns</a>
    <a href="lizenz.html">Lizenz</a>
    <a href="impressum.html">Impressum</a>
    <a href="datenschutzerklärung.html">Datenschutzerklärung</a>
    <a href="kontakt.html">Kontakt</a>
  `;
  

});
