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
}

export default HomePage