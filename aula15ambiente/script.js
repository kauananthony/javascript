function verificar() {
    let num = [5, 8, 2, 9, 3]
    let b = num.push(1)
    let a = num.sort()
    //let msg = window.document.getElementById('msg')
    let res = window.document.getElementById('res')
    //msg.innerHTML = `O valor tem ${num.length} posições`
    //msg.innerHTML += `o primeiro valor do vetor é ${a}`
    /*for(let pos = 0; pos < num.length; pos++) {
        msg.innerHTML += ` A posição ${pos} tem o valor ${a[pos]} `
    }*/
    /*for(let pos in num) {
        msg.innerHTML += `A posição ${pos} tem o valor ${a[pos]} `
    }*/
    let c = num.indexOf(8)
    if(c == -1) {
        res.innerHTML = `o valor não foi encontrado!`
    } else {
        msg.innerHTML += `o valor 8 ta na posição ${c} `
    }
}