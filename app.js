const inputNum = document.getElementById("input-num")
const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

convertBtn.addEventListener("click", function () {
    lengthEl.innerHTML = `${inputNum.value} meters = ${(inputNum.value * 3.281).toFixed(3)} feet | ${inputNum.value} feet = ${(inputNum.value / 3.281).toFixed(3)} meters`

    volumeEl.innerHTML = `${inputNum.value} liters = ${(inputNum.value * 0.264).toFixed(3)} gallons | ${inputNum.value} gallons = ${(inputNum.value / 0.264).toFixed(3)} liters`
})


/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/