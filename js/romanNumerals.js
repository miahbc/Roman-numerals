exports.toRoman = function(num) {
        let output = ''
        const romanMap = {
            I: 1,
            V: 5,
            X: 10,
            L: 50,
            C: 100,
            D: 500,
            M: 1000,
        }
        let num1 = 0 + num
        let revObj = Object.keys(romanMap).reverse()
        console.log(revObj)
        // console.log(num1)
        while (num1 > 0) {
        for (const [key] of revObj) {
            // console.log(key,value)
            let evenDiv = num1 / romanMap[key]
            if (evenDiv >= 1) {
                output += key
                num1 -= romanMap[key]
                // console.log(num1)
            }}
        } 
        console.log(output)
        return output
    }

//  console.log(toRoman(20))

// to_roman(4) // 'IV'
// to_roman(944) // 'CMXLIV'
// to_roman(150) // CL


// I -> 1
// V -> 5
// X -> 10
// L -> 50
// C -> 100
// D -> 500
// M -> 1000

// IV -> 4
// IX -> 9
// XIV -> 14
// XLIV -> 44
// CMXLIV -> 944

// to_roman(4) # 'IV'
// to_roman(944) # 'CMXLIV'
// to_roman(150) # CL

// # 1. Write a method TO_ROMAN, TO_ROMAN takes in INPUT_NUMBER (an arabic number)
// # 2. Create a OUTPUT string, set to ''
// # 3. Create a ROMAN_NUMERAL_TO_ARABIC_MAP that includes roman numerals as keys, arabic numbers as values
// # 4. Iterate over ROMAN_NUMERAL_TO_ARABIC_MAP, keep track of ROMAN_NUMERAL and ARABIC_NUMBER
// # 5. Set EVENLY_DIVISIBLE_TIMES = INPUT_NUMBER / ARABIC_NUMBER:
// # 6. If EVENLY_DIVISIBLE_TIMES >= 1
//   # 6a. Append ROMAN_NUMERAL to OUTPUT EVENLY_DIVISIBLE_TIMES
//   # 6b. Subtract ARABIC_NUMBER from INPUT_NUMBER EVENLY_DIVISIBLE_TIMES
// # 7. Return OUTPUT