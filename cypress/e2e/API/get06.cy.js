describe('restful-bookers', () => {
    it('get06', () => {
        //i set the url
        const pathParam1 = '/booking'
        const pathParam2 = '/3'

        //ii send the request
        cy.request({
            method : 'GET',
            url : `${pathParam1}${pathParam2}` 
            //backtick işaretini yapmak için option + i harfinin yanındaki virgüle basacağız
            //$ işareti yapmak için option+4'e basacağız

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
            
             //5) First name is Susan
             expect(response.body.firstname).to.eq('Susan')

             //6) Last name is Brown
             expect(response.body.lastname).to.eq('Wilson')

             //7) Total prise is 534
             expect(response.body.totalprice).to.eq(132)

             //8) Deposite paid is true 
             expect(response.body.depositpaid).to.eq(true)
             //9) Checkin-date is 2019-10-02
             expect(response.body.bookingdates.checkin).to.eq('2023-03-17')

             //10)Checkout-date is "2020-08-12"
             //expect(response.body.bookingdates.checkot).to.eq('2023-06-15')

             expect(response.body.additionalneeds).to.eq('Breakfast')

            // branch adı bakiBranch
        })
    });
});