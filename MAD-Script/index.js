let a = "abhi";
console.log(typeof a);

let b = null;
console.log(typeof b);

let c = 999999999999999999999999999n;

console.log(c)

let arr = [1,"a",3,true];
let obj = {
    name:"anhi",
    age:23,
    plcae:true,
    arr2:[1,3,4,5,],
    Medi:(value)=>{
        console.log(value);
    }
}

function greet(name1){
    console.log(`Hello Good Morning ${this.name1}`)
}

greet("abhi");


let str = "100";

let num = Number(str);
console.log(typeof num);

let pre = 12;
let incr_pre = "12";

let equal = pre === incr_pre;
console.log(equal);

const obj_3 = {
    NAME:"ABHI"
}

const obj_4 = obj_3;
console.log(obj_4)

let str3 = `hello\$`

console.log(str3.length)
console.log(str3.toUpperCase());

let lon_str = "hello Coder Army";
console.log(lon_str.replace("Coder","Money"))

let split_string = "hello ! Tgaruuu ! Boss";
console.log(split_string.split("!"));

let newstr = new String("Hello tagruu Singh");
console.log(newstr);

let numbr = 1234;

let ran = Math.floor(Math.random()*((40-30+1)*30));
console.log(ran);

let x = 5;
let y = x++;
console.log(x);
console.log(y);

const arre = [1,2,3,4,5,6,"abhi",true]

console.log(arre.at(6));

let arr4 = structuredClone(arre);
console.log(arr4);

console.log(arr4.unshift("hello Tagruu"))
console.log(arr4.shift());
delete arr4[4];
console.log(arr4.splice(2,5));
console.log(arr4.toString());

let joi = [1,2,3,4,5,6,7,8,9,10];
console.log(joi.join(""))

let arr6 = joi.concat(arr4)
console.log(arr6)
console.log(arr6[1][2])

let date = new Date()
console.log(date)

let newobj = {
    name:"abhi",
    age:23,
    plcae:"Malir",
}

console.log(obj["name"]);

let neobj = new Object();

neobj.name = "bjhl",
neobj.age = 23,

console.log(neobj)
console.log(Object.entries(neobj))

let desobj = {
    name:"abhi",
    age:23,
    place:"Malur",
    meet:(value)=>{
        console.log(value);
    },
    nesobj:{
        pincode:67878,
        staete:"kar"
    }
}

let {name,age,...desobj3} = desobj;
let {nesobj:{pincode,staete}} = desobj;
console.log(desobj3)
console.log(pincode,staete)

desobj.meet("hello");

if(age>= 18){
    console.log("hello")
}else{
    console.log("hi")
}

let a2 = 10;

if(a2>=10){
    console.log("hello")
}
else if(a2 == 10){
    console.log("damara")
}else{
    console.log('ello bande')
}

let value = "Kannada"

switch (value) {
    case 0:
        console.log("Kannad")
        break;
    case 1:
        console.log("English")
        break;
    case 2:
        console.log("tealuge")
        break;    
    default:
        console.log("None")
        break;
}

for(let i = 0;i<=10;i++){
    console.log("hello Polar")
}


for(let i = 0;i<=10;i=i+1){
    for(let i = 0;i<=10;i++){
        console.log("hello Polar")
    }
}

let i = 1;

// while(i<=1000000000n){
//     console.log("Hello Tagruu");
//     i = 10000000000n
// }

let a6 = 10;
do {
    console.log("This is Do while")
} while (a6=10);

let a7 = 10;
do {
    console.log("This is Do while")
} while (a6=10);