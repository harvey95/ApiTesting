describe('API Test', function() {
    it('API Test',function(){
        //i set the url
        const pathParam1 = '/todos'  

        //send the request
        cy.request({
            method : 'GET',
            url : pathParam1
        })

        //iii get the response and assert it
        .then(function(response){
             
         //1) Assert that Status Code is 200
            expect(response.status).to.eq(200)
         
        //2) Assert that there are 10 ids greater than 190
        const idsDataGreaterThan190 = response.body.filter((item) => item.id > 190)
        expect(idsDataGreaterThan190).to.have.lengthOf(10)
    
        //3) Assert that the number of userids whoes ids less than 2 is 20
        const userIdLessThan21 = response.body.filter((item) => item.userId < 2)
        expect (userIdLessThan21).to.have.lengthOf(20)

        //4) Assert that 'delectus aut autem' is  one the title whoes ids is less than 5
        const userIdLessThan5Title = response.body.filter((item)=> item.id < 5)
        const titles =userIdLessThan5Title.map((item)=> item.title)
        expect(titles).to.include('delectus aut autem')
    
        })
    })
})
    