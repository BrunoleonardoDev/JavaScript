function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // criança 
                genero = 'Criança'
                img.setAttribute('src', 'image/menino-negro.jpg')
            } else if (idade < 21){
                // jovem
                img.setAttribute('src', 'image/jovem-homem-negro.jpg')
                genero = 'Jovem'
            } else if (idade < 50){
                // adulto
                img.setAttribute('src', 'image/homem.jpg')
                genero = 'Adulto'
            } else {
                // idoso
                img.setAttribute('src', 'image/senhor.jpg')
                genero = 'Idoso'
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // criança 
                img.setAttribute('src', 'image/menina-negra.jpg')
                genero = 'Criança'
            } else if (idade < 21){
                // jovem
                img.setAttribute('src', 'image/jovem-mulher-negra.jpg')
                genero = 'Jovem'
            } else if (idade < 50){
                // adulto
                img.setAttribute('src', 'image/mulher.jpg')
                genero = 'Adulta'
            } else {
                // idoso
                img.setAttribute('src', 'image/senhora-negra.jpg')
                genero = 'Idosa'
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}