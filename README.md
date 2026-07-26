#  LeadDesk - Full Stack CRM & Lead Management System

LeadDesk is a full-stack CRM and Lead Management application built for the **Digital Heroes Training Task**.

It includes:
-  Public landing page for collecting leads
-  Secure admin authentication
-  Admin dashboard to manage leads
-  Fully deployed using Vercel and Render

---

#  Live Demo

**Landing Page:**  
https://lead-desk-frontend-five.vercel.app/

**Admin Dashboard:**  
https://lead-desk-frontend-five.vercel.app/admin

**Backend API:**  
https://leaddesk-backend-ke0q.onrender.com

**GitHub Repository:**  
https://github.com/Surajkumavat437/LeadDeskMini

**Loom Demo:**  
https://www.loom.com/share/55162816ebcc4c23b27181d1a832d368

---

#  Admin Login

**Email**

```text
admin@example.com
```

**Password**

```text
AdminPassword123!
```

---

#  Features

### Public Website

- Responsive Landing Page
- Lead Capture Form
- Form Validation
- Stores leads in MongoDB

### Admin Dashboard

- Secure Login
- JWT Authentication
- View all leads
- Search leads
- Filter by status
- Update lead status
- Protected Routes

---

# 🛠 Tech Stack

## Frontend

- React (Vite)
- Tailwind CSS
- Axios
- React Router

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- Cookie Parser

## Deployment

- Vercel (Frontend)
- Render (Backend)

---

#  Project Structure

```text
LeadDeskMini
│
├── Backend
│   ├── controllers
│   ├── middlewares
│   ├── model
│   ├── routes
│   ├── services
│   ├── utils
│   ├── app.js
│   └── server.js
│
├── Frontend
│   ├── src
│   ├── public
│   ├── vite.config.js
│   └── package.json
│
└── README.md
```

---

#  Database Models

## Admin

| Field | Type |
|--------|------|
| email | String |
| password | String (Hashed) |
| createdAt | Date |

---

## Lead

| Field | Type |
|--------|------|
| name | String |
| email | String |
| phone | String |
| budget | Number / String |
| message | String |
| status | New / Contacted / Closed |
| createdAt | Date |

---

# Authentication

1. Admin enters email & password.
2. Backend verifies credentials.
3. Password is checked using **bcryptjs**.
4. JWT token is generated.
5. Token is stored in an **HTTP-only Cookie**.
6. Protected routes verify the token before allowing access.

Production Cookies:

- httpOnly
- secure
- sameSite=None

---

#  Run Locally

## Clone Repository

```bash
git clone https://github.com/Surajkumavat437/LeadDeskMini.git

cd LeadDeskMini
```

## Backend

```bash
cd Backend
npm install
npm run dev
```

## Frontend

```bash
cd Frontend
npm install
npm run dev
```

---

#  Screenshots

Add screenshots of:

- Landing Page
- Login Page
- Dashboard

---

# Footer

The application footer includes the required attribution:

> Built for Digital Heroes Training Task

---

# Author

**Suraj Kumavat**

GitHub:
https://github.com/Surajkumavat437/LeadDeskMini
