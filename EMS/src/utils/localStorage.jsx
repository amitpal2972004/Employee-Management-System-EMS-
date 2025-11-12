localStorage.clear();
const employees = [
  {
    "id": 1,
    "firstName": "Ravi",
    "email": "employee1@example.com",
    "password": "123",
    "taskNumber": {
      "total": 3,
      "active": 1,
      "newTask": 1,
      "completed": 2,
      "failed": 0
    },
    "tasks": [
      {
        "title": "Check Fuel Stock",
        "description": "Verify daily petrol and diesel stock levels",
        "date": "2025-10-28",
        "category": "Stock Management",
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Generate Daily Report",
        "description": "Create report for sales and stock summary",
        "date": "2025-10-29",
        "category": "Reporting",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Customer Billing",
        "description": "Handle customer invoices and receipts",
        "date": "2025-10-30",
        "category": "Billing",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 2,
    "firstName": "Anjali",
    "email": "employee2@example.com",
    "password": "123",
    "taskNumber": {
      "total": 3,
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "title": "Clean Fuel Dispenser",
        "description": "Ensure fuel dispensers are clean and ready",
        "date": "2025-10-27",
        "category": "Maintenance",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Update Price Chart",
        "description": "Change display price after daily update",
        "date": "2025-10-29",
        "category": "Operations",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Check Generator",
        "description": "Test backup generator for smooth running",
        "date": "2025-10-30",
        "category": "Maintenance",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  },
  {
    "id": 3,
    "firstName": "Suresh",
    "email": "employee3@example.com",
    "password": "123",
    "taskNumber": {
      "total": 3,
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "title": "Record Daily Sales",
        "description": "Input all sales transactions into system",
        "date": "2025-10-29",
        "category": "Sales",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Customer Support",
        "description": "Respond to customer complaints and inquiries",
        "date": "2025-10-28",
        "category": "Customer Service",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Verify Cash Balance",
        "description": "Ensure cash collected matches sales records",
        "date": "2025-10-30",
        "category": "Finance",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 4,
    "firstName": "Priya",
    "email": "employee4@example.com",
    "password": "123",
    "taskNumber": {
      "total": 3,
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "title": "Monitor CCTV",
        "description": "Keep surveillance footage reviewed daily",
        "date": "2025-10-29",
        "category": "Security",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Stock Refill Request",
        "description": "Prepare refill request for low stock items",
        "date": "2025-10-28",
        "category": "Inventory",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Meter Reading",
        "description": "Record the dispenser meter readings",
        "date": "2025-10-30",
        "category": "Operations",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 5,
    "firstName": "Manoj",
    "email": "employee5@example.com",
    "password": "123",
    "taskNumber": {
      "total": 3,
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "title": "System Backup",
        "description": "Backup database and reports to external drive",
        "date": "2025-10-29",
        "category": "IT",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Employee Attendance",
        "description": "Mark daily attendance records",
        "date": "2025-10-30",
        "category": "HR",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Bill Printing Check",
        "description": "Ensure bill printer and software working fine",
        "date": "2025-10-30",
        "category": "Technical",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ]
  }
];

const admin = [
  {
    "id": 1,
    "email": "admin1@example.com",
    "password": "123"
  }
];

export const setLocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage = ()=>{
  const employees=JSON.parse(localStorage.getItem("employees"))
  const admin=JSON.parse(localStorage.getItem("admin"))
  return {employees , admin} 
  
}