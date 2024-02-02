/*================Botões funcionarem==============
Aqui teremos a função butupdown que utiliza um forEach
para cada um dos botões de Cima e Baixo, então a função
é responsável por dizer que tal botão vai retirar ou
adicionar 1 no valor de seu respectivo val (exemplo= val25)
*/

let butupdowns = document.querySelectorAll(".butupdown");
let valortemps = document.querySelectorAll(".valortemp");
let val25 = document.querySelector('.pi25');
let val5 = document.querySelector('.pi5');
let val3 = document.querySelector('.pi3');


window.addEventListener("load", function() {
    //Ao carregar a página 1, os valores da 2 voltam para a 1
    val25.value = localStorage.getItem("minutos");
    val5.value = localStorage.getItem("minutosPausa");
    val3.value = localStorage.getItem("qntsess");
});

butupdowns.forEach(butupdown => {
  butupdown.addEventListener('click', function mudarbut() {
    if (butupdown.classList.contains('cima')) {
        if (butupdown.classList.contains('but25')) {
            if (val25.value == 99) {
                val25.value = 99;
            } else {
                val25.value++;
                let valorpassado = val25.value;
                if (valorpassado < 10) {
                    valorpassado = "0" + valorpassado;
                    localStorage.setItem("minutos", valorpassado);
                } else {
                    localStorage.setItem("minutos", valorpassado);
                }
            }
        } else if (butupdown.classList.contains('but5')) {
            if (val5.value == 99) {
                val5.value = 99;
            } else {
                val5.value++;
                let valorpassado = val5.value;
                localStorage.setItem("minutosPausa", valorpassado);
            }
        } else if (butupdown.classList.contains('but3')) {
            if (val3.value == 30) {
                val3.value = 30;
            } else {
                val3.value++;
                let valorpassado = val3.value;
                localStorage.setItem("qntsess", valorpassado);
            }
        }
    } else if (butupdown.classList.contains('baixo')) {
        if (butupdown.classList.contains('but25')) {
            if (val25.value == 1) {
                val25.value = 1;
            } else {
                val25.value--;
                let valorpassado = val25.value;
                localStorage.setItem("minutos", valorpassado);
            }
        } else if (butupdown.classList.contains('but5')) {
            if (val5.value == 1) {
                val5.value = 1;
            } else {
                val5.value--;
                let valorpassado = val5.value;
                localStorage.setItem("minutosPausa", valorpassado);
            }
        } else if (butupdown.classList.contains('but3')) {
            if (val3.value == 1) {
                val3.value = 1;
            } else {
                val3.value--;
                let valorpassado = val3.value;
                localStorage.setItem("qntsess", valorpassado);
            }
        }
    }
  });
});
/*==================Fim dos Botões funcionarem===============*/

/*==================Tempo Funcionando===============*/

let minutos = document.querySelector('.minutos');
let segundos = document.querySelector('.segundos');
let cronomplay;
let estadoTrabalho = true; // Variável para controlar o estado de trabalho

// Botão Play
document.querySelector(".but-play").addEventListener('click', () => {
    document.getElementById('b1').style.display = "none";
    document.getElementById('b2').style.display = "inline";

    // Verifica o estado de trabalho ou pausa
    if (estadoTrabalho) {
        iniciarTrabalho();
    } else {
        iniciarPausa();
    }
});

let bolaAtual = 0;


// Função para iniciar o cronômetro de trabalho
function iniciarTrabalho() {
    cronomplay = setInterval(() => {
        segundos.value--;
        if (segundos.value < 1) {
            if (minutos.value == 0) {
                clearInterval(cronomplay);
                transformPause(); //Começar Pausa
                minutos.value = localStorage.getItem("minutosPausa"); //Define o tempo da pausa.
                if (bolaAtiva.length === bolaAtual + 1) {
                    window.alert("Suas sessões acabaram.");
                    window.location.href = "inicio.html";
                }
                document.getElementById('b1').style.display = "inline"
                document.getElementById('b2').style.display = "none"
                bolaAtiva[bolaAtual].classList.remove("bolinhaon");
                bolaAtiva[bolaAtual].classList.add("bolinhaonPause");
            } else {
                minutos.value--;
                segundos.value = 59;
                if (minutos.value < 10) {
                    minutos.value = "0" + minutos.value;
                }
            }
        }
    }, 1000);
}

// Função para iniciar o cronômetro de pausa
function iniciarPausa() {
    cronomplay = setInterval(() => {
        segundos.value--;
        if (segundos.value < 1) {
            if (minutos.value == 0) {
                clearInterval(cronomplay);
                transformTrabalho(); // Começar Trabalho
                minutos.value = localStorage.getItem("minutos"); //Define o tempo do trabalho.
                document.getElementById('b1').style.display = "inline"
                document.getElementById('b2').style.display = "none"
                bolaAtual++; //Valor da bola atual, indo de 0 a o numero max de bolinhas.
                bolaAtiva[bolaAtual - 1].classList.remove("bolinhaonPause");
                bolaAtiva[bolaAtual - 1].classList.add("bolinhaoff");
                bolaAtiva[bolaAtual].classList.add("bolinhaon");
                bolaAtiva[bolaAtual].classList.remove("bolinhaoff");

            } else {
                minutos.value--;
                segundos.value = 59;
            }
        }
    }, 1000);
}

// Função para mudar para a pausa
function transformPause() {
    document.querySelector('#circmenor').style.border = '7px solid #F2C94C';
    const titulo = document.querySelector('#TrabP');
    titulo.innerHTML = "Pausa";
    titulo.style.color = '#F2C94C';
    estadoTrabalho = false; // Mudar o estado para pausa
}

// Função para mudar para o trabalho
function transformTrabalho() {
    document.querySelector('#circmenor').style.border = '7px solid #219653';
    const titulo = document.querySelector('#TrabP');
    titulo.innerHTML = "Trabalho";
    titulo.style.color = '#219653';
    estadoTrabalho = true; // Mudar o estado para trabalho
}


minutos.value = localStorage.getItem("minutos");

//Criar bolas das sessões

let qntSess = localStorage.getItem("qntsess");
let bolaAtiva = Array(); // Cria uma array com o tamanho de qntsess

function criarBolas() {
    document.querySelector(".balls").innerHTML = "";

    for (let i = 0; i < localStorage.getItem("qntsess"); i++) {
        let bol = document.createElement("div");
        if (i === 0) {
            bol.classList.add("bolinhaon");
        } else {
            bol.classList.add("bolinhaoff");
        }
        document.querySelector(".balls").appendChild(bol);
        bolaAtiva.push(bol);
    }
}
criarBolas()
console.log(bolaAtiva); //Remover dps

//Botão Pause
document.querySelector(".but-pause").addEventListener('click', () => {
    document.getElementById('b1').style.display = "inline"
    document.getElementById('b2').style.display = "none"

    clearInterval(cronomplay);
})


/*==================Fim do Tempo Funcionando===============*/

/*==================Botões de troca de página===============*/
function contbut() {
    window.location.href = "page2.html";
}

function inbut() {
    window.location.href = "inicio.html";
}
/*==================Fim dos Botões de troca de página===============*/