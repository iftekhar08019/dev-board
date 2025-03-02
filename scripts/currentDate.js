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
