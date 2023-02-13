# FONCIA DEMO PROJECT

This project contains automated tests for Foncia web application 

---

## Installation
run `npm install` to install the project

## Open the tests
* run `npm run cy:open:dev` to open cypress server and run tests on development environment
* run `npm run cy:open:int` to open cypress server and run tests on integration environment
* run `npm run cy:open:prod` to open cypress server and run tests on production environment

## Run the tests
* run `npm run cy:run:dev` to run tests on development environment
* run `npm run cy:run:int` to run tests on integration environment
* run `npm run cy:run:prod` to run tests on production environment

## Reporting
* HTML report with mochawesome is generated in the folder reports/html
* To generate the Allure report, run `npm run allure:report` and `allure open`