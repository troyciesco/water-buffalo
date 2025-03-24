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

## Video Walkthroughs
I recorded a couple videos to show the UI and the code. They're very brief right now (Loom has a 5 min time limit) but I might expand on them in the future
- App Walkthrough: in this video I very quickly run through the functionality of the application from the perspective of a user - [Watch video on Loom](https://www.loom.com/share/fbb014bdb4ec42c391e59b046b2a478f?sid=2ed2e482-769b-4a49-9d40-ae0a12fe4361)
- Code Walkthrough: I spin up the app from a fresh git clone using `make from-scratch` and touch on some of the features of the React frontend and the Hono backend - [Watch video on Loom](https://www.loom.com/share/5cb25942297f412c951e8fa340b19761?sid=8a3aa57f-5e39-4cc6-8770-0470cf78202b)

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