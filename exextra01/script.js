let msg = document.querySelector('div#msg')
let res = document.querySelector('div#res')
let te = document.querySelector('input#txtte')
let vi = document.querySelector('input#txtvi')
let vc = document.querySelector('input#txtvc')
let valores = []
function calcular() {
    if(te.value.length == 0 || vi.value.length == 0 || vc.value.length == 0) {
        window.alert('Esta faltando dados!')
    } else {
        let valte = Number(te.value)
        let valvi = Number(vi.value)
        let valvc = Number(vc.value)
        valores.push(valte)
        valores.push(valvi)
        valores.push(valvc)
        if(valte >= 0 && valte <= 10 && valvi >= 0 && valvi <=10 && valvc >= 0 && valvc <= 10) {
            soma = 0
            for(let pos in valores) {
                soma += valores[pos]
            }
            if(soma / 3 >= 7) {
                msg.innerHTML = `<p><strong>Você Passou!</strong></p>`
            } else {
                msg.innerHTML = `<p><strong>Você Reprovou!</strong></p>`
            }
            res.innerHTML = `<p>a média será ${soma / 3}</p>`
        } else {
            window.alert('os valores estão fora do intervalo determinado!')
        }
    }
}