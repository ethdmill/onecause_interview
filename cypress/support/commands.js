// custom command I commonly write to make writing things just a bit quicker
Cypress.Commands.add('getClick', (element) => {
  cy.get(element).click({ force: true })
})

// another custom command to expedite writing tests
Cypress.Commands.add('getClickType', (element, text) => {
  cy.get(element).click({ force: true }).type(text)
})
