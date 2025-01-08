# Express + TypeScript + Prisma Project

Este é um projeto base para iniciar um servidor Express utilizando TypeScript e Prisma como ORM.

## **Pré-requisitos**
Certifique-se de ter as seguintes ferramentas instaladas em sua máquina:
- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- Banco de dados compatível com o Prisma (e.g., PostgreSQL, MySQL, SQLite, etc.)

---

## **Configuração do Projeto**

### 1. Clonar o repositório
```bash
git clone <URL_DO_REPOSITORIO>
cd <NOME_DO_PROJETO>
```

## **instalar as dependencias**
```bash
npm install
```

## **Configurar o arquivo .env**

Crie um arquivo .env na raiz do projeto e adicione as variáveis de ambiente necessárias. Um exemplo para configurar a conexão com o banco de dados:

```bash
DATABASE_URL="postgresql://usuario:senha@localhost:5432/nome_do_banco"
```

## **Inicializar o Prisma**

Criar e aplicar migrações:

```bash
npx prisma migrate dev --name init
npx prisma db push
```

## **Rodar o servidor**

```bash
npm run dev
```
