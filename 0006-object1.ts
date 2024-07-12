type Employee = {
    id: number,
    name: string,
    department: string,
    salary: number
}

let employee_hakan: Employee

employee_hakan = {
    id: 121,
    name: "Hakan Bulur",
    department: "Accounting",
    salary: 4500
}

console.log(employee_hakan.salary) // 4500

console.log(employee_hakan)
