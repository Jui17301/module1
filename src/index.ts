{
  //
// Basic Data type


// Primitive DataType:

// string
let firstName:string ="Jui"
// number
let roll:number=123;
// boolean
let isAdminn = true;
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


// obj Destructuring
const userAddress ={
  id:1,
  name:{
    fName :'Sumaiya',
  lastName: 'Jui',
  },
  contactNo:'1223',
}
const {contactNo,
  name:{fName,lastName:lName}, //name alias
}=userAddress;


// array Destructuring
const myFriends =['x','y','z','a','b','c'];

const [, ,bestFriend,...rest]=myFriends;

//alias Type
type Student={
  name:string;
  age:number;
  contact?:number;
}
const student1:Student={
  name:'Jui',
  age:16,
  contact :908765,
}
const student2:Student={
  name:'Juiiiii',
  age:19,
}
type UserName =string;
type IsAdmin =boolean;
const userName :UserName ='Jui';
const isAdmin:IsAdmin =true;

type Sub =(a:number,b:number)=>number
const sub:Sub=(a,b)=> a+b;

// Union :(|) like OR
type FrontendDeveloper = 'fakibazDeveloper' | 'juniorDeveloper'  //name alias and string literal type
 type FullstackDeveloper = 'frontendDeveloper' | 'expertDeveloper'
 type Developer = FrontendDeveloper | FullstackDeveloper
const newDeveloper : FrontendDeveloper = 'juniorDeveloper'  //type alias 

 type User ={
    name: string;
    email?: string;
    gender:"male"| "female";
    bloodGroup:"O+"|"A+"|"AB+"
  }
  const user1: User ={
    name:'jui',
    gender:'female',
    bloodGroup:'O+'
  }

  // Intersection Type:(&) like AND  -> join -> common property
  type FrontDeveloper = {
    skills: string[];
    designation1: "Frontend Developer"; //string literal
  };

  type BackDeveloper = {
    skills: string[];
    designation2: "Backend Developer";
  };

  type FullDeveloper = FrontDeveloper & BackDeveloper;

  const fullDeveloper: FullDeveloper = {
    skills: ["HTML", "CSS", "EXPRESS"],
    designation1: "Frontend Developer",
    designation2: "Backend Developer",
  };



// Ternary Operator:(?)

const age: number = 18;
const isAdult = age >= 18 ? "adult" : "not adult";
console.log({ isAdult });

//nullish coalescing operator:(??)
  // null / undefined ---> decision making

  const isAuthenticated = "";

  const result1 = isAuthenticated ?? "Guest";
  const result2 = isAuthenticated ? isAuthenticated : "Guest";
  console.log({ result1 }, { result2 });

  // optional chaining :(?.)
  type UserAdd = {
    name: string;
    location: {
      city: string;
      road: string;
      permanentAddress?: string;
    };
  };

  const userAdd: UserAdd = {
    name: "xyz",
    location: {
      city: "ctg",
      road: "Awesome Road",

    },
  };

  const permanentAddress =
    userAdd?.location?.permanentAddress ?? "No Permanent Address";
  console.log({ permanentAddress });



  // nullable types
  const searchName = (value: string | null) => {
    if (value) {
      console.log("Searching");
    } else {
      console.log("There is nothing to search");
    }
  };
  searchName(null);

   // unknown  typeof

   const getSpeedInMeterPerSecond = (value: unknown) => {
    if (typeof value === "number") {
      const convertedSpeed = (value * 1000) / 3600;
      console.log(`The speed is ${convertedSpeed} ms^-1`);
    } else if (typeof value === "string") {
      const [result, unit] = value.split(" ");
      const convertedSpeed = (parseFloat(result) * 1000) / 3600;
      console.log(`The speed is ${convertedSpeed} ms^-1`);
    } else {
      console.log("wrong input");
    }
  };
  getSpeedInMeterPerSecond(null);

  //never type
  const throwError = (msg: string): never => {
    throw new Error(msg);
  };

  throwError("mushkil se error hogaya");

  //

  //
}











