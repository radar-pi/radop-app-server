# RaDop App Server

[![Maintainability](https://api.codeclimate.com/v1/badges/dff6da6ed1e438b942b5/maintainability)](https://codeclimate.com/github/radar-pi/radop-app-server/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/dff6da6ed1e438b942b5/test_coverage)](https://codeclimate.com/github/radar-pi/radop-app-server/test_coverage)
[![Build Status](https://travis-ci.org/radar-pi/radop-app-server.svg?branch=develop)](https://travis-ci.org/radar-pi/radop-app-server)

O __RAS__ (RaDop App Server) é o serviço responsável pelo _back-end_ do aplicativo RaDop. Neste projeto está contemplado os __CRUDs__ (_Create_, _Read_, _Update_ e _Delete_) necessário para o funcionamento do app, assim como as funções de autenticação de usuário.

# Parâmetro

O __RAS__ roda no formato de uma [API _Rest_](https://en.wikipedia.org/wiki/Representational_state_transfer), portanto não há um formato padrão para o parâmetro de funcionamento. Abaixo estará explicito para cada rota como se usa as funções do __RAS__.

## Tecnologia Utilizada

- [Node JS](https://nodejs.org/en/) (versão 11.15)
- [AdonisJS](https://adonisjs.com/) (versão 4.1)
- [PostgreSQL](https://www.postgresql.org/)
- [JWT](https://jwt.io/)

## Ambiente de Desenvolvimento

Para evoluções e desenvolvimento basta ter instalado em sua máquina o Node JS, versão 10 ou superior, a instalação do Node JS pode ser vista [aqui](https://nodejs.org/en/download/) (caso queira pode instalar o gerenciador de pacotes Node [yarn](https://yarnpkg.com/en/)). As demais dependências do projeto são listados no `package.json` e a instalação de um editor de texto da sua preferência.

## Deploy Local para Desenvolvimento

Para testar localmente rode o comando:

```shell
adonis serve --dev
```

Com isso todas as rotas do __RAS__ estarão disponíveis na URL: `http://localhost:3333`

Caso queira testar via docker compose basta rodar o comando:

```shell
docker-compose -f docker-compose.yml up --build
```

### Fazer as Migrações das Tabelas

Assim que seu ambiente local esteja rodando execute o comando:

```shell
adonis migration:run
```

Caso o seu ambiente esteja rodando com o docker compose basta rodar:

```shell
docker-compose run --rm server adonis migration:run
```

Com isso todas as migrações do banco vão ser registradas no seu banco local.

### Populando o Banco de Dados

Agora para inserir alguns objetos no banco de dados rode o seguinte comando:

```shell
adonis seed --files UserSeeder.js
adonis seed --files RadarSeeder.js
adonis seed --files MaintanenceSeeder.js
adonis seed --files StatusSeeder.js
```

Ou caso o seu ambiente esteja rodando com o docker compose basta rodar:

```shell
docker-compose run --rm server adonis seed --files UserSeeder.js
docker-compose run --rm server adonis seed --files RadarSeeder.js
docker-compose run --rm server adonis seed --files MaintanenceSeeder.js
docker-compose run --rm server adonis seed --files StatusSeeder.js
```

Agora o seu banco está populado e pronto para testes.

__OBS__: Comando em uma linha só pode ser:

```shell
docker-compose run --rm server adonis migration:run && docker-compose run --rm server adonis seed --files UserSeeder.js && docker-compose run --rm server adonis seed --files RadarSeeder.js && docker-compose run --rm server adonis seed --files MaintanenceSeeder.js && docker-compose run --rm server adonis seed --files StatusSeeder.js
```

## Execução do Ambiente de Testes

### Testes

O ambiente de testes ainda está em fase de configuração, assim que finalizado nessa seção terá os comandos e exemplos de como executar este processo.

### Linter

```bash
eslint .
```

## _Build_

Para construir a imagem do __RAS__ basta rodar os seguintes comandos:

```bash
docker build -t radop-app-server:latest .
```

Para rodar a imagem construída do __RAS__ utilize do Docker Compose presente no projeto, com isto o serviço irá subir já com o _container_ do banco de dados (PostgreSQL). O comando para rodar os serviços é:

```bash
docker-compose -f docker-compose.yml up --build
```

__OBS__: Caso não tenha construído a imagem antes basta adicionar a _flag_ `--build` ao final do comando do Docker Compose. Caso queira que os serviços rodem no _background_ bata adicionar a _flag_ `-d` ao final do comando do Docker Compose.
