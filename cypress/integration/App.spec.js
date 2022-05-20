/* globals cy */

describe("Test App", () => {
  it("launches", () => {
    cy.visit("/");
  });
  it ('opens with Please sign in', () => {
    cy.visit ('/');
    cy.get('[data-cy=signIn]').should('contain', 'Please sign in');
  });
  // hard to test non authenticated pages (need to hard code email & password)
  it('shows sign in works', () => {
    cy.visit ('/');
    cy.get('[data-cy=signInBtn]').click()
   
  });
});
