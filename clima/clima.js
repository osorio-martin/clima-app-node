const axios = require ('axios');


const getClima = async (lat, lng)=>{

    const resp = await axios.get (`https://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lng}&cnt=10&appid=50408ba19ad51e61786a577fda026efd&units=metric`)

    return resp.data.main.temp;
   
}

module.exports={
    getClima
}

