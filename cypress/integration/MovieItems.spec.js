describe('Movie items grid', function() {
    beforeEach(function() {
        cy.visit('/')
    })

    it('should verify the grid populates with 10 movies', function() {
        cy.get('.movie-item').should('have.length', 10)
    })

    it('should expect a movie title to appear in the modal when clicking an item', function() {
        cy.get('[data-cy=movie-3]').click()
        cy.get('[data-cy=modal-title]').contains('The Thing')
    })

    it('should expect a movie release date to appear in the modal when clicking an item', function() {
        cy.get('[data-cy=movie-6]').click()
        cy.get('[data-cy=modal-title]').contains('1973')
    })
})