// window.addEventListener('DOMContentLoaded', () => {
//   submitData("qing", "qing@gmail.com");
// });

function submitData(name, email) {
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: name,
      email: email
    })
  };

  return fetch('http://localhost:3000/users', configurationObject)
    .then(resp => resp.json())
    .then(insertIntoDom)
    .catch(error => insertIntoDom(error.message));
}

function insertIntoDom(data) {
  const paragraph = document.createElement('p');
  const body = document.querySelector('body');
  paragraph.textContent = JSON.stringify(data);
  body.append(paragraph);
}


