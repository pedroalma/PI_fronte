const imagens = [
  { 
    link:"./testlink.html", 
    src: "./img/image (1).png", 
    titulo:"Stiletto", 
    texto: "O stiletto, sem dúvidas, é um dos formatos de unhas mais ousados e glamourosos do momento. Esse estilo é para aquelas que buscam por unhas bem pontudas e longas. É o queridinho de muitas celebridades como Rihanna, Cardi B e Nicki Minaj. O stiletto é para pessoas que queiram abusar da imaginação e investir em nail arts autênticas e diferentes, pois o formato em V abre espaço para diversas possibilidades de esmaltação. Esse formato de unha é pura atitude e destaca as mãos de qualquer pessoa." 
  },
  { 
    link:"./testlink.html", 
    src: "./img/image (2).png", 
    titulo:"Bailarina", 
    texto: "A unha bailarina, também conhecida como ballerina, tem esse nome porque o formato lembra uma sapatilha de balé. Possui laterais afuniladas e ponta reta, sendo elegante e moderna." 
  }
];

let html = "";

imagens.forEach((item, i) => {
  html += `
    <div class="card">
      <div><img src="${item.src}" alt=""></div>
      <h1>${item.titulo}</h1>
      <h1 class="texto-card" data-texto="${item.texto}"></h1>
      <a href="${item.link}"><button>Ver mais</button></a>
    </div>
  `;
});

document.getElementById("conteudo").innerHTML = html;

// ===============================
// Função para adaptar texto dinamicamente
// ===============================

function atualizarTexto() {
  const largura = window.innerWidth;

  const minLargura = 300;
  const maxLargura = 1200;
  const minChars = 50;

  const elementos = document.querySelectorAll('.texto-card');

  elementos.forEach(el => {
    const textoCompleto = el.dataset.texto;
    const maxChars = textoCompleto.length;

    let limite = Math.floor(
      ((largura - minLargura) / (maxLargura - minLargura)) * (maxChars - minChars) + minChars
    );

    if (limite > maxChars) limite = maxChars;
    if (limite < minChars) limite = minChars;

    const textoCortado = textoCompleto.substring(0, limite) + (limite < maxChars ? '...' : '');
    el.innerText = textoCortado;
  });
}

window.addEventListener('load', atualizarTexto);
window.addEventListener('resize', atualizarTexto);
