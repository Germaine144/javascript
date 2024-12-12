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
/*Test Cases:
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
true */
//3.Write a function that takes a value as argument. Return the type of the value.
function myFunction(a){
return typeof a ;
}
/*Test Cases:
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
'object'*/
//4.Write a function that takes a string (a) as argument. Remove the first 3 characters of a. Return the result
function myFunction(a){
return a.slice(3);
}
/*Test Cases:
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
'dcba'*/
//5Write a function that takes a string (a) and a number (n) as argument. Return the nth character of 'a'.
function myFunction(a, n){
return 
}
/*Test Cases:
Attempted: 608244
Solved: 98897
myFunction('abcd',1)
Expected
'a'
myFunction('zyxbwpl',5)
Expected
'w'
myFunction('gfedcba',3)
Expected
'e'*/
//6.Write a function that takes a string as argument. Extract the last 3 characters from the string. Return the result
function myFunction(str){
return str.slice(-3);
}
/*Test Cases:
Attempted: 260427
Solved: 90416
myFunction('abcdefg')
Expected
'efg'
myFunction('1234')
Expected
'234'
myFunction('fgedcba')
Expected
'cba'

show hint*/
//7Write a function that takes a string (a) as argument. Get the first 3 characters of a. Return the result
function myFunction(a){
return a.slice(0, 3);
}
/*Test Cases:
Attempted: 197238
Solved: 78101
myFunction('abcdefg')
Expected
'abc'
myFunction('1234')
Expected
'123'
myFunction('fgedcba')
Expected
'fge'

show hint*/
//8.Write a function that takes a string as argument. The string contains the substring 'is'. Return the index of 'is'.
function myFunction(a){
return a.inedxOf('is');
}
/*Test Cases:
Attempted: 110805
Solved: 49738
myFunction("praise")
Expected
3
myFunction("risky")
Expected
1
myFunction("paris")
Expected
3*/
//9.Write a function that takes a string (a) as argument. Extract the first half a. Return the result
function myFunction(a){
return a.slice(0, a.length / 2);
}
/*Test Cases:
Attempted: 185038
Solved: 61710
myFunction('abcdefgh')
Expected
'abcd'
myFunction('1234')
Expected
'12'
myFunction('gedcba')
Expected
'ged'*/
//10.Write a function that takes a string (a) as argument. Remove the last 3 characters of a. Return the result
function myFunction(a){
return a.slice(0, -3);
}
/*Test Cases:
Attempted: 177875
Solved: 60186
myFunction('abcdefg')
Expected
'abcd'
myFunction('1234')
Expected
'1'
myFunction('fgedcba')
Expected
'fged'*/
//11/.Write a function that takes two numbers (a and b) as argument. Return b percent of a
function myFunction(a, b){
return (b/100)*a; or  b / 100 * a
}
/*Test Cases:
Attempted: 216825
Solved: 55544
myFunction(100,50)
Expected
50
myFunction(10,1)
Expected
0.1
myFunction(500,25)
Expected
125*/
//12.Write a function that takes 6 values (a,b,c,d,e,f) as arguments. Sum a and b. Then substract by c. Then multiply by d and divide by e. Finally raise to the power of f and return the result. Hint: mind the order.
function myFunction(a, b, c, d, e, f){
return (((a + b - c) * d) / e) ** f;
}
/*Test Cases:
Attempted: 139263
Solved: 44959
myFunction(6,5,4,3,2,1)
Expected
10.5
myFunction(6,2,1,4,2,3)
Expected
2744
myFunction(2,3,6,4,2,3)
Expected
-8*/
//13.Write a function that takes two strings (a and b) as arguments. If a contains b, append b to the beginning of a. If not, append it to the end. Return the concatenation
function myFunction(a, b){
return  a.indexOf(b) === -1 ? a + b : b + a; or 
}
/*function myFunction(a, b) {
    if (a.includes(b)) {
      return b + a;
    } else {
      return a + b;
    }
  }*/
/*Test Cases:
Attempted: 150380
Solved: 46117
myFunction('cheese', 'cake')
Expected
'cheesecake'
myFunction('lips', 's')
Expected
'slips'
myFunction('Java', 'script')
Expected
'Javascript'
myFunction(' think, therefore I am', 'I')
Expected
'I think, therefore I am'*/
//14.Write a function that takes a number as argument. If the number is even, return true. Otherwise, return false
function myFunction(a){
return a % 2 === 0;
}
/*Test Cases:
Attempted: 106537
Solved: 48917
myFunction(10)
Expected
true
myFunction(-4)
Expected
true
myFunction(5)
Expected
false
myFunction(-111)
Expected
false*/
//15.Write a function that takes two strings (a and b) as arguments. Return the number of times a occurs in b.
function myFunction(a, b){
return  b.split(a).length - 1 or
function myFunction(a, b) {
    let count = 0;
    for (let i = 0; i < b.length; i++) {
      if (b[i] === a) {
        count++;
      }
    }
    return count;
  }
}
Test Cases:
Attempted: 186418
Solved: 39219
myFunction('m', 'how many times does the character occur in this sentence?')
Expected
2
myFunction('h', 'how many times does the character occur in this sentence?')
Expected
4
myFunction('?', 'how many times does the character occur in this sentence?')
Expected
1
myFunction('z', 'how many times does the character occur in this sentence?')
Expected
0




