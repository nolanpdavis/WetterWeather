const rainy = require('../../assets/images/Rainy.jpg')
const caliSun = require('../../assets/images/CaliSun.jpg')
const cloudy = require('../../assets/images/Cloudy.jpg')

const rain = [200, 201, 202, 210, 211, 212, 221, 230, 231, 232, 300, 301, 302, 310, 311, 312, 313, 314, 321, 500, 501, 502, 503, 504, 511, 520, 521, 522, 531, 611, 612, 615, 616, 620, 701, 901]
const cloud = [771, 801, 802, 803, 804]

export function imgPicker(weather){
    if (rain.includes(weather)) {
        return rainy
    }
    else if (cloud.includes(weather)){
        return cloudy
    }
    else {
        return caliSun
    }
}
