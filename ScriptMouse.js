let var1 = document.createElement("h1")
var1.innerText = "I am body of the HTML"
    // document.body.appendChild(var1)  only for check
let par = document.getElementById("class")
par.addEventListener("mouseover", () => {
    alert(
        "you entered in Restricted Area 🙅 (mouse over event is working properly)"
    );
})