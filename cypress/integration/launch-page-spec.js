describe('spacecase launch page flow', () => {
  it('should show a title, description, and navigation into the site', () => {
    cy.visit('localhost:3000')
      .get('h1').should('contain', 'spacecase')
  });

  it('should show a 404 message if an incorrect URL path is entered', () => {
    cy.visit('localhost:3000/potatoe')
      .get('h2').should('contain', 'Whoa, you made a wrong turn. Please try again.')
      .get('.icon-small').should('be.visible').click()
      .url().should('include', '/')
  });
})
