import{login,Inventory} from "/cypress/fixtures/selector.js";
/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
 })
 
 
 const access = require("./Validlogin.cy.js");
 describe(" Inventory Test Scenarios", function () {
    beforeEach(function () {
        cy.visit("/")
        access.ValidLogin();
        
    });

    it('User should be view products in Inventory', function(){
        cy.get(':nth-child(5) > a > span').click()
        //this line of code is to assert user is on inventory page to view products
       cy.contains('Inventory').should('be.visible'); 
        
       })

    it('User should be able to add Products to Inventory', function(){
    cy.get(':nth-child(5) > a > span').click()
    cy.get('.sticky-1 > .btn-brand').click();
    cy.get('.space-y-5 > :nth-child(3) > .relative > .form-input').type('Coller');
    cy.get(':nth-child(4) > .relative > .form-input').type('Oak brand');
    cy.get(':nth-child(5) > .pr-14').click();
    cy.get('.pt-1 > .relative > .form-input').type('sewing');
    cy.get(':nth-child(5) > .popover > .opt-cont > .text-sm').click();
    cy.get(':nth-child(6) > .relative > .form-input').type('bottle');
    cy.get(':nth-child(7) > .form-input').type('Adj nfbbf hhffhfffh fhhfhf hhfhfhfff');
    cy.get(':nth-child(8) > .relative > .form-input').type('bottle');
    cy.get(':nth-child(9) > .relative > .form-input').type('5000');
    cy.get(':nth-child(10) > .relative > .form-input').type('20');
    cy.get(':nth-child(11) > .block').click();
    cy.get(':nth-child(11) > .popover > .opt-cont > :nth-child(1)').click();
    cy.get('.justify-end > .btn-brand').click();
    //this line of code is to assert product was added successfully
    cy.contains('Product Added Successfully').should('be.visible'); 

   })

  



   

});