//Navbar
function openNav(){
    document.getElementById("navBar").style.width = "100%";
}
function closeNav(){
    if(window.innerWidth < 1000){
        document.getElementById("navBar").style.width = "0%";
    }
}

//Calculating Experience Time
today = new Date();
anoAtual = today.getFullYear();
mesAtual = today.getMonth();
function checkTime(anoStart, mesStart){
    //Calculating Year
    if(anoStart < anoAtual){
        calcAno = `${anoAtual - anoStart} anos`;
    }else {
        calcAno = 0;
    }

    //Calculating Month
    if(mesStart > mesAtual){
        calcMes = (mesAtual - mesStart + 1)*-1;
        if(12 - calcMes == 1){
            calcMes = `${12 - calcMes} mês`;
        }else{
            calcMes = `${12 - calcMes} meses`;
        }
    }else if(mesAtual - mesStart + 1 == 1){
        calcMes = `${mesAtual - mesStart + 1} mês`;
        
    }else{
        calcMes = `${mesAtual - mesStart + 1} meses`;
    }
    if(12 - calcMes === 0 || 12 - calcMes === 12 ||
        mesAtual - mesStart + 1 === 0 || mesAtual - mesStart + 1 === 12){
            calcMes = 0;
    }
    //Calculating Return
    if(calcAno !== 0){
        if(calcMes !== 0){
            return `${calcAno} e ${calcMes}`;
        }else{
            return `${calcAno}`;
        }
    }else{
        return `${calcMes}`
    }
}


//Change Text
htmlMonth = 4;
htmlYear = 2019;
cssMonth = 4;
cssYear = 2019;
jsMonth = 2;
jsYear = 2021;
javaMonth = 1;
javaYear = 2021;
pythonMonth = 1;
pythonYear = 2021;
nodeMonth = 6;
nodeYear = 2021;
function changeText(x){
    const languages = {
        html: () => {
            document.getElementById("text1").innerHTML = "💻 HTML é uma linguagem baseada em marcação, onde marcamos os elementos para definir quais informações a página vai exibir."
            document.getElementById("text2").innerHTML = `${checkTime(htmlYear, htmlMonth)} de experiência.`
        },
        css: () => {
            document.getElementById("text1").innerHTML = '👩‍🎨CSS é uma linguagem de folha de estilo composta por "camadas", criado com o propósito de estilizar as páginas HTML.'
            document.getElementById("text2").innerHTML = `${checkTime(cssYear, cssMonth)} de experiência.`
        },
        js: () => {
            document.getElementById("text1").innerHTML = '👩‍💻JavaScript é uma linguagem de programação de script em alto nível, é utilizado principalmente para atribuir funções aos elementos de uma página.'
            document.getElementById("text2").innerHTML = `${checkTime(jsYear, jsMonth)} de experiência.`
        },
        java: () => {
            document.getElementById("text1").innerHTML = '☕Java é uma linguagem de programação de alto nível, baseada em classes, orientada a objetos e muito conhecida por sua portabilidade e segurança.'
            document.getElementById("text2").innerHTML = `${checkTime(javaYear, javaMonth)} de experiência.`
        },
        python: () => {
            document.getElementById("text1").innerHTML = '🐍Python é uma linguagem de programação de alto nível muito conhecida por possuir um código de fácil leitura e por poder ser utilizada em várias áreas de desenvolvimento.'
            document.getElementById("text2").innerHTML = `${checkTime(pythonYear, pythonMonth)} de experiência.`
        },
        "c++": () => {
            document.getElementById("text1").innerHTML = '🎲 Node é um interpretador que permite a criação de um banco de dados e também execução de códigos JavaScript fora do navegador web.'
            document.getElementById("text2").innerHTML = `${checkTime(nodeYear, nodeMonth)} de experiência.`
        }
    }
    languages[x]()
}
function backText(){
    document.getElementById("text1").innerHTML = "Agradeço sua atenção 💜 juntos podemos criar qualquer coisa!"
    document.getElementById("text2").innerHTML = "*Passe o mouse nos cards para ler sobre*"
}

//Totop Button
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