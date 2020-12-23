const data = require('./data')

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    const button = document.getElementById('HelloWorldButton')
    button.addEventListener("click", function () {
        document.getElementById('pTag').innerText = data.getData()
    });
});

