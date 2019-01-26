window.addEventListener('load', () => {
  
  let eventList = new EventList();
  
  let button = document.getElementById('button');

  button.addEventListener("click", () => {
    console.log('here')
    let text = document.getElementById("textbox").value
    let date = document.getElementById("event-time").value
    let event = new Event(text, date);
    console.log(event)
    eventList.addEvent(event);
    console.log(event);

    display();
  })
  
  


  const display = () => {
    let eventsDiv = document.getElementById('upcomingEvents');
    events = eventList.elementToDisplay();
    eventsDiv.innerHTML = '';
    eventsDiv.appendChild(events);
    console.log(events)
  }

  let weather = document.getElementById('weatherButton');
  let city = document.getElementById('weatherText');
  const apiKey = "8df399cfa3f4d13005c3c51f9949e550"
  const apistring = "https://api.openweathermap.org/data/2.5/weather?q="




  weather.addEventListener("click", findweatherdetails);

  function findweatherdetails() {
    queryString = apistring + city.value + "&appid=" + apiKey
    console.log(queryString)

    var request= new XMLHttpRequest();
    request.onreadystatechange = function() {
      if(this.readyState == 4 && this.status == 200) {
        let jsonObject = JSON.parse(request.response);
        weatherDiv.innerHTML = parseInt(jsonObject.main.temp - 273);
      }
    }
    
    request.open('GET', queryString, true);
    request.send();



  //   fetch(queryString)
  //     .then((response) => response.json)
  //     .then(
  //       function(response) {
  //         if (response.status !== 200) {
  //           console.log('Looks there was a problem. Status Code: ' + 
  //             response.status);
  //             return;
  //         }
  //         // Examine the response text
  //         let jsonObject = JSON.parse(response);
  //         weatherDiv.innerHTML = parseInt(jsonObject.main.temp - 273 );
  //       }
  //     )
  //     .catch(function(err) {
  //       console.log('Fetch Error :-S, err');
    // }) 
  }



});