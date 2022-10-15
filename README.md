// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// let name = 'Riha'
// const pi = 3.14

// console.log(name, pi)

const arr= [1, 3, 5, 6]
console.log('lst', arr)

arr.push(10)
console.log('after pushing', arr)

arr.pop()
console.log('after poping', arr)

// dispatching an array to elements
console.log(...arr)

console.log(arr[1])

const[firstElm, secElm, thirdElm]= arr
console.log(secElm)

const student  = {
    name: 'riha',
    sem: 3,
    id: 111111111
}

student['home']= 'Dhaka'
student.cgpa= 2.00

student2= {...student, rs:61}
console.log(student2)

const {name, cgpa} =  student
console.log(name, cgpa)

const lineNumber= 4
console.log(`line1
line2 ${lineNumber}
line3`)
