// Coding Challenge 7: Company Department Salary Calculation
// Task 1: Create a department structure of employees and their salaries and subordinates
const company = [
    {
        departmentName: "Sales", 
        employees: [
            {
                name: "Michael", 
                salary: 90000, 
                subordinates: [
                    {
                        name: "Nathaniel",
                        salary: 70000,
                        subordinates: [
                            {
                                name: "Alan",
                                salary: 40000,
                                subordinates: []
                            }
                        ]
                    },
                    {
                        name: "Izzi",
                        salary: 67000,
                        subordinates: []
                    }
                ]
            },
            {
                name: "Jameson",
                salary: 80000,
                subordinates: [
                    {
                        name: "Cy",
                        salary: 60000,
                        subordinates: []
                    }
                ]
            }
        ]
    },
    {
        departmentName: "Mailings",
        employees: [
            {
                name: "Amanda",
                salary: 80000,
                subordinates: [
                    {
                        name: "Dylan",
                        salary: 65000,
                        subordinates: [
                            {
                                name: "Katie",
                                salary: 40000,
                                subordinates: []
                            }
                        ]
                    }
                ]
            },
            {
                name: "Bella",
                salary: 75000,
                subordinates: []
            }
        ]
    }
];

// Task 2: Create a recursive function to calculate total salary for a department
// Create a recursive function through employees and their subordinates
function calculateEmployeeSalary(employee) {
    subTotal = 0;
    // Add top level employee's salary
    subTotal += employee.salary;
    // Run a loop to add all subordinates' salaries
    for (let subordinate of employee.subordinates) {
        subTotal += calculateEmployeeSalary(subordinate);
    };
    return subTotal;
};

// Create a function to calculate total salary for all of employees in a department using the former function
function calculateDepartmentSalary(department) {
    let total = 0;
    for (let employee of department.employees) { 
        total += calculateEmployeeSalary(employee);
    };
    return total;
};

// Call function with department total
console.log(`Total salaries for department ${company[0].departmentName}: $${calculateDepartmentSalary(company[0])}`);

// Task 3: Create a function to calculate the total salary for all departments
function calculateCompanySalary(company) {
    // Initialize total for company
    let companyTotal = 0;
    for (department of company) {
        // Call function for each department in the company and add to total
        companyTotal += calculateDepartmentSalary(department);
    };
    return companyTotal;
};

// Call function with total company salaries
console.log(`Total salaries for company: $${calculateCompanySalary(company)}`);