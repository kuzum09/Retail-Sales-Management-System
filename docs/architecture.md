# 🧩 Architecture Overview — Retail Sales Management System

This document explains the overall architecture, data flow, modules, and design decisions used in the Retail Sales Management System.

---

## 🏗 System Architecture

The project follows a clean **client–server architecture**:

```
Frontend (React)  <────────>  Backend (Express API)  <────────> CSV Data Storage
```

---

## ⚙ Backend Architecture

### Key Responsibilities

| Layer           | Purpose                                               |
| --------------- | ----------------------------------------------------- |
| **Routes**      | Receive API requests & route to controllers           |
| **Controllers** | Validate request & invoke service logic               |
| **Services**    | Business logic — search, filters, pagination, sorting |
| **Models**      | Load + parse CSV dataset as JSON                      |
| **Utils**       | Helper functions (date parsing, text match, etc.)     |

### Backend Request Flow

```
Client → Route → Controller → Service → Model → Filter/Sort/Paginate → Response
```

### Modules Breakdown

| Folder         | Contains                               |
| -------------- | -------------------------------------- |
| `/routes`      | API endpoints (`/api/sales`)           |
| `/controllers` | Incoming request handling              |
| `/services`    | Filtering, sorting, search, pagination |
| `/models`      | CSV → JSON conversion & data loader    |
| `/utils`       | Helper utilities if required           |

---

## 🎨 Frontend Architecture

### Key Responsibilities

| Layer          | Purpose                                   |
| -------------- | ----------------------------------------- |
| **Pages**      | Page-level components (Dashboard view)    |
| **Components** | Search bar, table, filters, pagination UI |
| **Services**   | Axios API wrappers                        |
| **Styles**     | Modular styling files                     |

### Frontend State Data Flow

```
User Input (Search/Filters/Sort/Pagination)
          ↓
  React State Updates
          ↓
Backend API call using Axios
          ↓
Display Updated Table + KPI Stats
```

### Main UI Components

| Component          | Role                                |
| ------------------ | ----------------------------------- |
| `SalesPage.jsx`    | Dashboard Layout + State Management |
| `SearchBar.jsx`    | Query by name/phone                 |
| `SortDropdown.jsx` | Sort selector                       |
| `FiltersPanel.jsx` | Multi-filter sidebar                |
| `SalesTable.jsx`   | Paginated table view                |
| `Pagination.jsx`   | Next/Prev navigation                |

---

## 🔁 Data Flow Diagram

```
              🔍 Search
                |
                v
[FILTER PANEL] → Backend Filters → Pagination → Sorting
         \__________________________________________/
                          |
                          v
                     Filtered Data
                          |
                          v
                    React UI Update
```

---

## 📊 Performance Handling

- Dataset loaded once at server start
- All filtering/searching performed in-memory
- Pagination ensures only required rows are sent to UI
- Efficient query parsing to avoid repeated computation

---

## 🔐 Error & Edge Case Handling

| Case                    | System Behavior            |
| ----------------------- | -------------------------- |
| No Results              | UI shows empty state       |
| Invalid filters         | Automatically ignored      |
| Out-of-range pagination | Returns nearest valid page |
| Missing dataset fields  | Safely skipped             |

---

## 📦 API Response Format (Always Consistent)

```json
{
  "page": 1,
  "limit": 10,
  "totalItems": 499,
  "totalPages": 50,
  "data": [...]
}
```

---

## 🧪 Test Coverage (Manual Verifications)

- Search + Filters + Sorting together
- Age & Date range boundaries
- Very high filtering combinations
- Case-insensitive search validated

---

## 🏁 Conclusion

This architecture ensures:
✔ Maintainability  
✔ Scalability  
✔ Clean separation of concerns  
✔ Production-grade design approach  
✔ Smooth UX with fast responses

Fully aligned with **TruEstate SDE Intern assignment requirements**.

---

📌 Document by:  
**Kusum Patel — Retail Sales Management System**
