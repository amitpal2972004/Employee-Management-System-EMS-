# Employee-Management-System-EMS-
A modern Employee Management System with React.js featuring admin task assignment, employee workflow management, role-based authentication, and beautiful dark UI. Complete frontend solution with localStorage persistence.


# 🎯 Employee Management System (EMS)

A modern, responsive Employee Management System built with React.js that streamlines task management between administrators and employees. Features role-based dashboards, task assignment workflows, and real-time status tracking.


## 📸 Screenshots

<div align="center">
  <img width="1912" height="1015" alt="image" src="https://github.com/user-attachments/assets/0c606509-db13-4195-9891-a39511a80aa2" />

  <p><em>Secure Login Interface with Role-Based Access</em></p>
  
 <img width="1898" height="1025" alt="image" src="https://github.com/user-attachments/assets/2d9872e8-494e-4d0e-9746-bfec0a84922e" />

  <p><em>Admin Dashboard - Task Creation & Employee Management</em></p>
  
  <img width="1909" height="1032" alt="image" src="https://github.com/user-attachments/assets/94825d45-65d4-4678-ad7a-b82aa6030cf9" />

  <p><em>Employee Dashboard - Personal Task Board</em></p>
  
  
</div>



---

## ✨ Features

### 🔐 Authentication System
- ✅ Secure login with email and password validation
- ✅ Role-based access control (Admin/Employee)
- ✅ Session persistence using localStorage
- ✅ Auto-login for returning users
- ✅ Logout functionality with session clearing

### 👨‍💼 Admin Dashboard Features
- **Task Creation**: Create detailed tasks with title, description, category, date, and assignment
- **Employee Management**: View all employees with their task statistics
- **Task Assignment**: Assign tasks to specific employees from dropdown
- **Real-time Analytics**: Dashboard showing task distribution across organization
- **All Tasks View**: Monitor every task's status and assigned employee
- **Task Statistics**: Visual cards showing New, Active, Completed, and Failed task counts

### 👤 Employee Dashboard Features
- **Personal Task Board**: Horizontal scrollable task list organized by status
- **Task Statistics Cards**: Individual counters for New, Active, Completed, and Failed tasks
- **Task Actions**:
  - 🆕 Accept new tasks (converts to Active)
  - ✅ Mark active tasks as Completed
  - ❌ Mark active tasks as Failed
- **Status Tracking**: Color-coded visual indicators for each task state
- **Responsive Layout**: Optimized for desktop and mobile viewing

### 🎨 UI/UX Features
- 🌑 Modern dark theme with emerald accent colors
- 📱 Fully responsive design (mobile, tablet, desktop)
- ✨ Smooth animations and hover effects
- 🎨 Color-coded task cards by status:
  - 🔵 Blue border - New Tasks
  - 🟡 Yellow border - Active Tasks
  - 🟢 Green border - Completed Tasks
  - 🔴 Red border - Failed Tasks
- 🧭 Intuitive navigation with persistent header
- 🎯 Visual feedback for all user interactions

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| **Frontend** | React.js 18+ |
| **Language** | JavaScript (ES6+) |
| **Styling** | Tailwind CSS |
| **State Management** | React Context API, React Hooks |
| **Data Storage** | localStorage API |
| **Build Tool** | Vite |
| **Package Manager** | npm / yarn |

### React Hooks Used
- `useState` - Component state management
- `useEffect` - Side effects and lifecycle
- `useContext` - Global state access
- Custom hooks for authentication logic

---

## 📂 Project Structure

```
EMS/
│
├── node_modules/              # Dependencies
├── public/                    # Static files
│
├── src/
│   ├── assets/               # Images, icons, static assets
│   │
│   ├── components/
│   │   │
│   │   ├── auth/            # Authentication Components
│   │   │   └── Login.jsx    # Login form with validation
│   │   │
│   │   ├── Dashboard/       # Dashboard Components
│   │   │   ├── admindashboard.jsx     # Admin main dashboard
│   │   │   └── employeedashboard.jsx  # Employee main dashboard
│   │   │
│   │   ├── others/          # Shared/Utility Components
│   │   │   ├── Alltask.jsx         # Display all tasks (Admin)
│   │   │   ├── Createtask.jsx      # Task creation form (Admin)
│   │   │   ├── Header.jsx          # Navigation header
│   │   │   └── Tasklistnumber.jsx  # Task statistics cards
│   │   │
│   │   └── tasklist/        # Task Card Components
│   │       ├── accepttask.jsx      # Active task card
│   │       ├── completetask.jsx    # Completed task card
│   │       ├── failedtask.jsx      # Failed task card
│   │       ├── newtask.jsx         # New task card
│   │       └── Tasklist.jsx        # Task list container
│   │
│   ├── context/
│   │   └── AuthProvider.jsx  # Authentication context & logic
│   │
│   ├── utils/
│   │   └── localStorage.js   # localStorage helper functions
│   │
│   ├── pages/                # Page components (if applicable)
│   │
│   ├── App.css              # Global styles
│   ├── App.jsx              # Main app component
│   ├── index.css            # Tailwind imports
│   └── main.jsx             # React entry point
│
├── .gitignore               # Git ignore rules
├── eslint.config.js         # ESLint configuration
├── index.html               # HTML template
├── package-lock.json        # Dependency lock file
├── package.json             # Project dependencies
└── README.md               # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v14 or higher)
- **npm** or **yarn**

### Installation Steps

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/employee-management-system.git
cd employee-management-system
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Start the development server**
```bash
npm run dev
# or
yarn dev
```

4. **Open your browser**
```
Navigate to: http://localhost:5173
```

### Demo Credentials

**Admin Account:**
```
Email: admin@me.com
Password: 123
```

**Employee Accounts:**
```
Employee 1: employee1@example.com / 123
Employee 2: employee2@example.com / 123
Employee 3: employee3@example.com / 123
```

---

## 💡 How It Works

### Admin Workflow
```
1. Login with admin credentials
   ↓
