function notification () {
    let tasks = document.querySelectorAll('.taskItem');
    let taskCount = tasks.length;

    if (taskCount > 0) { 
        document.title = `(${taskCount}) Tasks`
    } 
    else document.title = 'Progress Tracker';
}

notification();