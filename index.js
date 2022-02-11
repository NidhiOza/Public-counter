//document.getElementById("a").innerHTML = 5;

//camelCase
let saveEn = document.getElementById("save-en") 
let counta = document.getElementById("a")    //pass in argument

let count = 0
function increment() {
    count = count + 1
    counta.innerText = count
}

function save() {
    let countStr = count + " - "
    saveEn.textContent += countStr
    counta.textContent = 0
    count = 0
}

