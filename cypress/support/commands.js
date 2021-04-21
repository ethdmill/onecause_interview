// const { ValueConverter } = require("@angular/compiler/src/render3/view/template")

// example Custom Cypress command, obviously we don't need to log in to a math app
Cypress.Commands.add('login', user => {
    return cy
      .request({
        url: 'http://localhost:3000/login',
        method: 'POST',
        body: user,
      })
      .then(response => {
        window.localStorage.setItem('token', response.body.user.token)
        return {...response.body.user, ...user}
      })
  })

// custom command I commonly write to make writing things just a bit quicker
Cypress.Commands.add('getClick', (element) => {
  cy.get(element).click({ force: true })
})

// another custom command to expedite writing tests
Cypress.Commands.add('getClickType', (element, text) => {
  cy.get(element).click({ force: true }).type(text)
})
