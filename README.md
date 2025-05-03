# 🚀 StudyNotion – EdTech Platform

**StudyNotion** is a modern, full-featured **EdTech platform** built using the **MERN stack**. It allows instructors to create and manage courses, while students can explore, purchase, and learn interactively.

🌐 **Live Demo**: [https://study-notion-full-stack.vercel.app/](https://study-notion-full-stack.vercel.app/)

---

## 🔥 Features

### 👨‍🎓 For Students:
- Browse, purchase, and access courses
- Wishlist & Cart functionality
- Watch course videos and access resources
- Rate and review courses
- Manage profile and enrolled courses

### 👩‍🏫 For Instructors:
- Instructor dashboard with insights
- Create, update, and delete courses
- Upload video content and documents
- View student engagement and reviews

### ⚙️ Core Features:
- Authentication with JWT + OTP
- Payment integration with Razorpay
- Cloud media storage via Cloudinary
- Markdown support for content
- Role-based dashboard (Student/Instructor)

---

## 🧑‍💻 Tech Stack

### Frontend:
- ReactJS + Vite
- Redux Toolkit
- Tailwind CSS
- React Router
- Framer Motion, Chart.js, React Dropzone, Swiper

### Backend:
- Node.js + Express.js
- MongoDB
- Razorpay API, Cloudinary API

---

## 🏛️ Architecture

- **Frontend (Client)** – React-based, interacts with backend via REST APIs.
- **Backend (Server)** – Express.js handles APIs, auth, course logic.
- **Database** – MongoDB for storing user, course, and review data.
- **Cloudinary** – Used to manage and store images, videos, and files.

---

## 🧾 How to Run Locally

### 1. **Clone the Repository**
```bash
git clone https://github.com/Udaybari324/Study-notion-Edtech-platform.git
cd Study-notion-Edtech-platform
```
2. Install Frontend Dependencies
```bash
cd frontend
npm install
```
3. Install Backend Dependencies
```bash
cd ../backend
npm install
```
5. Set Up Environment Variables
Create a .env file in the backend folder with the following:
```bash
PORT=5000
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
RAZORPAY_KEY=your_razorpay_key
RAZORPAY_SECRET=your_razorpay_secret
```

5. Start the Application

Start Backend:
```bash
npm start
```
Start Frontend:
```bash
cd frontend
npm run dev
```

This project is built and maintained by Uday Bari

