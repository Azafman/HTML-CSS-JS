var corpo = document.getElementsByTagName('body')[0]
corpo.style.background = 'black'
corpo.style.fontFamily ='arial'
corpo.style.fontSize = '15pt'
var tit = document.createElement('h1')
tit.innerHTML = 'Tabuada'
tit.style.color = 'white'
tit.style.textAlign = 'center'
corpo.appendChild(tit)

var secao = document.createElement('section')
corpo.appendChild(secao)
secao.style.width = '500px'
secao.style.margin = 'auto'
secao.style.background = '#606060'
secao.style.padding = '17px'
secao.style.borderRadius = '10px'

//criando uma div para entrada de dados
var div = document.createElement('div')
secao.appendChild(div)
var input = document.createElement('input')
var gerar = document.createElement('input')
input.setAttribute('type','number')
gerar.setAttribute('type','button')
gerar.setAttribute('value','Gerar Resultado')
gerar.setAttribute('onclick','calctab()')
div.innerHTML = 'Número: '
div.appendChild(input)
div.appendChild(gerar)
//criando uma div para saída de Dados

var div1 = document.createElement('div')
secao.appendChild(div1)
div1.style.marginTop = '10px'
var select = document.createElement('select')
select.setAttribute('size','10')
div1.appendChild(select)
let optiontxt = document.createElement('option')
optiontxt.text = 'Digite um número acima!'
select.appendChild(optiontxt)   

function calctab(){
    var txtnum = document.getElementsByTagName('input')[0]
    if(txtnum.value.length == 0){
        alert('[ERRO] - Digite um número para criação de uma tabuada.')
    }else{
        var num = Number(txtnum.value)
        let cont = 0
        //select.removeChild(optiontxt)
        select.innerHTML = ''
        //ao clicar o botão tudo o que for html dentro do select receberá ('nada') como valor
        do {
            cont++
            var optionconta = document.createElement('option')            
            optionconta.text    = `${cont} X ${num} = ${cont*num}`
            select.appendChild(optionconta)
        }while(cont<=9)
    }
}


var rodape = document.createElement('footer')
var p = document.createElement('p')
p.innerHTML = '©Curso em Vídeo'
rodape.style.color = 'white'
rodape.style.textAlign = 'center'
rodape.appendChild(p)
corpo.appendChild(rodape)



