let info: (number | boolean)[] = [2024, false]

info.push(2025)

info.push(true)

info.push(12.48)

info.push(-100)

//info.push("hi") // Argument of type '"hi"' is not assignable to parameter of type 'number | boolean'.

console.log(info) // [ 2024, false, 2025, true, 12.48, -100 ]
