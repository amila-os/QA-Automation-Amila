describe('Registration tests', () => {
  it('ID-1 Successful registration with user', () => {
    cy.visit('https://automationexercise.com/')
    cy.contains('Signup').should('be.visible').click()
    cy.get('[data-qa="signup-name"]').should('be.visible').clear().type('Amila')
    cy.get('[data-qa="signup-email"]')
      .should('be.visible')
      .clear()
      .type('amila@example.com')
    cy.get('[data-qa="signup-button"]').should('be.visible').click()
    cy.get('.login-form').should('be.visible')
    cy.url().should('contain', '/signup')
    cy.get('#id_gender1').should('be.visible').check()
    cy.get('[data-qa="password"]').should('be.visible').clear().type('Test1234')

    /*domaca zadaca*/
    //provjera da li polje za ime sadrži ime Amila i email amila@example.com
    cy.get('input[data-qa="name"]')
      .should('be.visible')
      .should('have.value', 'Amila')

    cy.get('input[data-qa="email"]')
      .should('be.visible')
      .should('have.value', 'amila@example.com')

    //provjera datuma
    /*prebacila sam select opciju koju smo radili na predavanju ispod radi bolje citljivosti*/
    cy.get('[data-qa="days"]').should('be.visible').select(23)
    cy.get('[data-qa="months"]').should('be.visible').select('December')
    cy.get('[data-qa="years"]').should('be.visible').select('1970')

    //provjera dugmica za newsletter i special offers
    cy.get('#newsletter').should('be.visible').check()
    cy.get('#optin').should('be.visible').check()

    //Address information provjera
    cy.get('[data-qa="first_name"]').should('be.visible').clear().type('Amila')
    cy.get('[data-qa="last_name"]')
      .should('be.visible')
      .clear()
      .type('sdjskajiw')
    cy.get('[data-qa="company"]')
      .should('be.visible')
      .clear()
      .type('Some Company')
    cy.get('[data-qa="address"]')
      .should('be.visible')
      .clear()
      .type('sadsjdeiofejwm dcee 55')
    cy.get('[data-qa="address2"]')
      .should('be.visible')
      .clear()
      .type('address msdkcmievmdk')
    cy.get('[data-qa="country"]').should('be.visible').select('Singapore')
    cy.get('[data-qa="state"]').should('be.visible').clear().type('Singapore')
    cy.get('[data-qa="city"]').should('be.visible').clear().type('Singapore')
    cy.get('[data-qa="zipcode"]').should('be.visible').clear().type(72000)
    cy.get('[data-qa="mobile_number"]')
      .should('be.visible')
      .clear()
      .type(123456789)
    cy.get('[data-qa="create-account"]').should('be.visible').click()
  })
})
