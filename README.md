# Todo App — Frontend

A modern Todo application frontend built with Next.js, TypeScript, Tailwind CSS, TanStack Query, and React Hook Form.

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- TanStack Query
- React Hook Form
- Axios
- Sonner
- Lucide React

## Features

- User registration and login
- Authentication with JWT
- Todo creation
- Todo listing
- Todo editing
- Todo deletion
- Todo completion toggle
- Responsive UI
- API error handling
- Toast notifications
- Server-state management with TanStack Query
- Form handling with React Hook Form

## Project Structure

```text
frontend/
├── app/
│   ├── todos/
│   │   └── page.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── src/
│   ├── components/
│   │   ├── auth/
│   │   ├── todos/
│   │   │   ├── AddTodo.tsx
│   │   │   ├── TodoActions.tsx
│   │   │   └── TodoList.tsx
│   │   └── Navbar.tsx
│   │
│   ├── hooks/
│   │   ├── useTodos.ts
│   │   └── useLogin.ts
│   │
│   ├── lib/
│   │   ├── axios.ts
│   │   └── api-error.ts
│   │
│   ├── providers/
│   │   └── query-provider.tsx
│   │
│   ├── services/
│   │   └── todo.service.ts
│   │
│   └── types/
│       ├── api.ts
│       ├── auth.ts
│       └── todo.ts
│
├── public/
├── package.json
└── README.md
```
