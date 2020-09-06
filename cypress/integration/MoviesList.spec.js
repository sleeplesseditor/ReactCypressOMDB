describe('OMDB API', function() {
    it('verify OMDB API is functioning', function() {
        cy.request('https://www.omdbapi.com/?i=tt3896198&apikey=9733f1df')
    })
})