function soma(n1=0, n2=0) {
    return n1 + n2
}
    let msg = document.querySelector('div#msg')
    let res = soma(7)
    msg.innerHTML = `${res}`