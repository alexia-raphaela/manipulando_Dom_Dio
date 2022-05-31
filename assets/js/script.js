document.getElementById('toggle').addEventListener("click", function() {
    document.getElementsByTagName('body')[0].classList.toggle("dark-mode")
    
})

function evento() {
    const body = document.querySelector('body')
    const botao = document.getElementById('toggle')
    const texto = document.getElementById('texto')
    if(body.className === "dark-mode"){
        botao.textContent = "Dark Mode"
        botao.style.backgroundColor = "black"
        botao.style.color = "white"
        texto.textContent = "Light Mode On"

    } else {
        botao.textContent = "Light Mode"
        texto.textContent = "Dark Mode On"
        botao.style.backgroundColor = "white"
        botao.style.color = "black"
        
    }
}