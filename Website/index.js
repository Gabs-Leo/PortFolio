function openNav(){
    document.getElementById("navBar").style.width = "100%";
}
function closeNav(){
    if(window.innerWidth < 1000){
        document.getElementById("navBar").style.width = "0%";
    }
}