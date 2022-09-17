function logout(){
    document.getElementById("logout").style.display = "block"
    document.getElementById("container").classList.add("blur")
}
function logoutConfirm(){
    document.getElementById("logout").style.display = "none"
    document.getElementById("blankpage").style.display = "block"
}
function logoutCancel(){
    document.getElementById("logout").style.display = "none"
    document.getElementById("container").classList.remove("blur")
}
function firstPage(){
    document.getElementById("logout").style.display = "none"
    document.getElementById("container").classList.remove("blur")
    document.getElementById("blankpage").style.display = "none"
}