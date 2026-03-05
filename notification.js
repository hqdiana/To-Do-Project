function notification () {
    let tasks = document.querySelectorAll('.taskItem');
    let taskCount = tasks.length;

    if (taskCount > 0) { 
        document.title = `(${taskCount}) Tasks`
    } 
    else document.title = 'Progress Tracker';

    setFlashing();
}

let flashing = null;

function setFlashing () {   
    if (flashing !== null) return;

        flashing = setInterval(function() {
            let tasks = document.querySelectorAll('.taskItem');
            let taskCount = tasks.length;

            if (taskCount > 0) {
                if (document.title === 'Progress Tracker') { 
                    document.title = '(' + taskCount + ') Tasks'; 
                } else { document.title = 'Progress Tracker'; }
            }

            else {
            clearInterval(flashing);
            flashing = null;
            document.title = 'Progress Tracker';
                }
        }, 1500)
}

notification();