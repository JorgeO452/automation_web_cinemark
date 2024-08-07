class ElementActions {
    clickOnTheButton(button){
        cy.get(button).should('be.visible').click()
    }

    writeInTextBox(localtor, input){
        cy.get(localtor).should('be.visible').type(input)
    }
    
    validation(localtor, memberName) {
        cy.get(localtor).should('have.text', memberName)
    }
}

export default ElementActions