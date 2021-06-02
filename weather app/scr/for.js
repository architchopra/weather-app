const key='HYKMuF8dGwLvq6f9Ja6JyfMeABDqhJ85'
const getcity=async(city)=>{
    const base='http://dataservice.accuweather.com/locations/v1/cities/search';
    const query=`?apikey=${key}&q=${city}`;
    const response=await fetch(base+query);
    const data= await response.json();
    return data[0];
};
const getweather=async(id)=>{
    const base='http://dataservice.accuweather.com/currentconditions/v1/';
    const query=`${id}?apikey=${key}`
    const response= await fetch(base+query);
    const data= await response.json()
    return data[0];
    
};


function getMyLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
        } else { 
          x.innerHTML = "Geolocation is not supported by this browser.";
        }
      }
      
     async function showPosition(position) {
          this.mylongitude = position.coords.longitude;
          this.myLatitude = position.coords.latitude;
          const value = position.coords.latitude + ',' +  position.coords.longitude;

          const base='http://dataservice.accuweather.com/locations/v1/cities/geoposition/search';
          const query=`?apikey=${key}&q=${value}`;
          const response=await fetch(base+query);
          const data= await response.json();
          const weatherdetails = await getweather(data.Key);
          const simplevalue= data.EnglishName + ' : ' + weatherdetails.Temperature.Metric.Value;
         cityName.innerHTML = simplevalue;
      }
    