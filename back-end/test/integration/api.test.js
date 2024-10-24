const chai = require('chai');
const chaiHTTP = require('chai-http');
const app = require('../../src/api/app');

chai.use(chaiHTTP);
const { expect } = chai;


describe('Usando o método GET em /clientes', function(){
    it('Retorna a lista de todos os clientes', async function (){
        const response = await chai.request(app).get('/clientes');
        const output = [
            {
                "id": 1,
                "nome": "MATHEUS SANTOS GOMES",
                "cpf": "56583619075"
            },
            {
                "id": 2,
                "nome": "CECILIA ELOA SANTOS FELIX",
                "cpf": "64943398758"
            },
            {
                "id": 3,
                "nome": "MARCOS RODRIGO DA SILVA",
                "cpf": "88828857986"
            },
            {
                "id": 4,
                "nome": "MARIA JOANA FERREIRA",
                "cpf": "34576587690"
            }
        ];

        expect(response.status).to.be.equals(200);
        expect(response.body).to.deep.equal(output) 
    });
});