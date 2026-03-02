const colors = ["red", "blue", "green", "purple", "orange", "yellow"]; // Array of colors to choose from

function changeColor() { // changeColor function to change the background color randomly
    const randomIndex = Math.floor(Math.random() * colors.length); // Generate a random index to select a color from the array
    document.body.style.backgroundColor = colors[randomIndex]; // Set the background color of the body to the randomly selected color
}

let intervalId; // Store the interval ID so that we can clear it later when stopping the flicker

document.getElementById("start").addEventListener("click", function () {
    intervalId = setInterval(changeColor, 300); // Start the color flicker by calling changeColor every 300 milliseconds and store the interval ID
});

document.getElementById("stop").addEventListener("click", function () { // Stop the color flicker by clearing the interval using the stored interval ID
    clearInterval(intervalId);
});