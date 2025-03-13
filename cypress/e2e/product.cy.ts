describe("testing kids product page", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/dashboard")
    })
    it("should check the navigation bar", () => {
        cy.get('nav').should('exist')
        cy.get('nav > div').should('have.length', 1)
    })
    it("should check the structure of div elements", () => {
        cy.get('div > div').should('exist')
        cy.get('div > div').should('have.length', 19)
    })
    it("should get navigation bar main div", () => {
        cy.get(".flex > div").should("exist").eq(0).within(() => {
            cy.get("a").should("exist")
        })
    })
    it("should test navigation links", () => {
        cy.get(".hidden > div").should("exist").eq(0).within(() => {
            cy.get("a").first().should("have.text", "New & Featured").and("be.visible")
            cy.get("a").first().click().url().should("eq", "http://localhost:3000/dashboard/new")
        })
    })
})
describe("testing product lists", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/dashboard/new")
    })
    it('should test add to cart button', () => {
        cy.getTestData('add-to-cart').click({ multiple: true, force: true })
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