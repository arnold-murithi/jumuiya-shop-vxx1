// beforeEach(() => {
//   cy.log("Venturing into new grounds!!!")
// });

describe("My First Test", () => {
  it("visits Local Host", () => {
    cy.visit('http://localhost:3000/')
  })
})
