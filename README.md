## CRUD API NodeJS
This is a CRUD API developed in Node.js with Prisma, Express, and Helmet. The project implements Create, Read, Update, and Delete (CRUD) operations for posts.

# Technologies Used:

Node.js
Prisma
Express
Helmet

# Features:

Create new posts
Read existing posts
Update posts
Delete posts

# My Role:
I developed the entire project on my own, from conception to implementation. I ensured the API was secure and efficient by using Helmet to enhance application security.

# Challenges Overcome:
One of the major challenges was ensuring data integrity during update and delete operations, which was resolved with rigorous validations and atomic transactions using Prisma.

# How to Run:

Clone the repository:
```bash
 git clone <repository URL>
```
Install dependencies: 
```bash
npm install
```
Configure the database in the .env file
Run migrations: ```npx prisma migrate dev```
Start the server: ```npm start```
