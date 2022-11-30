# Orientações

<details>
<summary><strong> ⚠️ Configurações mínimas para execução do projeto</strong></summary><br />

Na sua máquina você deve ter:

 - Sistema Operacional Distribuição Unix
 - Node versão 16
 - Docker
 - Docker-compose versão >=1.29.2

➡️ O `node` deve ter versão igual ou superior à `16.14.0 LTS`:
  - Para instalar o nvm, [acesse esse link](https://github.com/nvm-sh/nvm#installing-and-updating);
  - Rode os comandos abaixo para instalar a versão correta de `node` e usá-la:
    - `nvm install 16.14 --lts`
    - `nvm use 16.14`
    - `nvm alias default 16.14`

➡️ O`docker-compose` deve ter versão igual ou superior à`ˆ1.29.2`:

</details>

<details>
<summary><strong>🐳 Rodando o projeto no Docker</strong></summary><br />
 
  1. No diretório `app/` rode o comando `docker-compose up -d`.
  2. Acesse o site em `localhost:3000`.
 
</details>

# Sobre os Requisitos

Esse projeto é composto de 4 seções principais:
1. Users e Login
2. Times
3. Partidas
4. Placar

## Seção 1: Users e Login

<details>
  <summary><strong> Introdução </strong></summary>

- A rota utilizada deve ser (`/login`);

- A rota deve receber os campos `email` e `password` e esses campos devem ser validados no banco de dados:
  - O campo `email` deve receber um email válido;
  - O Campo `password` deve ter mais de 6 caracteres.

- O body da requisição deve conter o seguinte formato:
  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```
</details>

<details>
  <summary><strong> Endpoints </strong></summary>

### Endpoint `/login`
  
  - Rota do tipo `POST`;

  - Se o login foi feito com sucesso, o resultado retornado deverá ser similar ao exibido abaixo, com um status http `200`:
  ```json
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjU0NTI3MTg5fQ.XS_9AA82iNoiVaASi0NtJpqOQ_gHSHhxrpIdigiT-fc" // Aqui deve ser o token gerado pelo backend.
  }
  ```

  - Se o login não tiver o campo "email" ou "password", o resultado retornado deverá ser a mensagem abaixo, com um status http `400`:
  ```json
    { "message": "All fields must be filled" }
  ```

  - Se o login tiver o "email" ou "senha" **inválido**, o resultado retornado será similar ao exibido abaixo, com um status http `401`:
  ```json
    { "message": "Incorrect email or password" }
  ```

### Endpoint `/login/validate`

  - Rota tipo `GET`
  
  - Recebe um `header` com parâmetro `authorization`, onde ficará armazenado o token gerado no login;

  A resposta deve ser de status `200` com um `objeto` contendo a `role` do *user*:
  ```json
    { "role": "admin" }
  ```
</details>

## Seção 2: Times

<details>
  <summary><strong> Introdução </strong></summary>

- A rota utilizada deve ser (`/teams`);

</details>

<details>
  <summary><strong> Endpoints </strong></summary>

### Endpoint `/teams`

  - Rota tipo `GET`

  -  A resposta deve ser de status `200` com um `json` contendo o retorno no seguinte modelo:

```json
[
  {
    "id": 1,
    "teamName": "Avaí/Kindermann"
  },
  {
    "id": 2,
    "teamName": "Bahia"
  },
  {
    "id": 3,
    "teamName": "Botafogo"
  },
  ...
]
```

### Endpoint `/teams/:id`

  - Rota tipo `GET`

  -  A resposta deve ser de status `200` com um `json` contendo o retorno no seguinte modelo:

```json
{
  "id": 5,
  "teamName": "Cruzeiro"
}
```

</details>


<!-- Olá, Tryber!
Esse é apenas um arquivo inicial para o README do seu projeto.
É essencial que você preencha esse documento por conta própria, ok?
Não deixe de usar nossas dicas de escrita de README de projetos, e deixe sua criatividade brilhar!
:warning: IMPORTANTE: você precisa deixar nítido:
- quais arquivos/pastas foram desenvolvidos por você; 
- quais arquivos/pastas foram desenvolvidos por outra pessoa estudante;
- quais arquivos/pastas foram desenvolvidos pela Trybe.
-->
