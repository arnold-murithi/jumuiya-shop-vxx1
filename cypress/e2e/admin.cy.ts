describe('Testing admin page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/admin')
    })
    it('Checking the admin dashboard and its components', () => {
        cy.url().should('eq', 'http://localhost:3000/admin')
        cy.getTestData('dashboard-card').should('be.visible')
    })
})