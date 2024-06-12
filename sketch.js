let campoIdade;
let campoFantasia;
let campoAventura;
let cores;
function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
 cores = color(random(0, 255), random(0, 255), random(0, 211));
}

function draw() {
  background("white");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

  fill(cores);
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "HArr potter";
    } else {
      if (idade >= 12) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "Homen de ferro";          
        } else{
         return "Ladrões de sonhos ";
        }
      } else {
        if (gostaDeFantasia) {
          return "O que há depois do tempo";
        } else {
          return "Round 6";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return " Super mam";
    } else {
      return "The8 show";
    }
  }
}
