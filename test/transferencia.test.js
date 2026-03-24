const request = require('supertest');
const {expect} = require('chai');
require('dotenv').config();
const { obterToken } = require('../helpers/autenticacao');     

describe('Trasferencias', ()=>{
    describe('POST/Transferencias',()=>{
        let token 
        beforeEach(async () => {
           token = await obterToken('julio.lima',123456)
        })
        it('Deve retonar sucesso codigo 201 se a transferencia for maior ou igual a R$10:00', async () => {
          
           
            const resposta = await request(process.env.BASE_URL)   
            .post("/transferencias")
            .set('content-type','application/json')
            .set('Authorization','bearer '+token)
            .send(  
                {
                    contaOrigem:3,
                    contaDestino:2,
                    valor: 11,
                    token: ''
                })
            
             expect(resposta.status).to.equal(201);
             

        })
        it('Deve retonar sucesso codigo 422 se a transferencia for menor que R$10:00', async () => {
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