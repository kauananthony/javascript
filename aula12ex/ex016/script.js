function calcular() {
    var agora = new Date()
    var hora = agora.getHours()
    var a = window.document.querySelector('input#txta')
    var b = window.document.querySelector('input#txtb')
    var c = window.document.querySelector('input#txtc')
    var msg = window.document.querySelector('div#msg')
    var img = window.document.createElement('img')
    var res = window.document.querySelector('div#res')
    var da = Number(a.value)
    var db = Number(b.value)
    var dc = Number(c.value)
    var den = 2 * da
    var d = db ** 2 - 4 * da * dc
    var x1 = (- db + (d) ** (1 / 2)) / den
    var x2 = (- db - (d) ** (1 / 2)) / den
    if (hora >= 0 && hora < 12) {
        img.setAttribute('id', 'foto')
        img.setAttribute('src', 'manhã.png')
        //msg.innerHTML += `<p><strong>Bom Dia</strong></p>`
        msg.innerHTML = `<p>as raízes são <strong>${x1}</strong> e <strong>${x2}</strong></p><p>Bom Dia!</p>`
    } else if (hora >= 12 && hora < 18) {
        img.setAttribute('id', 'foto')
        img.setAttribute('src', 'tarde.png')
        //msg.innerHTML += `<p><strong>Boa Tarde</strong></p>`
        msg.innerHTML = `<p>as raízes são <strong>${x1}</strong> e <strong>${x2}</strong></p><p><strong>Boa Tarde!</strong></p>`
    } else if (hora >= 18 && hora < 24) {
        img.setAttribute('id', 'foto') 
        img.setAttribute('src', 'noite.png')
        //msg.innerHTML = `<p><strong>Boa Noite</strong></p>`
        msg.innerHTML = `<p>as raízes são <strong>${x1}</strong> e <strong>${x2}</strong></p><p><strong>Boa Noite!</strong></p>`
    }
    msg.style.textAlign = 'center'
    res.style.textAlign = 'center'
    msg.appendChild(img)
    res.innerHTML = `<p>são exatamente <strong>${hora} horas</strong></p>`
}