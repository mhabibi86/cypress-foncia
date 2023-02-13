Feature: Search feature

    Scenario: Search for an appartment in Paris
        Given I am on the home page
        When I select rental as the project
        And I select an apartment as the property type
        And I enter 1500 euros as the maximum price
        And I choose "Paris" as the city
        And I confirm the search
        Then the result count is 50