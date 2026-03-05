// create empty array to contain the task list items and set current view to active list
let storedTask = [];

// locate html element that will contain the task list items
const taskList = document.querySelector('.taskList')

// create function to render tasks on display
function renderTasks() {

    // set default html task list element as empty
    taskList.innerHTML = "";
    let tasksCounter = 0;

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
            taskList.appendChild(div);

        // if task is active, add a done button to it, else do not add it
            if (currentView === 'active') {
            var button = document.createElement('button')
            button.classList.add('doneBtn');
            button.textContent = '✔';
            div.appendChild(button);
            }
        }
    }
        // if the storage is empty display image based on progress
        if (tasksCounter === 0 && currentView === 'active') {
            // if no progress display add task img
            if (progress === 0) {
                var divEmpty = document.createElement('div');
                divEmpty.classList.add('emptyMessage');
            // if there is progress display add more task img
                taskList.appendChild(divEmpty);
            } else if (progress > 0) {
                var divEmpty = document.createElement('div');
                divEmpty.classList.add('addMore');
                taskList.appendChild(divEmpty);
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