const obj = {
    a: 3, 
    b: 4
}
// const add = (obj) => {
//     return obj.a+obj.b
// }
const add = ({a, b}) => {
    // const {a, b} = obj
    return a+b
}
console.log(add(obj))