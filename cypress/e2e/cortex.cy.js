
describe('cortex', () => {
  it('open web site cortex', () => {
    cy.visit('https://dev-x.cortexcloud.co/ipd/welcomes')
  })

  // it('click sign in', () => {
  //   cy.visit('https://dev-x.cortexcloud.co/ipd/welcome')
  //   cy.wait(2000)
  //   cy.get('[data-testid="welcome-sign-in-btn"]').click()
  // })

  // it('log-in', () => {
  //   cy.visit('https://dev-x.cortexcloud.co/ipd/welcome')
  //   cy.wait(2000)
  //   cy.get('[data-testid="welcome-sign-in-btn"]').click()
  //   cy.wait(2000)
  //   // กรอก username
  //   cy.get('[id="username"]').type('test-superadmin')
  //   // กรอก password
  //   cy.wait(2000)
  //   cy.get('[id="password"]').type('12345678')
  //   // คลิกปุ่มล็อกอิน
  //   cy.wait(2000)
  //   cy.get('[id="kc-login"]').click()

    

  // })

})

