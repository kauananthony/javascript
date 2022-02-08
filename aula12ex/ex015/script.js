function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    var res = window.document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value > ano)) {
        window.alert('[ERRO] verifique os dados e tente novamente!')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `idade calculada ${idade}`
        var gênero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'homem'
            if (idade >= 0 && idade <= 10) {
                //criança
                img.setAttribute('src', 'meninobebe.png')
            } else if (idade >= 10 && idade < 21) {
                //jovem
                img.setAttribute('src', 'jovemhomem.png')
            } else if (idade >= 21 && idade < 50) {
                //adulto
                img.setAttribute('src', 'adultohomem.png')
            } else if (idade >= 50) {
                //idoso
                img.setAttribute('src', 'velhohomem.png')
            }
        } else if (fsex[1]) {
            gênero = 'mulher'
            if (idade >= 0 && idade <= 10) {
                //criança
                img.setAttribute('src', 'bebemulher.png')
            } else if (idade >= 10 && idade < 21) {
                //jovem
                img.setAttribute('src', 'jovemmulher.png')
            } else if (idade >= 21 && idade < 50) {
                //adulto
                img.setAttribute('src', 'adultamulher.png')
            } else if (idade >= 50) {
                //idoso
                img.setAttribute('src', 'velhamulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    }
}