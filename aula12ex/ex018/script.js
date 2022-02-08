function verificar() {
    var data = new Date()
    /*var minuto = data.getMinutes()
    var hora = data.getHours()
    var segundo = data.getSeconds()
    var msg = window.document.getElementById('msg')
    msg.innerHTML = `<p>tempo ${hora}:${minuto}:${segundo}</p>`*/
    var ano = data.getFullYear()
    var idade = window.document.querySelector('input#txtida')
    var resano = Number(idade.value)
    var resida = ano - resano
    var img = window.document.createElement('img')
    var msg = window.document.getElementById('msg')
    var res = window.document.getElementById('res')
    if (resano == 0 || resano > ano) {
        window.alert('[ERRO]verifique as informações e tente novamente!')
     }  else {
        var fsex = window.document.getElementsByName('radsex')
        var gênero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'homem'
            if (resida > 0 && resida < 16) {
                //criança
                img.setAttribute('src', 'meninobebe.png')
                res.innerHTML = `<p>não vota!</p>`
            } else if (resida >= 16 && resida < 18) {
                //jovem
                img.setAttribute('src', 'jovemhomem.png')
                res.innerHTML = `<p>voto opcional!</p>`
            } else if (resida >= 18 && resida < 65) {
                //adulto
                img.setAttribute('src', 'adultohomem.png')
                res.innerHTML = `<p>voto obrigatório!</p>`
            } else if (resida >= 65) {
                //idoso
                img.setAttribute('src', 'velhohomem.png')
                res.innerHTML = `<p>voto opcional!</p>`
            }
        } else if (fsex[1]) {
            gênero = 'mulher'
            if (resida > 0 && resida < 16) {
                //criança
                img.setAttribute('src', 'bebemulher.png')
                res.innerHTML = `<p>não vota!</p>`
            } else if (resida >= 16 && resida < 18) {
                //jovem
                img.setAttribute('src', 'jovemmulher.png')
                res.innerHTML = `<p>voto opcional!</p>`
            } else if (resida >= 18 && resida < 65) {
                //adulto
                img.setAttribute('src', 'adultamulher.png')
                res.innerHTML = `<p>voto obrigatório!</p>`
            } else if (resida >= 65) {
                //idoso
                img.setAttribute('src', 'velhamulher.png')
                res.innerHTML = `<p>voto opcional!</p>`
            }
        }
        //res.style.textAlign = 'center'
        //res.innerHTML = `Detectamos ${gênero} com ${resida} anos`
        //res.appendChild(img)
    }
     msg.innerHTML = `<p>você nasceu em ${resano} de gênero ${gênero}</p>`
     res.style.textAlign = 'center'
     msg.style.textAlign = 'center'
     msg.appendChild(img)
}