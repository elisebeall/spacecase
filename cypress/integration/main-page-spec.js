describe('spacecase main page flow', () => {
  it('should show a grid of all of the spacecrafts', () => {
    cy.fixture('spacecraft.json').as('spacecraft').then((spacecraft) => {
      cy.intercept('GET', 'https://lldev.thespacedevs.com/2.2.0/spacecraft/?limit=1000&offset=0', {
        body: spacecraft
      })
    })
      .visit('localhost:3000/spacecraft/spacecraft')
      .get('.craft-image')
      .should('have.attr', 'src')
      .and('equal', 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/orbiter_images/mercury_image_20190207032519.jpeg')
  });

  it('should show an error message if the API is down & give the user a way to navigate home', () => {
    cy.intercept('GET', 'https://lldev.thespacedevs.com/2.2.0/spacecraft/?limit=1000&offset=0', {
      statusCode: 500,
      ok: false,
      body: {}
    })
      .visit('localhost:3000/spacecraft/spacecraft')
      .get('.error-container')
      .contains('Cannot fetch the data')
      .get('.home-btn').click()
      .url().should('contain', '/')
  });

  it('should show a button that returns the user to the launch page', () => {
    cy.fixture('spacecraft.json').as('spacecraft').then((spacecraft) => {
      cy.intercept('GET', 'https://lldev.thespacedevs.com/2.2.0/spacecraft/?limit=1000&offset=0', {
        body: spacecraft
      })
    })
      .visit('localhost:3000/spacecraft/spacecraft')
      .get('.home-btn').click()
      .url().should('contain', '/')
  });

  it('should be able to search the spacecraft displayed by name', () => {
    cy.fixture('spacecraft.json').as('spacecraft').then((spacecraft) => {
      cy.intercept('GET', 'https://lldev.thespacedevs.com/2.2.0/spacecraft/?limit=1000&offset=0', {
        body: spacecraft
      })
    })
      .visit('localhost:3000/spacecraft/spacecraft')
      .get('input').type('mer')
      .get('.main-container').children().should('have.length', '10')
  });

  it('should be able to delete the search query and reload the original data', () => {
    cy.fixture('spacecraft.json').as('spacecraft').then((spacecraft) => {
      cy.intercept('GET', 'https://lldev.thespacedevs.com/2.2.0/spacecraft/?limit=1000&offset=0', {
        body: spacecraft
      })
    })
      .visit('localhost:3000/spacecraft/spacecraft')
      .get('input').type('mer')
      .get('.main-container').children().should('have.length', '10')
      .get('input').type('{backspace}').type('{backspace}')
      .get('.main-container').children().should('have.length', '94')
  });

  it('should show a message if no results match the search query', () => {
    cy.fixture('spacecraft.json').as('spacecraft').then((spacecraft) => {
      cy.intercept('GET', 'https://lldev.thespacedevs.com/2.2.0/spacecraft/?limit=1000&offset=0', {
        body: spacecraft
      })
    })
      .visit('localhost:3000/spacecraft/spacecraft')
      .get('input').type('bdjaksldbghjksalbfdhjkla')
      .get('h2').should('contain', 'No results matched your search.')
  });

  it('should allow the user to select a spacecraft to see more details', () => {
    cy.fixture('spacecraft.json').as('spacecraft').then((spacecraft) => {
      cy.intercept('GET', 'https://lldev.thespacedevs.com/2.2.0/spacecraft/?limit=1000&offset=0', {
        body: spacecraft
      })
    })
      .visit('localhost:3000/spacecraft/spacecraft')
      .get('.craft-image-container')
      .get('a[href="/details/spacecraft/2"]').click()
      .url().should('contain', '/details/spacecraft/2')
  });

})
