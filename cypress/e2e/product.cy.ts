describe("testing kids product page", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/dashboard")
    })
    it("visit the dashboard page", () => {
        cy.getTestData('kids-route').should('contain.text', 'Kids')
        cy.getTestData('kids-route').click()
        cy.wait(5000)
        cy.url().should('eq', 'http://localhost:3000/dashboard/kids')
        cy.contains(/kids product page/i)
    })
})

describe("testing product lists", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/dashboard/kids")
        cy.wait(5000)
    })
    it('get product list', () => {
        cy.getTestData('product-list').within(() => {
            cy.get('li').should('exist')
            cy.get('li').should('have.length', 18)
        })
    })
    it('get list item', () => {
        cy.get('ul').find('li').first().within(($ul) => {
            cy.get('img').should('have.attr', 'src')
        })
    })
    it('testing add to cart button', () => {
        cy.get('button').click({ multiple: true, force: true })
        cy.contains(10)
    })
    it('tesing the cart', () => {
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