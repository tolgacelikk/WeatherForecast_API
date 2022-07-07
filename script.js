const url='https://api.openweathermap.org/data/2.5/'
const key='89104279476eb278d355121a6b569add'
let city=document.querySelector('.city')
let temp=document.querySelector('.temp')
let desc=document.querySelector('.desc')
let minmax=document.querySelector('.minmax')
const setQuery=(e)=>{
    
    if(e.keyCode == '13')
    getResult(searchBar.value)
    
    

}
getResult=(cityName)=>{
    let query=`${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
    console.log(query)
    fetch(query)
    .then(weather=>{
        return weather.json()
    })
    .then(displayResult)
    
}
const displayResult=(response)=>{
    
    
    city.innerText=`${response.name},${response.sys.country}`   
    city.style.opacity=1

    temp.innerText=`${response.main.temp}°C`
    temp.style.opacity=1
    console.log(response)
    
    desc.innerText=`${response.weather[0].description}`
    desc.style.opacity=1
   
    minmax.innerText=`${response.main.temp_min}/${response.main.temp_max}`
    minmax.style.opacity=1
  

}
const searchBar=document.getElementById('searchBar')
searchBar.addEventListener('keypress',setQuery)