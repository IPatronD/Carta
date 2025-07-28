document.addEventListener('DOMContentLoaded', function () {
    // Efecto de aparición gradual (se mantiene igual)
    const elementos = document.querySelectorAll('.carta > *');
    elementos.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `opacity 0.5s ${index * 0.1}s, transform 0.5s ${index * 0.1}s`;
    });

    setTimeout(() => {
        elementos.forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        });
    }, 300);

    // Efecto al hacer clic en la carta (se mantiene igual)
    const carta = document.querySelector('.carta');
    carta.addEventListener('click', function () {
        this.style.transform = 'scale(0.98)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 200);
    });

    // Confeti al abrir (se mantiene igual)
    const sobre = document.querySelector('.sobre');
    sobre.addEventListener('click', function (e) {
        if (e.target === this) {
            const confeti = document.createElement('div');
            confeti.innerHTML = '🎉🎊🥳';
            confeti.style.position = 'fixed';
            confeti.style.top = '0';
            confeti.style.left = '0';
            confeti.style.width = '100%';
            confeti.style.height = '100%';
            confeti.style.display = 'flex';
            confeti.style.justifyContent = 'center';
            confeti.style.alignItems = 'center';
            confeti.style.fontSize = '50px';
            confeti.style.pointerEvents = 'none';
            confeti.style.zIndex = '100';
            confeti.style.animation = 'fadeOut 2s forwards';

            document.body.appendChild(confeti);

            setTimeout(() => {
                confeti.remove();
            }, 2000);
        }
    });

    // Funcionalidad para el modal de imágenes
    const fotos = document.querySelectorAll('.foto-invitacion');
    const modal = document.createElement('div');
    modal.className = 'modal';

    const modalContenido = document.createElement('img');
    modalContenido.className = 'modal-contenido';

    const cerrar = document.createElement('span');
    cerrar.className = 'cerrar';
    cerrar.innerHTML = '&times;';

    modal.appendChild(cerrar);
    modal.appendChild(modalContenido);
    document.body.appendChild(modal);

    fotos.forEach(foto => {
        foto.addEventListener('click', function () {
            modal.style.display = 'block';
            modalContenido.src = this.src;
            modalContenido.alt = this.alt;
        });
    });

    cerrar.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Agregar estilo para el fadeOut (se mantiene igual)
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeOut {
            0% { opacity: 1; transform: scale(1); }
            100% { opacity: 0; transform: scale(1.5); }
        }
    `;
    document.head.appendChild(style);
});