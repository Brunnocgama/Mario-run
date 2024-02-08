
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const gameOverImage = document.querySelector('.gameOver')
 
const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500); //tempo e função
}
    
const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none'; // para a animação
        pipe.style.left = `${pipePosition}px`; // informa onde tem que ficar apos bater

        pipe.style.animation = 'none'; // para a animação
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './mario-jump-images/game-over.png';
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        gameOverImage.style.opacity='100%'; 
        clearInterval(loop);
    }

}, 10);

document.addEventListener('keydown', jump) // pressionar executa a função