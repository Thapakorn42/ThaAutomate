export function login(username, password) {

    cy.visit('https://dev-x.cortexcloud.co/ipd/welcome')
    cy.get('[data-testid="welcome-sign-in-btn"]').click()
    // กรอก username
    cy.get('[id="username"]').type(username)
    // กรอก password
    cy.get('[id="password"]').type(password)
    // คลิกปุ่มล็อกอิน
    cy.get('[id="kc-login"]').click()

}

export function selectDepartmentAndWard (department,ward){
    // select department 
    cy.visit('https://dev-x.cortexcloud.co/ipd/select-ward')
    cy.get('[data-testid="searchbox-trigger-select-department"]').click()
    cy.get('[data-value="อายุรศาสตร์"]').click();

    // select ward
    cy.get('[data-testid="searchbox-trigger-select-ward"]').click()
    cy.get('[data-value="อายุรกรรม หญิง"]').click();

    // start 
    cy.get('[data-testid="submit-select-ward"]').click();
}