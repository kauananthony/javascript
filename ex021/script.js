let num = document.querySelector('input#txtnum')
let lista = document.querySelector('select#txtlista')
let msg = document.querySelector('div#msg')
let res = document.querySelector('div#res')
let valores = []
//let cres = valores.sort()
//let mai = valores.length - 1
let nume = Number(num.value)

function isNúmero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inilista(n, l) {
    if(l.indexOf(Number(n.value)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNúmero(num.value) && !inilista(num.value, valores)) {
        valores.push(Number(num.value))
        let Item = document.createElement('option')
        Item.text = `o valor ${num.value} adicionado`
        lista.appendChild(Item)
        /*for(let pos in valores) {
            res.innerHTML += `${valores[pos]}`
        }*/
        res.innerHTML = ''
    } else {
        window.alert('o valor é inválido ou já encontrado na lista!')
    }
    num.value =''
    num.focus()
}

function finalizar() {
    if(valores.length == 0) {
        window.alert('adicione valores antes de finalizar!')
    } else {
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        for(let pos in valores) {
            soma += valores[pos]
            if(valores[pos] > maior) {
                maior = valores[pos]
            }
            if(valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        res.innerHTML += `Ao todo temos ${valores.length} números cadastrados: `
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${soma / valores.length}</p>`
    }
    /*for(let pos in valores) {
        res.innerHTML += `${valores[pos]} `
    }*/
}