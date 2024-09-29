//-----------------     Scope
/** 
 * 1.global scope (works only for let and const)
 * 2.block scope (works only for let and const)
 * 3.functional scope (var don't work outside functional scope if declared in it)
 */
// const x = 5;
// console.log(x)
// if(true) {
//     console.log(x)
// }
// function show() {
//     console.log(x)
// }
// show()
// {
//     const y = 55;
//     console.log(y)
// }
// console.log(y)
// const x = 7;
// {
//     const x = 77;
//     console.log(x)
// }
// console.log(x);

//------------------    arrow function
// function info() {
//     return 'ki chai...!!'
// }
// //or,
// const info2 = () => {
//     return 'ki chai...!'
// }
// //or,
// const info3 = () => 'ki chai...!'
// console.log(info())
// console.log(info2())
// console.log(info3())
// function double(x) {
//     return x*2;
// }
// //or,
// const double2 = (x) => x*2;
// //or,
// const double3 = x => x*2
// console.log(double(2))
// console.log(double2(2))
// console.log(double3(2))
// const add = (x, y) => {
//     const sum = x + y;
//     return sum;
// }

//-----------------     default parameter
// function add(x=0, y=0) {
//     const sum = x+y;
//     return sum;
// }
// //or,
// const add2 = (x=0, y=0) => x+y;
// console.log(add(2))
// console.log(add2(2))

//----------------    logical operator
// const money = true;
// const money = false;
// console.log(money && 'will go')
// const bus = false;
// const rickshaw = true;
// console.log(bus || rickshaw)
// //ternary 
// const x = 4;
// console.log(x===5 ? 'number is 5' : 'not five')

//-------------------   array spread
// const arr1 = [1, 2, 3];
// // const arr2 = arr1;
// // // console.log(arr2)
// // arr1.push(55)
// // arr1.push(66)
// // // console.log(arr2)
// // arr2.push(77);
// // console.log(arr2)
// // console.log(arr1)
// const arr2 = [...arr1]
// arr2.push(88)
// arr1.push(99)
// console.log(arr1)
// console.log(arr2)

//---------------   array destructure
// const names = ['ali', 'hasan', 'babul', 'kabul', 'habul'];
// const name1 = names[0];
// const name2 = names[1];
// console.log(name1);
// // const [x, y] = names;
// const [_, y] = names;
// // console.log(x, y)
// console.log( y)



//-------------   object ----------------------
//-----------  object spread
// const myInfo = {
//     name: 'nur',
//     age: 20,
//     address: 'chandpur',
//     city: 'dhaka',
//     email: 'hey@gamil.com',
//     phone: 1234567890
// }
// const obj = myInfo
// // console.log(obj)
// obj.married = false;
// console.log(obj)
// console.log(myInfo)
// const obj2 = {...myInfo};
// obj2.jamai = false;
// console.log(myInfo)
// console.log(obj2)

//--------------   object destructure
// const myInfo = {
//     name: 'nur',
//     age: 20,
//     address: 'chandpur',
//     city: 'dhaka',
//     contact: {
//         email: 'hey@gamil.com',
//         phone: 1234567890
//     },
// }
// // const { name, age } = myInfo
// // console.log(name, age);
// // const { age: boyosh } = myInfo;
// // console.log(boyosh);
// // const {contact} = myInfo;
// // // console.log(contact);
// // const {email} = contact;
// // console.log(email)
// //or,
// const {contact: {email}} = myInfo;
// console.log(email)

//-------------------   object access: dot notation, bracket notation
// const myInfo = {
//     name: 'nur',
//     age: 20,
//     address: 'chandpur',
//     city: 'dhaka',
//     contact: {
//         email: 'hey@gamil.com',
//         phone: 1234567890
//     },
// }
// console.log(myInfo.name)
// const x = 'city';
// console.log(myInfo['address']);
// console.log(myInfo[x])
// for(let key in myInfo) {
//     // console.log(myInfo.key)
//     // console.log(typeof key)
//     console.log(myInfo[key])
// }

//--------------------  optional chaining object
// const mainObject = {
//     subObject1: {
//         name: "Sub Object 1",
//         details: {
//             description: "This is the first sub-object",
//             value: 100,
//             subObject2: {
//                 name: "Sub Object 2",
//                 details: {
//                     description: "This is the second sub-object",
//                     value: 200,
//                 }
//             },
//         }
//     },
//     food: ['apple', 'orange', 'banana']
// };

// // console.log(mainObject.subObject1.details.subObject2.description)  //undefined: exist kore na amon value ke call kortesi
// // console.log(mainObject.subObject1.details.subObject2.subObject3.name)    //type error: exist kore na amon value-object er value call kortesi
// console.log(mainObject.subObject1.details.subObject2?.subObject3?.name)    //undefined
// console.log(mainObject?.food[2])
// console.log(mainObject?.food[4])



//----------------------------------    array methods   ---------------------------
//--------------------------    forEach()
// const arr = [10, 20, 30, 41, 50, 60];
// for(let item of arr) {
//     console.log(item)
// }
//arr.forEach((item) => item)  //that's how forEach works
// arr.forEach(a => console.log(a))
// const result = arr.forEach(a => a);
// // console.log(result)      //forEach return kore na tai undefined ashbe
// let sum = 0;
// arr.forEach(a => {
//     sum += a;
// })
// console.log(sum)
//  callback parameter(item, index, whole array)
// arr.forEach((item, index, a) => {
//     console.log('item: ' + item + ' index: ' + index, ' array', a)
// })

