let var1 = document.createElement("h1")
var1.innerText = "I am sushil chaubey"

// document.body.appendChild(var1)
let par = document.getElementById("Ratan-Id")
par.addEventListener("mouseout", () => {
    alert("You left the safe zone (mouse out event working properly)");
})