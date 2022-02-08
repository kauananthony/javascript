function parimpar(n) {
    if(n % 2 == 0) {
        return 'par'
    } else {
        return 'impar'
    }
}
    let msg = window.document.querySelector('div#msg')
    let res = parimpar(223)
    msg.innerHTML = `${res}`