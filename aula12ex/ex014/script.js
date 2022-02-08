function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `<p>Agora são <strong>${hora} horas</strong></p>`
   if (hora >= 0 && hora < 12){
    //msg.innerHTML += `<p>Bom dia!</p>`
    img.src = 'manhã.png'
    document.body.style.background = '#f18346'
  } else if ( hora >= 12 && hora < 18) {
    //msg.innerHTML += `<p>Boa Tarde!</p>`
    document.body.style.background = '#a66464'
    img.src = 'tarde.png'
  } else if (hora >= 18 && hora < 24)  {
    //msg.innerHTML += `<p>Boa Noite!</p>`
    img.src = 'noite.png'
    document.body.style.background = '#29397e'
  }
}