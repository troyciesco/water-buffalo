# Water Buffalo Workflow Builder API

This is the backend API for the Water Buffalo Workflow Builder application. It provides a GraphQL API powered by Hono and Pylon, with Prisma as the database ORM.

## Table of Contents
- [Technologies](#technologies)
  - [Prisma](#prisma)
  - [Hono](#hono)
  - [Pylon](#pylon)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [API Features](#api-features)
- [Database Schema](#database-schema)

## Technologies

### Prisma
- Used as the ORM for database interactions
- SQLite database with models for:
  - Categories and CategoryItems (templates for steps)
  - Tags (with aliases support)
  - Workflows, Stages, and Steps
- Includes data seeding functionality for initial setup

### Hono
- Lightweight web framework for building the API
- Integrated with Pylon for GraphQL support
- Provides the HTTP server functionality via `@hono/node-server`

### Pylon
- Framework for building GraphQL services
- Integrates with Hono for the web server
- Handles GraphQL schema generation and request processing
- Provides development and build tooling

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Set up the database:
```bash
# Create a .env file with your database URL
echo "DATABASE_URL=\"file:./dev.db\"" > .env

# Run migrations and seed the database
npm run seed
```

3. Start the development server:
```bash
npm run dev
```

The server will start on port 3000 with the GraphQL endpoint at `/graphql`.

You can also visit `/viewer` to look at the schema.

## Available Scripts

- `npm run dev` - Start the development server with hot reload
- `npm run build` - Build the application for production
- `npm run seed` - Reset the database and populate it with seed data

## API Features

- **Categories & Items**: Manage categories and their associated items
- **Tags**: Flexible tagging system with aliases support
- **Workflows**: Create and manage workflows with stages and steps
- **GraphQL Queries**: Fetch data with efficient includes and relations
- **GraphQL Mutations**: Create new workflows, stages, and steps

## Database Schema

The application uses a SQLite database with the following main models:

- `Category`: Groups of related items
- `CategoryItem`: Templates for creating steps
- `Tag`: Labels with aliases for better searchability
- `Workflow`: Container for stages and steps
- `Stage`: Grouping of related steps within a workflow
- `Step`: Individual tasks created from CategoryItem templates

For detailed schema information, see `prisma/schema.prisma`.
