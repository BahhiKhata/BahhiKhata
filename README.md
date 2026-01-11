# 📒 Bahhi Khata — Expense Tracker (MVP)

Bahhi Khata is a **minimal, clean, backend-first expense tracker** built to emphasize **correctness, ownership, and extensibility** over flashy features.

This project intentionally avoids over-engineering and serves as a **strong foundation** for future expansion.

---

## 🚀 Tech Stack

### Frontend
- ⚛️ **Next.js** (Pages Router)
- ⚛️ **React**
- 🌐 **Axios**
- 🎨 **Tailwind CSS**

### Backend
- 🟢 **Node.js**
- 🚂 **Express.js**
- 🗄️ **PostgreSQL**
- 🔐 **JWT (JSON Web Tokens)**
- 🔑 **bcrypt**

### Database
- 🐘 **PostgreSQL (Local Development)**

---

## 🧠 Tech Stack Explained (What does what?)

### Next.js (Frontend)
- File-based routing (`/login`, `/register`, `/expenses`)
- UI state & navigation
- Communicates with backend via REST APIs

### Axios
- Centralized API client
- Automatically attaches JWT token
- Keeps frontend–backend interaction clean

### Express.js (Backend)
- Exposes REST APIs (`/auth`, `/expenses`, `/expense-types`)
- Handles authentication & authorization
- Acts as a middle layer between frontend and database

### PostgreSQL
- Stores users, expenses, and reference data
- Enforces data integrity using constraints & foreign keys

### JWT (Authentication)
- Generated on login
- Stored in browser storage
- Sent with every protected request
- Verified by backend middleware

### bcrypt
- Secure password hashing
- Safe password comparison during login

---

## 🔄 Program Flow (End-to-End)

### 1️⃣ User Registration
- User submits name, email, password
- Password is hashed using bcrypt
- User stored in PostgreSQL

### 2️⃣ User Login
- Credentials verified
- JWT token generated
- Token returned to frontend

### 3️⃣ Authenticated Requests
- JWT sent in `Authorization: Bearer <token>`
- Backend middleware verifies token
- User-specific data returned

### 4️⃣ Expense Flow
- User creates expense
- Expense linked to user and expense type
- Expenses fetched using JOIN queries

### 5️⃣ Logout
- Token removed
- Protected routes blocked

---

## 📁 Project Structure

### Backend
backend/
│── server.js # App entry point
│── config/
│ └── db.js # PostgreSQL connection
│── routes/
│ ├── auth.js # Register & login
│ ├── expenses.js # Expense CRUD
│ └── expenseTypes.js # Read-only expense types
│── middleware/
│ └── auth.js # JWT auth middleware
│── .env # Environment variables


### Frontend
frontend/
│── pages/
│ ├── index.js
│ ├── login.js
│ ├── register.js
│ ├── expenses.js
│ └── add-expense.js
│── utils/
│ └── api.js
│── styles/
│ └── globals.css


---

## ✅ Phase 0 — Foundation (COMPLETED)

🎯 **Goal:** Build a clean, correct base system.

### What was done
- ✅ Local PostgreSQL setup
- ✅ Core tables: users & expenses
- ✅ Custom Express backend
- ✅ JWT-based authentication
- ✅ Secure password hashing
- ✅ Frontend ↔ backend REST integration
- ✅ Protected routes
- ✅ User-specific data isolation
- ✅ Removed Supabase & unnecessary abstractions

### Outcome
A **stable MVP** with full ownership of:
- Backend logic
- Authentication
- Database design

---

## ✅ Phase 1 — Database Evolution & Structure (COMPLETED)

🎯 **Goal:** Prepare database for future features without breaking simplicity.

### What was added
- 🧱 **Expense Types (`expense_types`) reference table**
- 🔗 Foreign-key relation: `expenses → expense_types`
- 🗓️ Renamed `date` → `expense_date` (schema clarity)
- 🧠 JOIN-based expense queries
- 🧪 DB-level data validation:
  - Positive amount constraint
  - Valid user enforcement
- ⚡ Performance indexes
- 🔐 Auth-protected read-only Expense Types API
- 🎨 UX improvements:
  - Browser email autofill
  - Show / hide password option

### Why this matters
- Enables future filters & analytics
- Prevents invalid data at DB level
- No UI complexity added
- Zero breaking changes

---

## 🛠️ Environment Variables

### Backend (`backend/.env`)
```env
DATABASE_URL=postgresql://postgres:<password>@localhost:5432/bahhi_khata
JWT_SECRET=your_secret_key
PORT=5000

### Frontend ('frontend/.env.local')
NEXT_PUBLIC_API_URL=http://localhost:5000/api

🧪 Testing Status

✅ Database constraints tested

✅ Foreign keys verified

✅ API endpoints tested via Thunder Client

✅ Auth middleware validated

✅ Invalid data blocked

✅ Valid data persisted correctly

🧭 Phased Development Plan
✅ Phase 0 — Foundation

Completed

✅ Phase 1 — Database & Schema Evolution

Completed

🟡 Phase 2 — Cloud Database & Backend Hosting

Migrate PostgreSQL to cloud (Neon / Railway)

Environment separation (dev / prod)

Secure secrets handling

🟡 Phase 3 — Public App Release

Minimal but usable UI

Stable core flows

🟡 Phase 4 — UI / UX Improvements

Responsive layout

Better spacing & navigation

Optional dark mode

🟡 Phase 5 — Advanced Auth & Features

OAuth

Password reset

Better session handling

🟡 Phase 6 — Advanced & Unique Features

Monthly summaries

Budget alerts

Exports

AI-assisted categorization (future)

🎯 Project Philosophy

Simple. Correct. Extensible.

Understanding > abstraction

Ownership > third-party magic

Clean foundations > feature count

Schema evolves with features, not before them

📌 Current Status

🟢 Phase 0: Completed

🟢 Phase 1: Completed

🚧 Ready for Phase 2