function fatorial(n) {
    let fat = 1
    for(let c = n; c > 0; c--) {
        fat *= c
    }
    return fat
}
    let msg = document.querySelector('div#msg')
    msg.innerHTML = `${fatorial(5)}`
// 5! = 5 x 4 x 3 x 2 x 1