
//         //   Global Scope   //    Lecture - 21


// let a = 10
// const b = 20
// var c= 30
// console.log(a,b,c)

// var x = "hello krishna "

// function example(){jojmlool
//     console.log(x)
// }

// example();


  //    Functional Scope   // 


//   function example (){
//     var fs = "hello priya"
//     console.log(fs)
//   }

//   example();

//   console.log(fs)


        //  Block Scope   //

// function example (){
//     if(true){
//         let vb = "krishna love 5"
//         console.log(vb)
//     }
// }

// example()



    // chai with js // -- Hitesh choudhary


    // let Score = 56;

    // console.log(typeof (Score))



    // let valueInNumber = Number(Score)
    // console.log( valueInNumber)



    //     "33"  = .> 33
    // "33abc" => NaN


    //  boolean data types //

    // let isLoggedIn = "hitesh"

    // let booleanIsLoggedIn = Boolean(isLoggedIn)
    // console.log(booleanIsLoggedIn)


    //   1 => trye , 0 => FALSE , 
    //  "" => False , "Krishn" => tru


    //  Strings to number conversion // 

    // let someNumber = 33
    // let stringNumber=String(someNumber)
    // console.log(String)
    // console.log(typeof stringNumber)



    // console.log("2">1)
    // console.log("2" > "10")





    // Comparision Operators   // 



    // console.log(null > 0)
    // console.log(null >= 0)
    // console.log(null <=0)
    // console.log(null == 0)
    // console.log(null < 0)


    // these conversion also give us  doubt and put us in confud=sion 


  //  //    ===  strictcheck  /// 
  //  console.log("2" === 2)       



  //  /////    if condition      /////

  //  let mode = "dark"
  //  let color;
  //  if (mode === "dark")
  //  {
  //   color="black"
  //  }
  //  if (mode === "light")
  //  {
  //   color="white"
  //  }
  //  console.log(color)


  /// Clean code have more priorority in oour industry   ///

      //  data categorisations // 
      //  1.  priimitive data types/ 7 Categories   //   Call by memory
      //a. String           e.  undefined
      //b. Boolean          f. BigInt
      //c. Null             g. Symbol
      // d. Number


    // 2.  Non-Primitive  --  Reference 
    // a. Array 
    // b. Objects
    // c. Functions

    // const score = 100
    // const scoreValue = 100.3
    // const isLoggedIn = false
    // const outSideTemp = null
    // let uswrmail;
    // const id = symbol('123')
    // const anotherId = symbol("'123")
    // console.log(id === anotherId)

  //   const heroes = ["marvel"  , 'sperman', "shaltiman"]
  //  let myObj=  {
  //     name:"Krishna",
  //     age: 22,
  //   }

//    const myfunction= function (){
// console.log("hello World")
//     }

//     myfunction()







                                                                   //    memory   // 
                                                                 ///  Stack and Heap ///

    // let myYoutubeName = "Krishna ff agb axb"                                                             

    // let anotherName = myYoutubeName
   //  console.log(anotherName)
    // anotherName = "chai Aur Code"
    // console.log(myYoutubeName)
    // console.log(anotherName)



    // let userOne = {
    //   email: "xyz@gmail.com",
    //     Upi : "user@ybl"
    // }

    // let userTwo = userOne 
    // userTwo.email = " tyu@gmail.com"
    // console.log(userOne.email)
    // console.log(userOne.Upi)
    // console.log(userTwo.email)



                                                 //   Strings In Jaavascript  //




//     const name = "Krishna"    
//     const repoCount = 8305479531

//   console.log(`hello my name is ${name} and my repo count is ${repoCount}`)  



 // const heroNmae = new String('hero-Nmae-piggypop')

// console.log(heroNmae[0])
// console.log(heroNmae.__proto__)
// console.log(heroNmae.length)
// console.log(heroNmae.toLocaleLowerCase())
// console.log(heroNmae.toUpperCase())
// console.log(heroNmae.charAt('6'))
// console.log(heroNmae.indexOf('N'))


