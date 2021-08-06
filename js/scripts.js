
function miFuncion() {
    whatsappTitulo = "Escribeme a Whatsapp ";
    $('#header').load('./../header.html');
    $('#footer').load('./../footer.html');
    document.getElementById('whatsappBoton').innerHTML=whatsappTitulo;
  }
window.onload=miFuncion;

  