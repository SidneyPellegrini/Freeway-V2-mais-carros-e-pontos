function setup() {
  createCanvas(500, 400);
      
}

function draw() {
  background(imagemDaPista);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaPosicaoInicialDoCarro();
  verificaColisao();
  incluiPontos();
  marcaPonto()
    
}




