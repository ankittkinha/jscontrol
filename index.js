let spacing = document.getElementById("spacing");
let blurr = document.getElementById("blur");
let baseColor = document.getElementById("base");

document.getElementById("img").style.border = `${spacing.value}px solid ${baseColor.value}`;
document.getElementById("img").style.filter = `blur(${blurr.value / 3}px)`;

spacing.addEventListener("input", function() {
    document.getElementById("img").style.border = `${spacing.value}px solid ${baseColor.value}`;
});

baseColor.addEventListener("input", function() {
    document.getElementById("img").style.border = `${spacing.value}px solid ${baseColor.value}`;
});

blurr.addEventListener("input", function() {
    document.getElementById("img").style.filter = `blur(${blurr.value / 3}px)`;
});





