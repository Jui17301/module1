{
  //
// Basic Data type


// Primitive DataType:

// string
let firstName:string ="Jui"
// number
let roll:number=123;
// boolean
let isAdmin = true;
// undefined
let x: undefined =undefined;
// null
let y:null =null;
// Any  
let d;
d='Jui'
d=123;
d=null;
d=undefined;
//Any type using type
let a:number
a=345;


// Non-Primitive dataType or Reference Type:

//Array
let friends:string[] = ['rachel','monica'];
let rollList :number[] = [1,2]

// Tuple -> special type of Array -> order -> type of value

let profileCoordinate :[string,number,boolean] =['Jui',1234,true];

let numbers :[number,number];
numbers =[1,2];

// Object
 const user:{
  firstName : string;
  middleName?: string;//optional type
  lastName : string;
  isMarried :boolean;
 readonly company : string;//literal Type 
 } ={
  firstName :'Sumaiya',
  lastName: 'Jui',
  company:"Programming Hero",
  isMarried: true,

 }


// Function :(Build in Block),
function add(num1:number,num2:number=0):number{
  return num1+num2;
}
const addArrow =(num1:number,num2:number=0):number => num1+num2;
add(2,4)


//obj-> function ->called method

const poorUser ={
  name:'Jui',
  balance :0,
  addBalance(balance :number):string{
    return `My New Balance is :${this.balance+ balance}`
  }
};


//Map

const arr:number[]=[1,2,3]
const newArray :number[] = arr.map((element:number):number => element*element);


//Spread operator
const bros1 :string[]=['x','y'];
const bros2 :string[]=['a','b'];
bros1.push(...bros2);

const mentor1={
  typescript:'Mezba',
  redux:'Mir',
}
const mentor2={
  prisma:'Firoz'
}
const mentorList ={
  ...mentor1,
  ...mentor2
}



// Rest Operator:
const greetFriends =(...friends:string[])=>{
  friends.forEach((friend:string)=> console.log(`Hi ${friend}`))
};
greetFriends('x','y','z');


//
}