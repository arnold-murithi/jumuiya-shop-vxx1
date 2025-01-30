describe("Testing customer checkout", () => {
    it("Visit checkout page", () => {
        cy.visit("http://localhost:3000/dashboard/cart")
    })
})