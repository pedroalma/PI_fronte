// document.getElementById("imgj").innerHTML = `<img src="./img/image (1).png" alt="">`;
// document.getElementById("h1j").innerHTML=`oal`;
const imagens = [
  { src: "./img/image (1).png", texto: "O stiletto, sem dúvidas, é um dos formatos de unhas mais ousados e glamourosos do momento. Esse estilo é para aquelas que buscam por unhas bem pontudas e longas. É o queridinho de muitas celebridades como Rihanna, Cardi B e Nicki Minaj. O stiletto é para pessoas que queiram abusar da imaginação e investir em nail arts autênticas e diferentes, pois o formato em V abre espaço para diversas possibilidades de esmaltação. Esse formato de unha é pura atitude e destaca as mãos de qualquer pessoa." },
  { src: "./img/image (2).png", texto: "A unha bailarina, também conhecida como unha ballerina, tem esse nome porque o formato lembra uma sapatilha de balé. Possui as laterais afuniladas e pontas retas. Para conseguir esse formato de unha, fique atenta ao nível de resistência das suas unhas, pois além de unhas longas ainda apresentam cantinhos pontudos, sendo um fator a mais para levar a quebra da unha." },
  { src: "./img/image (3).png", texto: "A unha amendoada é um meio termo entre a unha oval e o stiletto. Este formato de unha segue reto da base até a ponta, ganhando uma aparência ovalada nas quinas. Caso você pretenda deixar as unhas crescerem, esta opção é ideal para que suas unhas permaneçam intactas, pois, por não apresentarem arestas nas extremidades, acaba dificultando a quebra da unha." },
  { src: "./img/image (4).png", texto: "A unha quadrada é um dos formatos de unhas mais tradicionais e clássicos. Esse estilo é ideal para quem não quer abrir mão da praticidade, pois o formato quadrado é mais resistente e menos propenso a quebras. Além disso, esse formato combina com qualquer tipo de esmaltação, desde as mais discretas até as mais ousadas." },
];

let html = "";

imagens.forEach((item, i) => {
  html += `
    <div class="card">
        <div ${i+1}"><img src="${item.src}" alt=""></div>
        <span></span>
        <div ${i+1}"><h1>${item.texto}</h1></div>
    </div>
  `;
});

document.getElementById("conteudo").innerHTML = html;
