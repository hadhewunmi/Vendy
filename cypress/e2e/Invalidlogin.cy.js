import{login} from "/cypress/fixtures/selector.js";
/// <reference types="cypress" />

describe("InvalidLogin ", function () {
        before(function () {
            cy.visit("/")
        });
 it('InValid Login', function(){
        
    cy.get(':nth-child(1) > .relative > .form-input').clear().type('ttoossiinn13@gmail.com');
    cy.get('.mt-5 > .relative > .form-input').clear().type('Adeola124#');
    cy.get('.mt-9 > .w-full').click()
    //this line of code is to assert Invalid email
    cy.contains('Incorrect password').should('be.visible'); 
   ;

 })
 })