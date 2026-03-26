const request = require('supertest');
const {expect} = require('chai');
require('dotenv').config();
const { obterToken } = require('../helpers/autenticacao');
const postTransferencias = require('../fixtures/postTransferencias.json')     

describe('Trasferencias', ()=>{
    let token 
    beforeEach(async () => {
      token = await obterToken('julio.lima',123456)
    })
    describe('POST/Transferencias',()=>{
        
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
            const resposta = await request(process.env.BASE_URL)   
            .post("/transferencias")
            .set('content-type','application/json')
            .set('Authorization','bearer '+token)
            .send(bodyTransferencias)
            
             expect(resposta.status).to.equal(422);
        })
        it('Deve retornar erro 401 se a tranferencia for acima de 5000 sem token', async ()=>{
            const bodyTransferencias = {...postTransferencias}
            bodyTransferencias.valor = 5001
            const resposta = await request(process.env.BASE_URL)
            .post('/transferencias')
            .set('content-type','application/json')
            .set('Authorization',`Bearer ${token}`)
            .send(bodyTransferencias)

            expect(resposta.status).to.equal(401)
            




        })
             

    })
    describe('GET/Transferencias/{id}', () => {
          it('Deve retornar sucesso com 200 e dados iguais ao registro de transferencia contido no banco de dados quando o id for valido ',async () => {
             const resposta = await request(process.env.BASE_URL)   
              .get("/transferencias/20")
              .set('Authorization','bearer '+token)
            expect(resposta.status).to.equal(200)
             expect(resposta.body.id).to.equal(20)
            expect(resposta.body.conta_origem_id).to.equal(3)
            expect(resposta.body.conta_destino_id).to.equal(2)
            expect(resposta.body.valor).to.equal(11.00)
           
          
        })

    })
    describe('GET/transferencias', () =>{
        it('Deve retornar 10 elementos na paginação quando informar limite de 10 registros ', async () => {
            const resposta = await request(process.env.BASE_URL)
            .get('/transferencias?page=1&limit=10')
            .set('Authorization',`Bearer ${token}`)

            expect(resposta.status).to.equal(200)
            expect(resposta.body.limit).to.equal(10)
            expect(resposta.body.transferencias).to.have.lengthOf(10);





        })



    })
      
})