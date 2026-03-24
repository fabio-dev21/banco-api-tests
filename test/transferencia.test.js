const request = require('supertest');
const {expect} = require('chai');

/*const chamada = await request('http://localhost:3000')
           .post('/login')  
           .set('Content-Type','application/json') 
           .send( 
                {
                 'username': 'julio.lima',
                 'senha': '123456'
                                   
                })

                const Token = Token.body.token;*/

describe('Trasferencias', ()=>{
    describe('POST/Transferencias',()=>{
        it('Deve retonar sucesso codigo 201 se a transferencia for maior ou igual a R$10:00', async () => {
            const autenticacao = await request('http://localhost:3000')
            .post('/login')
            .set('content-type','application/json')
            .send( {
                 'username': 'julio.lima',
                 'senha': '123456'
                                   
                })
            const token =autenticacao.body.token
            const resposta = await request('http://localhost:3000')   
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
            const autenticacao = await request('http://localhost:3000')
            .post('/login')
            .set('content-type','application/json')
            .send( {
                 'username': 'julio.lima',
                 'senha': '123456'
                                   
                })
            const token =autenticacao.body.token
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