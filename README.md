# 📊 Growth Dashboard

A full-stack dashboard built for Growth Marketing teams. It shows key business metrics (page visits, signups and conversions) with a clean, minimal interface, and allows the user to add new data.

🔗 **Live app:** [growth-dashboard-jade.vercel.app](https://growth-dashboard-jade.vercel.app)

## 📌 Table of Contents

- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Limitations](#️-limitations)
- [Future Features](#-future-features)

---

## 🛠 Tech Stack

| Layer         | Technology        |
| ------------- | ----------------- |
| Frontend      | React + Vite      |
| Styling       | Tailwind CSS      |
| Charts        | Recharts          |
| Backend       | Node.js + Express |
| Database      | MySQL             |
| DB Host       | Clever Cloud      |
| Backend Host  | Render            |
| Frontend Host | Vercel            |

---

## 🚀 Getting Started

#### Prerequisites

- Node.js
- MySQL

#### Clone the repo

```bash
git clone https://github.com/laiapozo/growth-dashboard
cd growth-dashboard
```

#### Backend

```bash
cd server
npm install
```

Create a `.env` file inside `server/`:

```
DB_HOST=your_db_host
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=growth_dashboard
DB_PORT=3306
PORT=5001
```

Create the database and table:

```sql
CREATE DATABASE growth_dashboard;
USE growth_dashboard;

CREATE TABLE metrics (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  value INT NOT NULL,
  timestamp DATETIME NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  created_by VARCHAR(50) DEFAULT 'anonymous'
);
```

Start the server:

```bash
npm run dev
```

#### Frontend

```bash
cd client
npm install
```

Create a `.env` file inside `client/`:

```
VITE_API_URL=http://localhost:5001/api
```

Start the app:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

---

## 📁 Project Structure

```
growth-dashboard/
├── client/
│   └── src/
│       ├── components/
│       │   ├── layout/
│       │   │   ├── Header.jsx
│       │   │   └── Sidebar.jsx
│       │   ├── MetricChart.jsx
│       │   ├── MetricForm.jsx
│       │   └── StatsCards.jsx
│       ├── hooks/
│       │   ├── useMetrics.js
│       │   └── useMetricForm.js
│       ├── pages/
│       │   ├── Dashboard.jsx
│       │   └── AddMetric.jsx
│       └── services/
│           └── metricsService.js
│
└── server/
    └── src/
        ├── app.js
        └── config/
            └── db.js
```

---

## ⚠️ Limitations

**Render cold starts**: The free plan on Render goes to sleep after inactivity. The first request may take ~50 seconds to wake up.

---

## 🔮 Future Features

- **Authentication**: Real user login so `created_by` reflects the actual logged-in user instead of a hardcoded value.
- **Date range filters**: Filter the chart by week or month.
- **Multiple projects**: The "Factorial" dropdown in the sidebar is currently decorative. The next step would be to support multiple webs with their own metrics.
