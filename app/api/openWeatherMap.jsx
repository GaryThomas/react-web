var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=953300f81becac97ca30af0f03fa768d&units=metric';

module.exports = {
    getTemp: function (location) {
      var encodedLocation = encodeURIComponent(location);
      var requestURL = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
      return axios.get(requestURL).then(function (res) {
        if (res.data.cod && res.data.message) {
          throw new Error(res.data.message);
        } else {
          return res.data.main.temp;
        }
      }).catch (function (err) {
        throw new Error(err.message);
      });
    }
};
