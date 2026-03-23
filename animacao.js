function mudar(estado) {
    const quadrado = document.querySelector('.quadrado');

    // remove os estados antigos
    quadrado.classList.remove('feliz', 'triste');

    // adiciona o novo estado
    quadrado.classList.add(estado);
}