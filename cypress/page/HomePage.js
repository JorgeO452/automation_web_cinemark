import ElementActions from '../page/ElementActions'

const elementActions = new ElementActions

class HomePage {
    navigatorToHomePage(){
        cy.visit('https://cinemark-colombia-dev-staging-gzs859bsx-cinemark-colombia.vercel.app/')
        cy.viewport(1920, 1080)
    }

    static modalCloseButton = '.ant-modal-close-x'
    static signInButton = '.secondary-nav_btn_register > :nth-child(2) > .jsx-2733391715 > .ant-btn'
    static emailInput = '#MemberEmail'
    static passwordInput = '#MemberPassword'
    static loginButton = '.text-center > .ant-btn'
    static memberNameText = '.ant-dropdown-link > .jsx-271142912'
    static selectCityButton = '.container-select-city > .ant-select > .ant-select-selection'
    static userSelect = '.ant-select-dropdown-menu-item'
    static timeButton = '.theaters-detail__container > :nth-child(1)'
    static confirmButton = '.detail-session__drawer--controls > .primary'
    static seatSelect = ':nth-child(2) > .information-content > .seat-format__body > .seat-format__ticket-information > :nth-child(1) > :nth-child(3) > .jsx-3706725137 > .select-seat-format > .ant-select-selection > .ant-select-selection__rendered'
    static itemSelect = '.ant-select-dropdown-menu-item-selected'
    static continueButton = '#__next > div:nth-child(2) > div.jsx-1369409061.bottom-bar > div.jsx-1369409061.shopping-cart > div.jsx-1369409061.bottom-bar__controls > span > button'
    static shoppingCartContinueButton = '.bottom-bar__controls > :nth-child(2) > .ant-btn'
    static confirmSeatButton = '.d-flex > .primary'

    selectToSeat(gridRow, gridColumn) {
        const selectSeat = `[style="grid-area: ${gridRow} / ${gridColumn}; display: inline-block;"] > .jsx-399723978`
        elementActions.clickOnTheButton(selectSeat)
    }

}

export default HomePage