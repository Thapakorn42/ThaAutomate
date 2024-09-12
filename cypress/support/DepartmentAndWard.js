//import { login } from "../support/login";
export function selectDepartmentAndWard (department,ward){
    // select department 
        login('test-superadmin', '12345678');
        cy.url().should('include', '/select-ward');
    cy.visit('https://dev-x.cortexcloud.co/ipd/select-ward')
    cy.get('[data-testid="searchbox-trigger-select-department"]').click()
    cy.get('[data-value="อายุรศาสตร์"]').click();

    // select ward
    cy.get('[data-testid="searchbox-trigger-select-ward"]').click()
    cy.get('[data-value="อายุรกรรม หญิง"]').click();

    // start 
    cy.get('[data-testid="submit-select-ward"]').click();
}