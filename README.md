# MedLink Ethiopia 🏥

A full-stack healthcare management system designed to manage patients, doctors, and appointments efficiently.

---

# 📌 Project Overview

MedLink Ethiopia is a web-based healthcare management system developed to simplify the management of patients, doctors, and appointments. The application provides a secure admin login, an interactive dashboard, and organized management pages for healthcare records.

---

# 🚀 Features

## Authentication

* Secure admin login
* JWT Authentication
* Protected API routes
* Logout functionality

## Dashboard

* Total Patients
* Total Doctors
* Total Appointments
* Pending Appointments

## Patient Management

* View patient information
* Display:

  * Full Name
  * Gender
  * Phone Number
  * Address

## Doctor Management

* View doctor information
* Display:

  * Doctor Name
  * Specialization
  * Phone Number
  * Years of Experience

## Appointment Management

* View appointments
* Display:

  * Patient Name
  * Doctor Name
  * Specialization
  * Appointment Date
  * Status
  * Notes

Appointment Status:

* Pending
* Approved
* Cancelled

---

# 🛠 Technologies Used

## Frontend

* React.js
* Vite
* Axios
* React Router

## Backend

* Node.js
* Express.js
* JWT Authentication

## Database

* Microsoft SQL Server

## Development Tools

* Visual Studio Code
* SQL Server Management Studio (SSMS)
* Git & GitHub
* Postman

---

# 📂 Project Structure

```text
MedLink-Ethiopia
│
├── client
│   ├── src
│   │   ├── api
│   │   ├── components
│   │   ├── pages
│   │   ├── App.css
│   │   └── main.jsx
│   └── package.json
│
├── server
│   ├── src
│   │   ├── config
│   │   ├── controllers
│   │   ├── middleware
│   │   ├── models
│   │   ├── routes
│   │   └── app.js
│   └── package.json
│
├── .gitignore
└── README.md
```

---

# ⚙️ Installation Guide

## Clone the Repository

```bash
git clone https://github.com/abiguermias-creator/MedLink-Ethiopia.git
```

---

## Backend Setup

Navigate to the server folder:

```bash
cd server
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
PORT=5000
JWT_SECRET=your_secret_key
```

Start the backend server:

```bash
node src/app.js
```

Backend runs on:

```text
http://localhost:5000
```

---

## Frontend Setup

Navigate to the client folder:

```bash
cd client
```

Install dependencies:

```bash
npm install
```

Run the frontend:

```bash
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

# 🗄 Database Structure

The project uses Microsoft SQL Server with the following tables:

* **Users** – Stores user accounts and roles.
* **Patients** – Stores patient information.
* **Doctors** – Stores doctor information.
* **Appointments** – Stores appointment records.

---

# 🔗 Database Relationship

```text
Users
 ├── Patients
 └── Doctors

Patients
    │
    └──── Appointments ──── Doctors
```

---

# 📸 Screenshots

Screenshots included in the project:

* ![Login Page](image.png)
* ![Dashboard](image-1.png)
* ![Patients Page](image-2.png)
* ![Doctors Page](image-3.png)
* ![Appointment Page](image-4.png)

---

# 👨‍💻 Developer

**Abigiya Ermias**

Bachelor of Science in Computer Science

American College of Technology

---

# 📄 License

This project was developed for educational purposes as a university capstone project.
