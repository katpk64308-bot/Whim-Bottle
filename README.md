# Projeto: Whim Bottle

## Objetivo

Desenvolver um sistema web para uma garrafa de água inteligente , utilizando Front-end e Back-end, permitindo ao usuário acompanhar sua hidratação ou coisa parecida.

# Funcionalidades

## Usuário
- Cadastro de usuário.
- ID da garrafa
- Login.
- Editar pefril.
- Excluir conta.

## Consumo de água
- Definir meta diária (ex.: 2 litros).
- Registrar um gole (100 ml, 250 ml, 500 ml...).
- Mostrar total consumido no dia.

## Histórico
- Histórico de consumo.

# Front-end

## Responsabilidades
- Interface do usuário.
- Formulários.
- Dashboard.

# Back-end

## Responsabilidades
- Criar a API.
- Validar os dados recebidos.
- Processar as requisições.
- Comunicar com o banco de dados.
- Retornar respostas em JSON.

# Banco de Dados

Guardar informações como:

## Usuários
- id
- nome
- email
- senha

## Consumo
- id
- id_usuario
- quantidade_ml
- data_hora

# API REST

## GET
Buscar dados.

Exemplos:
- Buscar usuário.
- Buscar histórico.
- Buscar meta diária.

---

## POST
Criar novos dados.

Exemplos:
- Criar usuário.
- Fazer login.
- Registrar consumo de água.

---

## PUT
Atualizar dados.

Exemplos:
- Alterar meta diária.
- Atualizar perfil.

---

## DELETE
Excluir dados.

Exemplos:
- Excluir usuário.
- Apagar um registro de consumo.

# Fluxo do Sistema

1. Usuário faz login.
2. Front-end envia uma requisição para a API.
3. Back-end recebe a requisição.
4. Back-end consulta ou altera o banco de dados.
5. Back-end responde em JSON.
6. Front-end recebe a resposta.
7. Interface é atualizada.