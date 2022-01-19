describe('spacecase craft details flow', () => {
  it('should show an error message if the API returns no data & should be able to navigate back', () => {
    cy.intercept('GET', `https://lldev.thespacedevs.com/2.2.0/spacecraft/3`, {
      status: 500,
      ok: false,
      body: {}
    })
    cy.visit('localhost:3000/details/spacecraft/3')
      .get('.error-container')
      .contains('Cannot fetch the data')
      .get('.home-btn').click()
      .url().should('contain', '/')
  });

  it('should load pertinent details about the spacecraft chosen', () => {
    cy.fixture('spacecraft3.json').as('spacecraft').then((spacecraft) => {
      cy.intercept('GET', `https://lldev.thespacedevs.com/2.2.0/spacecraft/3`, {
        body: spacecraft
      })
    })
    cy.visit('localhost:3000/details/spacecraft/3')
      .get('h1').should('contain', 'Mercury No.11')
  });

  it.skip('should show a message if no details are available', () => {
    cy.fixture('spacecraft3.json').as('spacecraft').then((spacecraft) => {
      cy.intercept('GET', `https://lldev.thespacedevs.com/2.2.0/spacecraft/`, {
        body: spacecraft
      })
    })
    cy.visit('localhost:3000/details/spacecraft/3')
      .get('table')
      .get('td').should('contain', 'N/A')
  });
})
