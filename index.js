// Add your code here

function submitData(name, email) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      name: name,
      email: email
    })
  })
    .then(resp => resp.json())
    .then(function(object) {
      document.body.innerHTML = object["id"];
    })
    .catch(function(error) {
      document.body.innerHTML = error.message;
    });
}

// function addElementId(obj) {
//   const p = document.body.createElement("p");
//   const node = document.createTextNode(JSON.stringify(obj[3]));
//   p.appendChild(node);
// }
