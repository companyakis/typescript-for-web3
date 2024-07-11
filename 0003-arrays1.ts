let cities: string[] = ["İzmir", "Ankara", "İstanbul"]

cities.forEach(i => console.log(`City: ${i}`))

let numbers: number[] = [3, 4, 12, -1, 0]

for (let i = 0; i < numbers.length; i++) {
    console.log(`Number_${i + 1} = ${numbers[i]}`)
}

/* 
City: İzmir
City: Ankara
City: İstanbul

Number_1 = 3
Number_2 = 4
Number_3 = 12
Number_4 = -1
Number_5 = 0
*/
