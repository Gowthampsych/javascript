
// condition:

// if
/*
if (confirm("Are you John Smith?"))
{
    console.log("Hello John, how are you?");
} else {
    console.log("Then what is your name?");
}

// if condition with === 

number = 123;
function my(number)
{
    if (number==="123")  // ===
    {
        console.log("number is 123")
    }
    else
    {
        console.log("number is not 123")
    }
}

my(23);
my(234);
my(123);


// if condition with ==
number = 123;
function my(number)
{
    if (number==123)  // ==
    {
        console.log("number is 123")
    }
    else
    {
        console.log("number is not 123")
    }
}

my(23);
my(234);
my(123);


// inequality operator:
var i = 23
var j = 234
 if (i<j)
 {
    console.log("i is lesser than j")
 }
 else
 {
    console.log("i is greater than j")
 }

 // AND and OR operator
var i = 23;
var j = 234;
var f = 123;
 if (i<j && j<f)
 {
    console.log("i is lesser than j AND j is greater than f");
 }
 else if(i<j || j<f)
 {
    console.log("i is lesser than j OR j is lesser than f");
 }

 // NOT operator:
var gt = true;
if (!gt)
{
    console.log("not gt is false");
}
else
{
    console.log("if condition fails");
}

// SWITCH 
var time = 4;
switch(time)
{
    case 1 :
    case 2 :
        console.log("time is either 1 or 2");
        break;
    case 3:
        console.log("time is 3");
        break;
    case 4:
        console.log("time is 4 without break statement");
    case 5:
        console.log("time is 5");
        break;
    default:
        console.log("time is not 1,2,3,4,5");
        break;
}

//Exercise:
function checkNumber(myNumber)
{
    // TODO: write your code here
    if (myNumber === 42)
    {
        console.log("correct");
    }
    else
    {
        console.log("incorrect");
    }
}

checkNumber(3);
checkNumber(7);
checkNumber(42);


//LOOP:
// for statement:
 var i = 0;
 for(i=0;i<5;i++)
 {
    console.log(i)
 }

 
 var h = [1,2,3,4,5,6];
 for (i=0;i<h.length;i++)
 {
    console.log(i + " " + h[i]);
 }

// while loop

var f = 100;
while(f>0)
{
console.log(f);
f = f-1;
}

var i = 99;
while (true)
{
    console.log(i);
    i -= 1;

    if (i == 0)
    {
        break;
    }
}

var i;
for (i = 0; i<10; i++)
{
    if(i%2 == 0)
    {
        continue;
    }
    console.log(i)
}

*/

var emptyObject = {};
var personObject = {
    firstName : "John",
    lastName : "Smith"
}
personObject.age = 23;
personObject["salary"] = 14000;

console.log(personObject);

var hi = {
jij : "gfdbg"
}
console.log(hi);
hi.kli = "fdsgf";
console.log(hi);
hi["ddas"] = "fsdfg";
console.log(hi);