// ANOTHER-EXAMPLE OF STRINGS  //

 //const heroNAme = new String ('KRishnaTHakur')
// console.log(heroNAme[1])
// console.log(heroNAme.__proto__)
// console.log(heroNAme.lenght)
// console.log(heroNAme.toLocaleLowerCase())
// console.log(heroNAme.toLocaleUpperCase())
// console.log(heroNAme.charAt('5'))
// console.log(heroNAme.indexOf('T'))




// const newString = heroNAme.substring(0,4)
// console.log(newString)

                                     //  TRIM METHOD IN STRINGS    //

// const anotherHero = heroNAme.slice(-8,2)
// console.log(anotherHero, "kopkxk")


// const sigmaHero = "    hityuch   "
// const figmaHero =   "  ojdvmi m   mkcm  k"
// console.log(sigmaHero.trim())
// console.log(figmaHero.trim())
                                                   //  REPLACE METHOD IN STRING  //

// const futuridsticHero = "https://hooi?%20mvo"

// console.log(futuridsticHero.replace('%20', '_'))

// console.log(futuridsticHero.includes('/'))


// console.log(heroNmae.split('-'))


// const krishna = "https://hujscnkjanck?%20@njsnjknkn"
// //console.log(krishna.replace('%20','_'))
// console.log(krishna.includes('/'))
// console.log(krishna.split('_'))

                                          //     NUMBER AND MATHS IN JAVASCRIPT   //        


  // const score = 45 
  // console.log(score)

  // const balnce = new Number(100)
  // console.log(balnce)
  // console.log(balnce.toString().length)
  // console.log(balnce.toFixed(2))

  // toPrecision()  are used for giveing us a presice value 

  // const otherNumber = 898.565
  // console.log(otherNumber.toPrecision(3))

  //  toLocaleString method for hivimg , in many numbers as like onnnes thousands 

  // const sigNum = 54882294162
  // console.log(sigNum.toLocaleString('en-In'))


  ///+++++++++++++++++++++++++++++++++++++++++++++++++++++   MATHS   ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++///

  // console.log(Math.round(5.9))
  // console.log(Math.abs(-4.6))



  const min = 10
  const max = 28

  // formula // 
  // console.log((Math.random()*10) + 1)
  console.log(Math.floor(Math.random() * (max - min + 1) )+ min)
  
  console.log(Math.random() * (max - min + 1) )


                                         //   DATE AND TIME   //
 
  // let myDate = new Date()                                       
  // console.log(myDate.toISOString())
  // console.log(myDate.toDateString())
  // console.log(myDate.toLocaleString())


  // let myCreatedDate = new Date(2023,0, 23, 5
  // , 33)
  // let myCreatedDate = new Date("2025-01-25")  //   yy/mm/dd
  // let myCreatedDate = new Date("01-12-2023")
  // console.log(myCreatedDate.toLocaleString())

  //let myTimeStamp = Date.now()
 // console.log(myTimeStamp)
 // console.log(myCreatedDate.getTime())
 // console.log(Date.now()/1000)    //gives deciml values also 
 // console.log(Math.floor(Date.now()/1000)) // gives seconds value


      // let newDate = new Date()    
      // console.log(newDate)
      // console.log(newDate.getMonth())
      // console.log(newDate.getDay())
      // console.log(newDate.getFullYear())
      



                                          ///   ARRAYS IN JAVASCRIPT   ///


  // const myArr = [0,1,2,3,4,5,6,7,8,9,true,"krish"]   
  // const myHeroes = ["hero no.1" , "poppy-and-Swallows"]
  // const myarr3 = new Array(1,2,3,4)
  // console.log(myArr[11])          
  
  

                                   ///    ARRAYS METHODS    ///


// myArr.push(6,)
// console.log(myArr)


// let foodItems = ["potato",'onion',"Grapes","orange","apple"]
// console.log(foodItems)
// let deletedItems = foodItems.pop();
// console.log(foodItems)
// console.log(deletedItems,"deleted")

