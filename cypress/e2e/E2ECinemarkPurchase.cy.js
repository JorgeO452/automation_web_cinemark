import HomePage from '../page/homePage'
import ElementActions from '../page/ElementActions'

const homePage = new HomePage
const elementActions = new ElementActions

const testData = require ('../fixtures/TestData.json')

describe('Movie Ticket Purchase', () => {
    it('Should allow a user to select a movie, choose a city, theater, and seats, and complete the purchase', () => {
        homePage.navigatorToHomePage()
        elementActions.clickOnTheButton(HomePage.modalCloseButton)
        elementActions.clickOnTheButton(HomePage.signInButton)
        elementActions.writeInTextBox(HomePage.emailInput, testData.MemberEmail)
        elementActions.writeInTextBox(HomePage.passwordInput, testData.MemberPassword)
        elementActions.clickOnTheButton(HomePage.loginButton)
        elementActions.validation(HomePage.memberNameText, testData.MemberName)
        elementActions.selectMovie(testData.TitleMovie)
        elementActions.clickOnTheButton(HomePage.selectCityButton)
        elementActions.clickOnTheButton(HomePage.userSelect)
        elementActions.clickOnTheButton(HomePage.timeButton)
        elementActions.clickOnTheButton(HomePage.confirmButton)
        cy.wait(8000)
        elementActions.clickOnTheButton(HomePage.modalCloseButton)
        elementActions.selectDropDown(HomePage.seatSelect, testData.option)
        elementActions.clickOnTheButton(HomePage.continueButton)
        homePage.selectToSeat(testData.gridRow, testData.gridColumn1)
        homePage.selectToSeat(testData.gridRow, testData.gridColumn2)
        elementActions.clickOnTheButton(HomePage.shoppingCartContinueButton)
        elementActions.clickOnTheButton(HomePage.confirmSeatButton)
    })
})