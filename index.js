// Add your code here
function submitData(name, email) {

    let formData = {name: name, email: email};

    let configObj = {
        method: "POST", 
        headers: {
            "Content-Type": "application/json", 
            "Accept": "application/json"}, 
        body: JSON.stringify(formData)
    };
 
    return fetch("http://localhost:3000/users", configObj)
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            document.body.innerHTML = response[ "id" ]
        })
        .catch(function(error) {
            // alert("Bad things! Ragnarők!");
            document.body.append(error.message);
        });

}
