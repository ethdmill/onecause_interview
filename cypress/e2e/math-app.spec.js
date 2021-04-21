describe('math app', () => {
  it('does the maths', () => {
    
    // visits the locally hosted app
    cy.visit('/')
            
    // -----------------------------------------------------------------------------------

    // TEST 1: submission of a correct answer brings up the proper toast
    // selects the containing element of the math problem
    cy.get('#question')

      // selects the first numerical value, captures it, and changes it to an int
      .find("#xValue")
      .then(($xValue) => {
        let firstValue = parseInt($xValue.text())

        // selects the containing element again in the same scope as firstValue
        cy.get('#question')

          // selects the second numerical value, captures it, and changes it to an int
          .find('#yValue')
          .then(($yValue) => {
            let secondValue = parseInt($yValue.text())

            // another variable definition
            let correctAnswer = firstValue + secondValue
            
            // ---------------------------------------------------------------------------

            // types in a correct answer based on the randomly generated values
            cy.getClickType('#input', correctAnswer)

            // selects the answer button
            cy.getClick('#submit')

            // confirms the answer was correct by checking against the resulting toast
            // cy.get('.ng-trigger > .ng-tns-c59-1')
            cy.get('#toast-container > .ng-trigger')
              .should('be.visible')
              .and('have.text', " That's right! Try another one. ")

            // waits for toast to disappear
            cy.wait(6000)

          })
      })

    // -----------------------------------------------------------------------------------
    
    // TEST 2: submission of an incorrect answer brings up the proper toast
    cy.get('#question')
      .find("#xValue")
      .then(($xValue) => {
        let firstValue = parseInt($xValue.text())
        cy.get('#question')
          .find('#yValue')
          .then(($yValue) => {
            let secondValue = parseInt($yValue.text())
            let wrongAnswer = firstValue + secondValue + 1

            // ---------------------------------------------------------------------------

            // types in a correct answer based on the randomly generated values
            cy.getClickType('#input', wrongAnswer)

            // selects the answer button
            cy.getClick('#submit')

            // confirms the answer was correct by checking against the resulting toast
            cy.get('#toast-container > .ng-trigger')
              .should('be.visible')
              .and('have.text', " Sorry, that is not correct. Please try again. ")

            // waits for toast to disappear
            cy.wait(6000)

            // refreshes page to clear input field
            cy.visit('/')

          })
      })

    // -----------------------------------------------------------------------------------
    
    // TEST 3: input field does not allow (most) non-numerical characters
    // selects input field and types in some non-numerical characters
    cy.getClickType('#input', 'abcxyz')
      .should('have.text', '')
    
    // -----------------------------------------------------------------------------------
    
    // TEST 4: hovering over blank input field brings up the proper tooltip
    // selects disabled answer button and hovers over it
    cy.get('#submit')
      .trigger('mouseover', ({ force: true }))

    // confirms that the tooltip appears
    cy.get('#tooltip')
      .should('be.visible')

    // -----------------------------------------------------------------------------------
    
    // TEST 5: answer button is disabled until something is typed into the input field
    // refreshes page to ensure the input field is empty
    cy.visit('/')

    // confirms answer button is disabled on page load
    cy.get('#submit')
      .should('be.disabled')

    // types the number 1 into the input field
    cy.getClickType('#input', '1')

    // confirms answer button is enabled
    // cy.get('#submit').should('not.be.disabled')
    cy.get('#submit')
      .should('be.enabled')

    // -----------------------------------------------------------------------------------

  })
})
