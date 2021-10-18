import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
const url = "http://automationpractice.com/index.php"

Given('I login to the application', ()=> {
    cy.visit(url)
    cy.get('.login').click()
})

When('I enter username as {string}', username=>{
    cy.get('#email').type(username)
})

And('I enter password as {string}', password=>{
    cy.get('#passwd').type(password)
})

Then('I click on sign in button', ()=>{
    cy.get('#SubmitLogin').click()
})

And('I shuld be on the home page', ()=> {
    cy.get('.page-heading').should('have.text', 'My account')
})

And('I shuld see the error message', ()=> {
    cy.get('p:contains("error")').should('be.visible')
})