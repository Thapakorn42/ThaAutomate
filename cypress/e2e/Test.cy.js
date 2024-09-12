import { login,selectDepartmentAndWard } from "../support/login";
//import { selectDepartmentAndWard } from "../support/DepartmentAndWard";

describe('Validate  cortex',() => {
    beforeEach(() => {
        // ทำการ login ก่อนการทดสอบทุกครั้ง

        login('test-superadmin', '12345678');
        cy.url().should('include', '/select-ward');
    });

    it('login success', () => {
       // login('test-superadmin', '12345678');
        cy.url().should('include', '/select-ward');
    });
    
    it('Go to bedlist page', () => {
        selectDepartmentAndWard ('อายุรศาสตร์', 'อายุรกรรม หญิง');
        cy.contains('เตียงทั้งหมด').should('be.visible')
    });

}) 



