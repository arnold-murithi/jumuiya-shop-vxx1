// beforeEach(() => {
//   cy.log("Venturing into new grounds!!!")
// });

describe("My First Test", () => {
  it("visits Local Host", () => {
    cy.visit('http://localhost:3000/')
    cy.window().then((win) => {
      expect(win.document.title).to.equal('Create Next App')
    })
  })
})

