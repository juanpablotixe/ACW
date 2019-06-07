const axios = require("axios");
const BASE_URL = "https://weather.com/en-in/weather/today/1/";

//latitud and longitud data for our three cities
const MONTEVIDEO_UY = "-34.90,-56.16";

// eslint-disable-next-line no-unused-vars
const LONDON_EN = "51.51,-0.13";
// eslint-disable-next-line no-unused-vars
const PUNE_IN = "18.52,73.86";

const getWeather = coords => axios.get(`${BASE_URL}${coords}`);

// eslint-disable-next-line no-unused-vars
function getMontevideo() {
    getWeather(MONTEVIDEO_UY)
        .then(result => {
            // eslint-disable-next-line no-console
            console.log("Montevideo, with promises");
            // eslint-disable-next-line no-console
            console.log(`Montevideo: ${result.data.length} bytes`);
        })
        // eslint-disable-next-line no-console
        .catch(error => console.log(error.message));
}
