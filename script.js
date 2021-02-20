const startingNumberOfColors = 5;
// Color values need to be _this_ amount of different
// This is in a 0 - 255 range
const colorCloseness = 5;

const makeDivWithBackgroundColor = color => {
    const div = document.createElement("div");
    const hex = toHex(color);
    const hexInverse = toHex(getInverseOfColor(color));
    div.textContent = `#${hex}`;
    div.style.backgroundColor = `#${hex}`;
    div.style.color = `#${hexInverse}`;
    document.querySelector(".colors").appendChild(div);
};

const generateAndDisplay = number => {
    document.querySelector(".colors").innerHTML = "";
    generateNDifferentColors(number).forEach(makeDivWithBackgroundColor);
};

document.querySelector(".number").value = startingNumberOfColors;
generateAndDisplay(startingNumberOfColors);

document.querySelector("form").addEventListener("submit", event => {
    event.preventDefault();
    const amount = document.querySelector(".number").value;
    generateAndDisplay(amount);
});