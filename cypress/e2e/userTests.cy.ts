describe('User Card Tests', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    afterEach(() => {
      // Wait for 5 seconds between tests
      cy.wait(5000);
    });

    it('should display user cards', () => {
      cy.get('.card').should('have.length.greaterThan', 0);
    });
  
    it('should open and close the user modal', () => {
      cy.get('.card').first().within(() => {
        cy.contains('View More').click();
      });
  
      cy.get('.MuiDialog-container').should('be.visible');
      cy.contains('Close').click();
      cy.get('.MuiDialog-container').should('not.exist');
    });
  });