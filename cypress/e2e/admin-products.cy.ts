describe("Test the admin products page", () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/admin')
    })
    it('navigate to admin product page', () => {
        cy.getTestData('products-route').should('exist')
        cy.getTestData('products-route').click()
        cy.location().should((loc) => {
            expect(loc.origin).to.eq('http://localhost:3000')
            expect(loc.pathname).to.eq('/admin/products')
        })
        cy.contains(/products/i)
    })
})
describe("Testing add new products functionality", () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/admin/products')
    })
    it('Testing add new product button and product form', () => {

        cy.getTestData('add-product').should('exist')
        cy.getTestData('add-product').click()

        cy.location().should((loc) => {
            expect(loc.origin).to.eq('http://localhost:3000')
            expect(loc.href).to.eq('http://localhost:3000/admin/products/new')
        })
        cy.contains(/add product/i)

        cy.get('form').within(($form) => {

            cy.get('input[name="name"]').should('be.empty')
            cy.get('input[name="name"]').type('shoe')
            cy.get('input[name="name"]').should('have.value', 'shoe')

            cy.get('input[name="priceInCents"]').should('be.empty')
            cy.get('input[name="priceInCents"]').type('500')
            cy.get('input[name="priceInCents"]').should('have.value', '500')

            cy.get('textarea[name="description"]').should('be.empty')
            cy.get('textarea[name="description"]').type('good product')
            cy.get('textarea[name="description"]').should('have.value', 'good product')

            cy.get('input[name=file]').selectFile({
                contents: Cypress.Buffer.from('C:\Users\USER\OneDrive\Desktop\images'),
                fileName: 'image',
                mimeType: 'image/jpeg',
                lastModified: Date.now()
            })

            cy.get('input[name=image]').selectFile({
                contents: Cypress.Buffer.from('C:\Users\USER\OneDrive\Desktop\images'),
                fileName: 'image',
                mimeType: 'image/jpeg',
                lastModified: Date.now()
            })
            cy.get('button').should('exist')
            cy.get('button').should('contain.text', 'Save').and('not.be.disabled')
            cy.get('button').click()
            cy.intercept('POST', 'http://localhost:3000/admin/products/new', {
                status: 201,
                body: {
                    success: true
                }
            }).as('productPost')

            cy.location().should((loc) => {
                expect(loc.origin).to.eq('http://localhost:3000')
                expect(loc.pathname).to.eq('/admin/products')
            })
        })
    })
})
