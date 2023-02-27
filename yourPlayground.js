// // // // // // // // // // // // // // // let weather=prompt('how is the weather')

// // // // // // // // // // // // // // // if (weather=="rain"){
// // // // // // // // // // // // // // //   console.log('Grab your Umbrella')
// // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // else{
// // // // // // // // // // // // // // //   console.log('Wear the sunglasses')
// // // // // // // // // // // // // // // }

// // // // // // // // // // // // // const add=(a,b)=>{
// // // // // // // // // // // // //   return a+b
// // // // // // // // // // // // // }
// // // // // // // // // // // // // // console.log(add(12,18))

// // // // // // // // // // // // const add=(a,b)=>a+b
// // // // // // // // // // // // // console.log(add(12,15))

// // // // // // // // // // // const sub=(a,b)=>{
// // // // // // // // // // //   return a-b
// // // // // // // // // // // }
// // // // // // // // // // // console.log(sub(12,5))

// // // // // // // // // // // const div=(a,b)=>a/b
// // // // // // // // // // // console.log(div(15,3))

// // // // // // // // // // // const mul=(a,b)=>{
// // // // // // // // // // //   return a*b
// // // // // // // // // // // }
// // // // // // // // // // // console.log(mul(15,15))



























// // // // // // // // // // const add=(a,b)=>{
// // // // // // // // // //   return a+b
// // // // // // // // // // }
// // // // // // // // // // console.log(add(10,15))

// // // // // // // // // // const sub=(a,b)=>a-b
// // // // // // // // // // console.log(sub(10,5))

// // // // // // // // // // const div=(a,b)=>a/b
// // // // // // // // // // console.log(div(15,5))

// // // // // // // // // // const mult=(a,b)=>{
// // // // // // // // // //   return a*b
// // // // // // // // // // }
// // // // // // // // // // console.log(mult(10,10))

// // // // // // // // // // //Arrays
// // // // // // // // // // const groceries=['banana','apple','orange','pear']
// // // // // // // // // // console.log(groceries[0])          //print banana only
// // // // // // // // // //    //grab all index
// // // // // // // // // // console.log(groceries)
// // // // // // // // // // //grab 1 index
// // // // // // // // // // console.log(groceries[1])          //print apple only
// // // // // // // // // // //grab 3rd index
// // // // // // // // // // console.log(groceries[3])          //print pear only
// // // // // // // // // // //adding one more element to the index
// // // // // // // // // // groceries.push('football')
// // // // // // // // // // console.log(groceries)
// // // // // // // // // //  groceries.push('blueberry')
// // // // // // // // // // console.log(groceries)

// // // // // // // // // // //arrays slice
// // // // // // // // // // console.log(groceries.slice(3,6))  //start from 3 and goes to 6 not include 7 index- 
// // // // // // // // // //                                    //-value
// // // // // // // // // // console.log(groceries.slice(1,4))

// // // // // // // // // // //Arrays indexOf
// // // // // // // // // // console.log(groceries.indexOf('blueberry'))

// // // // // // // // // // //Arrays length
// // // // // // // // // // console.log(groceries.length)


// // // // // // // // // //OBJECT
// // // // // // // // // const person={
// // // // // // // // //   name:'Saheb',
// // // // // // // // //   shirt:'Black'
// // // // // // // // // }
// // // // // // // // // console.log(person.name)
// // // // // // // // // console.log(person.shirt)
// // // // // // // // // //bracket notation
// // // // // // // // // console.log(person['name'])
// // // // // // // // // console.log(person['shirt'])
// // // // // // // // // //Assign another key value
// // // // // // // // // person.phone='9123441006'
// // // // // // // // // console.log(person['phone'])

// // // // // // // // // //Practice objects

// // // // // // // // // const person2={
// // // // // // // // //   name:'Quazi',
// // // // // // // // //   shirt:'White'
// // // // // // // // // }
// // // // // // // // // console.log(person2)
// // // // // // // // // console.log(person2['name'])
// // // // // // // // // console.log(person2['shirt'])

// // // // // // // // //calling funcion with object
// // // // // // // // //es6 arrow function
// // // // // // // // // const introducer=(name,shirt)=>{
// // // // // // // // //   const person={
// // // // // // // // //     name: name ,
// // // // // // // // //     shirt: shirt
// // // // // // // // //   }
// // // // // // // // //   const intro=`hi my name is ${person.name} and color of my shirt is ${person.shirt}`
// // // // // // // // //   return intro
// // // // // // // // // }
// // // // // // // // // console.log(introducer('Saheb','Black'))

