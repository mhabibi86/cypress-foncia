class ResultPage {
    elements = {
        resultCount: () => cy.get(".search-results-header-total > .search-results-header-value")
    };

}

export const resultPage = new ResultPage();