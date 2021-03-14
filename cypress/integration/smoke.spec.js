describe('Smoke Test', () => {
  it("Makes sure the welcome message is up.", () => {
    cy.visit("http://localhost:1234").contains('App');
  });
});
