function contar(){
    let inicio =  document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')

    if (inicio.value.length == 0 || fim.value.length == 0 passo.value.length == 0){
        window.alert('Não foi possivel fazer a contagem')
    } else {
        window.alert('Tudo ok!')
    }
 
}