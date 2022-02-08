function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var ida = window.document.getElementById('txtida')
    var vel = window.document.getElementById('txtvel')
    var resi = ano - Number(ida.value)
    var resv = Number(vel.value)
    var msg = window.document.getElementById('msg')
        if (resv > 60 && resi > 18) {
        msg.innerHTML = `<p><strong>MULTADO!</strong>, por excesso de velocidade</p>`
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
        img.setAttribute('src', 'veiculorapido.png')
    } else if (resi < 18) {
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
        msg.innerHTML = `<p>Você não tem idade para dirigir!</p>`
        img.setAttribute('src', 'garotodirigindo.png')
        }
    msg.style.textAlign = 'center'
    msg.appendChild(img)
    msg.innerHTML = `<p>a sua velocidade é de ${resv}Km/h, de gênero ${gênero} com ${resi} anos</p>`
}