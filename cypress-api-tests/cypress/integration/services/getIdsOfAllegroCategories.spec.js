
describe('API Testing with Cypress', function() {
        it('GET-list-categories', function() {
    // cy.getDeviceCode();
     cy.getCategories('')
        .then(function(response){
            expect(response.status).to.eq(200);
            expect(response).to.have.property('body');
            expect(response).to.have.property('headers');
            expect(response.body).to.not.be.null;
            expect(response.body.categories).to.have.length(13);
            expect(response.body.categories[0].name).equal('Dom i Ogród');
         
            expect(response.body.categories[1]).to.have.property('id').to.be.a('string');
            expect(response.body.categories[1]).to.have.property('name').to.be.a('string');
            expect(response.body.categories[1]).to.have.property('parent').to.be.a('null');
            expect(response.body.categories[1]).to.have.property('leaf').to.be.a('boolean');
            expect(response.body.categories[1]).to.have.property('options').to.be.a('object');

            expect(response.body.categories[1].options).to.have.property('variantsByColorPatternAllowed').to.be.a('boolean');
            expect(response.body.categories[1].options).to.have.property('advertisement').to.be.a('boolean');
            expect(response.body.categories[1].options).to.have.property('advertisementPriceOptional').to.be.a('boolean');
            expect(response.body.categories[1].options).to.have.property('offersWithProductPublicationEnabled').to.be.a('boolean');
            expect(response.body.categories[1].options).to.have.property('customParametersEnabled').to.be.a('boolean');


            cy.fixture('/getCategories.json').then(getCategories => {
                expect(response.body).to.have.property('categories');
                expect(response.body.categories).to.deep.equal(getCategories.categories);
            });
            
        });

    });
});