// myArr.unshift(89)
// myArr.shift()
// console.log(myArr.slice())


// const newArr = myArr.join()
// console.log(myArr)
// console.log(typeof newArr)


// console.log("a", myArr)
// const myn1 = myArr.slice(1,3)
// console.log(myn1)
// console.log("B",myArr)


// const myn2 = myArr.splice(1,4)
// console.log(myn2)




  // let marvelHeroes = ["THOR","SpiderMan","Ironman","Antman",",DR.Strange"]
  // console.log(marvelHeroes)
  // console.log(marvelHeroes.slice(2,3))

                                   ///  Spread Operators    ///

// Holds the previosc vale and give a new ary 


  
                              ///  IN THE TIME OF DATA SCRAPPING  IN COMPANY   ///
                                             // FROM() should used  //


// console.log(Array.isArray("KRISHNA"))
// console.log(Array.from("KRISHNA"))
// console.log(Array.from({name:"Krishna"}))



// let sCoreOne = 100
// let sCoreTne = 100
// let sCoreIne = 100

// console.log(Array.of(sCoreIne,sCoreOne,sCoreTne))




                                     ///   Objects ///
  //  Objects Literals 
// const mySym = Symbol("key1")
//   const jsUser= {
//     name :"Krishna",
//     "full name":"KRIHNA PRATAP SINGH",
//    [mySym]:"mykey1",
//     age: 18,
//     location : "Bhopal",
//     email : "bcbee @mksml.com",
//     isLoggedIn:false,
//     lastLoginDate:["monday","tuesday"]
//   }

  // console.log(jsUser)
  // console.log(jsUser["email"])
  // console.log(jsUser["full name"])
  // console.log(jsUser["age"])
  // console.log(jsUser["location"])
  // console.log(jsUser["isLoggedIn"])
  // console.log(jsUser["lastLoginDate"])
  // console.log(typeof jsUser.mySym)
  // console.log(jsUser[mySym])
// jsUser.email = "Krishna Singh .com"
// // Object.freeze(jsUser)
// jsUser.email = "jdcdnckcjn.com"
// console.log(jsUser)
  
// jsUser.greeting = function(){
//   console.log("HEllo Js World")
// }

// jsUser.greetingtwo = function(){
//   console.log(`HEllo Js World, ${this.name},${this.location}`)
// }

// console.log(jsUser.greeting())
// console.log(jsUser.greetingtwo())




// //const tinderUser = new Object()   //  singleton obj
// const tinderUser = {}   // non-Singleton obj 
// tinderUser.Id = 786,
// tinderUser.name = "Suyash"

// tinderUser.isLoggedIn=false
// // console.log(tinderUser)

// const regularUser ={
//   email:"ebwjhjk@.com",
//   fullName :{
//       userName : {
//         firstName : "Krishna",
//         lastName : "Singh"
//       }
//   }
  
// }
             
// console.log(regularUser.fullName?.userName)
  






//                            ///  OBJECT MERGING   ///
                      

//   const obj1 = {1:"a", 2:"b"}
//   const obj2 = {3:"2", 4:"d"}


//   // const obj3={obj1,obj2}
//   const obj4 = Object.assign()
//   const obj3 = {...obj1,...obj2}
//   console.log(obj3)






                                             ///  JSON :- JavaScript Object Notation ///

//  const coarse = {
//   coursenmae: "Js in Hindi",
//   price: "1500",
//   courseInstructir: "Krishna Thakur"
//  }

// const {courseInstructir : Yash} = coarse
// //console.log(courseInstructir)
// console.log(Yash)


// const user = { 
//   'name': 'Alex',
//   'address': '15th Park Avenue',
//   'age': 43,
//   'department':{
//       'name': 'Sales',
//       'Shift': 'Morning',
//       'address': {
//           'city': 'Bangalore',
//           'street': '7th Residency Rd',
//           'zip': 560001
//       }
//   }
// }

