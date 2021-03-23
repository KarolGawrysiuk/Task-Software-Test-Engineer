describe('API Testing with Cypress', function() {
    it('GET-categories-parameters', function() {
 //cy.getDeviceCode();
 cy.getCategories(12 +'/parameters')
    .then(function(response){
        expect(response.status).to.eq(200);
        expect(response).to.have.property('body');
        expect(response).to.have.property('headers');
        expect(response.body).to.not.be.null;
        expect(response.body.parameters).to.have.length(6);

    
        expect(response.body.parameters[0]).to.have.property('id').to.be.a('string');
        expect(response.body.parameters[0]).to.have.property('name').to.be.a('string');
        expect(response.body.parameters[0]).to.have.property('type').to.be.a('string');
        expect(response.body.parameters[0]).to.have.property('required').to.be.a('boolean');
        expect(response.body.parameters[0]).to.have.property('requiredForProduct').to.be.a('boolean');
        expect(response.body.parameters[0]).to.have.property('unit').to.be.a('null');
        expect(response.body.parameters[0]).to.have.property('options').to.be.a('object');
            expect(response.body.parameters[0].options).to.have.property('variantsAllowed').to.be.a('boolean');
            expect(response.body.parameters[0].options).to.have.property('variantsEqual').to.be.a('boolean');
            expect(response.body.parameters[0].options).to.have.property('ambiguousValueId').to.be.a('null');
            expect(response.body.parameters[0].options).to.have.property('dependsOnParameterId').to.be.a('null');
            expect(response.body.parameters[0].options).to.have.property('requiredDependsOnValueIds').to.be.a('null');
            expect(response.body.parameters[0].options).to.have.property('displayDependsOnValueIds').to.be.a('null');
            expect(response.body.parameters[0].options).to.have.property('describesProduct').to.be.a('boolean');
            expect(response.body.parameters[0].options).to.have.property('customValuesEnabled').to.be.a('boolean');

        expect(response.body.parameters[0]).to.have.property('dictionary').to.be.a('array');
            expect(response.body.parameters[0].dictionary).to.have.length(6);
            expect(response.body.parameters[0].dictionary[0]).to.have.property('id').to.be.a('string');
            expect(response.body.parameters[0].dictionary[0]).to.have.property('value').to.be.a('string');
            expect(response.body.parameters[0].dictionary[0]).to.have.property('dependsOnValueIds').to.be.a('array' );
        
        expect(response.body.parameters[0]).to.have.property('restrictions').to.be.a('Object');
            expect(response.body.parameters[0].restrictions).to.have.property('multipleChoices').to.be.a('boolean');
            
            cy.fixture('/getParametersCategory.json').then(getParametersCategories => {
                expect(response.body).to.have.property('parameters');
                expect(response.body.parameters).to.deep.equal(getParametersCategories.parameters);
            });
    });

});


    it('GET-categories-Invalid-ID ', function() {
        cy.getCategories(1331231 + '/parameters').then(function(response){
            expect(response.status).to.eq(404);
            expect(response.body.errors).to.have.length(1);
            expect(response.body.errors[0]).to.have.property('code').to.be.a('string');
            expect(response.body.errors[0]).to.have.property('details').to.be.a('string');
            expect(response.body.errors[0]).to.have.property('code').to.be.a('string');
            expect(response.body.errors[0]).to.have.property('path').to.be.a('null');
            expect(response.body.errors[0]).to.have.property('userMessage').to.be.a('null');

            expect(response.body.errors[0].code).equal('ERROR');
            expect(response.body.errors[0].details).equal('ResourceNotFoundException');
            expect(response.body.errors[0].message).equal("Category '1331231' not found");
            expect(response.body.errors[0].path).equal(null);
            expect(response.body.errors[0].userMessage).equal(null);
            
        })
        });
});