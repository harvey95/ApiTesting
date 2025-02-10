describe('restful-booker', () => {
    it('get05', () => {
        /*https://restful-booker.herokuapp.com/booking?firstname=Sally&lastname=Jones 
        böyle bir url'de /tan sonrası path parametre, ?işaretinden sonrası query parametre olarak
        ve de tüm url de endpoint adlandırılır.
        Query parametreleri, ? işaretinden sonra gelen ve key=value formatında olan verilerdir.
        ? ile başlar, & ile birden fazla eklenir.
        */

        //i set the url
        const pathParam = '/booking'
        const queryParam = {
            firstname:'Eric',
            lastname:'Ericsson'
        }

        //ii set the payload

        //send the request
        cy.request({
            method: 'GET',
            url: pathParam,
            qs: queryParam
        })

        //iii get the response and assert it
        .then((response)=>{
            //1) status code should be 200
            expect(response.status).to.eq(200)

            //2) status text is OK
            expect(response.statusText).to.eq('OK')
            
            //3) Response time is less than 300
            expect(response.duration).to.be.lessThan(300)

            //4) Response format should be "application/json"
            expect(response.headers['content-type']).to.include('application/json')

            //5) Among the data there should ve someone whose name is Sally Jones
            expect(response.body[0].bookingid).to.eq(5)
        })
        

    });
});