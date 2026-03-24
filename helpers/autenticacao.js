const request = require('supertest');
const {expect} = require('chai');
require('dotenv').config();

 const obterToken= async (usuario,senha) => {
     const autenticacao = await request(process.env.BASE_URL)
                .post('/login')
                .set('content-type','application/json')
                .send( {
                     'username': usuario,
                     'senha': senha
                                       
                    })
                return autenticacao.body.token



}
module.exports = {
    obterToken

}