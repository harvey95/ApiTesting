describe('todos among check', () => {
    
    it('get04', () => {
        
        //set the url
        const pathParam = '/todos'

        //set the payload

        //send the request
        cy.request({
            url: pathParam,

            headers: { //Accept: 'application/json' → Sunucuya, cevabı JSON formatında göndermesini söyleyen bir başlıktır. 
            // Yani, istemci (senin testin) sadece JSON formatındaki cevapları kabul etmek istediğini belirtiyor.
            //API'nin doğru içerik türü döndürüp döndürmediğini kontrol etmek için cy.request() içinde kullanılır
                Accept: 'application/json'}
        })

        //get the response and assert it
        .then((response) =>{
            //1 status code should be 200
            expect(response.status).to.eq(200)

            //2 status text is OK
            expect(response.statusText).to.eq('OK')
            
            //3 Response time is less than 300
            expect(response.duration).to.be.lessThan(300)

            //4 Response format should be "application/json"
            expect(response.headers['content-type']).to.include('application/json')

            //5 There should be 200
            expect(response.body).to.have.lengthOf(200)

            //6 One of tittle must be fugiat veniam minus
            const title =response.body.map(todo => todo.title)
            expect(title).to.include('fugiat veniam minus')

            //7- 2,7, and 9 should be among the user ids
            const userIds = response.body.map(item =>item.userId);
            expect(userIds).to.include.members([2,7,9 ])
            
        })
    });
});