2. View dashboard with employee statistics
   ↓
3. Create new task (Title, Description, Date, Category, Employee)
   ↓
4. Task automatically assigned to selected employee
   ↓
5. Monitor all tasks in "All Tasks" section
   ↓
6. Track completion rates via statistics cards
```

### Employee Workflow
```
1. Login with employee credentials
   ↓
2. View personal dashboard with task statistics
   ↓
3. See task board with all assigned tasks
   ↓
4. Accept new task → Moves to "Active" status
   ↓
5. Complete or Fail active tasks
   ↓
6. Track personal progress in statistics
```

---

## 🎯 Key Features Explained

### Task Status Flow
```
📋 New Task (Blue Border)
    ↓ [Employee Accepts]
⚡ Active Task (Yellow Border)
    ↓ [Employee Action]
    ├─→ ✅ Completed (Green Border)
    └─→ ❌ Failed (Red Border)
```

### Component Hierarchy
```
App.jsx
├── AuthProvider (Context)
├── Login Component
├── Admin Dashboard
│   ├── Header
│   ├── Create Task Form
│   ├── All Tasks Table
│   └── Task Statistics Cards
└── Employee Dashboard
    ├── Header
    ├── Task Statistics Cards
    └── Task List (Horizontal Scroll)
        ├── New Task Cards
        ├── Accept Task Cards
        ├── Complete Task Cards
        └── Failed Task Cards
```

### Data Persistence
- **User Authentication**: Stored in localStorage as `loggedInUser`
- **Employee Data**: Array of employee objects with tasks
- **Admin Data**: Separate admin user object
- **Session Management**: Auto-login on page refresh if session exists

---

## 🔧 Configuration

### Customizing Theme Colors

Edit `tailwind.config.js`:
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#10b981', // emerald-500
        secondary: '#1f2937', // gray-800
        // Add your custom colors
      }
    }
  }
}
```

### Modifying localStorage Keys

Edit `src/utils/localStorage.js`:
```javascript
const STORAGE_KEYS = {
  EMPLOYEES: 'employees',
  ADMIN: 'admin',
  LOGGED_USER: 'loggedInUser'
}
```

---

## 📱 Responsive Design Breakpoints

| Device | Screen Size | Layout |
|--------|------------|--------|
| Mobile | < 640px | Single column, stacked cards |
| Tablet | 640px - 1024px | 2-column grid |
| Desktop | > 1024px | 4-column grid, horizontal task scroll |

---

## 🏗️ Component Details

### Authentication Components
- **Login.jsx**: Handles user login, validation, and role-based routing

### Dashboard Components
- **admindashboard.jsx**: Admin interface with task creation and monitoring
- **employeedashboard.jsx**: Employee interface with personal task board

### Task Components
- **newtask.jsx**: Displays new tasks with "Accept" button
- **accepttask.jsx**: Shows active tasks with "Complete" and "Failed" buttons
- **completetask.jsx**: Displays completed tasks (read-only)
- **failedtask.jsx**: Displays failed tasks (read-only)
- **Tasklist.jsx**: Container component that renders tasks dynamically

### Utility Components
- **Header.jsx**: Navigation bar with logout functionality
- **Createtask.jsx**: Form for creating and assigning tasks
- **Alltask.jsx**: Table view of all tasks across organization
- **Tasklistnumber.jsx**: Statistics cards showing task counts



## 📝 Future Enhancements

### Backend Integration
- [ ] REST API with Node.js/Express
- [ ] Database integration (MongoDB/PostgreSQL)
- [ ] JWT authentication
- [ ] API error handling

### New Features
- [ ] Real-time notifications (WebSockets)
- [ ] Task filtering and search
- [ ] Task priority levels (High/Medium/Low)
- [ ] Deadline reminders
- [ ] File attachments for tasks
- [ ] Task comments/notes
- [ ] Employee performance analytics
- [ ] Export reports (CSV/PDF)
- [ ] Email notifications
- [ ] Task categories management
- [ ] Multi-language support
- [ ] Dark/Light theme toggle
- [ ] Task drag-and-drop reordering
- [ ] Calendar view for tasks

### Technical Improvements
- [ ] Unit tests (Jest/React Testing Library)
- [ ] E2E tests (Cypress)
- [ ] Code splitting for optimization
- [ ] PWA implementation
- [ ] TypeScript migration
- [ ] Redux/Zustand for complex state



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
