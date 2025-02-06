describe('Failed Scenario', () => {
    it('Failed Scenario', () => {
        
        // 1 - Set the endpoint
        const url = 'https://jsonplaceholder.typicode.com/posts/23424234'

        // 2 - Set the payload

        // 3 - Send the request 
        cy.request({
            method: 'GET',
            url: url,
            failOnStatusCode : false}) // failOnStatusCode : false - bu kod test başarısız olsa bile devam etmeye yarar
        


        // 4 -  Assert the respondse
        .then((response)=>{
            console.log(response.body)
            cy.log(JSON.stringify(response.body))
            
            //Status code is 404
            expect(response.status).to.eq(404)
            
            //Status text is Not Found
            expect(response.statusText).to.eq('Not Found')

            //Response body is empty 
            expect(JSON.stringify(response.body)).to.deep.include('{}') // Bu kod body içinde hiçbir veri olmadığını doğrular.

            //Response body does not include Baki
            expect(JSON.stringify(response.body)).to.not.include('Baki') //Bu yöntem body'yi string olarak kontrol eder ve "Baki" içermediğini doğrular.

            //Header Connection is 'keep-alive'
            expect(response.headers['connection']).to.include('keep-alive')





        })

    });
});