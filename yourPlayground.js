// // // // // let weather=prompt('how is the weather')

// // // // // if (weather=="rain"){
// // // // //   console.log('Grab your Umbrella')
// // // // // }
// // // // // else{
// // // // //   console.log('Wear the sunglasses')
// // // // // }

// // // const add=(a,b)=>{
// // //   return a+b
// // // }
// // // // console.log(add(12,18))

// // const add=(a,b)=>a+b
// // // console.log(add(12,15))

// const sub=(a,b)=>{
//   return a-b
// }
// console.log(sub(12,5))

// const div=(a,b)=>a/b
// console.log(div(15,3))

// const mul=(a,b)=>{
//   return a*b
// }
// console.log(mul(15,15))



























const add=(a,b)=>{
  return a+b
}
console.log(add(10,15))

const sub=(a,b)=>a-b
console.log(sub(10,5))

const div=(a,b)=>a/b
console.log(div(15,5))

const mult=(a,b)=>{
  return a*b
}
console.log(mult(10,10))

//Arrays
const groceries=['banana','apple','orange','pear']
console.log(groceries[0])          //print banana only
   //grab all index
console.log(groceries)
//grab 1 index
console.log(groceries[1])          //print apple only
//grab 3rd index
console.log(groceries[3])          //print pear only
//adding one more element to the index
groceries.push('football')
console.log(groceries)
 groceries.push('blueberry')
console.log(groceries)

//arrays slice
console.log(groceries.slice(3,6))  //start from 3 and goes to 6 not include 7 index- 
                                   //-value
console.log(groceries.slice(1,4))

//Arrays indexOf
console.log(groceries.indexOf('blueberry'))

//Arrays length
console.log(groceries.length)