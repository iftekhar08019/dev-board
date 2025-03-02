function currentTime(){
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // Convert hour '0' to '12'
    const formattedTime = hours.toString().padStart(2, '0') + ':' +
                          minutes.toString().padStart(2, '0') + ':' +
                          seconds.toString().padStart(2, '0') + ' ' + ampm;
    
                          return formattedTime;
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    // Generate a random 6-digit hexadecimal color code
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

function isDisabled(){
    const button1 = document.getElementById("task-btn1");
    const button2 = document.getElementById("task-btn2");
    const button3 = document.getElementById("task-btn3");
    const button4 = document.getElementById("task-btn4");
    const button5 = document.getElementById("task-btn5");
    const button6 = document.getElementById("task-btn6");
    if (button1.disabled && button2.disabled && button3.disabled && button4.disabled && button5.disabled && button6.disabled) {
    alert("congrats!!! You have completed all the current task");
    }
}

function completedTasks(buttonID, headingID){
    document.getElementById(buttonID).addEventListener("click", 
        function(e) {
            
            const taskAssigned = parseInt(document.getElementById("task-assigned").innerText);
            const taskCompleted = parseInt(document.getElementById("task-completed").innerText);
    
            alert("Board updated successfully");
            isDisabled();
            document.getElementById(buttonID).setAttribute("disabled", "disabled");
            const newTaskAssigned = taskAssigned - 1;
            const newTaskCompleted = taskCompleted + 1;
            document.getElementById("task-assigned").innerText = "0"+newTaskAssigned;
            document.getElementById("task-completed").innerText = newTaskCompleted;
    
        // Get the current time and format it
        const time = currentTime();    
        // Get the title from the card (adjust the selector as needed)
        const cardTitle = document.getElementById(headingID).innerText;
        
        // Create a new div element for the activity log
        const newLog = document.createElement("div");
        newLog.classList.add("bg-slate-200", "p-3", "rounded-lg");
        newLog.innerText = `You have completed the task ${cardTitle} at ${time}`;
        
        // Append the new log entry to the activity log container
        document.getElementById("activity-log").appendChild(newLog);
        isDisabled();
    } 
    );
}
