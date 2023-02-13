class SearchPage {
    elements = {
        // project list
        projectList: () => cy.get("#projectToggle"),
        buyListElement: () => cy.get('p-radiobutton[name="project"]:nth-child(1)'),
        rentListElement: () => cy.get('p-radiobutton[name="project"]:nth-child(2)'),
        buyNewListElement: () => cy.get('p-radiobutton[name="project"]:nth-child(3)'),
        // property type list
        propertyList: () => cy.get("#propertyToggle"),
        apartmentListElement: () => cy.get('p-checkbox[name="type"]:first'),
        // price 
        priceInput: () => cy.get("#price"),
        // city 
        cityInput: () => cy.get("#city"),
        cityFirstElementList: () => cy.get("#pr_id_6_list > li:nth-child(1) > span"),
        // serach button
        searchButton: () => cy.get('button[type="submit"]').contains('Rechercher')
    };
}

export const searchPage = new SearchPage();