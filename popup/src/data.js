let data = "This is the data file"

module.exports = {
    setData: (newData) => { data = newData},
    getData: () => {return data}
}