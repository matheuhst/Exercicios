function mudar(estado) {
    const quadrado = document.querySelector('.quadrado');

    // remove os estados antigos
    quadrado.classList.remove('feliz', 'triste', 'nervoso');

    // adiciona o novo estado
    quadrado.classList.add(estado);
}

let primeiraInteracao = true;

const quadrado = document.querySelector('.quadrado');

quadrado.addEventListener('mouseenter', () => {
    if (primeiraInteracao) {
        mudar('nervoso');
        primeiraInteracao = false;
    } else {
        mudar('feliz');
    }
});