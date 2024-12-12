1.//Write a function that takes two numbers (a and b) as argument. Sum a and b. Return the result
function myFunction(a,b){

return a+b;

}
//Test Cases:
Attempted: 289071
Solved: 163315
myFunction(1,2)
Expected
3
myFunction(1,10)
Expected
11
myFunction(99,1)
Expected
100
//2.Write a function that takes two values, say a and b, as arguments. Return true if the two values are equal and of the same type
function myFunction(a, b) {
    return a === b;
  }
//Test Cases:
Attempted: 387497
Solved: 136065
myFunction(2, 3)
Expected
false 
myFunction(3, 3)
Expected
true 
myFunction(1, '1')
Expected
false 
myFunction('10', '10')
Expected
true 
//3.Write a function that takes a value as argument. Return the type of the value.
function myFunction(a){
return typeof a ;
}
//Test Cases:
Attempted: 276714
Solved: 125725
myFunction(1)
Expected
'number'
myFunction(false)
Expected
'boolean'
myFunction({})
Expected
'object'
myFunction(null)
Expected
'object'
myFunction('string')
Expected
'string'
myFunction(['array'])
Expected
'object'
//4.Write a function that takes a string (a) as argument. Remove the first 3 characters of a. Return the result
function myFunction(a){
return a.slice(3);
}
Test Cases:
Attempted: 265608
Solved: 83307
myFunction('abcdefg')
Expected
'defg'
myFunction('1234')
Expected
'4'
myFunction('fgedcba')
Expected
'dcba'

