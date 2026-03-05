// establish base value of progress to 0
let progress = 0;

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
}

enableProgressBar();