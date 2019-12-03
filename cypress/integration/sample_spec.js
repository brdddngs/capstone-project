describe('Overview', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('has the correct title', () => {
    cy.title().should('equal', 'Cookbook')
  })

  it('has detail pages', () => {
    cy.contains('Hummus').click()
    cy.contains('Zutaten').should('have.length', 1)
    cy.contains('Schritte')
      .should('have.length', 1)
      .click()
    cy.get('[alt="back"]').click()
  })
})
