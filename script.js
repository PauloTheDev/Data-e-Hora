
function allSite(){

let hours = document.getElementById('hours')
let data = new Date()

if(data.getHours() < 10){
    if(data.getMinutes() < 10){
        hours.innerHTML = "0"+data.getHours()+":0"+data.getMinutes()
    } else{
        hours.innerHTML = "0"+data.getHours()+":"+data.getMinutes()
    }

} else{ 
    if(data.getMinutes() < 10){
    hours.innerHTML = data.getHours()+":0"+data.getMinutes()
} else{
    hours.innerHTML = data.getHours()+":"+data.getMinutes()
}}

let day = document.getElementById('day')
let daySem = data.getDay()
let month = data.getMonth()
let image = document.getElementById('image')

switch(daySem){
    case 0:
    daySem = 'Domingo'
    break
    case 1:
        daySem = 'Segunda'
        break
    case 2:
        daySem = 'Terça'
        break
    case 3:
        daySem = 'Quarta'
        break
    case 4:
        daySem = 'Quinta'
        break
    case 5:
        daySem = 'Sexta'
        break
    case 6:
        daySem = 'Sábado'
}

switch(month){
    case 0:
        month = 'Janeiro'
        break
    case 1:
        month = 'Fevereiro'
        break
    case 2:
        month = 'Março'
        break
    case 3:
        month = 'Abril'
        break
    case 4:
        month = 'Maio'
        break
    case 5:
        month = 'Junho'
        break
    case 6:
        month = 'Julho'
        break
    case 7:
        month = 'Agosto'
        break
    case 8:
        month = 'Setembro'
        break
    case 9:
        month = 'Outubro'
        break
    case 10:
        month = 'Novembro'
        break
    case 11:
        month = 'Dezembro'
        break
}


day.innerHTML = daySem + ', ' + data.getDate() + ' de ' + month

if(data.getHours() <= 12) {
    document.body.style.background = '#FFB200'
} else if(data.getHours() >= 18 && data.getHours() <= 20){
    document.body.style.background = '#DF4E00' 
    
} else if(data.getHours() >= 13){
    document.body.style.backgroundColor = '#FC7A00'
} else if(data.getHours() >= 21){
    document.body.style.background = '#010048'
    
    
} else if (data.getHours() >= 0 && data.getHours() <= 5){
    document.body.style.background = '#05012C'

    
    
} 

}

setInterval(allSite, 1)