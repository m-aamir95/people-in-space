const fetch = require("node-fetch");

const spacePeople = async () => {
    const api_url = "http://api.open-notify.org/astros.json";
    const result =  await fetch(api_url);
    const data = await result.json();
    return {
     count : data.number,
     people : data.people
    };
}


spacePeople()
.then(
    response => console.log(response.people)
)

module.exports = spacePeople;