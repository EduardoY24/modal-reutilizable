// Muestra un modal con un título y un contenido.
function mostrarModal(titulo, contenido) {
    var modal = document.createElement("div");
    modal.className = "modal";
    modal.innerHTML = `
        <div class="contenido-modal">
            <button class="cerrar-modal">X</button>
            <h2>${titulo}</h2>
            <p>${contenido}</p>
            <button class="boton-cerrar">Cerrar</button>
        </div>
    `;
    document.body.appendChild(modal);
    var cerrar = modal.querySelector(".cerrar-modal");
    var boton = modal.querySelector(".boton-cerrar");

    cerrar.addEventListener("click", function() {
        modal.remove();
    });
    boton.addEventListener("click", function() {
        modal.remove();
});
modal.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.remove();
}
});
}