// const { department } = user;  
// const { department: { address } } = user;
// console.log(department,address)




                                                                  ///    J-s-o-n     ///  
  

                                                          ///   FUNCTIONS   IN  JAVASCRIPT   ///

  
//   function myfunction (){
//     console.log("Krishna Singh")
//     console.log("Akansha Singh")
//   }

//  const tyu =  myfunction()
//  console.log (tyu)



//  function loginUsermsg (userName){
//   return ` ${userName} just Loged In`
//  }

//  console.log(loginUsermsg("KRISHNA"))
//  console.log(loginUsermsg(""))
//  console.log(loginUsermsg())


                                             ///    Normal introduction to functions    ///

// function myfunction (){
//   console.log("K")
//   console.log("r")
//   console.log("i")
//   console.log("s")
//   console.log("h")
//   console.log("n")
//   console.log("a")  
// }

// // myfunction()
// const tyuap = myfunction()
// console.log(tyuap)



// add programmming new logic nad methods and paranthesis of the programmming

// function addTwoNumber (number1 , number2){
//   console.log(number1+number2)
// }

// addTwoNumber(4,5)
// addTwoNumber(4,"5")
// addTwoNumber(4 , "a")
// addTwoNumber(5,null)
// const result = addTwoNumber(4,5)
// console.log("my-result :", result)



// function userLoginMesg (userName){
//   if(userName === undefined){
// console.log("PLEase enter  a User name")
// return
//   }
//   return `${userName}  just loged in`
// }
// console.log(userLoginMesg("Krishna"))

// console.log(userLoginMesg(""))

// console.log(userLoginMesg())



                                             ///  Episode-20  Functions and Parameters   ///
          

//  function calculateCartPrice(val1,val2,...num1){
//   return num1
//  }
// console.log(calculateCartPrice(0,200,500,23,25,4,5,46,56,455,64,54,6,56,6))
// console.log(calculateCartPrice(5262,68405,640,3151,3545,35))


// const user = {
//   usernmae : "Krishna",
//   prce : 200
// }
// function handleOnject(anyObject){
// console.log(`username is ${anyObject.usernmae} add priice is ${anyObject.prce}`);
// }

// handleOnject({
//   usernmae : "sam",
//   prce : 399
// })



// const myNewArray = [200,300,400,500]

// function returnSecomdValue(getArray){
//    return getArray[1]
// }

// console.log(returnSecomdValue(myNewArray))
// console.log(returnSecomdValue([100 ,200,400,500]))




                                            /// Lecture -21 - Local Scope And Block Svcope in JS  ///



// let a = 300;

//   if(true){
//    let a = 10 
//     const b = 20
//      console.log("Inner" , a)
//   }
//  //  console.log(a);
//  //  console.log(b);
//    console.log(a)



//    for (let i = 0;  i < Array.length, i++){
    
//   const element = Array[i];
//    }


                                            ///   LEcture 22 Scope level and mini hpoisting PRojects   /// 

  // function one(){
  //   const userNmae = "KRishna"


  //   function two(){
  //     const website = "youtube"
  //     console.log(userNmae)
  //   }
  //  // console.log(website)

  //   two()
  // }

  // one()




//   // if(true){
//   //   const userNmae = "KRishna"
//   //    if(userNmae === "KRISHNA"){
//   //     const website = "youtube"
//   //           console.log(userNmae + website)
//      }
//    //  console.log(website)
//   }

//  // console.log(userNmae)



 //// ++++++++++++++++++++++++++++++++++++++++++++++ INTRESTING +++++++++++++++++++++++++++++++++++++++++++++++++++///

// console.log( addOne(5))
//  function addOne (num){
// return num + 1
//  }

// //  addOne(5)

// // cannot ACCSS DECLARATION BEFORE INITIALIZATION 
// // console.log(addTwo(5))
// const addTwo = function(num)
// {
//   return num + 2
// }

