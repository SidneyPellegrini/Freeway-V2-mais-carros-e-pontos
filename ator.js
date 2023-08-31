//codigo do ator
let xAtor = 85;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)) {
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yAtor += 3;
  }
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if (colisao){
      voltaAtorParaYInicial();
    }
  }
}

function voltaAtorParaYInicial(){
  yAtor = 366;
}

function incluiPontos(){
  fill(255,240,60)
  textSize(25)
  textAlign(CENTER)
  text(meusPontos, width / 5, 26)
}

function marcaPonto(){
  if(yAtor < 15){
    meusPontos +=1;
    voltaAtorParaYInicial();
  }
}