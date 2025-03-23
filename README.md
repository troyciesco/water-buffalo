![Water Buffalo Workflow Builder Banner](./wb-logo-banner.png)

# Water Buffalo Workflow Builder
This is a simple full-stack application that allows users to create workflows with stages and steps.

It includes:
- React frontend
- Hono backend with GraphQL (via Pylon)
- SQLite database

It does not have:
- authentication
- full CRUD functionality (no update or delete yet)
- I haven't tested building and deploying it yet, so I don't know 100% if it works outside of locally

## Requirements
- `npm` and `node` installed
- (optional) there's a Makefile to run both apps at once if you want and you have `make` installed

## Running the app
The frontend and backend can be run in two separate terminals, or you can use the Makefile from the root.

### Option 1: Use the Makefile
- in the root, run `make from-scratch` (⚠️ WARNING: This resets everything - all data will be lost!)
  - removes `node_modules` in both directories if they're there
  - runs `npm i` in both directories
  - runs `npx prisma migrate reset --force` in the backend
  - runs `npm run seed` in the backend
  - runs both apps

### Option 2: Run each in a separate terminal
- see [api-wb readme](./api-wb/README.md) to run the backend
- see [client-wb readme](./client-wb/README.md) to run the frontend