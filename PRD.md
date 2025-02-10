# Book Library Display System - PRD

## Project Overview
Let's build a "Book Library Display System" - it's a relatable example that everyone can understand and remember.

Story Context: Imagine you're building a library application where you need to display books in different ways:

- Librarians prefer a detailed table view with all book information
- Students like a grid view with book covers
- Quick searchers prefer a simple list view
This real-world scenario perfectly demonstrates the power of render props!

What we'll build:

1. A BookDataContainer component that:
   
   - Fetches book data from a mock API
   - Handles loading/error states
   - Provides book data to different display components
2. Three different view components:
   
   - LibrarianView (Table format with detailed info)
   - StudentView (Grid format with covers)
   - QuickSearchView (Simple list format)
   
## Problem Statement
Libraries need different ways to display book information based on user roles and use cases:
- Librarians need detailed information in table format
- Students prefer visual browsing with book covers
- Quick searchers want simple list views

## Core Features

### 1. Book Data Container
- Centralized data fetching
- Loading state management
- Error handling
- Data provision via render props

### 2. View Types
#### Librarian View (Table)
- Book title, author, ISBN
- Publication date
- Available copies
- Location information
- Checkout status

#### Student View (Grid)
- Book cover images
- Title and author
- Brief description
- Availability status

#### Quick Search View (List)
- Title and author
- Availability status
- Simple linear layout

## Technical Specifications

### Tech Stack
- Next.js 15
  - App Router
  - Server Components
  - Route Groups
  - Private Folders

- TypeScript
  - Strict Mode
  - Type Safety
  - Interface Definitions

- Tailwind CSS
  - Custom Components
  - Responsive Design
  - Dark Mode Support

- shadcn/ui components
  - Table Component
  - Card Component
  - Button Component
  - Skeleton Component
  - Dialog Component

- State Management
  - React Hooks
  - Context API
  - Render Props Pattern

- Development Tools
  - ESLint
  - Prettier
  - Husky (Git Hooks)
  - CommitLint

- Testing
  - Jest
  - React Testing Library
  - Playwright (E2E)

### Component Structure
- BookDataContainer (Main render props component)
- View-specific components
- Shared UI components

### Data Model
```typescript
interface Book {
  id: string;
  title: string;
  author: string;
  isbn: string;
  coverImage: string;
  description: string;
  publishDate: string;
  availableCopies: number;
  location: string;
  isCheckedOut: boolean;
}

## Implementation Phases
### Phase 1: Setup
- Project initialization
- Folder structure setup
- UI component installation
### Phase 2: Core Development
- Data container implementation
- Mock API service
- Basic view components
### Phase 3: View Implementation
- Librarian table view
- Student grid view
- Quick search list view
### Phase 4: Enhancement
- Loading states
- Error handling
- View switching mechanism
## Success Metrics
- Clean component separation
- Efficient data sharing
- Smooth view transitions
- Type safety
- Reusable components
```

### Project Structure
```plaintext
/src
  /app
    /(root)
      /books
        _core/                  # Core functionality
          /components          # Book-specific components
          /hooks              # Custom hooks
            useBooks.ts
            useTheme.ts
            useViewTransition.ts
          /lib
            /api              # API related functions
          /providers         # Context providers
            ThemeProvider.tsx
            ViewProvider.tsx
          /types            # Type definitions
        /librarian          # Librarian view route
          page.tsx
          loading.tsx
        /quick-search       # Quick search view route
          page.tsx
          loading.tsx
        /student           # Student view route
          page.tsx
          loading.tsx
        Error.tsx
        Loading.tsx
        page.tsx
        ThemeToggle.tsx
    favicon.ico
    globals.css
    layout.tsx
    page.tsx

/public
  /images
    /books            # Book cover images
    /ui              # UI assets


This structure follows Next.js 15 conventions with:
- Route groups using parentheses
- Private folders using underscore prefix
- Organized component hierarchy
- Clear separation of concerns

Would you like me to add any additional details to the folder structure?
/src
  ...
  
  ...