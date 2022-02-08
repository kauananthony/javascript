function verificar() {
    let msg = document.querySelector('div#msg')
    let res = document.querySelector('div#res')
    let amigo = {nome: 'José',sexo: 'M',peso: 85.4, engordar(p=0) {
        res.innerHTML += `<p>Engordou!</p>`
        return this.peso += p
    } }
    amigo.engordar(2)
    res.innerHTML = `<p>${amigo.nome} pesa ${amigo.peso}Kg</p>`
}