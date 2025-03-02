
 const discoverButton = document.getElementById("discover-btn");

    if (discoverButton){
        discoverButton.addEventListener("click", 
            function(e) {
                window.location.href = "discover.html";
            });
    }
    else{
        document.getElementById("back-btn").addEventListener("click", 
            function(e) {
                window.location.href = "index.html";
            });
    }


