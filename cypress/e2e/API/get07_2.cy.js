describe('gorest.go', () => {
    it('get07', () => {

        /*
        Get 07
*
Given
http://gorest.co.in/public/v1/users

When
User Sends Get Request to the URl

Then
Assert that Status is 200

And 
Assert that total is 2930

And
Assert that pages value is 293

And 
Assert that page is 1

And 
Assert that limit is 10

And 
Assert that previous link is null

And 
Assert that current link is "http://gorest.co.in/public/v1/users?p..."

And 
Assert that next link is http://gorest.co.in/public/v1/users?p...

Assert that number of fameles is less than number of males 

*/


        //i set the url
        const pathParam1 ='/public'
        const pathParam2 = '/v1' 
        const pathParam3 = '/users' 

        //ii set the expectedData

        let expectedData;
        //let ile değişken tanımlanabilir ve sonradan bir değer atanabilir
        //const ile tanımlanan bir değişken ilk anda bir değer almalıdır. yoksa syntax hatası alırsın.

        cy.fixture('gorestData.json').then((gorestData)=>{
            expectedData = gorestData
        })


        //iii set the request
        cy.request({
            method : 'GET',
            url : `${pathParam1}${pathParam2}${pathParam3}`
        
        })

        //iiii get the response and assert it
        .then((response)=>{
            const actualData = response.body.meta.pagination
            //Burada ortak olan dataları bi değişkene atayarak daha kullanılabilir ve anlaşılabiir hale getirmiş oldum

        //1)Assert that Status is 200
            expect(response.status).to.eq(200)

        //2)Assert that total is 2907
            expect(actualData.total).to.eq(expectedData.meta.pagination.total)
        
        //3)Assert that pages value is 291
            expect(actualData.pages).to.eq(expectedData.meta.pagination.pages)
        
        //4)Assert that page is 1
            expect(actualData.page).to.eq(expectedData.meta.pagination.page)
        
        //5)Assert that limit is 10
            expect(actualData.limit).to.eq(expectedData.meta.pagination.limit)    

        //6)Assert that previous link is null    
            expect(actualData.links.previous).to.eq(expectedData.meta.pagination.links.previous)
        
        //7)Assert that current link is "http://gorest.co.in/public/v1/users?page=1"
            expect(actualData.links.current).to.eq(expectedData.meta.pagination.links.current)
            
        //7)Assert that next link is "http://gorest.co.in/public/v1/users?page=2"
           expect(actualData.links.next).to.eq(expectedData.meta.pagination.links.next)
        
        //8)Assert that number of males is less than number of females
        const numberOfFemale = response.body.data.map((item)=>item.gender).filter((data)=>data==='female').length

        const numberOfMale = response.body.data.map((item)=>item.gender).filter((data)=>data==='male').length

        expect(numberOfMale).to.be.lessThan(numberOfFemale)

        //JSON'un geçerli olup olmadığını kontrol etmek için online JSON validator kullanabilirsin https://jsonlint.com/

        })
    });
});