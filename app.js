//Add event listener to the search button
document.getElementById("searchButton").addEventListener("click", function() {

    //Create XMLHttpRequest object and open a GET request for php
    const req = new XMLHttpRequest();
    req.open("GET", "superheroes.php", true);

    //Set onload event handler
    req.onload = function() {
        //If request is successfull
        if (req.status === 200) {
            //Get response text
            const avengersList = req.responseText;   
            //Display list
            alert(avengersList);
        }
    };
    //Send request
    req.send();
    });
