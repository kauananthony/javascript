function calcular() {
    var num = window.document.getElementById('txtnum')
    var msg = window.document.getElementById('msg')
    var tab = window.document.getElementById('txttab')
    var resnum = Number(num.value)
    if (num.value.length == 0) {
        window.alert('Por Favor, Digite um número!')
    } else {
        var d = 1
        tab.innerHTML = ''
        /*for (var d = 1; d <= 10; d++) {
            var Item = window.document.createElement('option')
            var mul = resnum * d
            Item.text += `${resnum} X ${d} = ${mul} `
            tab.appendChild(Item)
            }*/
            while (d <= 10) {
                var Item = window.document.createElement('option')
                var mul = d * resnum
                Item.text += `${resnum} X ${d} = ${mul}`
                tab.appendChild(Item)
                d++
            }
        }
        //msg.innerHTML = `${tab}`
}