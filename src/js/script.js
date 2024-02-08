var dx;
var dy;
var px;
var py;
var vel;
var obg;
var tmp;
var frame;

window.addEventListener("load", inicia);

function animar() {
    const per = document.querySelector('.img1');
    const anima = () => {
        const tecla = event.keyCode;
        if(tecla == 65 || tecla == 87 || tecla == 68 || tecla == 83){
            per.classList.add('animado');
        }
    };
    document.addEventListener('keydown', anima);
    return per;
}

function teclaDw() {
    const tecla = event.keyCode;
        if (tecla == 68) {// Direita
            dx = 1;
            document.getElementById("personagem").style.top = ("-150px");
        }
        else if (tecla == 65) {
                dx = -1;
                document.getElementById("personagem").style.top = ("-50px");
            }
            else if (tecla == 87) { //Cima
                document.getElementById("personagem").style.top = ("-100px");
                dy = -1;
            }
            else if (tecla == 83) {
            document.getElementById("personagem").style.top = ("0px");
            dy = 1;
        }
    

}

function teclaUp() {
    const tecla = event.keyCode;
    if (tecla == 65) {
        dx = 0;
        per.classList.remove('animado');
        // document.getElementById("personagem").style.top = ("0px");
    } else if (tecla == 87) {
        dy = 0;
        per.classList.remove('animado');
    } else if (tecla == 68) {
        dx = 0;
        per.classList.remove('animado');
    } else if (tecla == 83) {
        dy = 0;
        per.classList.remove('animado');
    }
}

function inicia() {
    frame = 0;
    dx = 0;
    dy = 0;
    px = 0;
    py = 0;
    vel = 10;
    obg = document.getElementById('dv1');
    document.addEventListener("keydown", teclaDw)
    document.addEventListener("keyup", teclaUp)
    tmp = setInterval(enterFrame, 20);
}

function enterFrame() {
    px += dx * vel;
    py += dy * vel;

    var larg = window.innerWidth;
    var alt = window.innerHeight;
    if (px <= 1 % larg) {
        px = -7;

    } else if (px >= (larg * 3) - 40) {
        px = (larg * 3) - 40;

    } else if (px > larg * 2) {
        window.scroll(larg * 2, 0);

    } else if (px > larg - 20) {
        window.scroll(larg, 0);

    } else if (px < larg) {
        window.scroll(-larg, 0);
    }

    if (py <= -70 % alt) {
        py = -70 % alt;
        
    } else if (py >= alt - 90) {
        py = alt - 90;
    }

    obg.style.left = px + "px"
    obg.style.top = py + "px"
}

