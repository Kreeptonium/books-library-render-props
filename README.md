# Books Library System

A modern library management system built with Next.js, featuring multiple view modes for students and librarians. The system utilizes render props pattern for efficient component reusability and state management.

## Features

- **Multiple View Modes**
  - Student Grid View
  - Librarian Table View
  - Quick Search List View

- **Core Functionality**
  - Book search and filtering
  - Responsive design
  - Loading states with skeleton UI
  - Dark mode support
  - Type-safe development

## Tech Stack

- **Next.js 15**
  - App Router
  - Server Components
  - Route Groups
  - Private Folders

- **TypeScript**
  - Strict mode enabled
  - Full type safety
  - Interface definitions

- **Styling**
  - Tailwind CSS
  - shadcn/ui components
  - Responsive design
  - Dark mode support

- **State Management**
  - React Hooks
  - Context API
  - Render Props Pattern

## Getting Started

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd books-library-render-props
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open the application**
   Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
/src
  /app
    /(root)
      /books
        _core/              # Core functionality
          /components      # Book-specific components
          /hooks          # Custom hooks
          /lib           # API related functions
          /providers     # Context providers
          /types        # Type definitions
        /librarian      # Librarian view route
        /student       # Student view route
        /quick-search  # Quick search view route
```

## Development

- **Code Style**: The project uses ESLint and Prettier for consistent code formatting
- **Git Hooks**: Husky is configured for pre-commit checks
- **Testing**: Jest and React Testing Library for unit tests, Playwright for E2E testing

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details
