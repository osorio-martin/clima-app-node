const axios = require('axios').default;


const getLugarLatLng = async (dir) =>{

   
    const encodedUlr = encodeURI(dir);
    
    console.log(encodedUlr);
    
    const instance = axios.create ({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?/location=${encodedUlr}`,
        headers: {'X-RapidAPI-Key': '9ca354cce3mshfca18356f851e61p1e3828jsn9a8fd88222f0'}
      });
    
    const resp = await instance.get();
      if (resp.data.Results.length === 0){
          throw new Error(`No hay resultados para ${dir}`);
      }
    
    
    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;
    

    return {
        direccion,
        lat,
        lng
    }
}   

module.exports = {
    getLugarLatLng
};

   // instance.get ()
    //             .then (resp => {
    //               console.log(resp);  
    //               //console.log(resp.data.Results[0]);
                
    //             })
    //             .catch (err => {
    //                 console.log('ERROR!!!!', err);
    //             });
  