// addTwo(5)


             /// ++++++++++++++++++++++++++++++++++++++++++++  THIS AND ARROW FUNCTIONS IN JAVASCRIPT   ++++++++++++++++++++++++++++++++++++++++ ///

// const usr = {
//   userName : "kridhna",
//   age : 21,

//   welcomeMessage: function(){
//     console.log(`${this.userName},Welcome To Website`)
//    // console.log(this)
//    }
// }

 
// // usr.welcomeMessage()
// // usr.userName="AKANSHA"
// // usr.welcomeMessage()

// console.log(this)



// function onen (){
//   let userNmae = "HITESH"
//     console.log(this)

// }

// onen()


  //========================================================//   AROW FUNCTIONS   // ==============================================================//=


//   const  onen =  ()=>{
//   let userNmae = "HITESH"
//     console.log(this)

// }

// onen()




// const addTHree = (num1,num2,num3) => {
//   return num1 + num2 + num3
// }
// console.log(addTHree(1, 2, 3))


// const addTHre = (num1,num2,num3) => (num1 + num2 + num3)
// console.log(addTHre(num1,num2,num3))


// const addTwo = (num1,num2) => ({userNamme : "KRishna"})
// console.log(addTwo())



// +++++++++++++++++++++++++++++++++++++++ Imediately Invoked Function Expressions  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //

// The Function in paranthesis (function () {....}, followed by () to immediately invoked it).


// (function addTwo(num1 , num2){
// return num1 + num2
// })(console.log(3 + 5))



//// +++++++++++++++++++++++++++++++++++++++++++++ JAVASCRIPT EXECUTION  CONTEST  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ ////






// var n = 5;

// function square(n) {
//   var ans = n * n;
//   return ans;
// }

// var square1 = square(n);
// var square2 = square(8);  

// console.log(square1)
// console.log(square2)

 
// let val1 = 10;
// let val2 = 25;
// function addNum (num1,num2) {
//   let total = num1+num2
//   return total
// }
// let result1 = addNum(val1,val2)
// let result2 = addNum(10,2)


//      +++++++++++++++++++++++++++++++++++++   LOOP IN JS +++++++++++++++++++++++++++++++++++++++++++++++++     //
 
// for(let i = 1; i<=9;i++){
//   console.log("Apna College")
// }




// let sum = 0
// for (let i = 0;i<=5;i++){
// console.log(sum+1)
// }



// for (let index = 0; index < 10; index++) {
//   const element =index;
//   console.log(element)
  
// }


// for (let i= 1; i <= 10; i++) {
// console.log(`outer loop value :${i}`)
//  for (let j = 1; j <=10; j++) {
//   // console.log(`inner loop value : $(j) and inner loop ${i}`)
//   console.log(i + '*' + j + '=' + i*j)
  
//  } 
// }




// let myArray  =["Superman","SpiderMan","Antman","Hulk"]
// console.log(myArray.length)

// for (let index = 0; index < myArray.length; index++) {
//   const element = myArray[index];
//   console.log(element)
// }




//     Break And Continue  // 

// for (let i = 0; i <= 20; i++) {
// console.log(i)  
// }


//  While and Do while looop //


// let i = 0
// while (i <= 10) {
//   console.log(`value of index is ${i}`)
//   i = i + 2
// }


// let gameNumber = 25
// //  let userNum =
//   prompt ("Guess the Game NUmber : ")
//  while (userNum !== gameNumber) {
//   prompt ("You entered a wrong Number :")
//  }
//  console.log("congratulations, you entered the right Number")



// let myArray  =["Superman","SpiderMan","Antman","Hulk"]
// let arr = 0
// while (arr < myArray.length) {
//   console.log(`value is ${myArray[arr]}`)
//   arr = arr + 1
// }


// let i = 1
// do {
//   console.log("Krishna Singh")
//   i++
// } while (i <= 10);

// let score = 12
// do {
//   console.log(`score is ${score}`)
//   score++
// } while (score <= 10);




//     looping in ARRAY     ///






