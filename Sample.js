 console.log (11223);
 let marks =100;

if(marks >=90){
     console.log("A GRADE");
    
 }
 let sarees = 4

 if (sarees<=800){
     console.log("A GRADE");
    
 }
 if(marks >=14){
     console.log("fail");
    
 }
 function box(){
     console.log("magical box");

 }
 box()
 function box(x){
 console.log(x);
 return x;

 }
console.log(box(10));
 var fn = function(){
     console.log("hello in function");
    
 }
 fn()

 console.log(box(10));
 var fn = function(x){
     console.log(x);
    
 }
 fn("arun")
 
   var life = (function box (x){
     console.log(x);
    
 })(100)  

 var arr = (x )=>{console.log(x)}
 arr("month")
 
 let age =[ 55,76,85,75,84]


  let numbers=[1,2,3]
  numbers.push(4,5,6,7,8);
  console.log("using  :" + numbers);

 let fruits = ["apple" ,"grape" ,"mango" ,"lemon" ,"watermelon" , "apple",]

 console.log("indexof:"+fruits.indexOf("watermelon"));
 console.log("lastindexof:"+fruits.lastIndexOf("apple"));

 let vegetable = ["apple" ,"grape" ,"mango" ,"lemon" ,"watermelon"]
 let veg = vegetable.slice(2,4);
 console.log(veg);

 let price = [78,5,7,56,87,34,76,65]
price.splice(3,4,999);
console.log(price);


let people =["abishake","ano","bala","arun","akila"];
people.splice(3,0,"baljai");
console.log(people);


let names =["abishake","ano","bala","arun","akila"];
people.slice(1,2)
console.log(people);

let str = "arunachaam arun";
console.log(str.length);
console.log(str.toLocaleUpperCase());
console.log(str.toLocaleLowerCase());
console.log(str.charAt(5));
console.log(str.indexOf("h"));
console.log(str.lastIndexOf("a"));

let text = "make my trip";
console.log(text.slice(2,9));
console.log(text.slice(9));
console.log(text.slice(0,-6));
console.log(text.trim(6));
console.log(text.startsWith("m"));
console.log(text.endsWith("p"));
console.log(text.includes("y"));
console.log(text.concat(0,77));
console.log(text.repeat(9));
console.log(text.match("my"));
console.log(text.search("my"));


//MAP
//var_name.map((value.,indox,acctuallary)=>*)

var num=[1,2,3,4,5,6,7,8,9,10]
var op=num.map((val,idx,accarr)=> val+2)
console.log(op)

//var_name.reduce((accumalator,value,index,accarr)+>)

// lenth   - starts with 1
var red= num.reduce((acc,val,idr,accar)=> acc+ val,9)
console.log(red);

var red= num.reduce((acc,val,idr,accar)=> accar+ val)
console.log(red);

//fliter

const fil =num.filter(( val,idx,accar)=>val%2 !==0)
console.log(fil);

//object

// collection of key and vavlue pairs;
// json - javascript object notation 

var obj ={
    name : "arun",
    age : 24,
    dep : "csc"

}
 update
 obj.name = "sakthi"
 obj.std = 11
 obj.age = 18                                   
 console.log(obj.std);
 console.log(obj.age);
 console.log(obj);


var key = Object.keys(obj)
console.log(key);

var value = Object.values(obj)
console.log(value);

 // nested array and oject

 let stdobj =[
    {NAME :"aruna",
        age :26
    },
    {name:"balaja",
        age :23

  },
     {name :"arunacalam",
         age :24
     },
     {name:"kumarn",
         age: 47

     }
    


 ]
 console.log(stdobj);
 console.log(stdobj[2(name,age)]);

  objectvdestructuring

 var obj ={
     name : "kathir",
     city: "cdm",
    phn_no: 123447
}
const {name,city,phn_no}=obj
console.log(name,city,phn_no);


 constructor
 
 // this

 var obj ={
naame:"balu",
age :24,
details: function(){
console.log(this.age);

}
}

 console.log(obj);
 obj.detrils()

// templateliterals or string literals;

var a ="akila"
var b ="how are you"
 console.log("hi"+a+b+"!");
 console.log(`hi ${a}${b} !`);
 
 // constructor

 function Bike(name,model,year){
this.bikename = name
this.bikemodel=model
this.bikeyear =year

 }
const details = new Bike ("duke",390,2018)
console.log(details);

const details1 = new Bike ("royal",500,2021)
console.log(details1);

const details2 = new Bike ("honda",450.2109)
console.log(details2);

//office - idcard -id.no ,emplyeename,bloodgroup ,dod ,code,idcards

function office(idNo,employeeName,bloodgroup,DOB,code){
    this.idcard_no=idNo
    this.idName=employeeName
    this.idGroup=bloodgroup
    this.idDOB=DOB
    this.idcode=code

}
const empDetails=new office (12458,"balji","O+","14-08-2000",162023)
console.log(empDetails);

const empDetails1=new office (23557,"jahan","A-","12-07-2002",948616)
console.log(empDetails1);

const empDetails2=new office(45678,"aswin","O-","09-03-2016",887069)
console.log(empDetails2);

const empDetails3=new office (23355,"abishake","B-","05-03-2002",948616)
console.log(empDetails1);










 


























