let spacing = document.getElementById("spacing");
let blurr = document.getElementById("blur");
let baseColor = document.getElementById("base");


// const baseColorFunc = () => {
//     console.log(baseColor.value)
//     console.log(baseColor)
//     console.log("Color changed")
// }
// baseColor.addEventListener("input", baseColorFunc())

// const blurFunc = () => {
//     console.log(blur.value)
//     console.log(blur)
// }
// blur.addEventListener("input", blurFunc())

document.getElementById("img").style.border = `${spacing.value}px solid ${baseColor.value}`
document.getElementById("img").style.filter = `blur(${blurr.value / 3}px)`

spacing.addEventListener("input", function() {
    console.log("Spacing Event fired")
    console.log(spacing.value)
    document.getElementById("img").style.border = `${spacing.value}px solid ${baseColor.value}`
})

baseColor.addEventListener("input", function() {
    console.log("BaseColor Event fired")
    console.log(baseColor.value)
    document.getElementById("img").style.border = `${spacing.value}px solid ${baseColor.value}`
    // baseColor = baseColor.value
})

blurr.addEventListener("input", function() {
    console.log("Blur Event fired")
    console.log(blurr.value)
    document.getElementById("img").style.filter = `blur(${blurr.value / 3}px)`
})





