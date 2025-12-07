# 🛍 Retail Sales Management System

A full-stack application for Retail Sales Analysis with powerful  
Search ▸ Multi-Filtering ▸ Sorting ▸ Pagination  
Built as the TruEstate SDE Intern Assignment (6 Months + PPO)

---

## 🚀 Tech Stack

### Frontend

- React + Vite
- Axios
- Modular Components
- Custom Modern UI

### Backend

- Node.js + Express.js
- CSV → JSON Data Processing
- Modular Service / Controller Architecture

---

## 🔍 Search Implementation

- Case-insensitive search
- Works across 👇
  - Customer Name
  - Phone Number
- Fully integrated with filters + sorting + pagination

**Example**

```bash
?search=neha
```

---

## 🎯 Filter Implementation (Multi-Select + Range)

Supported Filters:

- Gender
- Customer Region
- Product Category
- Payment Method
- Customer Type
- Age Range (minAge, maxAge)
- Tags (contains)
- Date Range (startDate, endDate)

Filters can work:
✔ Individually  
✔ Combined  
✔ Along with Search + Sorting + Pagination

**Example**

```bash
?region=North&gender=Female&minAge=20&maxAge=35
```

Filter + search + pagination example:

```bash
?search=khan&paymentMethods=UPI&page=2
```

---

## 🔽 Sorting Implementation

Sortable fields:

- Date (Default — Newest First)
- Quantity
- Customer Name (A → Z)

**Example**

```bash
?sortBy=Quantity&sortOrder=desc
```

---

## 📄 Pagination Implementation

- Page size = **10 per page**
- Always returns:

```json
{
  "page": 3,
  "limit": 10,
  "totalItems": 499,
  "totalPages": 50,
  "data": [...]
}
```

**Example**

```bash
?page=1
```

---

## 🌐 Combined Full Query Example

```bash
/api/sales?search=neha&regions=North&genders=Female&sortBy=Date&sortOrder=desc&page=2&minAge=20&maxAge=50
```

✔ Works perfectly with all logic active at once

---

## 🧱 Project Structure

```
root/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── routes/
│   │   ├── models/
│   │   └── index.js
│   ├── package.json
│   └── README.md
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   ├── styles/
│   │   └── App.jsx / main.jsx
│   ├── public/
│   ├── package.json
│   └── README.md
│
├── docs/
│   └── architecture.md
│
└── README.md
```

---

## ▶️ Installation & Run Guide

### Backend

```bash
cd backend
npm install
npm run dev
```

Runs on:  
👉 http://localhost:4000

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Runs on:  
👉 http://localhost:5173

---

## ✔ Requirement Completion Checklist

| Feature                        | Status |
| ------------------------------ | :----: |
| Search                         |   ✅   |
| Multi-Select Filters           |   ✅   |
| Sorting                        |   ✅   |
| Pagination                     |   ✅   |
| Large Dataset Handling         |   ✅   |
| Maintainable Code Architecture |   ✅   |
| UI Based on Required Structure |   ✅   |
| Clean Modular Code             |   ✅   |

---

## 👤 Developer

**Kusum Patel**  
B.Tech — Data Science & AI  
IIIT Naya Raipur

TruEstate SDE Intern Assignment

---
