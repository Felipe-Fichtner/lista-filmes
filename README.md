# Serie Journal - CRUD de Series

## Identificacao

- Aluno: Felipe Fichtner
- Disciplina: Desenvolvimento de Sistemas Frontend
- Fase: 2

## Descricao do Projeto

Aplicacao React para gerenciamento de series assistidas com consumo de API REST.
O projeto implementa rotas, formulario com validacao e operacoes CRUD completas
usando os dados retornados pelo backend serieJournal-api.

## Requisitos

- Node.js 18+ (recomendado)
- npm

Destaques fase 2:
- Integracao com Axios para requisicoes HTTP
- Interface com Material UI (AppBar, Card, TextField, Button)
- Testes de componentes com Vitest + React Testing Library
- Tratamento de erros e estados de carregamento
- API serieJournal-api em execucao

## Como executar

1. Instale e execute a API (backend):

```bash
git clone https://github.com/adsPucrsOnline/DesenvolvimentoFrontend.git
cd DesenvolvimentoFrontend/serieJournal-api
npm install
npm start
```

A API sobe por padrao em http://localhost:5000


```bash
Execute em outra porta (ex: 5001) para evitar conflitos:

```bash
PORT=5001 npm start
```
npm run dev
```

3. Abra no navegador:

npm run dev
```

Se a API estiver em porta diferente de 5001, exporte a variavel de ambiente:

```bash
VITE_API_URL=http://localhost:PORTA npm run dev
http://localhost:5173

## Integracao com API

http://localhost:5173

## Rodando testes

```bash
npm run test
```

- GET /series
- GET /series/:id
O frontend usa Axios para consumir os endpoints REST:

- POST /series
- PUT /series
- DELETE /series/:id

Campos usados no payload:

- title
- seasons
- releaseDate
- director
- production
- category
- watchedAt

## Estrutura principal

```text
src/
  components/
    NavBar/
    SerieForm/
    SerieList/
  pages/
    Home.jsx
    Sobre.jsx
  services/
    seriesApi.js
  App.jsx
```

## Funcionalidades

- Pagina inicial e pagina sobre
- Cadastro de serie com validacao dos campos obrigatorios
- Listagem de series vindas da API
- Edicao de serie por rota /editar/:id
- Exclusao com confirmacao
- Feedback visual para erro e carregamento da API

## Prints da Aplicacao
- Interface com Material UI Design
- Requisicoes HTTP com Axios
- Testes automatizados dos componentes

### Pagina Inicial
![Pagina Inicial](./screenshots/home.png)

### Sobre
![Sobre](./screenshots/sobre.png)

### Cadastrar Series
![Cadastrar Series](./screenshots/cadastrar.png)

### Lista de Series
![Lista de Series](./screenshots/lista.png)

## Tecnologias

- React 18
- Vite 5
- React Router DOM
- JavaScript (JSX)