//----------------------    map()
// arr.map(a => console.log(a))
// arr.map((item, index, a) => {
//     console.log(item, index, a)
// })
// const result = arr.map(a => a*2);
// console.log(result);
// console.log(arr)
// const result2 = arr.map(a => {
//     const x = a + 3;
//     return x
// })
// console.log(result2)

//--------------------  find()
// const result = arr.find(a => a>30 && a%2===0)
// console.log(result)
// const result2 = arr.find(a => a>50 && a%2===1)
// console.log(result2)

//---------------------   filter()
// const result = arr.filter(a => a>30)
// console.log(result)
// const result2 = arr.filter(a => a>70)
// console.log(result2)

//---------------------   reduce()
// const arr = [1, 2, 3, 4];
//.reduce((previous, current) => {}, initial value)
/**
 * 0 + 1 = 1;
 * 1 + 2 = 3;
 * 3 + 3 = 6;
 * 6 + 4 = 10;
 */
/**
 * [1, 2, 3, 4]
 * [3, 3, 4]
 * [6, 4]
 * [10]
 */
// const sum = arr.reduce((prev, current) => prev+current, 0);
// console.log(sum)
// const sum2 = arr.reduce((prev, current) => prev+current, 1);
// console.log(sum2)
// const sum3 = arr.reduce((prev, current) => prev+current);
// console.log(sum3)
// // const multi = arr.reduce((prev, current) => prev*current)
// // const multi = arr.reduce((prev, current) => prev*current, 0)
// const multi = arr.reduce((prev, current) => prev*current, 1)
// console.log(multi)
// const numbers = [{ a: 1 }, { b: 2 }, { c: 3 }, { d: 4 }];
// // const total = numbers.reduce((prev, current) => prev+current.a)
// // console.log(total)
// // const total = numbers.reduce((prev, current) => prev + current.a, 0)
// const total = numbers.reduce((prev, current) => prev * current.a, 1)
// console.log(total)


//--------------------------------      template string
// const name = 'nur';
// const age = 20;
// const address = 'chandpur'
// const info = `amar name ${name}. amar boyosh ${age}. ami thaktam ${address}`;
// console.log(info)
// const myInfo = {
//     name: 'nur',
//     age: 20,
//     address: 'chandpur',
//     city: 'dhaka',
//     subject: ['bangla', 'english', 'math']
// }
// // const info2 = `amar name ${myInfo.name}. amar subjects ${myInfo.subject}`
// const info2 = `amar name ${myInfo.name}. amar subjects ${myInfo.subject.map(sub => sub).join('/ ')}`
// console.log(info2)
// const myInfo = [
//     {
//         name: 'nur',
//         age: 20,
//         city: 'dhaka',
//         subject: ['bangla', 'english', 'math'],
//         address: {
//             city: 'dhaka',
//             village: 'chandpur'
//         }  
//     },
//     {
//         name: 'nahar',
//         age: 25,
//         city: 'dhaka',
//         subject: ['bangla', 'english', 'math']    
//     },
//     {
//         name: 'komola',
//         age: 30,
//         city: 'dhaka',
//         subject: ['bangla', 'english', 'math'] , 
//         address: {
//             city: 'sabar',
//             village: 'khulna'
//         }    
//     }
// ]
// myInfo.map(person => {
//     const sentence = `my name ${person.name}. City: ${person?.address?.city || 'N/A'}`
//     console.log(sentence)
// })
// const x = myInfo.find(a => a.age===25);
// console.log(x)
// console.log(x.name)


//------------------------    problem solving
//1.
// const students = [
//     { name: "mehedy bro", email: "mehedy@gamil.com", avg: 56, fiftyPercent: true,},
//     { name: "rokib bro", email: "rokib@gamil.com", avg: 57, fiftyPercent: false },
//     { name: "sakib bro", email: "sakib@gamil.com", avg: 42, fiftyPercent: false },
//     { name: "sojib bro", email: "sojib@gamil.com", avg: 52, fiftyPercent: true },
//     { name: "sunny bro", email: "sunny@gamil.com", avg: 32, fiftyPercent: false },
//     { name: "saki bro", email: "sunny@gamil.com", avg: 37, fiftyPercent: true },
//     { name: "jackie bro", email: "jackie@gamil.com", avg: 57, fiftyPercent: true,},
// ];
// // const x = students.filter(a => a.avg>=48 && a.fiftyPercent === true);
// // console.log(x)
// // console.log(x.map(n => n.name))
// //  or,
// const findSCIC = (students) => {
//     const scic = students.filter(a => a.avg >= 48 && a.fiftyPercent === true);
//     return scic.map(n => n.name);
// }
// const results = findSCIC(students);
// console.log(results)

//2.
// const polapain = [
//     { Name: "Abul", job: "sorkari", salary: 17000 },
//     { Name: "Babul", job: "besorkari", salary: 25000 },
//     { Name: "Kabul", job: "sorkari", salary: 21000 },
//     { Name: "Habul", job: "besorkari", salary: 47000 },
//     { Name: "Jabul", job: "sorkari", salary: 23000 },
//     { Name: "Mabul", job: "besorkari", salary: 55000 },
// ];
// const jamais = polapain.filter(pola => (pola.job === 'sorkari' && pola.salary > 20000) || (pola.job ==='besorkari' && pola.salary > 40000))
// // console.log(jamais)
// // console.log(jamais.map(n => n.Name))

// //3.
// const lottery = Math.floor(Math.random()*jamais.length);
// console.log(lottery)
// // console.log(jamais[lottery])
// console.log(jamais[lottery].Name)