const popUp = document.querySelector('.rewardPopup');
// establish base value of progress to 0 and no popUp showed
let progress = 0;
let popUpShown = false

addEventListener("DOMContentLoaded", displayStoredProgress); 

// create a function to retrieve stored progress and display it
function displayStoredProgress() {
    let parseProgress = JSON.parse(localStorage.getItem('storedProgress'));
    // if the storage has a value, display that stored value
    if (parseProgress !== null) {
        progress = parseProgress;
    // if the storage is empty let the progress be at 0
    } else if (parseProgress === null) {
        progress = 0;
    }
    enableProgressBar();
}; 

// select html element of the progress bar
const progressBar = document.querySelector('.progressBar');
// select html element of the done button
const doneBtn = document.querySelectorAll('.doneBtn');

// create function to update progress bar to match value in variable
function enableProgressBar() {
    // attach progress value as data attribute on the progress bar
   progressBar.setAttribute("data-progress", progress);
    // create and update css variable to change the bar visuals
   progressBar.style.setProperty('--progress', progress + '%');
}

// create a function to add +10 progress
function addProgress() {
    progress += 10;
    // cap it so the progress stops at 100
    if (progress > 100) progress = 100;

    enableProgressBar();

    // stringify and store progress value in local storage
    let storedProgress = JSON.stringify(progress);
    localStorage.setItem('storedProgress', storedProgress);

    if (progress === 100 && popUpShown === false) {
        popUp.style.visibility = 'visible';
        popUpShown = true;

        let userReward = document.createElement('p');
        userReward.classList.add('showReward');
        userReward.textContent = `: time to give yourself a gift: ${storedReward}`;
        popUp.appendChild(userReward);
    }
}

function resetProgress() {
    progress = 0;
    popUpShown = false;
    popUp.style.visibility = 'hidden';

    // stringify and store progress value in local storage
    let storedProgress = JSON.stringify(progress);
    localStorage.setItem('storedProgress', storedProgress);

    enableProgressBar();
}

enableProgressBar();