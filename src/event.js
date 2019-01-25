class Event {
  constructor(text, date) {
    this.text = text;
    this.date = date;
    console.log("I am here")
    console.log(this.date)
  }




  elementToDisplay() {
    let div = document.createElement('div');
    div.innerText = `${this.text} at ${this.date}`
    console.log(this.date)
    return div;
  }

  getDateTime(){
    return Date.parse(this.date)
  }


}