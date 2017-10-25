import superagent from 'superagent'

export function getWeatherByLatLng(latLng, callback){

    superagent
    .get('https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast/daily?lat=' + latLng.lat + '&lon=' + latLng.lng + '&cnt=10&units=imperial&appid=7c33083f5e2dd7eda0bf3020714ae680')
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
