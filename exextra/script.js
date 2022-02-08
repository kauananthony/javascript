function calcular() {
    let data = new Date()
    let an = data.getFullYear()
    let ano = window.document.getElementById('txtano')
    let sal = window.document.getElementById('txtsal')
    let au = window.document.getElementById('txtau')
    let msg = window.document.getElementById('msg')
    let res = window.document.getElementById('res')
    let resano = Number(ano.value)
    let resal = Number(sal.value)
    let resau = Number(au.value)
    let resa = resau / 100
    let x = an - resano
    if (ano.value.length == 0 || sal.value.length == 0 || au.value.length == 0) {
        window.alert('[ERRO] coloque as TODAS as informações abaixo!')
    } else {
        //let mul = x * resa * sal
        for (let c = 1; c <= x; c++) {
            let mul = resal * (1 + resa) ** (c)
            let y = c + resano
            res.innerHTML += `<p>${y} é ${mul} por mês!</p>`
        }
    }
    res.innerHTML = 'seu salário em: '
}