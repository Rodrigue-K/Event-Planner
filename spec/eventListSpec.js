describe('Events list', function() {
    it('starts with an empty list', function(){
        var list = new EventList()
        expect(list.planner.length).toEqual(0)
    })


    it('can add event', function() {
        var list = new EventList()
        var event = new Event('Event 1', 'Event 1 Description', '07/08/2019, 14:30')
        list.addEvent(event)
        expect(list.planner.length).toEqual(1)

    })
    
    it('can check added event', function() {
        var list = new EventList()
        var event = new Event('Event 1', 'Event 1 Description', '07/08/2019, 14:30')
        list.addEvent(event)
        expect(list.planner[0]).toEqual(event)


    })

})