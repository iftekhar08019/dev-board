completedTasks("task-btn1", "task1-heading");
completedTasks("task-btn2", "task2-heading"); 
completedTasks("task-btn3", "task3-heading");
completedTasks("task-btn4", "task4-heading");
completedTasks("task-btn5","task5-heading");
completedTasks("task-btn6","task6-heading");

document.getElementById("clear-btn").addEventListener("click",
    function() {
        document.getElementById("activity-log").innerHTML = "";
    });

    document.addEventListener("DOMContentLoaded", function() {
        const now = new Date();
        const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        
        const dayName = days[now.getDay()] + ",";
        const monthName = months[now.getMonth()];
        const dayOfMonth = now.getDate();
        const year = now.getFullYear();
      
        document.getElementById("daySpan").textContent = dayName;
        document.getElementById("dateSpan").textContent = `${monthName} ${dayOfMonth} ${year}`;
      });
