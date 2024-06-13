var yesBtn = document.getElementById('yesBtn');
var noBtn = document.getElementById('noBtn');
var modal = document.getElementById('myModal');
var modalContent = document.getElementById('modalContent');
var mensajeElement = document.getElementById('mensaje');

yesBtn.addEventListener('click', function () {
    var imagen = document.createElement('img');
    imagen.src = 'probando.jpg';

    mensajeElement.innerHTML = '❤️ "Estoy emocionado de embarcarme en esta nueva etapa de la vida contigo, y espero que nuestra relación sea un viaje lleno de crecimiento y amor compartido." 😍 🤭';

    mensajeElement.style.fontSize = '1.25rem'; // Ajusta el tamaño de fuente del mensaje

    modalContent.innerHTML = '';
    modalContent.appendChild(imagen);
    modalContent.appendChild(document.createElement('br')); // Agregar un salto de línea
    modalContent.appendChild(mensajeElement);

    modalContent.style.width = '90%';
    modalContent.style.height = 'auto';

    modal.style.display = 'block';
});

document.addEventListener('mousemove', function (event) {
    var mouseX = event.clientX;
    var mouseY = event.clientY;

    var buttonX = noBtn.offsetLeft + noBtn.clientWidth / 2;
    var buttonY = noBtn.offsetTop + noBtn.clientHeight / 2;

    var distance = Math.sqrt((mouseX - buttonX) ** 2 + (mouseY - buttonY) ** 2);

    if (distance < 100) {
        var randomX = Math.random() * (window.innerWidth - noBtn.clientWidth);
        var randomY = Math.random() * (window.innerHeight - noBtn.clientHeight);

        noBtn.style.left = randomX + 'px';
        noBtn.style.top = randomY + 'px';
    }
});

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};
