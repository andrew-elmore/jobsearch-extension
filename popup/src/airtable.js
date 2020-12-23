const axios = require('axios')

module.exports =  axios.create({
    baseURL: 'https://api.airtable.com/v0/appoR0swQZmi0Ov5e',
    headers: {
        Authorization: "Bearer keyHyLPdaCbr7AoxH"
    }
})