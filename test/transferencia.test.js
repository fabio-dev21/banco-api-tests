const request = require('supertest');
const {expect} = require('chai');
require('dotenv').config();
const { obterToken } = require('../helpers/autenticacao');
const postTransferencias = require('../fixtures/postTransferencias.json')     

describe('Trasferencias', ()=>{
    describe('POST/Transferencias',()=>{
        let token 
        beforeEach(async () => {
           token = await obterToken('julio.lima',123456)
        })
        it('Deve retonar sucesso codigo 201 se a transferencia for maior ou igual a R$10:00', async () => {
          const bodyTransferencias = {...postTransferencias}
           const resposta = await request(process.env.BASE_URL)   
            .post("/transferencias")
            .set('content-type','application/json')
            .set('Authorization','bearer '+token)
            .send(bodyTransferencias)
            expect(resposta.status).to.equal(201);
        })
        it('Deve retonar sucesso codigo 422 se a transferencia for menor que R$10:00', async () => {
           const bodyTransferencias = {...postTransferencias}
           bodyTransferencias.valor = 7
           const token = await obterToken('julio.lima',123456)
            const resposta = await request('http://localhost:3000')   
            .post("/transferencias")
            .set('content-type','application/json')
            .set('Authorization','bearer '+token)
            .send(  
                {
                    contaOrigem:3,
                    contaDestino:2,
                    valor: 9.99,
                    token: ''
                })
            
             expect(resposta.status).to.equal(422);
        })
             

    })

})