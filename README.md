# 🚌 TedBus — Modern Bus Booking Platform

> A full-stack, responsive bus booking web application inspired by RedBus, crafted with an **Emerald Luxe & Teal** aesthetic, real-time updates, and an intuitive booking experience.

---

## ✨ Features

- 🔍 **Smart Search & Filters**: Autocomplete city search, date picker, bus type filters, departure/arrival sorting, and pricing ranges.
- 💺 **Interactive Seat Selection**: Real-time layout for upper and lower decks with instant seat status indicators.
- 💳 **Seamless Booking & Payments**: Integrated payment processing, coupon codes, and automated discount calculations.
- 🎟️ **Instant Digital Tickets**: Dynamic PDF ticket generation with QR code verification and booking details.
- 💬 **Community & Reviews**: Community discussion forum, trip ratings, route stories, and user testimonials.
- 🌙 **Modern UI & Themes**: Glassmorphic styling, ambient glow effects, responsive mobile design, and full Dark Mode support.

---

## 🛠️ Tech Stack

| Layer | Technologies |
|---|---|
| **Frontend** | React 19, Vite, Tailwind CSS v4, Lucide Icons, i18next |
| **Backend** | Node.js, Express.js, MongoDB / Mongoose, Socket.IO |
| **Services** | Razorpay (Payments), PDFKit (Ticket PDF), Nodemailer / Brevo, Cloudinary |
| **Maps & Location** | TomTom Web SDK |

---

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/avsheshkush/TedBus.git
cd TedBus
```

### 2. Backend Setup

```bash
cd tedbus-backend
npm install
npm run dev
```

*Backend runs at: `http://localhost:5000`*

### 3. Frontend Setup

Open a new terminal window:

```bash
cd tedbus-frontend
npm install
npm run dev
```

*Frontend runs at: `http://localhost:5173`*

---

## 🔑 Environment Variables

### Backend (`tedbus-backend/config.env`)

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
FRONTEND_URL=http://localhost:5173
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret
```

### Frontend (`tedbus-frontend/.env`)

```env
VITE_API_BASE_URL=http://localhost:5000/api/v1
VITE_SOCKET_URL=http://localhost:5000
VITE_RAZORPAY_KEY_ID=your_razorpay_key
VITE_TOMTOM_API_KEY=your_tomtom_key
```

---

## 👨‍💻 Author

**Avshesh Kushwaha**
- GitHub: [@avsheshkush](https://github.com/avsheshkush)
- Email: avsheshkush@gmail.com

---

## 📄 License

This project is licensed under the ISC License.
