document.addEventListener('DOMContentLoaded', function () {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(json => {
            // Use map to create an array of list item strings
            var listItems = json.map(user => {
                return `<li>${user.name} - ${user.address.zipcode}</li>`;
            });

            // Create the user list by joining the list item strings
            var userListHTML = `<ul>${listItems.join('')}</ul>`;

            // Append the user list to the container3 label
            document.getElementById('userListContainer').innerHTML = userListHTML;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});

function tosearch()
{

    var searchText = document.getElementById("info").value.toLowerCase();
    
    // Get all list items
    var listItems = document.querySelectorAll("#userListContainer li");

    // Loop through each list item
    listItems.forEach(function(item) {
        var text = item.textContent.toLowerCase();
       
        if (text.includes(searchText)) {
           
            item.style.display = "block";
        } else {
           
            item.style.display = "none";
        }
    });


    // var userinput = document.getElementById("info").value
    // if(userinput.trim() === "" ){
    //         alert("Write Something !!!")
    // }


}

