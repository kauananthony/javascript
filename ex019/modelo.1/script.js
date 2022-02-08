function calcular() {
    let ini = window.document.getElementById('txtin')
    let fi = window.document.getElementById('txtfi')
    let pas = window.document.getElementById('txtpas')
    let msg = window.document.getElementById('msg')
    let res = window.document.getElementById('res')
    /*let i = Number(ini.value)
    let f = Number(fi.value)
    let p = Number(pas.value)*/
    if (pas.value.length == 0 || ini.value.length == 0 || fi.value.length == 0) {
        window.alert('[ERRO] faltam dados!')
        msg.innerHTML = 'imposível contar!'
    } else {
        let i = Number(ini.value)
        let f = Number(fi.value)
        let p = Number(pas.value)
        msg.innerHTML = `Contando: <br>`
        if (p <= 0) {
            window.alert('Passo inválido Considerando o PASSO 1')
            p = 1
        }
        // Contagem Progressiva
        if (i < f) {
            /*for (let c = i; c <= f; c += p) {
                msg.innerHTML += `${c} \u{1F449}	 `
            }
            msg.innerHTML += `\u{1F3C1}`*/
            let c = i
            while (c <= f) {
                msg.innerHTML += `${c} \u{1F449}     `
                c += p
            }        
            msg.innerHTML += `\u{1F3C1}          `
        } else {
            // Contagem Regressiva
            /*for(let c = i; c >= f; c -= p) {
                msg.innerHTML += `${c} \u{1F449}`
            }*/
            let c = i
            while (c <= f) {
                msg.innerHTML += `${c} \u{1F449}     `
                c += p
            }
            msg.innerHTML += `\u{1F3C1}          `
        }
        /*for (let c = i; c <= f; c += p) {
            msg.innerHTML += `${c} \u{1F449}	 `
        }*/
        //msg.innerHTML += `\u{1F3C1}`
    }
    res.style.textAlign = 'center'
    msg.style.textAlign = 'center'
}