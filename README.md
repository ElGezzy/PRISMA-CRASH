# Prisma Crash Course

A simple project demonstrating the basics of Prisma ORM with SQLite. This repository is based on Brad Traversy's crash course and is intended for my personal learning and experimentation.

## Features

- Prisma ORM setup with SQLite
- User and Article models with relations
- Migration and schema management
- TypeScript support
- Uses Prisma Client to perform CRUD operations
- Includes a basic Express.js API setup

## Resources
- [Youtube_Link](https://youtu.be/CYH04BJzamo?si=E7EhRtVUaDQ9d6Vv)

## 🚀 Technologies Used

- [Node.js](https://nodejs.org/)
- [Prisma ORM](https://www.prisma.io/)
- [Sqlite]

## Project Structure

```
prisma-crash/
├── prisma/
│   ├── dev.db
│   ├── schema.prisma
│   └── migrations/
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/prisma-crash.git
    cd prisma-crash
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Generate Prisma client:
    ```bash
    npx prisma generate
    ```

### Environment Variables

Create a `.env` file in the project root to store sensitive configuration like your database connection string. This file is ignored by Git for security.

Example `.env` file:

```properties
DATABASE_URL="file:./dev.db"
```

Prisma automatically loads environment variables from `.env`. Make sure to set your database connection string here.

### Prisma Commands

- Generate client: `npx prisma generate`
- Run migrations: `npx prisma migrate dev`
- Open Prisma Studio: `npx prisma studio`

## Models

Defined in [`prisma/schema.prisma`](prisma/schema.prisma):

```prisma
model User {
  id       Int      @id @default(autoincrement())
  email    String
  name     String
  body     String?
  articles Article[]
}

model Article {
  id       Int      @id @default(autoincrement())
  title    String
  body     String?
  author   User     @relation(fields: [authorId], references: [id])
  authorId Int
}
```

## License

This project is licensed under the MIT License.

---

> Inspired by Brad Traversy’s Prisma Crash Course.