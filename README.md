# REM Waste - Skip Booking Application

A modern web application for booking waste removal skips, built with React 19, TypeScript, and Vite 6.

## Approach

This application follows a component-based architecture using React to create a user-friendly skip booking experience. Key aspects of the approach include:

- **API Integration**: Fetches skip data based on postcode and area from a RESTful API
- **State Management**: Uses React's useState and useEffect hooks for local state management
- **Component Structure**: Separates UI into reusable components (cards, loading states)
- **TypeScript**: Implements strong typing throughout for better code quality and developer experience
- **Responsive Design**: Built with Tailwind CSS for a mobile-first responsive layout
- **Error Handling**: Implements proper error states and loading indicators for better UX

## Tech Stack

- **Frontend**: React 19 with TypeScript
- **Styling**: Tailwind CSS 4
- **Build Tool**: Vite 6
- **Linting**: ESLint 9

## Features

- Browse available skip sizes
- Select skips based on postcode and area
- Responsive design for all device sizes

## Environment Variables

The application requires the following environment variables:

```
VITE_API_URL=your_api_base_url
VITE_POSTCODE=default_postcode
VITE_AREA=default_area
```

## Getting Started

### Prerequisites

- Node.js (latest LTS version recommended)
- Yarn package manager

### Installation

```bash
# Install dependencies
yarn install

# Start development server
yarn dev

# Build for production
yarn build

# Preview production build
yarn preview
```

## Project Structure

- `/src` - Application source code
  - `/components` - Reusable UI components
  - `/pages` - Page components
  - `/api` - API integration
  - `/lib` - Utility functions and constants
  - `/types` - TypeScript type definitions

## ESLint Configuration

The project uses ESLint with TypeScript integration. To enable type-aware linting:

```js
export default tseslint.config({
  extends: [
    ...tseslint.configs.recommendedTypeChecked,
    // For stricter rules: ...tseslint.configs.strictTypeChecked
  ],
  languageOptions: {
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```
