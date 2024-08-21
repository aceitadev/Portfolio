document.addEventListener('DOMContentLoaded', () => {
    const element = document.querySelector('.typing-animation');
    const animationDuration = 4000; // Duração da animação de digitação em milissegundos
    const delay = 5000; // Tempo de pausa antes de reiniciar a animação em milissegundos

    function restartAnimation() {
        element.style.animation = 'none'; // Remove a animação atual
        element.offsetHeight; // Força o navegador a reprocessar o elemento
        element.style.animation = `typing ${animationDuration}ms steps(40, end) 1s forwards, blink-caret .75s step-end infinite`;
    }

    setInterval(restartAnimation, delay);
});