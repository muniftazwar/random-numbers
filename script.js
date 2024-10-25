let interval;
let running = false;

document.getElementById("startStopBtn").addEventListener("click", function () {
    const numberElement = document.getElementById("number");

    if (!running) {
        // Start generating random numbers
        interval = setInterval(function () {
            const randomNumber = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
            numberElement.textContent = randomNumber;
        }, 100); // Update every 100 milliseconds
        this.textContent = "Stop";
        running = true;
    } else {
        // Stop generating random numbers
        clearInterval(interval);
        this.textContent = "Start";
        running = false;
    }
});