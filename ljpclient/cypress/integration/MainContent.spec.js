describe('Main content tests', () => {
  beforeEach(() => {
    cy.visit('home', {
      timeout: 20000
    });
  })
  it('should find Resume menu item and click the link', () => {
    cy.get('li')
      .contains('Music')
      .click()
      .url().should('contain', '/music')

  });
  it('should find Resume menu item and click the link', () => {
    cy.get('#navi > :nth-child(3)')
      .should('contain', 'Resume')
      .click()
      .get('body').then((page) => {
        expect(page.text()).not.to.include('Resume')
      })
  });
  it('should return home and verify about detail', () => {
    cy.url().should('include', '/home')
    cy.get('.SectionHeader')
      .should(res => {
        const headItem = res.text()
        expect(headItem).to.eq('About')
      })
    cy.get('.SectionContent', {
        timeout: 30000
      })
      .should(res => {
        const mainItem = res.text()
        expect(mainItem.length).to.be.greaterThan(0)
      })
  })
})