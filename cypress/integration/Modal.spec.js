describe('Movie items grid', function() {
    beforeEach(function() {
        cy.visit('/')
    })

    it('should open a modal when clicking on a item', function() {
        cy.get('[data-cy=movie-3]').click()
        cy.get('[data-cy=modal-title]').should('have.length', 1);
    })

    it('should render a close button for the modal', function() {
        cy.get('[data-cy=movie-1]').click()
        cy.get('.modal-btn').should('have.length', 1);
    })

    it('should close the modal when the close button is clicked', function() {
        cy.get('[data-cy=movie-1]').click()
        cy.get('.modal-btn').click()
        cy.get('.modal-active').should('have.length', 0);
    })
})