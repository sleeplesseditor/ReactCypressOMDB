describe('mobile view (iPhone 6)', function() {
    beforeEach(function() {
        cy.viewport('iphone-6')
        cy.visit('/')
    })

    it('should show that the grid is responsive, expect to see one item per row', function() {
        cy.get('.movie-item')
        .should('be.visible')
        .and('have.css', 'flex-basis', '100%')
    })

    it('should save a screenshot', function() {
        cy.screenshot({ capture: 'viewport' })
    })
})