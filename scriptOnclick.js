let var1 = document.createElement("h1")
var1.innerText = "I am body of HTML"
    // document.body.appendChild(var1);
let par = document.getElementById("para-Modi-ji")

par.addEventListener("click", function() {
    par.innerText = "Modi was born and raised in Vadnagar in northeastern Gujarat, where he completed his secondary education. He was introduced to the RSS at age eight. He has reminisced about helping out after school at his father's tea stall at the Vadnagar railway station. At age 18, Modi was married to Jashodaben Chimanlal Modi, whom he abandoned soon after. "
})

let randomColor = () => {
        let var1 = "0123456789ABCDEF"
        let var2 = "#"
        for (let i = 0; i < 6; i++) {
            var2 = var2 + var1[Math.floor(Math.random() * 16)];
        }
        return var2;

    }
    // console.log(randomColor())

function changeRandomColor() {
    document.body.style.backgroundColor = randomColor();
}
document.addEventListener("click", changeRandomColor)