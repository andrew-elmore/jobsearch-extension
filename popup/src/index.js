const data = require('./data')
const airtable = require("./airtable.js")

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    const button = document.getElementById('HelloWorldButton')
    console.log(chrome)
    button.addEventListener("click", async function () {
        const res = await airtable.get('/currentData')
        document.getElementById('pTag').innerText = data.getData()
    });
});

