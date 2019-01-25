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

  


}) 