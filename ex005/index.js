function somar(){
    let n1 = document.getElementById('num')
    let n2 = document.getElementById('num2')
    let res1 = Number(n1.value)
    let res2 = Number(n2.value)
    let s = document.getElementById('box')
    let soma = res1 + res2

    box.innerHTML = `A soma entre ${res1} e ${res2} é ${soma}`
}