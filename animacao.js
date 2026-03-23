function mudar(estado) {
    const quadrado = document.querySelector('.quadrado');

    // remove os estados antigos
    quadrado.classList.remove('feliz', 'triste', 'nervoso');

    // adiciona o novo estado
    quadrado.classList.add(estado);
}

let primeiraInteracao = true;

let tempoInatividade;

function iniciarTimer() {
    // cancela o timer anterior
    clearTimeout(tempoInatividade);

    // cria um novo timer
    tempoInatividade = setTimeout(() => {
        mudar('triste');
    }, 10000); // 10 segundos
}

const quadrado = document.querySelector('.quadrado');

quadrado.addEventListener('mouseenter', () => {
    if (primeiraInteracao) {
        mudar('nervoso');
        primeiraInteracao = false;
    } else {
        mudar('feliz');
    }

    iniciarTimer();
});

quadrado.addEventListener('click', () => {
    iniciarTimer();
});

iniciarTimer();