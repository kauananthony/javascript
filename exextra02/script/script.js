function calcular() {
    var a = window.document.querySelector('input#a')
    var b = window.document.querySelector('input#b')
    var c = window.document.querySelector('input#c')
    var vala = Number(a.value)
    var valb = Number(b.value)
    var valc = Number(c.value)
    var delta = (valb) ** 2 - 4 * vala * valc
    var num1 = - valb + (delta) ** (1/2)
    var num2 = - valb - (delta) ** (1/2)
    var den = 2 * vala
    var x1 = num1 / den
    var x2 = num2 / den

    res.innerHTML = `As Raízes da Equação são: x<sub>1</sub> = ${num1}/${den} e x<sub>2</sub> = ${num2}/${den} ou x<sub>1</sub> = ${x1} e x<sub>2</sub> = ${x2}`   
}