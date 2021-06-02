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
// function function1(city){
//     alert('hi');
//     fetch("https://community-open-weather-map.p.rapidapi.com/find?q="+city+"&cnt=1&mode=null&lon=0&type=link%2C%20accurate&lat=0&units=metric", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "b774af3dfdmshc8e8257d7dcbba2p196048jsnbed50875245d",
// 		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });
// }
// getcity('amritsar')
// .then(data=>{
//     return getweather(data.Key);
// }).then(data=>console.log(data))
// .catch(err=>console.log(err));