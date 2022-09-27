function loading(){
    var msg = window.document.getElementById ('msg')
    var img = window.document.getElementById ('foto')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${min} min.`
    if(hora >= 0 && hora < 12) {
        // Bom Dia 
        img.src = 'image/dia.jpg'
        document.body.style.background = '#bccf08'
    } else if(hora >= 12 && hora <= 18) {
        // Boa Tarde
        img.src = 'image/tarde.jpg'
        document.body.style.background = '#c54a2e'
    } else{
        // Boa Noite
        img.src = 'image/noite.jpg'
        document.body.style.background = '#470239'
    }

}