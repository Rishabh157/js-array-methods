import data from "./data.mjs";

// at() => it return the elements at the end of the array with given nagative number argument -1

// print the last element of the index using at() method
const lastIndex = data.at(-1)
console.log(lastIndex)


// print the some of age. who are greater then or eqal to 20 and lower than or equal to 30
const sortedArray = data.filter(ele => {
    return ele.age >= 20 && ele.age <= 30;
})

const someOfAllConditionAges = sortedArray.reduce((accum, ele) => {
    return accum += ele.age
}, 0)
console.log(someOfAllConditionAges)



// store all documents ages in an array and organize them in ascending order
let sortedAges = namesOfArr.sort((a, b) => {
    return a - b;
})
console.log(sortedAges)



// print the full name of all documents data their emails also.
const fullName = data.map((ele, ind) => {
    return { "fullname": ele.first_name + " " + ele.last_name, "email": ele.email }
})
console.log(fullName)


// find the given Name elements index.
const indexOf = data.filter(ele => {
    if (ele.first_name === "Jerrie") {
        const index = data.indexOf(ele)
        return index;
    }
})
console.log(indexOf)


// add the element with splice method it  modified the original array.

data.splice(0, 0, {
    "id": 101,
    "first_name": "Chris",
    "last_name": "Evans",
    "email": "ceptainamerica@avenger.com",
    "gender": "Male",
    "age": 70,
    "country": "Brooklyn",
    "phone": "+55 900 964 8224"
})
console.log(data)



// some() => it return the true based on at least one element in the array passing the condition.  

// check in the array that someone ages in equal to 19 or nor 
const isSomeOne85OrNot = data.some((ele) => {
    return ele.age === 19
})
console.log(isSomeOne85OrNot)



// find() => using the some methods we had known the equal to 19 age is existed in the array now let's find out who is it.
// NOTE :-  if we are using filter method instead of find we have all the object who's age is eqal to 19
//          but find methods return only first matching element. and if it's not found in an array it return -1
const findOutInfoOf19 = data.find((ele) => {
    return ele.age === 19
})
console.log(findOutInfoOf19)


const findEvery = data.every((ele) => {
    return ele.age > 10  // it return true because every ele.age is greather then 10
    // return ele.age > 20  // it return false because every ele.age is not greather then 20
})
console.log(findEvery)
