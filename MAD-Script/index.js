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


