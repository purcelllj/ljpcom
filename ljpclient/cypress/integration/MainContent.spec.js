describe('Main content tests', () => {
    it('should click Music tab and see stuff', () => {
        cy.visit('/');
        cy.get('li')
            .contains('Music')
            .click();
    });
    it('should navigate to contact tab', () => {
        cy.get('li')
            .contains('Contact')
            .click();
        cy.get('span')
            .first()
            .contains('Phone');
        cy.get('span')    
            .last()
            .contains('Email');
    })
})