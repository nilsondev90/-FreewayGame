//Variáveis Carro

let yCarros = [40, 96, 152, 210, 266, 318];
let xCarros = [600, 600, 600, 600, 600, 600];
let velocidadeCarros = [2, 2.5, 2.7, 3, 2, 2.8];
let comprimentoCarro = 73;
let alturaCarro = 40

function mostraCarro() {
  for(let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro() {
  for(let i = 0; i < imagemCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoInicialDoCarro() {
  for(let i = 0; i < imagemCarros.length; i++){
    if (passouTodaTela(xCarros[i])) {
      xCarros[i] = 600;
    }
  }
}

function passouTodaTela(xCarros) {
  return xCarros < -comprimentoCarro;
}






