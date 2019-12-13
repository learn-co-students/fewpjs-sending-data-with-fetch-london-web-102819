
//full construction of a POST request using fetch();
//first argument = still takes a string representing the URL destination;
//second argument = a JavaScript Object{}, which contains properties with certain values
//in order to change fetch() default behavior.
const submitData = (userName, userEmail)=> {
    const configObj={ 
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail
        })
    }

    return fetch("http://localhost:3000/users", configObj)
        .then(response => response.json())
        .then(obj=> document.body.innerHTML=obj.id)
        .catch(error=>document.body.innerHTML=error.message);
}



/*
____
//👇sending fetch() request AND handleing the returned response (reflects changes in DOM):
//To access this information, we use a series of calls to then() which are given function callbacks.
let formData = {
    dogName: "Byron",
    dogBreed: "Poodle"
  };
   
let configObj = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify(formData)
};
//notice the useage of .catch()
//when something goes wrong with a fetch(), the next catch() is called so the message work can be performed.
fetch("http://localhost:3000/dogs", configObj)
    .then(response=>response.json()) // == .then(function(response){ return respons.json();})
    .then(obj=>console.log(obj)) //== .then(function(obj){console.log(obj)});
    //👇 arrow function chaining:
    .catch(message=>console.log(message), alert("Check Your messages"));
____
*/







/*
👇 IT IS RUN AND PERSISTED! 
how to check: devTools _ Network; to filter: XHR, JS or etc.
//fetch(destinationURL, configurationObject)
configurationObject={
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify({
        dogName: "Byron",
        dogBreed: "Poodle"
    })
}
fetch ("http://localhost:3000/dogs",configurationObject);
*/

/*
👇further ABSTRACTION:
    let formData={
        dogName: "Byron",
        dogBreed: "Poodle",
    };

    let configObj={
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };

    fetch("http://localhost:3000/dogs", configObj);
*/


//long verbose way:
/*fetch("http://localhost:3000/dogs", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify({
    dogName: "Byron",
    dogBreed: "Poodle"
  })
});*/

//demo: arrow functions. for more, see discussion page: Arrow Functions;
//.then(objet => document.body.innerHTML=object[id])