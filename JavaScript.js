const nome = "Meu nome é Felipe Bianchi, sou Desenvolvedor de Software";
const mensagem = "Seja bem-vindo ao meu site!";
const elementoNome = document.getElementById("titulo");
const elementoMensagem = document.getElementById("mensagem");

let i = 0; // Índice para digitação do nome
let a = 0; // Índice para digitação da mensagem

function digitarNome() {
  if (elementoNome) { // Verifica se o elemento existe
    if (i < nome.length) {
      elementoNome.innerHTML += nome.charAt(i);
      i++;
      setTimeout(digitarNome, 50);
    } else {
      i = 0;
     setTimeout(() => {
        elementoNome.innerHTML = ""; // Limpa o texto após completar
     digitarNome(); // Aguarda 10 segundos
     },  50000 )
    }
  } else {
    console.error("Elemento 'titulo' não encontrado.");
  }
}

function digitarMensagem() {
  if (elementoMensagem) { // Verifica se o elemento existe
    if (a < mensagem.length) {
      elementoMensagem.innerHTML += mensagem.charAt(a);
      a++;
      setTimeout(digitarMensagem, 50); // Velocidade de digitação
    } else {
      a = 0;
      setTimeout(() => {
        elementoMensagem.innerHTML = ""; // Limpa o texto após completar
     digitarMensagem(); // Aguarda 10 segundos
     },10000 )
    }
  } else {
    console.error("Elemento 'mensagem' não encontrado.");
  }
}

document.addEventListener("click", function () {
  const audio = document.querySelector("audio");
  audio.muted = false;
});

// Inicia as funções de digitação
digitarNome();
digitarMensagem();
