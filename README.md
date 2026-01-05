# Bahhi-Khata

This is a full-stack application built with Next.js, Tailwind CSS, and Supabase.

## Project Structure

- `backend/`: Contains the backend code.
  - `server.js`: The main server file.
  - `config/`: Contains configuration files.
    - `db.js`: The Supabase configuration file.
  - `routes/`: Contains route handlers.
    - `auth.js`: Handles authentication routes.
    - `expenses.js`: Handles expenses routes.
  - `middleware/`: Contains middleware functions.
    - `auth.js`: Middleware for authentication.
  - `.env`: Contains environment variables.

- `frontend/`: Contains the frontend code.
  - `pages/`: Contains the Next.js page components.
    - `index.js`: The home page.
    - `expenses.js`: The expenses page.
    - `budgets.js`: The budgets page.
    - `insights.js`: The insights page.
  - `components/`: Contains reusable components.
    - `Navbar.js`: The navigation bar component.
    - `ExpenseItem.js`: The expense item component.
    - `AutoExpenseBadge.js`: The auto expense badge component.
    - `ManualExpenseBadge.js`: The manual expense badge component.
    - `CategoryIcon.js`: The category icon component.
  - `utils/`: Contains utility functions.
    - `api.js`: Utility functions for API requests.
  - `styles/`: Contains CSS files.
    - `globals.css`: Global styles.
  - `next.config.js`: Next.js configuration file.
  - `tailwind.config.js`: Tailwind CSS configuration file.
  - `postcss.config.js`: PostCSS configuration file.

## Getting Started

1. Clone the repository.
2. Install dependencies:
   - `cd backend`
   - `npm install`
   - `cd ..`
   - `cd frontend`
   - `npm install`
3. Set up environment variables:
   - Copy `.env.example` to `.env` in both the `backend/` and `frontend/` directories.
   - Update the environment variables in `.env` with your own values.
4. Start the server:
   - `cd backend`
   - `npm start`
5. Start the frontend:
   - `cd frontend`
   - `npm run dev`
6. Open your browser and navigate to `http://localhost:3000` to see the app in action.

## Features

- User authentication
- Expense management
- Budget tracking
- Insights and analytics

## Contributing

Contributions are welcome! Please follow the [Contributing Guidelines](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE).
