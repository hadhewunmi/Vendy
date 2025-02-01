import{login} from "/cypress/fixtures/selector.js";


export const ValidLogin = () => {
    cy.get(':nth-child(1) > .relative > .form-input').clear().type('ttoossiinn13@gmail.com');
    cy.get('.mt-5 > .relative > .form-input').clear().type('Adeola123#');
    cy.get('.mt-9 > .w-full').click();
    
}