// CREATE ANIMATION TO REVEAL TEXTS AFTER BUTTON CLICK
const btn = document.querySelector('.nextBtn');
const text = document.getElementById('messageText');
const reward = document.querySelector('.inputReward');

const userInput = document.querySelector('.userInput');

const startButton = document.querySelector('.start');

const messages = [
    "sometimes all we need is a little push, this is your little push",
    "so think about the small goals you'd want to achieve",
    "and then ask yourself...",
    "what reward would I offer myself once they are achieved?"
];

let index = 0;
let storedReward = '';

// if a reward input already exists, direct user to toDo.html 
existingReward = localStorage.getItem('storedReward') 
    if (existingReward != null){
        window.location.href = "toDo.html"
    };

// add listener on page load to animation first welcome message
window.addEventListener('load', () => {
    setTimeout(() => {
        text.style.opacity = "1";
    }, 5000);
});

// add listener on button to slide the welcome messages
btn.addEventListener('click', function() {
    text.style.opacity = "0";
    setTimeout(() => {
        index++;

        if (index >= messages.length) {
            index = messages.length - 1;
        }
        text.textContent = messages[index];
        requestAnimationFrame(() => {
            text.style.opacity = "1";  
        });

        if (index === messages.length - 1) {
        btn.style.display = "none";
        setTimeout(() => {
          reward.style.opacity = "1"; 
          reward.style.pointerEvents = "all"; 
        }, 1000) 
        }
    }, 400);
}); 

// add reward input into local storage
startButton.addEventListener('click', function() {
    let reward = storedReward = userInput.value;
    localStorage.setItem('storedReward', reward);
});


