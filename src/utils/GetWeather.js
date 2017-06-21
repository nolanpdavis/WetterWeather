import superagent from 'superagent'

export function getWeather(city, callback){

    superagent
    .get('https://crossorigin.me/http://api.openweathermap.org/data/2.5/forecast/daily?q='+city+'&cnt=7&units=imperial&appid=7c33083f5e2dd7eda0bf3020714ae680')
    .query()
    .set('Accept', 'application/json')
    .end((err, response) => {
        if(err){
            callback(err, null)
            return
        }
        callback(null, response.body)
    })
}
