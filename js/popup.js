var AbrirPopup = document.getElementById('abrir-popup'),
    overlay = document.getElementById('overlay'),
    popup = document.getElementById('popup'),
    btnCerrarPopup = document.getElementById('btn-cerrar-popup');

AbrirPopup.addEventListener('click', function(){
    console.log('!');
    overlay.classList.add('active');
    popup.classList.add('active');
});

btnCerrarPopup.addEventListener('click', function(){
    console.log('!');
    overlay.classList.remove('active');
    popup.classList.remove('active');
});