var body = document.querySelector("body");
var btnDarkMode = document.querySelector(".btn-dark-mode");

function darkMode() {
    if (body.classList.toggle("dark-mode")) {
        btnDarkMode.textContent = "Desativar modo escuro"
    } 
    else {
        btnDarkMode.textContent = "Ativar modo escuro"
    }
}

btnDarkMode.addEventListener("click", darkMode);