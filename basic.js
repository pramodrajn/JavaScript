// console.log("Hello World");

// declaration and Intialization
// var a=5;
// var b=10;
// var c="I am a ";

// a=a+1;
// b=b+5;
// c=c+"string";

// console.log(a);
// console.log(b);
// console.log(c);

// var num=87;
// num+=13;
// console.log(num);

// var str="FistLine\n\t\\SecondLine\nThirdLine";
// console.log(str);

// var fn="Pramod"
// var ln=" raj"
// var str="my name is "+fn+ln;
// console.log(str[3])

// function wordBlank(myNoun,myAdjective,myVerb,myAdverb){
//     var result=myNoun+" "+myAdjective+" " +myVerb+ " "+ myAdverb;

//     return result;
// }

// console.log(wordBlank("dog ","dog ","dog "," dog"))

// Array

// var array=["Raj",55]
// array[0]="Pramod"
// console.log(array[0])

// var myArray=[[4,5,7],[3,2,1],[7,6,8],[[5,2,1],15,12]];
// console.log(myArray[2][2])

// var myArray=[2,5,4,3];
// myArray.push(10,20);
// myArray.pop();
// myArray.shift();
// myArray.unshift(300)
// console.log(myArray)

// var global=10;
// function call(){
//    var oopsGlobal=5;

// }

// function fun(){
//     var output=0;
//     if(global!=undefined){
//         output+=global;
//     }
//     if(oopsGlobal!=undefined){
//         output+=oopsGlobal;
//     }
//     console.log(output);
// }

// fun();

// function localScope(){
//     var value=325;
//     console.log(value);
// }

// localScope();
// console.log(value);

// var outFit="T-Shirt";

// function myOutFit(){
//     outFit="Shirt";
//     return outFit;
// }

// console.log(outFit)

// function minusSeven(num){
//     return num-7;
// }
// console.log(minusSeven(10))

// function nextLine(arr ,val){
//     arr.push(val);
//     return arr.shift();
// }

// var arr=[2,4,5,8];

// console.log("Before: "+JSON.stringify(arr));
// console.log(nextLine(arr,11));
// console.log("After: "+JSON.stringify(arr));

// var names=["Hole-in-one!","Eagle","Bridie","par","Bogey","Double Bogey","Go home"];
// function golfScore(Par,Strokes){
//     if(Strokes==1){
//         return names[0];
//     }
//     else if(Strokes<= Par-2){
//         return names[1];
//     }
//     else if(Strokes == Par-1){
//         return names[2];
//     }
//     else if(Strokes== Par){
//         return names[3];
//     }
//     else if(Strokes== Par+1){
//         return names[4];
//     }
//     else if(Strokes== Par+2){
//         return names[5];
//     }
//     else{
//         return names[6];
//     }
// }
// console.log(golfScore(5,4))

// function isLess(a,b){
//     return a<b;
// }
// console.log(isLess(10,15))

// var testObj={"sh irt":"POlo","t Shirt":"arrow","Sweat Shirt":"Leo"};
// console.log(testObj)

// var dogDetails={"name":"camper","legs":4,"tails":1};
// dogDetails.name="happy Camper"
// dogDetails.legs=6
// dogDetails.bark="bow-bow"
// delete dogDetails.legs
// console.log(dogDetails)

// var myArray=[];
// for(var i=0;i<=5;i++){
//     myArray.push(i);
// }
// console.log(myArray)

// function randomnum(){
//     return  Math.floor(Math.random()*7);
// }
// console.log(randomnum())

// function convertToInteger(str){
//     return parseInt(str,2);

// }

// console.log(convertToInteger("10011"))

// const s=[5,4,3];
// s[1]=7;
// console.log(s);

// function date(){
//     return "Returning Date";
// }

// const value=()=> "answer";
// console.log(value());

// const myConcat=(arr1,arr2)=>arr1.concat(arr2);

// console.log(myConcat([1,2],[3,4,5]))

// const increment=(function(){
//     return function increment(num,val=1){
//         return num+val;
//     }
// })();

// console.log(increment(5,2))

// const sum=(function(){
//     return function sum(...args){
//         return args.reduce((a,b)=>a+b,"Name: ");
//     };
// })();
// console.log(sum("pramod"," raj"," N"));

// const arr1=['JAN','FEB','MAR','APRIL'];
// let arr2;
// (function(){
//     arr2=[...arr1];
//     arr1[0]='Changed'
// })();
// console.log(arr2)

// var voxel={x:3.5,y:6,z:8};

// const{x:a,y:b,z:c}=voxel;
// console.log(a);
// console.log(b);
// console.log(c);

// AVG_TEMP={
//     todayTemp:28,
//     tomTemp:26
// }

// function getTomTemp(){
//     const{tomTemp:tempOfTom}=AVG_TEMP;
//     return tempOfTom;
// }

// console.log(getTomTemp())

// const Local_FOECAST={today:{min:52,max:58},tommorrow:{min:62,max:69}};

// function getMAxOfTmrw(forecast){
//     const{tommorrow:{max:maxOfTmrw}}=forecast
//     return maxOfTmrw;
// }
// console.log(getMAxOfTmrw(Local_FOECAST))

// const[x,,y]=[5,2,8,9];
// console.log(x);
// console.log(y);

// let a=8;
// let b=6;
// (()=>{
// [a,b]=[b,a]})()
// console.log(a);

// const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function removeFirstTwoElements(list) {
//     const [, , ...arr] = list;
//     return arr;
// }
// console.log(removeFirstTwoElements(list))

// const stats={
//     max:56,
//     standard_deviation:4.34,
//     median:35.4,
//     mode:23.87,
//     min:-0.75,
//     avg:35.65

// };

// const half=(function(){
//     return function half({min,max}){
//         return (max+min);
//     }
// })();

// console.log(half(stats))

// const person = { name:"Pramod", age: 23 }
// const greetings = `hello my name is ${person.name}! I am ${person.age} years old`
// console.log(greetings)

// const bicycle={
//     gear:2,
//     setGear(newgear){
//         this.gear=newgear;
//     }
// };
// bicycle.setGear(4);
// console.log(bicycle.gear)

// class spacehShutter{
//     constructor(targerplant){
//         this.targerplant=targerplant;
//     }
// }
// var z=new spacehShutter('jupiter');
// console.log(z.targerplant)

function makeClass(){
    class Thermostat{
        constructor(temp){
            this._temp=temp;
        }
        get temperature(){
            return this._temp;
        }
        set temperature(updateTemp){
            this._temp=updateTemp;
        }
    }
    return Thermostat;
}

const Thermostat=makeClass();
const thermos=new Thermostat(35);
let temp=thermos.temperature;
console.log(temp);
thermos.temperature=50;
let val=thermos.temperature;
console.log(val)




