// let firstName = "Suhrob"
// let lastName = "Soatov"
// let fullName = firstName + " " + lastName
// console.log(fullName)
// Matn yoki so'zning uzunligini o'lchaydi
// console.log(fullName.length)
// Aynan shu pozitsiyada qaysi harf turganini ko'rsatadi
// console.log(fullName[2])

// harflarni katta yoki kichik qilib beradi
let katta = fullName.toUpperCase()
let kichik = fullName.toLowerCase()
console.log(katta)
console.log(kichik)

// Qaysi harf qaysi pozitsiyada ekanligini ko'rsatadi
let index1 = fullName.indexOf("S")
let index2 = fullName.lastIndexOf("S")
console.log(index1)
console.log(index2)

// Kerakli joydan bosh kerakli joygacha kesib beradi
let half = fullName.slice(0,3)
console.log(half)

// Kerakli joydan boshlab keraklicha harfni kesib beradi
let half2 = fullName.substr(0, 2)
console.log(half2)

// Tanlangan harffni o'zgartirib beradi
let change = fullName.replace("S", "d")
console.log(change)