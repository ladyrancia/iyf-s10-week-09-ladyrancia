# iyf-s10-week-09-ladyrancia

## CommunityHub - Advanced React Application

This is a multi-page React application built as part of Week 9 of the iyf-s10 program. It demonstrates advanced React concepts including:

- React Router for navigation
- Data fetching from JSONPlaceholder API
- Custom hooks (useFetch, useLocalStorage)
- Reusable component library (Button, Input, Card, Modal)
- Tailwind CSS for styling
- Loading and error states
- Dynamic routing with route parameters

## Features

- Home page with featured posts
- Posts listing with search functionality
- Individual post detail view
- Create post form
- About page
- Responsive design
- Loading spinners and error handling
- Reusable UI components

## Project Structure

```
src/
├── components/
│   ├── Layout/           # Layout components (Header, Footer)
│   ├── Post/             # Post-specific components
│   └── shared/           # Reusable components (Button, Input, Card, Modal)
├── hooks/                # Custom hooks
├── pages/                # Page components
├── App.jsx               # Routing configuration
├── main.jsx              # Entry point
└── index.css             # Tailwind CSS imports
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## API

This application fetches data from [JSONPlaceholder](https://jsonplaceholder.typicode.com/):
- Posts: https://jsonplaceholder.typicode.com/posts
- Individual posts: https://jsonplaceholder.typicode.com/posts/{id}

## Implementation Details

### Routing
- Uses `react-router-dom` v6+
- Protected routes pattern (simulated in CreatePost page)
- Navigation with `NavLink` and `useNavigate`

### Data Fetching
- Custom `useFetch` hook handles loading, error, and data states
- Fetches posts from JSONPlaceholder API
- Implements loading spinners and error messages

### Styling
- Tailwind CSS utility-first framework
- Responsive design with mobile-first approach
- Consistent spacing and typography

### Components
- **Button**: Variants (primary, secondary, outline, danger, ghost), sizes, loading states
- **Input**: With label, validation, and error states
- **Card**: Flexible container with hover effects
- **Modal**: With backdrop, customizable size, and title

### State Management
- React hooks (useState, useEffect)
- Custom hooks for reusable logic
- Local storage persistence (useLocalStorage hook)

## Lessons Learned

This project covered:
- Advanced useEffect patterns for data fetching and subscriptions
- Custom hook creation for reusable logic
- React Router implementation with nested routes
- Programmatic navigation and route parameters
- Loading and error state handling patterns
- Component library development with reusable UI elements
- Styling with utility-first CSS frameworks

## Next Steps

As preparation for Phase 4 (Backend):
1. Replace JSONPlaceholder with a custom Node.js/Express API
2. Implement user authentication
3. Add real-time features with WebSockets
4. Optimize performance with React Query or similar
5. Add unit and integration tests

---
*Built with React, Vite, and Tailwind CSS*