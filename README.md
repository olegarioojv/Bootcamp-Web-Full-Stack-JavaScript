# Mercado Livre Clone

Projeto desenvolvido durante a **Semana Full Stack JavaScript 2025** na Codans, com orientação dos professores Jamilton Damasceno e Jorge Sant Ana.

## Descrição

Este projeto é um clone simplificado da página inicial do Mercado Livre, com funcionalidades de exibição de produtos, integração com banco de dados e estilização moderna.

## Tecnologias Utilizadas

- **Next.js (React)** – Frontend moderno e performático
- **TypeScript** – Tipagem estática para maior segurança
- **Tailwind CSS** – Estilização rápida e responsiva
- **Prisma ORM** – Manipulação eficiente do banco de dados
- **PostgreSQL** – Banco de dados relacional
- **API REST** – Comunicação entre frontend e backend
- **Node.js** – Backend em JavaScript
- **Docker** – (opcional) Ambiente de desenvolvimento

## Como rodar o projeto

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/seu-usuario/mercado-livre-clone.git](https://github.com/olegarioojv/Bootcamp-Web-Full-Stack-JavaScript.git)
   cd mercado-livre
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure o banco de dados:**
   - Crie um banco PostgreSQL e defina a variável `DATABASE_URL` no arquivo `.env`.

4. **Rode as migrations e o seed:**
   ```bash
   npx prisma migrate dev
   npx prisma db seed
   ```

5. **Inicie o projeto:**
   ```bash
   npm run dev
   ```

6. **Acesse no navegador:**  
   [http://localhost:3000](http://localhost:3000)

   Desenvolvido com 💜 por João Victor
   
