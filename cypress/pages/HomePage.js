class HomePage {
    elements = {
        logo: () => cy.get(".logo"),
        acceptCoockiesButton: () => cy.get('button[type="submit"]').contains('Tout accepter')
    };

}

export const homePage = new HomePage();