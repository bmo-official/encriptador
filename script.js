function encriptarTexto() {
    var textoOriginal = document.getElementById('texto').value;
    var textoEncriptado = encriptarAlgunModo(textoOriginal);
    document.getElementById('resultado').innerText = textoEncriptado;
}

function desencriptarTexto() {
    var textoEncriptado = document.getElementById('texto').value;
    var textoDesencriptado = desencriptarAlgunModo(textoEncriptado);
    document.getElementById('resultado').innerText = textoDesencriptado;
}

function vaciarCajaDeTexto() {
    document.getElementById('texto').value = '';
}

function encriptarAlgunModo(texto) {
    // Implementa tu propia lógica de encriptación aquí
    // Este es un ejemplo muy básico de reversión de cadena
    return texto.split('').reverse().join('');
}

function desencriptarAlgunModo(texto) {
    // Implementa tu propia lógica de desencriptación aquí
    // Este es un ejemplo muy básico de reversión de cadena
    return texto.split('').reverse().join('');
}
