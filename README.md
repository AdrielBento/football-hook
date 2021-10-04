# ⚽️ football-hook

## 🛠 Getting Started

```shell
$ git clone https://github.com/AdrielBento/football-hook
$ npm install
$ npm run start
```

## ⚙️ Usage

> BaseUrl: http://localhost:3000

- **Get all teams**
  - endpoint: `/teams`
  - method: `GET`
  - response: `json`
- **Get a team**
  - endpoint: `/teams/:id`
  - method: `GET`
  - response: `json`
- **Create a team**
  - endpoint: `/team`
  - method: `POST`
  - response: `json`
  - body:
    ```json
    {
      "id": 1,
      "name": "Botafogo",
      "city": "Rio de Janeiro",
      "uf": "RJ",
      "league": "",
      "titles": [{ "state": 44 }, { "national": 43 }, { "international": 2 }],
      "team_payroll": 333.33
    }
    ```
- **Update a team**
  - endpoint: `/teams/:id`
  - method: `PUT`
  - response: `json`
  - body:
    ```json
    {
      "name": "Fluminense
    }
    ```
- **Delete a team**
  - endpoint: `/teams/:id`
  - method: `DELETE`
  - response: `json`

## 📜 Description

- ✅ Cadastro de times –informando nome, cidade e estado do time. Série que o time atua no campeonato nacional (permitir séries A, B, C ou vazio para não atua no campeonato). Um jsonarray(titles) guardando a quantidade de títulos do time {estadual, nacional e internacional}.
  A folha de pagamento do time. Apenas o campo série do campeonato brasileiro pode ser vazio.

- ✅ Listagem de todos os times cadastrados (retornando todos os dados)
- ✅ Pesquisa de time por nome (retornando todos os dados dos times com aqueles caracteres fornecidos)
- ✅ Edição de um time –permitindo atualizar qualquer um dos campos
- ✅ Remoção de um time –permitindo deletar um time fornecido a partir do ID.
