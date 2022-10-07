let b = document.getElementById('box')
b.addEventListener('click', clicar)
b.addEventListener('mouseenter', entrar)
b.addEventListener('mouseout', saiu)
b.addEventListener('mouseup', cima)


function clicar(){
    b.innerText = 'Clicou!'
    b.style.background = 'red'
}

function entrar() {
    b.innerText = 'Entrou!'
    b.style.background = 'blue'
}
function saiu(){
    b.innerText = 'Saiu!'
    b.style.background = 'green'
}
function cima(){
    b.innerText = 'up'
    b.style.background = 'purple'
}
