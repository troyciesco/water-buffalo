# Water Buffalo Workflow Builder Frontend

This is the frontend portion of the Water Buffalo Workflow Builder application. It's built with React and provides a modern, responsive interface for creating and managing workflows.

## Table of Contents
- [Technologies](#technologies)
  - [Core](#core)
  - [Development](#development)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Routes and Features](#routes-and-features)
  - [/ and /login](#-and-login)
  - [/dashboard](#dashboard)
  - [/workflows](#workflows)
  - [/workflows/:id](#workflowsid)
- [Layout Features](#layout-features)
  - [Header](#header)
  - [Side Navigation](#side-navigation-desktop)
  - [Footer](#footer)
- [UI Components](#ui-components)
- [Development Notes](#development-notes)

## Technologies

### Core
- React with TypeScript
- Apollo Client for GraphQL
- React Router for navigation
- Motion for animations
- TailwindCSS for styling

### Development
- Vite for development and building
- GraphQL Code Generator for type-safe queries
- Cypress for end-to-end testing

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Set up environment:
```bash
# Create a .env file with your GraphQL API URL
echo "VITE_GRAPHQL_API_URL=http://localhost:3000/graphql" > .env
```

3. Start the development server:
```bash
npm run dev
```

The application will start on port 5173.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build
- `npm run gql:compile` - Generate GraphQL types
- `npm run gql:watch` - Watch and generate GraphQL types
- `npm run cy:open` - Open Cypress test runner

## Routes and Features

### `/` and `/login`
- Login page with demo credentials
- Quick access to dashboard
- Form validation and error handling

### `/dashboard`
- Welcome screen
- Quick links to workflows
- Navigation to all major features

### `/workflows`
- List all workflows in a grid layout
- Create new workflows
- Access individual workflows

### `/workflows/:id`
- View and manage specific workflow
- Add and organize stages
- Add steps to stages from predefined categories
- Drag-and-drop reordering of steps (coming soon)

## Layout Features

### Header
- Logo and branding
- Mobile-responsive navigation

### Side Navigation (Desktop)
- Quick access to all workflows
- Create new workflow shortcut
- Dashboard link

### Footer
- Basic footer information

## UI Components

The application includes several reusable components:
- Modal system for adding steps
- Form components with validation
- Page headers with actions
- Stage and step management interfaces
- Loading and error states
- 404 page with custom messaging

## Development Notes

- The application uses modern React patterns and hooks
- GraphQL queries are type-safe through code generation
- Responsive design works on mobile and desktop
- Dark mode support is built-in
- Animations enhance the user experience

For API documentation, see the [backend README](../api-wb/README.md).
