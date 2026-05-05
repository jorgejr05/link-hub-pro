# AI Rules for Application Development

## Tech Stack Overview
- **Core Framework**: React 19 with TypeScript
- **Build Tool**: Vite with TanStack Start
- **Routing**: TanStack Router with TypeScript-first route definitions
- **State Management**: React Query for data fetching and caching
- **Styling**: Tailwind CSS with Shadcn/ui components
- **UI Components**: Shadcn/ui library for all UI elements
- **Validation**: Zod for schema validation
- **Icons**: Lucide React for icon implementation
- **Build Process**: TypeScript compilation with strict type checking

## Library Usage Guidelines

### 1. Shadcn/ui Components (All UI Elements)
- **Usage**: All user interface components must be implemented using Shadcn/ui
- **Customization**: Extend Shadcn/ui components through props and custom variants
- **Import Pattern**: Import components using absolute paths from `@/components/ui/`
- **Examples**: Buttons, modals, menus, inputs, and all other UI elements

### 2. Tailwind CSS (Styling)
- **Primary Styling**: All visual styling must use Tailwind CSS utility classes
- **Class Management**: Use `class-variance-authority` and `clsx` for complex class combinations
- **Theme**: Follow the existing Tailwind theme configuration
- **Responsiveness**: Implement responsive design using Tailwind's breakpoint system

### 3. React Query (Data Fetching)
- **Usage**: All API data fetching must use React Query hooks
- **Caching**: Implement proper caching strategies with React Query
- **Error Handling**: Use React Query's built-in error handling mechanisms
- **Loading States**: Use React Query's loading state management

### 4. TanStack Router (Routing)
- **Route Definitions**: All routes must be defined in `src/router.tsx`
- **Route Components**: Page components must be placed in `src/pages/`
- **Navigation**: Use TanStack Router's navigation components for all navigation
- **Route Parameters**: Implement route parameters using TanStack Router's capabilities

### 5. Zod (Validation)
- **Schema Definition**: All form validation schemas must be defined using Zod
- **Validation Logic**: Use Zod for both client-side and server-side validation
- **Schema Reuse**: Reuse validation schemas across the application
- **Error Messages**: Provide clear error messages based on Zod validation issues

### 6. TypeScript (Type Safety)
- **Strict Mode**: All code must use strict TypeScript types
- **Type Definitions**: All API responses must be typed with interfaces
- **Props Typing**: All component props must be explicitly typed
- **Type Guards**: Implement type guards where necessary for complex data

### 7. Vite (Build Process)
- **Configuration**: All build configurations must be maintained in Vite configuration files
- **Environment Variables**: Use Vite's environment variable system for configuration
- **Asset Handling**: All static assets must be placed in the appropriate directories
- **Production Builds**: All production builds must be optimized for performance

### 8. Component Structure (Code Organization)
- **Page Components**: All route components must be placed in `src/pages/`
- **UI Components**: All reusable UI components must be placed in `src/components/ui/`
- **Utility Functions**: All utility functions must be placed in `src/lib/utils.ts`
- **Hook Components**: All custom hooks must be placed in `src/hooks/`

### 9. Icon Usage (Lucide React)
- **Import Pattern**: Import icons using absolute paths from `@/lucide/`
- **Customization**: Customize icons through props when needed
- **Consistency**: Use consistent icon styles throughout the application
- **Accessibility**: Ensure all icons have appropriate ARIA attributes

### 10. Code Quality (Maintainability)
- **Code Formatting**: All code must be formatted with Prettier
- **Linting**: All code must pass ESLint checks
- **Type Checking**: All code must pass TypeScript type checking
- **Documentation**: All public components and functions must have appropriate documentation