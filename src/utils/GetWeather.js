import superagent from 'superagent'
require('dotenv').load()

export function getWeather(city){

    superagent
    .get('http://api.openweathermap.org/data/2.5/forecast/daily?q='+city+'&cnt=7&units=imperial&appid=7c33083f5e2dd7eda0bf3020714ae680')
    .query()
    .set('Accept', 'application/json')
    .end((err, response) => {
        if(err)
            alert(err)
        console.log("API Request: "+JSON.stringify(response.body))
    })
}
