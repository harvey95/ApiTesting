
/// <reference types="cypress" />


/*
Given
     https://jsonplaceholder.typicode.com/...
When
     User send Get request to the endpoint
Then 
     Status code is 200
And 
     Status text is OK
And 
     Response Time is less than 400ms
And 
    Response body is JSON data type 
And 
    title  is quis eius est sint explicabo
And 
    completed is  true
*/

describe('jsonplaceholder body check', () => {
    it('Get03', () => {

    //set the url
    const url = 'https://jsonplaceholder.typicode.com/todos/198'
    
    //set the payload

    //send the request 
        cy.request({
            method:'GET',
            url: url,
            failOnStatusCode : false // Cypress'te failOnStatusCode: false sadece HTTP hata kodları (örn: 404, 500) için 
            // çalışır ama assertion hataları için çalışmaz. 
            // Eğer test fail olsa bile devam etmesini istiyorsan, soft assertion için should kullanabilirsin
        })
    //get the response and assert it
    .then((response)=>{
        //1-status code 200
        expect(response.status).to.eq(200)

        //2-status text is OK
        expect(response.statusText).to.eq('OK')

        //3-Response time is lass than 400ms
        expect(response.duration).to.be.lessThan(400)

        //4-Response body is JSON data type
        expect(response.headers['content-type']).to.include('application/json') // hard assertion

        //5-title is quis eius est sint explicabo
        expect(response.body.title).to.eq('quis eius est sint explicabo')
        cy.wrap(response.body.title.trim()).should('eq','quis eius est sint explicabo') // bu soft assertion

        //6-completed is true
        expect(response.body.completed).to.eq(true)
        expect(response.body.completed).to.be.true // bu da aynı assertion'u yapar

        // expext - hard assertion
        // .should() soft assertion
    })    

    });
});