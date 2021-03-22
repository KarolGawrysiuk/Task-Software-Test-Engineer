describe('API Testing with Cypress', function() {
    it('GET-categories-Id', function() {
 //cy.getDeviceCode();
 cy.getCategories(6)
    .then(function(response){
        expect(response.status).to.eq(200);
        expect(response).to.have.property('body');
        expect(response.body).to.not.be.null
        expect(response.body.name).equal('Kolekcje');
        
        

        expect(response.body).to.have.property('id').to.be.a('string');
        expect(response.body).to.have.property('name').to.be.a('string');
        expect(response.body).to.have.property('parent').to.be.a('object');
            expect(response.body.parent).to.have.property('id').to.be.a('string');

        expect(response.body).to.have.property('leaf').to.be.a('boolean');
        expect(response.body).to.have.property('options').to.be.a('object');

        expect(response.body.options).to.have.property('variantsByColorPatternAllowed').to.be.a('boolean');
        expect(response.body.options).to.have.property('advertisement').to.be.a('boolean');
        expect(response.body.options).to.have.property('advertisementPriceOptional').to.be.a('boolean');
        expect(response.body.options).to.have.property('offersWithProductPublicationEnabled').to.be.a('boolean');
        expect(response.body.options).to.have.property('customParametersEnabled').to.be.a('boolean');

    });

});


    it('GET-categories-Invalid-ID ', function() {
        cy.getCategories(13).then(function(response){
            expect(response.status).to.eq(404);
            expect(response.body.errors).to.have.length(1);
            expect(response.body.errors[0]).to.have.property('code').to.be.a('string');
            expect(response.body.errors[0]).to.have.property('details').to.be.a('string');
            expect(response.body.errors[0]).to.have.property('code').to.be.a('string');
            expect(response.body.errors[0]).to.have.property('path').to.be.a('null');
            expect(response.body.errors[0]).to.have.property('userMessage').to.be.a('null');

            expect(response.body.errors[0].code).equal('ERROR');
            expect(response.body.errors[0].details).equal('ResourceNotFoundException');
            expect(response.body.errors[0].message).equal("Category '13' not found");
            expect(response.body.errors[0].path).equal(null);
            expect(response.body.errors[0].userMessage).equal(null);
            
        })
        });
});
