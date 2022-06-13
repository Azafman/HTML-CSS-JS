let valores=[]
let arrayval=[] 
var num = 0
var select = document.querySelector('select#objsele')
var article = document.createElement('article')
var local = document.querySelector('div#result')
let p1 = document.createElement('p')
let p2 = document.createElement('p')
let p3 = document.createElement('p')
let p4 = document.createElement('p')
let p5 = document.createElement('p')
var txt = document.querySelector('input#cxnum')
txt.focus()

function existente(n){
    if(valores.indexOf(Number(n))==-1){
        return true
    }else{
        return false
    }
}
function adc() {
    if(conferetext(txt.value)==false || confereintervalo(txt.value)==false){
        window.alert('Digite um número entre 1 e 100.')
    }else if(existente(txt.value)==false){
        confirm('Não digite números repetidos!')
    }else{
        num = Number(txt.value)
        valores.push(num)
        var option = document.createElement('option')
        option.text = `Valor ${num} adicionado`
        select.appendChild(option)
        txt.value=''
        txt.focus()
        if(arrayval.length==valores.length)
        {
            //nada
        }else{
            local.innerHTML=''
            p1.innerHTML=''
            p2.innerHTML=''
            p3.innerHTML=''
            p4.innerHTML=''
            p5.innerHTML=''
        }
        for(let cont in valores)
        {
            arrayval[cont]=valores[cont]
        }
    }
}
function exporinformacoes() {
   if(valores[0]==undefined){
       confirm('Digite ao menos um valor antes de realizar esta função.')
   }else{
       
            local.appendChild(article)
            local.innerHTML=''
            var soma=0
            for(let cont in valores){
                soma += Number(valores[cont])
            }
                    
                    p1.innerHTML = `Ao todo temos ${valores.length} números cadastrados`
                    sorteie()
                    
                    p2.innerHTML = `O maior valor cadastrado foi ${valores[valores.length-1]}`
                    
                    p3.innerHTML = `O menor valor cadastrado foi ${valores[0]}`
                    
                    p4.innerHTML = `A soma de todos os números cadastrados é ${soma}`
                    
                    p5.innerHTML = `A média dos número cadastrados é ${soma/(Number(valores.length))}`
                    article.appendChild(p1)
                    article.appendChild(p2)
                    article.appendChild(p3)
                    article.appendChild(p4)
                    article.appendChild(p5)
                    local.appendChild(article)
        
   }
}
function sorteie(){
    let cont1=0
    while(cont1<valores.length)
    {    
        for(let cont=0;cont<=valores.length;cont++)
        {
            if(valores[cont]>valores[cont+1])
            {
                let x = valores[cont]
                let y = valores[cont+1]
                valores[cont]=y
                valores[cont+1]=x
            }
        }
        cont1++
    }
}
function conferetext(texto)
{
    if(texto.value == 0){
        return false
    }else{
        return true
    }
}
    function confereintervalo(numero) {
        if(Number(numero)>=1 && Number(numero)<=100) {
            return true
        }else{
            return false
        }
    }