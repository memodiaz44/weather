import key  from './secret.js'


let input  = document.getElementById('input')
let searchButton = document.getElementById('button')
let showInfo = document.getElementsByClassName('conteinerInfo')
showInfo[0].setAttribute('id', 'mainddiv')
let divId = document.getElementById('mainddiv')
let loader = document.getElementById('load')

divId.style.marginTop = '20px'


function showLoad(){
     loader.classList.add('display')
    
}

function hideLoad(){
    loader.classList.remove('display')
}



input.addEventListener('input', ()=> {
console.log(input.value)
divId.innerHTML = ''
})
// http://api.weatherapi.com/v1/current.json?key=${key}&q=${input.value}&aqi=no

function getWeather () { 
  var apiURL = `/.netlify/functions/hello?keyword=${input.value}`;

fetch(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${input.value}&aqi=no`) 

.then(response => response.json())
.then(res => { 
    

   

   let celcius  = 'Temp' + ' ' + res.current.temp_c + " " + '°C'
   let Faren =  'Temp' + ' ' + res.current.temp_f + " " + '°F'
  
  if(divId.innerHTML == null){
    console.log('nl')
  }
   divId.innerHTML =  celcius

 let container = document.createElement('div')
 
   let toggleButton = document.createElement('button')
   toggleButton.style.color = 'white'
   toggleButton.style.background = 'grey'
   
   toggleButton.innerHTML = 'Cels/fahren'

   
   
    toggleButton.addEventListener('click', ()=> {


        
       if(divId.innerHTML.includes('°C')){
       
          
        divId.innerHTML = Faren
        console.log(divId.innerHTML)
        divId.appendChild(toggleButton)
       
       }else if(divId.innerHTML.includes('°F')){

        divId.innerHTML =  celcius
        console.log(divId.innerHTML)
        divId.appendChild(toggleButton)
        
       }else{
        divId.innerHTML = ''
       }
        
   
    })
    
    divId.appendChild(toggleButton)
   
}
)
.catch(function(error) {
    alert('unreconized location');
  })
} 




   
    searchButton.addEventListener('click', getWeather )
    
    

