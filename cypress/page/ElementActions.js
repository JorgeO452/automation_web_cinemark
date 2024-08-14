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

    validateNotExist(localtor) {
        cy.get(localtor, { timeout: 1000000 }).should('not.exist')
    }

    validateExist(localtor) {
        cy.get(localtor).should('exist')
    }

    validateTextExist(localtor, text) {
        cy.get(localtor).should('contain.text', text)
    }

    selectMovie(titleMovie) {
        cy.contains(titleMovie).click({force: true})
    }

    selectDropDown(localtor, option) {
        cy.get(localtor).should('be.visible').click()
        cy.get('ul[role="listbox"]', { timeout: 10000 }).should('be.visible')
        cy.get('ul[role="listbox"]').find('li').contains(option).click()
    }

    clickOnTheCheckbox(checkbox){
        cy.get(checkbox).should('be.enabled').check()
    }

}

export default ElementActions