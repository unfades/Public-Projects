/*had to npm install openmeteo for this because of the instructions
on their website...*/
let latitude = 0;
let longitude = 0;

let search = document.getElementById("searchbar");
console.log(search);
console.log(search.value);
function getLocation() {
  let search = document.getElementById("searchbar");
  console.log(search);
  console.log(search.value);
  let location = search.value;
  let pr = fetch(
    "https://geocoding-api.open-meteo.com/v1/search?name=" + `${location}`,
  );
  pr.then((response) => {
    return response.json();
  }).then((data) => {
    console.log(data.results[0].latitude);
    console.log(data.results[0].longitude);
    latitude = data.results[0].latitude;
    longitude = data.results[0].longitude;
    viewWeather();
	});
}

function viewWeather() {
  let url = fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=" +
      `${latitude}` +
      "&longitude=" +
      `${longitude}` +
      "&hourly=temperature_2m",
  );
  url
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      //only getting the first value presented in the graph right now...
      //switch to 1day param in the API and then do it.
      let span = document.getElementById("result");
      console.log(data);
      console.log(data.hourly.temperature_2m[0]);
      console.log(data.hourly.time[0]);
      let temp = data.hourly.temperature_2m[0];
      //not the dom way...
      span.innerHTML = "" + temp + "°C";
    });
}
