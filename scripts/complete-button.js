completedTasks("task-btn1", "task1-heading");
completedTasks("task-btn2", "task2-heading"); 
completedTasks("task-btn3", "task3-heading");
completedTasks("task-btn4", "task4-heading");
completedTasks("task-btn5","task5-heading");
completedTasks("task-btn6","task6-heading");


document.getElementById("change-bg").addEventListener("click", function() {
    const randomColor = getRandomColor();
    document.getElementById("body-bg").style.backgroundColor = randomColor;
  });


document.getElementById("clear-btn").addEventListener("click",
    function() {
        document.getElementById("activity-log").innerHTML = "";
    });


