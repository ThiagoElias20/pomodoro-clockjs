var trabalho = 25;
var pausa = 5;
var sessoes = 3;
var display;

const inputc25 = document.querySelector('.pi25')
function mudarcima25() {
    const min = document.getElementById('circval')
    display = Number(inputc25.value)+1
    inputc25.value = display
    min.value = display + ":" + "00"
    trabalho++;
}

const inputc5 = document.querySelector('.pi5')
function mudarcima5() {
    const display = Number(inputc5.value)+1
    inputc5.value = display
    pausa++;
}

const inputc3 = document.querySelector('.pi3')
function mudarcima3() {
    const display = Number(inputc3.value)+1
    inputc3.value = display
    sessoes++;
}


const inputb25 = document.querySelector('.pi25')
function mudarbaixo25() {
    const min = document.getElementById('circval');
    display = Number(inputb25.value)-1;
    inputb25.value = display;
    min.value = display + ":" + "00";
    trabalho--;
}


const inputb5 = document.querySelector('.pi5')
function mudarbaixo5() {
    const display = Number(inputb5.value)-1;
    inputb5.value = display;
    pausa--;
}

const inputb3 = document.querySelector('.pi3')
function mudarbaixo3() {
    const display = Number(inputb3.value)-1;
    inputb3.value = display;
    sessoes--;
}

var contador = document.querySelector('#circval');

function cronometro() {
    var minutos = trabalho;
    var segundos = 0;
    setInterval(function() {
        if (segundos === 0) {
            minutos--;
            segundos = 60;
        }
        segundos--;
        if (minutos === -1) {
            return;
        }
        var displayMinutos = (minutos < 10 ? '0' : '') + minutos.toString();
        var displaySegundos = (segundos < 10 ? '0' : '') + segundos.toString();
        contador.value = displayMinutos + ":" + displaySegundos;
    }, 1000);
}



function playb1() {
    document.getElementById('b1').style.display = "none"
    document.getElementById('b2').style.display = "inline"
}
    
function playb2() {
    
    document.getElementById('b2').style.display = "none"
    document.getElementById('b1').style.display = "inline"
    
    }



function proxpagina() {
 document.getElementById("pag1").style.display = "none";

 document.getElementById("pag2").style.display = "inline";
}

function voltarpag1() {
    document.getElementById("pag1").style.display = "inline";

    document.getElementById("pag2").style.display = "none";
}