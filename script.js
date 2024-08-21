let head = document.querySelector(".head");
let text = document.querySelector(".text");
let intervalId;
let startCount = 0;



// Function to Start the timer

const startTimer = () => {
    
    intervalId = setInterval(() => {
       head.innerText = startCount++;
    }, 1000);
}

// Function to stop the Timer

const stopTimer = () => {
   clearInterval(intervalId);
}


// Function to Reset the Timer

const resetTimer = () => {
    startCount = 0;
    head.innerText = startCount;
    clearInterval(intervalId);

}


// Function to Lap the Timer

const lapTimer = () => {
  let newPara = document.createElement("p");
  newPara.innerText = `The Lap Time is ${startCount - 1}`;
  text.append(newPara);
}


// Function to stop Lap the Timer

const stopLap = () => {
    text.innerHTML = "";
    startCount = 0;
    head.innerText = startCount;
    clearInterval(intervalId);
}

// Event Listeners

document.querySelector(".start").addEventListener("click", startTimer);
document.querySelector(".stop").addEventListener("click", stopTimer);
document.querySelector(".reset").addEventListener("click", resetTimer);
document.querySelector(".lap").addEventListener("click", lapTimer);
document.querySelector(".stop-lap").addEventListener("click", stopLap);
