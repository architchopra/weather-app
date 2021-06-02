const cityform = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time')
const icon = document.querySelector('.icon')
getMyLocation();
const updateCity = async (city) => {

    const citydetails = await getcity(city);
    const weatherdetails = await getweather(citydetails.Key);
    // const weather2= await function1(city);
    // console.log(weatherdetails);
    // const obj={
    //     name:"archit",
    //     age:"18"
    // };
    // console.log(obj);
    return {
        citydetails: citydetails,
        weatherdetails: weatherdetails

    };
};

const updateui = (data) => {
    // const cd = data.citydetails;
    // const wd = data.weatherdetails;
    // details.innerHTML = `
    // <h5 class="my-3">${cd.EnglishName}</h5>
    //         <div class="my-3">${wd.WeatherText}</div>
    //         <div class="my-4 display-4">
    //             <span>${wd.Temperature.Metric.Value}</span>
    //             <span>&deg;C</span>
    //         </div>
    // `
    const { citydetails, weatherdetails } = data;//destructuring
    details.innerHTML = `
    <h5 class="my-3">${citydetails.EnglishName}</h5>
            <div class="my-3">${weatherdetails.WeatherText}</div>
            <div class="my-4 display-4">
                <span>${weatherdetails.Temperature.Metric.Value}</span>
                <span>&deg;C</span>
            </div>
    `
    const iconsrc = `img/icons/${weatherdetails.WeatherIcon}.svg`;
    icon.innerHTML = `
    <img src=${iconsrc}>
    `

    let timesrc = weatherdetails.IsDayTime ? 'img/day.svg' : 'img/night.svg';
    // if(weatherdetails.IsDayTime){
    //     timesrc='img/day.svg';
    // }else{
    //     timesrc='img/night.svg'
    // };
    time.setAttribute('src', timesrc);
    if (card.classList.contains('d-none')) {
        card.classList.remove('d-none');
    }
}


cityform.addEventListener('submit', e => {
    e.preventDefault();

    const city = cityform.city.value.trim();

    cityform.reset();

    updateCity(city)
        .then(data => updateui(data))
        .catch(err => console.log(err));


    localStorage.setItem('city', city);

});
if (localStorage.getItem('city')) {
    updateCity(localStorage.getItem('city'))
        .then(data => updateui(data))
        .catch(err => console.log(err));
};