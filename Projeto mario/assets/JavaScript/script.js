const mario = document.querySelector(".super-mario")
const pipe = document.querySelector(".pipe-game")

const jump = () => {
    mario.classList.add("jump-mario");

    setTimeout(() => {
        mario.classList.remove("jump-mario");
    }, 500)
}

const loopGame = setInterval(() => {
    if (pipePosition <=  120 && pipePosition > 0 && marioPosition < 80)

    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`

    mario.src = "./assets/imagens/mario-game-over.png"
    mario.styles.width = "75px";
    mario.styles.marginLeft = "45px";
}, 10)

clearInterval(loopGame)

document.addEventListener("keydown", jump)

