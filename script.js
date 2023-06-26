
//initialize the container
var container=document.createElement("div");
container.className="container";
//initialize the roe
var row=document.createElement("div");
row.classList.add("row","m-3");
//append the row
container.append(row);

//Here is the fetch the restcountries data with then catch method

var res=fetch("https://restcountries.com/v2/all");
res.then((data)=>data.json())
.then((Country)=>getCountryData(Country))
.catch((error)=>console.log(error));




//initialize the getCountryData
function getCountryData(Country){
    console.log(Country);
    
    for(var i=0;i<Country.length;i++){
      if(Country[i]['latlng']){
        var latitude = Country[i]['latlng'][0];
        var longitude = Country[i]['latlng'][1];
    }

   
      row.innerHTML +=
      `<div class="col-md-4">
      <div class="card border-primary mb-3" style="max-width: 18rem; background-image: linear-gradient(to  bottom right, #6889FF , #C668FF);">
      <div class="card-header bg-dark" style="color:white; text-align:center">${Country[i].name}</div>
      <img src="${Country[i].flag}" class="card-img-top" alt="Country Flags">
      <div class="card-body text-primary" style="color:white; text-align:center">
        <p class="card-text" style="color:white;">Capital: ${Country[i].capital}</p>
        <p class="card-text" style="color:white;"> Region: ${Country[i].region}</p>
        <p class="card-text" style="color:white;">Country Code: ${Country[i].alpha3Code}</p>
     <button class="btn btn-primary" onclick="weather(${latitude},${longitude})">Click  for Weather</button>
      </div>

    </div>
    </div>`
        }


        document.body.append(container);
}

// here is the show the country weather details 
function weather(latitude ,longitude){
  window.open(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=3da63a727e7d2a7a568abaf64f288774`,"_blank");

}

