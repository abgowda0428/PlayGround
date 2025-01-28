// Argumnet Keyword

function sum(){
    console.log(arguments);
    return; 
}

sum(1,2,3,4,5);

obj1 = {
    name1:"abhi",
    age:23
}

// obj2 = Object.create(obj1);
// console.log(obj2);

// obj2.__proto__.name = "Polar";
// console.log(obj1)

obj2 = structuredClone(obj1);
console.log(obj2);

for (const key in obj1) {
   console.log(key,obj1[key])
}

// console.log(Object.getOwnPropertyDescriptor(obj1,"name1"));
// Object.defineProperty(obj1,"name1"){
//     value:"polar";
//     writable:false;
//     configurable:false;
//     enumerable:false;
// }

function show(){
    console.log(this);
};

show()