// // // // // // // // //Methods in Objects
// // // // // // // // const introducer=(name,shirt)=>{
// // // // // // // //   const person={
// // // // // // // //     name: name ,
// // // // // // // //     shirt: shirt,
// // // // // // // //     assest: 100000,
// // // // // // // //     libilities: 50000,
// // // // // // // //     netWorth:function(){
// // // // // // // //       return this.assest-  this.libilities
// // // // // // // //     }
// // // // // // // //   }
// // // // // // // //   const intro=`hi my name is ${person.name} and color of my shirt is ${person.shirt} and my netWorth is $${person.netWorth()}`
// // // // // // // //   return intro
// // // // // // // // }
// // // // // // // // console.log(introducer('Saheb','Black'))

// // // // // // // // const person={
// // // // // // // //   name:'Saheb',
// // // // // // // //   shirt:'Pink'
// // // // // // // // }
// // // // // // // // console.log(person['name'])

// // // // // // // const introduction=(name,shirt)=>{
// // // // // // //   const person={
// // // // // // //     name: name,
// // // // // // //     shirt: shirt,
// // // // // // //     assests:100000,
// // // // // // //     libilities:50000,
// // // // // // //     networth:function(){
// // // // // // //       return this.assests-this.libilities
// // // // // // //     }
// // // // // // //   }
// // // // // // //   const intro=`hi my name is ${person.name} and color of my shirt is ${person.shirt} and my netWorth is $${person.networth()}`
// // // // // // //   return intro
// // // // // // // }
// // // // // // // console.log(introduction('Saheb','Pink'))

// // // // // // //Loops

// // // // // // // const fruit=['banana','apple','orange','pear','banana','apple','orange','pear' ,'banana','apple','orange','pear','banana','apple','orange','pear']

// // // // // // // // for (let i=0;i<fruit.length;i++){
// // // // // // // //   console.log(i,fruit[i])
// // // // // // // // }

// // // // // // // for(const saheb of fruit){
// // // // // // //   console.log(saheb)
// // // // // // // }

// // // // // // // sum of arrays
// // // // // // // const number=[1,2,3,4,5,6]

// // // // // // // for(let i=0;i<number.length;i++){
// // // // // // //   console.log(i,number[i])
// // // // // // // }

// // // // // // // for (const numbers of number){
// // // // // // //   console.log(numbers*2)  //doubling the array
// // // // // // // }

// // // // // // // printing doubling arrays
// // // // // // const number=[1,2,3,4,5,6]


// // // // // // let result=[]
// // // // // // for(const numbers of number){
// // // // // //   result.push(numbers*2)
// // // // // // }
// // // // // // console.log(result)

// // // // // // turning this stuff into function

// // // // // const double=(number)=>{
// // // // //   let result=[]
// // // // //   for(const numbers of number){
// // // // //     result.push(numbers**2) //square the number
// // // // //   }
// // // // //   return result
// // // // // }
// // // // // console.log(double([1,2,3,4,5,6]))

// // // // //Arrays and objects Exercise
// // // // const howManyLetter=()=>{
// // // //   const phrase='hi,can you go to groceries store with me?'

// // // //   for(const index in phrase){
// // // //     console.log(index)
// // // //   }
// // // //   return phrase
// // // // }
// // // // howManyLetter()

// // // // adding up all arrays 
// // // const sumArray=(numbers)=>{
// // //   let result=0;
// // //   for(const number of numbers){
// // //     console.log(number)
// // //     result=result+number
// // //   }

// // //   return {result}
// // // }
// // // const nums=[1,2,3,4,5]
// // // console.log(sumArray(nums))

// // // maximum of the number
// // const max=(numbers)=>{
// //   let result=numbers[0]
// //   for (const number of numbers){
// //     if(number>result)
// //       result=number
// //   }
// //   return {result}
// // }
// // console.log(max([1,2,3,4,5]))

// // frequency of word in a string
// const letterFrequency=(phrase)=>{
//   console.log(phrase)
//   for(const letter of phrase){
//     console.log(letter)
//   }
// }
// letterFrequency('haha')

// word frequency
const wordFrequency=(phrase)=>{
  let frequency={}
  words=phrase.split(' ')
  for(const word of words){
    console.log(word)
  
  if(word in frequency){
    frequency[word]+=1
  }else{
    frequency[word]=1
  }
}
  console.log(words)
  return frequency
}
console.log(wordFrequency('lol what lol'))





























