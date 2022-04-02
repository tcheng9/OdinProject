const text = document.getElementById("placeholderText");
// Synchronous
fetch('https://api.openweathermap.org/data/2.5/weather?zip=60616,us&appid=7ff5ff2a936666706f13087df3e0f094',
    {mode:'cors'})
    .then(function(response){
        return response.json();
    })
    .then(function(response){
        let temp = response.main.temp    
        return temp;
    })
    .then(function(response){
        text.textContent = JSON.stringify(response);
    })
    .catch(function(err){
        console.log(err);
    });
// {"coord":{"lon":-87.6306,"lat":41.8426},
//"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"base":"stations","main":{"temp":274.57,
// "feels_like":272.28,"temp_min":272.07,"temp_max":276.21,"pressure":1021,"humidity":76},"visibility":10000,"wind":{"speed":2.06,
// "deg":0},"clouds":{"all":40},"dt":1648874657,"sys":{"type":2,"id":2005153,"country":"US","sunrise":1648812788,"sunset":1648858516},
// "timezone":-18000,"id":0,"name":"Chicago","cod":200}


    
//Asynchronous

// async function getAPI(){
//     let response = await fetch('https://api.openweathermap.org/data/2.5/weather?zip=60616,us&appid=7ff5ff2a936666706f13087df3e0f094'); 
//     let data = await response.json();
//     
//     return data;
// }   

// getAPI().then(data => console.log(data));


//Write a function that takes in JSON data -> Parse it somehow -> Return a JSON object with only data needed for the app
// async function apiCall(zipcode){
//     const weather = 
// }

//Old code that will get temp
/*
fetch('https://api.openweathermap.org/data/2.5/weather?zip=60616,us&appid=7ff5ff2a936666706f13087df3e0f094',
    {mode:'cors'})
    .then(function(response){
    //    return response.json();
    console.log(JSON.parse(response.json()));
    })
    .then(function(response){
        console.log(response.main.temp);
        
        console.log(JSON.parse(response));
    })
    .catch(function(err){
        console.log(err);
    });


*/