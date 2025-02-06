/// <reference types="cypress" />


describe('Https Request',()=>{
    it('get 01',()=>{
        // 1 - Set the endpoint

        const url = 'https://jsonplaceholder.typicode.com/posts/3'

        // 2 - Set the payload - payload göndereceğimiz bodynin adı

        // 3 - Send the request 
            cy.request({ 
                methot: 'GET',
                url: url
            })

            

        // 4 -  Assert the respond 
            .then((response) =>{
            
            // Response'u developer console'a yazdırmak için
            console.log(response.body)

            // Response'u Cypress console'a yazdırmak için
            cy.log(JSON.stringify(response.body))   

            expect(response.status).to.eq(200)
            expect(response.statusText).to.eq('OK')
            expect(response.duration).to.be.lessThan(300) // response süresinin 300 ms'den az olduğunu doğrular
            expect(response.headers['content-type']).to.include("application/json") // 

            })



    });
})