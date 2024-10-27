/* import * as chai from 'chai';
import chaiHTTP from 'chai-http';
import app from '../../src/api/app.js'; */
const chai = require('chai');
const chaiHTTP = require('chai-http');
const sinon = require('sinon');
const app = require('../../src/api/app');
const mock = require('../mocks/mock');

chai.use(chaiHTTP);
const { expect } = chai;

describe('Rota de clientes', function () {

    describe('Usando o método GET em /clientes', function() {
        it('Retorna a lista de todos os clientes', async function() {
            const response = await chai.request(app).get('/clientes');
    
            expect(response.status).to.equal(200);
            expect(response.body).to.be.instanceOf(Array);
            expect(response.body).to.deep.equal(mock.allClientes);
        });
    });
});


describe('Rota de pedidos', function () {

    beforeEach(function () {
        sinon.stub(app, 'buscaPedidosPorNomeCliente').resolves(mock.pedidoPorNomeClinte);
    });


    afterEach(function () {
        sinon.restore();
    })

    describe('Usando método POST em /pedidos com flag: nomeCliente', function() {
        it('Retorna apenas o cliente que for passado o nome pela flag', async function () {
            const response = await chai.request(app).post('/pedidos').send({ nomeCleinte: 'CECILIA ELOA FELIX LEITAO' })
            
            expect(response.status).to.be(200);
            expect(response.body).to.deep.equal(mock.pedidoPorNomeClinte)
        });
    });



});

