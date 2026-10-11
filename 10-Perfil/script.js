const data  = {
    name: "Kevin Sebastian",
    description: "Programador Backend, Amante de la cafeina y One Piece",
    email: "kt866887@gmail.com",
    tel:"6692204137"

}


function loadUserProfile(data) {
    document.getElementById("userName").textContent = data.name
    document.getElementById("userDescription").textContent = data.description
    document.getElementById("userEmail").textContent = data.email
    document.getElementById("userTel").textContent = data.tel



}

document.addEventListener("DOMContentLoaded", function(){
    loadUserProfile(data);
})