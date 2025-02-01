import{login,PaymentRequest} from "/cypress/fixtures/selector.js";
/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
 })
 
 
 const access = require("./Validlogin.cy.js");
 describe(" PaymentRequest Test Scenarios", function () {
    beforeEach(function () {
        cy.visit("/")
        access.ValidLogin();
        
    });

    it('User should be able to send invoice to customer', function(){
        cy.get('input[name="amount"]').type('4000');
        cy.get('.block > .relative > .form-input').type('8077112711');
        cy.get('.space-y-3 > .w-full').click();
        cy.get('.btn-primary').click();

        //this line of code is to assert that invoice was sent successfully"
       cy.contains('Invoice sent successfully').should('be.visible'); 
        
       })


   

    

});