describe("Should search the search bar", () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/dashboard/new')
  })
  it("visits dashboard", () => {
    cy.getTestData("search-input").should("exist").and("be.visible")
  })
  it("Should have the correct placeholder text", () => {
    cy.getTestData("search-input").should("have.attr", "placeholder", "Search products....")
  })
  it("Should have the correct default value for search params", () => {
    cy.visit('http://localhost:3000/dashboard/new?query=shoe')
  })
  it("should trigger typeing in the search bar", () => {
    const searchTerm = "belt"
    cy.getTestData("search-input").clear().type(searchTerm)

    cy.url().intercept('GET', `http://localhost:3000/dashboard/new?query=${searchTerm}`)
  })
  it("should clear results when emptied", () => {
    cy.getTestData("search-input").type("shoe").clear();
    cy.getTestData("search-input").should("have.value", "");
    cy.intercept('GET', 'http://localhost:3000/dashboard/new?query=').as('empty');
  })
})

