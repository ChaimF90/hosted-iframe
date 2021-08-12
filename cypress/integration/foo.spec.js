describe('example to-do app', () => {
    const getIframeDocument = () => {
        return cy
            .get('iframe[data-cy="iframe"]')
            .its('0.contentDocument').should('exist')
    }

    const getIframeBody = () => {
        return getIframeDocument()
            .its('body').should('not.be.undefined')
            .then(cy.wrap)
    }

    it('gets the post', () => {
        cy.visit('http://localhost:3000/view');
        cy.iframe('[data-cy="iframe"]').find('.App-link').should('be.visible');
        // cy.get('iframe[data-cy="iframe"]').then(($el) => {
        //     // const el = $el.get(0) //native DOM element
        //     console.log($el.get(0));
        //   })
    })
});