/// +++++++++++++++++++++++++++++++++++++   Higher Order Array Loops +++++++++++++++++++++++++++++++++++++++++++++++++++++ ///


//   # For OF Loop 

// 


// const arr = [1,2,3,4,5]


// for (const num  of arr) {
//   //console.log(num)
// }


// const greetings  = "HEllo World"

// for (const greet of greetings) {
//  console.log(`Each char is ${greetings}`)
// }
// //  maps 
// const Map = new Map()
// Map.set('bhopal' , "India")
// Map.set('USA' , "United State Of India")
// Map.set('fn', "France")
// console.log(Map)



// const myObject = {
// js : "javaScript",
// cpp : "c++",
// rb :" Ruby",
// Swift : "Swift by aplle"
// }

// for (const key in myObject) {
//   // console.log(key)
//   // console.log(myObject[key])
//   console.log(`${key} shrcut is for ${myObject[key]}`)
 
//   }


  //  For in loops in array    ///




  // const programming =["js","ruby","Html" , "Java" ,"Cpp"]
  // for (const key in programming) {
  //   console.log(programming[key])
  // }
  

  /// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  FOR EACH LOOP   ++++++++++++++++++++++++++++++++++++++++++++++++///


//   let nums = [1,2,3,4,5,6]

// nums.forEach((nums) => {
//   console.log(nums*nums,nums + nums)
// });



// let arr = ["MARVEL _ DC", "SUPERMAN", "HYDROMAN" ,"BLASTOISE"]

// arr.forEach((arr) => {
//   console.log(arr.length)
// });


// const programming =["js","ruby","Html" , "Java" ,"Cpp"]
// const values = programming.forEach((items)=>{
// console.log(items)
// return items
// })
// console.log(values)

// let arr = ["Marvel", "SuperMAn" , "HYDROMAN" , "BLASTOISE"]
// arr.forEach(()=>{
//   console.log(arr.length)
// });



// const programming = ["js" , "ruby", "HTML", "JAVA", "CPP"]
// const values = programming.forEach((items)=>{
//   console.log(items)
//   return items
// })
// console.log(values)



///                                                FILTER_FUNCTION                                                                     ///

// Creates a new array of aray of elements that gives a true condition only .

// const myNums = [1,2,3,4,5,6,7,8,9,102]
// const newNums = myNums.filter((num)=>num > 4)
// console.log(newNums)



///                                                MAP-FUNCTION                                                                       ///

//  const myNumbers = [1,2,3,4,5,6,7,8,9,10]    // without return keyword

//  const newNUms = myNumbers.map( (num) => num + 10)
//  console.log(newNUms)


/// gives all undefined 

//  const myNumbers = [1,2,3,4,5,6,7,8,9,10]

//  const newNUms = myNumbers.map( (num) => {  num + 10})
//  console.log(newNUms)


// return keyword is important

//  const myNumbers = [1,2,3,4,5,6,7,8,9,10]

//  const newNUms = myNumbers.map( (num) => {return  num + 10})
//  console.log(newNUms)


///         Chaining     ///

// const myNumbers = [1,2,3,4,5,6,7,8,9,10]
// const mtNumbers = myNumbers
//                           .map((num)=>num * 10)
//                           .map((num) => num + 1)
//                           .filter((num)=> num >= 40)
// console.log(mtNumbers)



////                                                        REDUCE_METHOD                                                                     ////

// let arr  = [1,2,3,4,5,6]
// const aar1 = arr.reduce((res,current)=>{
//   return res + current
// },3)
// console.log(aar1)



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++ DOM INTRODUCTION IN JAVASCRIPT +++++++++++++++++++++++++++++++++++++++++++++++++++++++//
// The Window object represents an open window in a browser . It is Browser,s Object (not javaScripts's) and is automatically created by the Browser


          // ARNAV | AARAV | RIYA | KRISHNA | PRAKITA |SONU | DHARMENDRA | SHAILENDRA | PHOOLAN | ALTAP | SAGAR | SANJAY | RISANG // 







  


 