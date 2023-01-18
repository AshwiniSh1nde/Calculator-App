

let outputScreen = document.getElementById("output-screen");

// Function that display value
function display(num) {
    outputScreen.value += num
}
// Function that perform calculation 
function calculate() {
    try {
        outputScreen.value = eval(outputScreen.value)
    }
    catch (error) {
        alert("Invalid Syntax")
    }
}
// Function that clear the screen
function clearAll() {
    outputScreen.value = ""
}
// Function that delete character one by one
function del() {
    outputScreen.value = outputScreen.value.slice(0, -1)
}

// For changing mode of webpage 
function changeMode(){
    
}