// Increcment and Decrement in One Function

function Count(){
    let countnum = 0;
    this.increment = function(){
        countnum++
        console.log(countnum)
    };
    this.decrement = function(){
        countnum--
        console.log(countnum)
    };

};

let CountNumber = new Count();

// Increment

CountNumber.increment();
CountNumber.increment();
CountNumber.increment();
CountNumber.increment();

// Decrement

CountNumber.decrement();
CountNumber.decrement();