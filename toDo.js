// create empty array to contain the task list items and set current view to active list
let storedTask = [];
let currentView = 'active';

// locate html element that will contain the task list items
const taskList = document.querySelector('.taskList')

// create a function to retrieve stored task list values and display them on load
window.onload = function displayStoredTasks () { 
    let parseTask = JSON.parse(localStorage.getItem('storedTask')); 

    if (parseTask === null) {
        storedTask = [];
    } else
        storedTask = parseTask;

    renderTasks();
}

// create function to render tasks on display
function renderTasks() {

    // set default html task list element as empty
    taskList.innerHTML = "";

    // loop through the task list array
    for (let i = 0; i < storedTask.length; i++) {

        // for each value of the array create needed html elements
            var div = document.createElement('div');
            var para = document.createElement('p');
            var paraDate = document.createElement('p');

        // attach stored ID to html element
            div.setAttribute('data-id', storedTask[i].id);

        // assign classes to said html elements to modify them later in css
            div.classList.add('taskItem');
            para.classList.add('taskName');
            paraDate.classList.add('taskDate')

        // add text content to display to each html element 
            para.textContent = storedTask[i].task;
            paraDate.textContent = storedTask[i].date; 

        // add childs elements to parents to display them
            div.appendChild(para);
            div.appendChild(paraDate);

        // if task is active, add a done button to it, else do not add it
            if (currentView === 'active') {
            var button = document.createElement('button')
            button.classList.add('doneBtn');
            button.textContent = '✔';
            div.appendChild(button);
            }
            taskList.appendChild(div);
        }
    }

// create a function to retrieve input values + store them 
function createTaskList() {
    // locate the add button
    let addButton = document.querySelector('.addTask');

    // add onclick listener on add button
    addButton.addEventListener('click', function() {

        // retrieve value of the task input field
        const taskInput = document.querySelector('.taskInput');
        const task = taskInput.value; 

        // set what each ID will be
        const taskId = Date.now();

        // retrieve value of the date input field
        const dateInput = document.querySelector('.dateInput');
        const date = dateInput.value;

        // push task and date input values in array + add nothing if input is empty
        const noDateError = document.querySelector('.noDateError');
        const existingError = noDateError.querySelector('.noDate');

        // if date input is empty display error message
        if (!date) {
            if (!existingError) {
                var noDate = document.createElement('p');
                noDate.textContent = "please add a date";
                noDate.classList.add('noDate');
                noDateError.appendChild(noDate);
            } return;
        } else {
            if (existingError)
                existingError.remove();
            }
    
            // if task date has inputs, push them in storedTask array and mark them as not completed
            if (task.trim().length > 0 && date.trim().length > 0) {
            storedTask.push( {id:taskId, task: task, date: date, completed:false} );

            // add array values to local storage
            let stringTask = JSON.stringify(storedTask);
            localStorage.setItem('storedTask', stringTask);

            // reset input fields to empty after the button is clicked
            taskInput.value = "";
            dateInput.value = "";

            renderTasks();
        }
    }) 

}; 
createTaskList();

// remove done button's div when done button is clicked
taskList.addEventListener('click', (e) => {
    if (e.target.classList.contains('doneBtn')) {
        
     // grab task element
    const taskElement = e.target.closest('.taskItem') 

    // convert dataset value into a number
    const clickedId = Number(taskElement.dataset.id)

    // loop through storedTask to see which one was clicked done
    for (let i = 0; i < storedTask.length; i++) {
        if (storedTask[i].id === clickedId) {
                storedTask.splice(i, 1);
                break;
            }
        }
    
        addProgress(10);

    // Stringify updated array
    let doneTask = JSON.stringify(storedTask); 

    // save updated string into localStorage
    localStorage.setItem('storedTask', doneTask);

    renderTasks();
    
    }
});

// create function for reset button that clears storage and task list when clicked
function clearList() {
    let resetBtn = document.querySelector('.resetBtn');
    resetBtn.addEventListener('click', function() {
        localStorage.clear();
        storedTask = [];
        currentView = 'active';
        renderTasks();
        resetProgress();
    })
};
clearList();
