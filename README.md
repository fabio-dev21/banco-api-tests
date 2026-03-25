# Banco API Tests

## 📌 Sobre o projeto

Este projeto tem como objetivo automatizar os testes da API REST do repositório:
https://github.com/juliodelimas/banco-api

A proposta é validar o comportamento da API por meio de testes automatizados, contribuindo para a qualidade, confiabilidade e regressão controlada ao longo do desenvolvimento.

---

## 🎯 Objetivo

- Validar endpoints da API REST
- Garantir integridade das respostas
- Automatizar cenários positivos e negativos
- Facilitar a manutenção e evolução do sistema

---

## 🛠️ Stack utilizada

- JavaScript (Node.js)
- Mocha (framework de testes)
- Chai (assertions)
- Supertest (requisições HTTP)
- Mochawesome (relatórios em HTML)
- Dotenv (variáveis de ambiente)

---

## 📁 Estrutura de diretórios

```
banco-api-tests/
│
├── test/                 # Testes automatizados
├── mochawesome/          # Relatórios gerados
├── node_modules/         # Dependências
├── .env                  # Variáveis de ambiente (não versionado)
├── package.json          # Configuração do projeto
├── package-lock.json
└── README.md
```

---

## ⚙️ Configuração do ambiente

### 1. Clonar o repositório

```bash
git clone https://github.com/fabio-dev21/banco-api-tests.git
cd banco-api-tests
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Criar arquivo `.env`

Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

```
BASE_URL=http://localhost:3000
```

> ⚠️ A URL deve apontar para a API em execução.

---

## ▶️ Execução dos testes

Para executar os testes:

```bash
npm test
```

---

## 📊 Geração de relatórios

Os relatórios são gerados automaticamente utilizando o Mochawesome.

Após a execução dos testes, um relatório HTML será criado no diretório:

```
/mochawesome
```

Para visualizar:

1. Acesse a pasta `mochawesome`
2. Abra o arquivo `.html` no navegador

---

## 📚 Documentação das dependências

- Mocha: https://mochajs.org/
- Chai: https://www.chaijs.com/
- Supertest: https://github.com/visionmedia/supertest
- Mochawesome: https://github.com/adamgruber/mochawesome
- Dotenv: https://github.com/motdotla/dotenv

---

## 🤝 Contribuição

Sinta-se à vontade para contribuir com melhorias, correções ou novos cenários de teste.

---

## 📄 Licença

Este projeto é de uso livre para fins de estudo e aprimoramento profissional.
