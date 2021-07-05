function openNav(){
    document.getElementById("navBar").style.width = "100%";
}
function closeNav(){
    if(window.innerWidth < 1000){
        document.getElementById("navBar").style.width = "0%";
    }
}
function changeText(x){
    const languages = {
        html: () => {
            document.getElementById("text1").innerHTML = "💻 HTML é uma linguagem baseada em marcação, onde marcamos os elementos para definir quais informações a página vai exibir."
            document.getElementById("text2").innerHTML = "2 anos de experiência."
        },
        css: () => {
            document.getElementById("text1").innerHTML = '👩‍🎨CSS é uma linguagem de folha de estilo composta por "camadas", criado com o propósito de estilizar as páginas HTML.'
            document.getElementById("text2").innerHTML = "2 anos de experiência."
        },
        js: () => {
            document.getElementById("text1").innerHTML = '👩‍💻JavaScript é uma linguagem de programação de script em alto nível, é utilizado principalmente para atribuir funções aos elementos de uma página.'
            document.getElementById("text2").innerHTML = "6 meses de experiência."
        },
        java: () => {
            document.getElementById("text1").innerHTML = '☕Java é uma linguagem de programação de alto nível, baseada em classes, orientada a objetos e muito conhecida por sua portabilidade e segurança.'
            document.getElementById("text2").innerHTML = "6 meses de experiência."
        },
        python: () => {
            document.getElementById("text1").innerHTML = '🐍Python é uma linguagem de programação de alto nível muito conhecida por possuir um código de fácil leitura e por poder ser utilizada em várias áreas de desenvolvimento.'
            document.getElementById("text2").innerHTML = "3 meses de experiência."
        },
        "c++": () => {
            document.getElementById("text1").innerHTML = '👾 C++ é uma linguagem de programação de alto nível, orientada a objetos, criada como extensão da linguagem C. É muito conhecida por possuir altos níveis de desempenho, performance e eficiência.'
            document.getElementById("text2").innerHTML = "2 anos de experiência."
        }
    }
    languages[x]()
}

function backText(){
    document.getElementById("text1").innerHTML = "Agradeço sua atenção 💜 juntos podemos criar qualquer coisa!"
    document.getElementById("text2").innerHTML = "*Passe o mouse nos cards para ler sobre*"
}

window.onscroll = function() {myFunction()};
function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("topB").style.opacity = "1";
  } else {
    document.getElementById("topB").style.opacity = "0";
  }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

var banner = document.getElementById("firstSec");
function fadeOut(){
    document.getElementById("firstSec").style.opacity = "1";
}