class EventList {
  constructor() {
		this.planner = [];
	}

  addEvent(event){
    this.planner.push(event)
  }

  upComingEvent() {
    let upcoming= [];
    this.planner.forEach((event) => {
      let now = new Date();
      let eventDate = event.getDateTime();
      console.log(event)
      console.log(now)
      if (eventDate > now ) {
        upcoming.push(event);

      }
    })
    return upcoming;
  }

  elementToDisplay() {
    let div = document.createElement('div');
    this.upComingEvent().forEach((event) => {
      let eventHtml = event.elementToDisplay();
      div.appendChild(eventHtml);
    })
    return div
  }
}
