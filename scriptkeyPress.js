let var1 = document.createElement("h1")
var1.innerText = "I am sushil chaubey"
document.body.appendChild(var1)

let inputBox = document.getElementById('input-box')
let display = document.getElementById('display')


// // adding a keypress event listener to the inputbox
inputBox.addEventListener('keypress', function(name) {
    display.innerText = "You have Pressed " + name.key
})