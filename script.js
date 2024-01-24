function encriptarTexto() {
    // Obtener el valor del input de texto
    var textoOriginal = document.getElementById('texto').value;

    // Lógica de encriptación (aquí puedes implementar tu propia lógica de encriptación)
    var textoEncriptado = encriptarAlgunModo(textoOriginal);

    // Mostrar el resultado en la página
    document.getElementById('textoEncriptado').innerText = textoEncriptado;
}

function encriptarAlgunModo(texto) {
    // Implementa tu propia lógica de encriptación aquí
    // Este es un ejemplo muy básico de reversión de cadena
    return texto.split('').reverse().join('');
}
