import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
 
Given("the user is on the home page", () => {
    cy.visit("https://www.saucedemo.com/v1/index.html");
});
 
When("the user enters {string} and {string}" , ( username , password ) => { 
    cy.get('#user-name').type(username) ;
    cy.get('#password').type(password); } )
When ( "the user clicks on login button" ,() => {
    cy.get(' .btn_action').contains('LOGIN').click()
} )

Then ("the user is on the dashboard page",() => {
    cy.get('.bm-burger-button > button').click();
    cy.get('#logout_sidebar_link').contains('Logout').click()} )

