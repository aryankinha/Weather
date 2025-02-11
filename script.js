const city = document.getElementById("text")
const btn = document.getElementById("btn")

const _city = document.getElementById("city")
const _temp = document.getElementById("temp")
const _condition = document.getElementById("condition")
const _humidity = document.getElementById("humidity")
const _windspeed = document.getElementById("windspeed")


function click_btn(value){
    let temp = value["current_condition"][0]["temp_C"];
    let humidity = value["current_condition"][0]["humidity"];
    let windSpeed = value["current_condition"][0]["windspeedKmph"];
    let type = value["current_condition"][0]["weatherDesc"][0]["value"];
    // console.log(temp,humidity,windSpeed,type);
    return [temp,humidity,windSpeed,type]
}

function assign(value,click_btn,a){
    let arr = click_btn(value)
    // console.log(arr);
    
    _city.innerText = a[0].toUpperCase() + a.slice(1,a.length)
    _temp.innerText = arr[0]
    _humidity.innerText = _humidity.innerText.slice(0,10) + `${arr[1]}%`
    _windspeed.innerText = _windspeed.innerText.slice(0,12) + `${arr[2]}km/h`
    _condition.innerText = arr[3]

}

btn.addEventListener("click" , () => {
    
    let a = city.value.trim()
    if (a == ""){
        alert("Enter a valid Name")
    }else{
        let api = fetch(`https://wttr.in/${a}?format=j1`)
        api.then( (value) => {
            return value.json()
        }).then( (val) => {

            assign(val,click_btn,a)
            // console.log(a);
            
        }).catch( (error) => {
            console.log(error)
        })
    }
})

// assign(click_btn)


