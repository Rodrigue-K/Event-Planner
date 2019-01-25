describe('Event Class', function(){

  it('Returns the title of the Event', function(){
    var event1 = new Event('Event 1', 'Event 1 Description', '07/08/2019, 14:30')
    expect(event1.title).toEqual('Event 1')
  })

  it('Returns the description of the Event', function(){
    var event1 = new Event('Event 1', 'Event 1 Description', '07/08/2019, 14:30')
    expect(event1.text).toEqual('Event 1 Description')
  })

  it('Returns the datetime of the Event', function(){
    var event1 = new Event('Event 1', 'Event 1 Description', '07/08/2019, 14:30')
    expect(event1.dateTime).toEqual('07/08/2019, 14:30')
  })

  it('returns ')

})