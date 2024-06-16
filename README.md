CRUD API NodeJS
This is a CRUD API developed in Node.js with Prisma, Express, and Helmet. The project implements Create, Read, Update, and Delete (CRUD) operations for posts.

Technologies Used:

Node.js
Prisma
Express
Helmet
Features:

Create new posts
Read existing posts
Update posts
Delete posts
My Role:
I developed the entire project on my own, from conception to implementation. I ensured the API was secure and efficient by using Helmet to enhance application security.

Challenges Overcome:
One of the major challenges was ensuring data integrity during update and delete operations, which was resolved with rigorous validations and atomic transactions using Prisma.


# Base limpa de API em Node

Este repositório serve exclusivamente para oferecer uma base rápida para criação de APIs em Node.

Ele possui apenas a configuração básica do Express com Typescript e o primeiro router.

## Instalação
Você pode clonar o repositório e rodar:
```bash
npm install
```

Depois clonar o arquivo `.env.example` para `.env.local`:
```bash
cp .env.example .env.local
```
E alterar as variáveis de ambiente.

## Uso
Para rodar o projeto, utilize o comando padrão:
```bash
npm run dev
```

## Adicionais
Caso queira, é interessante remover o `origin` do repositório, para adicionar seu próprio repositório remoto e continuar o desenvolvimento.

Para ver os repositórios remotos:
```bash
git remote -v
```

Para trocar o origin:
```bash
git remote remove origin
git remote add origin <url>
```
Sendo `<url>` o diretório do seu repositório remoto.
