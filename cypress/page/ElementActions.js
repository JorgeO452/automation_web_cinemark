class ElementActions {
    clickOnTheButton(button) {
        cy.get(button).should('be.visible').click({force: true})
    }

    writeInTextBox(localtor, input) {
        cy.get(localtor).should('be.visible').type(input)
    }
    
    validation(localtor, memberName) {
        cy.get(localtor).should('have.text', memberName)
    }

    selectMovie(titleMovie) {
        cy.contains(titleMovie).click({force: true})
    }

    selectDropDown(localtor, option) {
        cy.get(localtor).should('be.visible').click()
        cy.get('ul[role="listbox"]', { timeout: 10000 }).should('be.visible')
        cy.get('ul[role="listbox"]').find('li').contains(option).click()
    }

}

export default ElementActions