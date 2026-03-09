// CREATE ANIMATION TO REVEAL TEXTS AFTER BUTTON CLICK
const btn = document.querySelector('.nextBtn');
const text = document.getElementById('messageText');

const messages = [
    "sometimes all we need is a little push, this is your little push",
    "so think about the small goals you'd want to achieve",
    "and then ask yourself...",
    "what reward would I offer myself once they are achieved?"
];

let index = 0;

btn.addEventListener('click', function() {

text.style.opacity = "0";

    setTimeout(() => {
        index = (index + 1) % messages.length;
        text.textContent = messages[index];

        requestAnimationFrame(() => {
            text.style.opacity = "1";  
        });
        
    }, 400);
});