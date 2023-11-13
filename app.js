document.addEventListener("DOMContentLoaded", function() {

    const form = document.getElementById('searchForm');
    // const btn = document.getElementById('searchButton');
    const searchInput = document.getElementById('searchInput');

    //Add event listener to the form submission
    form.addEventListener('submit', (event) =>{
        event.preventDefault(); //Prevent default form submit 

        //Sanitize input for increased security
        const saniQuery = santizeInput(searchInput.value);

        //Create XMLHttpRequest object and open a GET request for php
        const req = new XMLHttpRequest();
        const link = saniQuery ? `superheroes.php?query=${saniQuery}` : "superheroes.php";
        req.open("GET", link, true);

        //Set onload event handler
        req.onload = function() {
            //If request is successfull
            if (req.status === 200) {
                //Get response text
                const response = req.responseText;
                //Get .result div 
                const results = document.querySelector('.result');
                
                //Display result
                results.innerHTML = response;

                // alert(avengersList);
            }
        };
        //Send request
        req.send();
    });

    //Function to sanitize user input - Alphanumeric and whitespace only
    function santizeInput(input) {
        return input.replace(/[^a-zA-Z0-9\s]/g, '').trim();
    }
});