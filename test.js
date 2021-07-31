today = new Date();
anoAtual = today.getFullYear();
mesAtual = today.getMonth();
function checkYear(anoStart){
    if(anoStart < anoAtual){
        return `${anoAtual - anoStart} anos`;
    }
}
function checkMonth(mesStart){
    if(mesStart > mesAtual){
        xd = (mesAtual - mesStart + 1)*-1;
        return `${12 - xd} meses`;
    }else{
        return `${mesAtual - mesStart + 1} meses`;
    }
}
console.log(checkYear(2003));
console.log(checkMonth(0));