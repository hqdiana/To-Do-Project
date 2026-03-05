// create empty array to contain the task list items and set current view to active list
let storedTask = [];

// locate html element that will contain the task list items
const taskList = document.querySelector('.taskList')

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
        }
    }) 

}; 
createTaskList();