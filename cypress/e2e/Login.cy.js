import{login} from "/cypress/fixtures/selector.js";
/// <reference types="cypress" />



describe("Login ", function () {
        before(function () {
            cy.visit("/")
        });

 it('Valid Login', function(){
    cy.get(':nth-child(1) > .relative > .form-input').clear().type('ttoossiinn13@gmail.com');
    cy.get('.mt-5 > .relative > .form-input').clear().type('Adeola123#');
    cy.get('.mt-9 > .w-full').click()
   ;

 })

})