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

