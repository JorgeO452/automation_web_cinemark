import HomePage from '../page/homePage'
import ElementActions from '../page/ElementActions'

const homePage = new HomePage
const elementActions = new ElementActions
const credentialsData = require ('../fixtures/credentials.json')

describe('Compra', () => {
    it('User', () => {
        homePage.navigatorToHomePage()
        elementActions.clickOnTheButton(HomePage.modalCloseButton)
        elementActions.clickOnTheButton(HomePage.signInButton)
        elementActions.writeInTextBox(HomePage.emailInput, credentialsData.MemberEmail)
        elementActions.writeInTextBox(HomePage.passwordInput, credentialsData.MemberPassword)
        elementActions.clickOnTheButton(HomePage.loginButton)
        elementActions.validation(HomePage.memberNameText, credentialsData.MemberName)
    })
})