describe("testing kids product page", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/dashboard")
    })
    it("visit the dashboard page", () => {
        cy.getTestData('kids-route').contains('Kids').should('exist')
        cy.getTestData('kids-route').should('have.attr', 'href', '/dashboard/kids')
        cy.getTestData('kids-route').click()
        cy.wait(5000)
        cy.url().should('eq', 'http://localhost:3000/dashboard/kids')
        cy.getTestData('products-header').contains(/kids product page/i)
    })
})

describe("testing product lists", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/dashboard/kids")
    })
    it('testing add to cart button', () => {
        cy.get('button').click({ multiple: true, force: true })
        cy.contains(10)
    })
    it('testing the cart', () => {
        const mockCartItems = [
            {
                id: 'e4af838c-3454-4c18-b99d-3adbde11584e',
                name: 'Shoe',
                imagePath: '/products/ab4d4d6d-0e1f-4350-a595-83906d001a18-michael-davis-KGb0nQAgxt0-unsplash.jpg',
                isAvailableForPurchase: true,
            }
        ];
        cy.window().then((win) => {
            win.localStorage.setItem('cart-storage', JSON.stringify({ cart: { mockCartItems } }));
        });

        cy.reload();
    })
})