// CREATE ANIMATION TO REVEAL TEXTS AFTER BUTTON CLICK
const btn = document.querySelector('.nextBtn');
const text = document.getElementById('messageText');
const reward = document.querySelector('.inputReward');


const messages = [
    "sometimes all we need is a little push, this is your little push",
    "so think about the small goals you'd want to achieve",
    "and then ask yourself...",
    "what reward would I offer myself once they are achieved?"
];

let index = 0;

window.addEventListener('load', () => {
    setTimeout(() => {
        text.style.opacity = "1";
    }, 5000);
});

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


