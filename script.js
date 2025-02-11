document.addEventListener("DOMContentLoaded", function() {
    let boton = document.getElementById("boton");
    let mensaje = document.getElementById("Mensaje");

    boton.addEventListener("click", function() {
        if (mensaje.style.display === "none" || mensaje.style.display === "") {
            mensaje.style.display = "block";
        } else {
            mensaje.style.display = "none";
        }
    });
});
