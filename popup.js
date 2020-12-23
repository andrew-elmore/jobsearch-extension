const jobData = require("./jobData.js")

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    const button = document.getElementById('HelloWorldButton')
    console.log(button)
    button.addEventListener("click", function () {
       jobData.test()
    });
});

