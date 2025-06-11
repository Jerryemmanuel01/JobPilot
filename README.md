# JobPilot 🚀

**JobPilot** is a backend REST API built with Node.js, Express, Sequelize ORM, and MySQL that allows users to manage and track their job applications, interviews, companies, and statuses in one centralized system.

## 🔧 Features

- Add, update, and delete job applications
- Track application status (e.g., Applied, Interviewing, Rejected, Hired)
- Manage company and job details
- User authentication and role-based access
- Filter and sort applications by date, status, or company
- Built using RESTful API standards


## 🧱 Tech Stack

| Layer          | Technology                       |
| -------------- | -------------------------------- |
| Backend        | Node.js (ESM), Express.js        |
| Database       | MySQL or PostgreSQL              |
| ORM            | Sequelize                        |
| Authentication | JWT + Role-based Authorization   |
| Environment    | dotenv for environment variables |

---

## 📁 Project Structure

src/
├── config/ # DB config and Sequelize instance
├── controllers/ # Route controllers
├── middlewares/ # Auth and role guards
├── models/ # Sequelize models
├── routes/ # Express routes
├── services/ # Business logic
├── utils/ # Utility functions
└── app.js # App entry point

---


## Prerequisites

- Node.js (v14 or higher)
- MySQL
- npm

## Installation

1. Clone the repository:
   \`\`\`bash
   git clone <repository-url>
   cd <project-directory>
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Create a MySQL database

4. Configure environment variables:

   - Copy `.env.example` to `.env`
   - Update the values in `.env` with your configuration

5. Start the server:
   \`\`\`bash

# Development

npm run dev

# Production

npm start
\`\`\`

## API Endpoints

### Authentication

- POST /api/auth/register - Register a new user
- POST /api/auth/login - Login user
- POST /api/auth/forgot-password - Request password reset
- POST /api/auth/reset-password/:token - Reset password
- POST /api/auth/change-password - Change password (protected)

### Jobs

- POST /api/user/jobs - Create a new job
- GET /api/user/jobs - Get all job
- GET /api/user/job/{id} - Get a particular job
- PATCH /api/user/job/{id} - Edit a particular job
- DELETE /api/user/job/{id} - Delete a particular job
