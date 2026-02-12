# Installation Guide for Nama Project

This guide provides step-by-step instructions to set up and run the Nama Project on a new PC.

## Prerequisites

- **Node.js**: Version 18 or higher. Download from [nodejs.org](https://nodejs.org/).
- **Git**: For cloning the repository. Download from [git-scm.com](https://git-scm.com/).
- **Operating System**: Windows 10 or later, macOS, or Linux.

## Installation Steps

1. **Clone the Repository**
   ```
   git clone <repository-url>
   cd nama-project
   ```

2. **Install Dependencies**
   ```
   npm install
   ```

3. **Run the Development Server**
   ```
   npm run dev
   ```

4. **Open the Application**
   - Open your browser and navigate to `http://localhost:5173` (default Vite port).

## Dependencies and Libraries

The project uses the following main dependencies (automatically installed via npm):

- **React**: ^19.2.0 - UI library
- **React DOM**: ^19.2.0 - React rendering
- **React Router DOM**: ^7.13.0 - Routing
- **React Slick**: ^0.31.0 - Carousel/slider component
- **Slick Carousel**: ^1.8.1 - Carousel library
- **Tailwind CSS**: ^4.1.18 - Utility-first CSS framework
- **Vite**: ^8.0.0-beta.13 - Build tool

Dev dependencies include ESLint, TypeScript types, and Vite plugins.

## Troubleshooting

- If `npm install` fails, ensure Node.js and npm are installed correctly.
- If the dev server doesn't start, check if port 5173 is available.
- For Windows users, run commands in Command Prompt or PowerShell as Administrator if needed.

## Building for Production

To build the project for production:
```
npm run build
```

To preview the production build:
```
npm run preview
