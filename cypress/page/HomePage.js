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
    static loaderBoxIcon = '.jsx-2020027994 > .content-loader > .loader-box'
    static timeButton = '.theaters-detail__container > :nth-child(2)'
    static confirmButton = '.detail-session__drawer--controls > .primary'
    static Icon = '[data-layer="Content"]'
    static loaderIcon = '.loader-box'
    static seatSelect = ':nth-child(2) > :nth-child(2) > .information-content > .seat-format__body > .seat-format__ticket-information > :nth-child(1) > :nth-child(3) > .jsx-3706725137 > .select-seat-format > .ant-select-selection'
    static continueButton = '#__next > div:nth-child(2) > div.jsx-1369409061.bottom-bar > div.jsx-1369409061.shopping-cart > div.jsx-1369409061.bottom-bar__controls > span > button'
    static shoppingCartContinueButton = '.bottom-bar__controls > :nth-child(2) > .ant-btn'
    static confirmSeatButton = '.d-flex > .primary'
    static selectFoodButton = '#Combos > .concessions-block__container > .concessions-block__list > :nth-child(2) > .candy-store__item > .candy-store__content > .candy-store__info > :nth-child(1) > .candy-store__actions > .candy-store-controls > .candy-store__btn-control--left-space'
    static pymentMethodSelect = ':nth-child(1) > .ant-collapse-header'
    static cardNumberInput = '#payment_creditCard\\.number'
    static cardNameInput = '#payment_creditCard\\.name'
    static cardSecurityCodeInput = '#payment_creditCard\\.securityCode'
    static numberInstallmentsSelect = '#payment_creditCard\\.installments > .ant-select-selection > .ant-select-selection__rendered'
    static agreementCheck = '#payment_agreement'
    static confirmPaymentButton = '.text--right > .primary'
    static loaderFinal = '.content-loader > .text--sentence-case'
    static codeQA = '.container-information__block > .text-center'
    static CodeText = 'h4.text--uppercase'

    selectToSeat(gridRow, gridColumn) {
        const selectSeat = `[style="grid-area: ${gridRow} / ${gridColumn}; display: inline-block;"] > .jsx-399723978`
        elementActions.clickOnTheButton(selectSeat)
    }

}

export default HomePage