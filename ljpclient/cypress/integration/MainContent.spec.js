const homeLink = '[data-test-id=home]';
const musicLink = '[data-test-id=music]';
const resumeLink = '[data-test-id=resume]';
const projectLink = '[data-test-id=project]';

describe('Main content tests', () => {
  beforeEach(() => {
    cy.visit('home');
  });
  it('should verify music nav link', () => {
    cy.get(musicLink)
      .should('have.text', 'music')
      .click()
      .url()
      .should('contain', '/music');
  });
  it('should verify resume nav link', () => {
    cy.get(resumeLink)
      .should('have.text', 'resume')
      .click()
      .get('body')
      .then(page => {
        expect(page.text()).not.to.include('Resume');
      });
  });
  it('should verify home nav link', () => {
    cy.get('.SectionHeader')
      .click()
      .should(res => {
        const headItem = res.text();
        expect(headItem).to.eq('home');
      });
    cy.get('.SectionContent', {
      timeout: 30000
    }).should(res => {
      const mainItem = res.text();
      expect(mainItem.length).to.be.greaterThan(0);
    });
  });
});
