// document.getElementById("imgj").innerHTML = `<img src="./img/image (1).png" alt="">`;
// document.getElementById("h1j").innerHTML=`oal`;
const imagens = [
  { link:"./testlink.html", src: "./img/image (1).png", titulo:"stiletto", texto: "O stiletto, sem dúvidas, é um dos formatos de unhas mais ousados e glamourosos do momento. Esse estilo é para aquelas que buscam por unhas bem pontudas e longas. É o queridinho de muitas celebridades como Rihanna, Cardi B e Nicki Minaj. O stiletto é para pessoas que queiram abusar da imaginação e investir em nail arts autênticas e diferentes, pois o formato em V abre espaço para diversas possibilidades de esmaltação. Esse formato de unha é pura atitude e destaca as mãos de qualquer pessoa." },
  { link:"./testlink.html", src: "./img/image (2).png", texto: "A unha bailarina, também conhecida como unha ballerina, tem esse nome porque o formato lembra uma sapatilha de balé. Possui as laterais afuniladas e pontas retas. Para conseguir esse formato de unha, fique atenta ao nível de resistência das suas unhas, pois além de unhas longas ainda apresentam cantinhos pontudos, sendo um fator a mais para levar a quebra da unha." },
  { link:"./testlink.html", src: "./img/image (3).png", texto: "A unha amendoada é um meio termo entre a unha oval e o stiletto. Este formato de unha segue reto da base até a ponta, ganhando uma aparência ovalada nas quinas. Caso você pretenda deixar as unhas crescerem, esta opção é ideal para que suas unhas permaneçam intactas, pois, por não apresentarem arestas nas extremidades, acaba dificultando a quebra da unha." },
  { link:"./testlink.html", src: "./img/image (4).png", texto: "A unha quadrada é um dos formatos de unhas mais tradicionais e clássicos. Esse estilo é ideal para quem não quer abrir mão da praticidade, pois o formato quadrado é mais resistente e menos propenso a quebras. Além disso, esse formato combina com qualquer tipo de esmaltação, desde as mais discretas até as mais ousadas." },
];

let html = "";

imagens.forEach((item, i) => {
  html += `

  
    <div class="card">
    <a href="${item.link}" >
        <div><img src="${item.src}" alt=""></div>
        
        <div class="DivText">
         <div class="h1-text">
        <h1>${item.titulo}</h1>
        <h1>${item.texto}</h1>
    </div>
        <div>
            <h1 class="DivTextH1">Ver mais</h1>
        </div>
        </div>
         </a>  
    </div>
 
 
  `;
});

document.getElementById("conteudo").innerHTML = html;


function search() {
  const query = document.getElementById('searchInput').value;


const array = [
  "Cacau", "Cajá", "Caju", "Cambuci", "Caniço", "Caqui", "Carambola", "Cereja",
  "Chicória", "Cidra", "Coco", "Cupuaçu", "Damasco", "Figo", "Abacate", "Abacaxi",
  "Abiu", "Abricó", "Acerola", "Açaí", "Ameixa", "Amora", "Amêndoa", "Amora-preta",
  "Angu", "Angico", "Anona", "Araçá", "Araticum", "Babaco", "Bacaba", "Bacupari",
  "Bacuri", "Banana", "Bananeira", "Beri", "Beri-de-fogo", "Biribá", "Buriti",
  "Fisalis", "Fruta do Conde", "Framboesa", "Gabiroba", "Goiaba", "Graviola",
  "Groselha", "Grumixama", "Guabiroba", "Guaraná", "Jabuticaba", "Jaca", "Jambo",
  "Jenipapo", "Kiwi", "Laranja", "Lima", "Limão", "Macaúba", "Macadâmia", "Manga",
  "Mangaba", "Mangostão", "Mamão", "Mamey", "Mamoncillo", "Maná-cubiu", "Maracujá",
  "Marang", "Marmelo", "Marula", "Massala", "Melancia", "Melão", "Mexerica",
  "Mirtilo", "Morango", "Murici", "Nêspera", "Noni", "Patauá", "Pequi", "Pera",
  "Pêssego", "Pitanga", "Pitaya", "Pupunha", "Romã", "Sapoti", "Sete-capotes",
  "Siriguela", "Sorva", "Tâmara", "Tamarindo", "Tangerina", "Tomate", "Tucumã",
  "Umari", "Umbu", "Uva", "Uvaia"
];

const busca = query;
const resultado = array.filter(item => item.toLowerCase().includes(busca.toLowerCase()));

console.log(resultado);
}