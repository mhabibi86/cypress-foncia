import { Given, And, When, Then, After, Before } from "@badeball/cypress-cucumber-preprocessor";
import {homePage} from '@pages/HomePage'
import {searchPage} from '@pages/SearchPage'
import {resultPage} from '@pages/ResultPage'

Given(/I am on the home page/, function() {
    cy.visit("/")
    homePage.elements.logo().should("be.visible")
    homePage.elements.acceptCoockiesButton().click()
})

Given(/I select rental as the project/, function() {
    searchPage.elements.projectList().click()
    searchPage.elements.rentListElement().click()
})

Given(/I select an apartment as the property type/, function() {
    searchPage.elements.propertyList().click()
    searchPage.elements.apartmentListElement().click()
})

Given("I enter {int} euros as the maximum price", (price) => {
    searchPage.elements.priceInput().type(price)
});

Given("I choose {string} as the city", function (city) {
    searchPage.elements.cityInput().type(city)
    searchPage.elements.cityFirstElementList().click()
})

Given(/I confirm the search/, function() {
    searchPage.elements.searchButton().click()
})

Given("the result count is {int}", function (count) {
    resultPage.elements.resultCount().should('have.text', count)
})