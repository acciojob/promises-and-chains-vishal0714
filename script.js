//your JS code here. If required.
 let myAge = document.querySelector('#age');
let myName = document.querySelector('#name');
let submit = document.querySelector('#btn');

submit.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent form submission

    if (myAge.value.trim() === "" || myName.value.trim() === "") {
        alert("Please enter valid details");
        return; // Exit early if validation fails
    }

    let myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (myAge.value >= 18) {
                resolve(`Welcome, ${myName.value}. You can vote.`);
            } else {
                reject(`Oh sorry ${myName.value}. You aren't old enough.`);
            }
        }, 4000);
    });

    myPromise
        .then(message => alert(message))
        .catch(message => alert(message));
});