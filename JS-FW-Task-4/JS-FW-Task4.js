/* Do the below programs in anonymous function and IIFE */

/*  1. Print odd numbers in an array*/
/* Anonymous */
var array = [1,2,3,4,5]
var odd = function(){
  var newArray=[];
    for(var i=0;i<array.length;i++){
    if((array[i]%2)!==0)newArray.push(array[i]);
    }
    return newArray;
};
console.log(odd();)

/* IIFE */
(function() {
    var array = [1,2,3,4,5]
   let newarray = array.filter(i => i%2 !==0) 

console.log(newarray)
}) ()

/* 2.Convert all the strings to title caps in a string array*/

/* Anonymous */
var array=["apple","bat","cat","dog"];
var titlecaps=function titlecapschange(word){
    var arrayString=[];
    for(var i=0;i<word.length;i++){
   var string = word[i][0].toUpperCase();
   for(var j=1;j<word[i].length;j++){
       string+=word[i][j].toLowerCase();
    }
    arrayString.push(string);
    }
   return arrayString;
    
};
console.log(titlecaps(array))

/* IIFE */
(function(){
    var array=["apple","bat","cat","dog"];
    var arrayString=[];
    for(var i=0;i<array.length;i++){
   var string = array[i][0].toUpperCase();
   for(var j=1;j<array[i].length;j++){
       string+=array[i][j].toLowerCase();
    }
    arrayString.push(string);
    }
   console.log(arrayString)
}) ()



/* 3.Sum of all numbers in an array*/

/* Anonymous */
var array = [1,2,3,4,5]
var sumOfArray=function findSumOfArray(array){
     let add = array.reduce((sum, ele) => sum + ele)
    console.log(add)
};
sumOfArray(array)

/* IIFE */
(function(){
    var array = [1,2,3,4,5]
    let add = array.reduce((sum, ele) => sum + ele)
    console.log(add)
})()

/* 4.Return all the prime numbers in an array*/

/* Anonymous */
var arr=[1,2,3,4,5,6,7,8,9]
var primecheck=function prime(arr){
    var newarray=[];
    for(var n in arr){
    for(var i=2;i<arr[n];i++){
        var c=1;
        if(arr[n]%i===0){
        	c = c*0;break
        }
        else c=c*1;
    }
    if(c===1)newarray.push(arr[n]);
    else if(arr[n]===2)newarray.push(arr[n]);
    }
    return newarray;
}
console.log(primecheck(arr))
/* IIFE */
(function(){
    var arr=[1,2,3,4,5,6,7,8,9]
    var newarray=[];
    for(var n in arr){
    for(var i=2;i<arr[n];i++){
        var c=1;
        if(arr[n]%i===0){
        	c = 0;break
        }
        else c = 1;
    }
    if(c===1)newarray.push(arr[n]);
    else if(arr[n]===2)newarray.push(arr[n]);
    }
   console.log( newarray);

/* 5.Return all the palindromes in an array*/

/* Anonymous */
var array=["eye","apple","abba","guvi"];

var palindromeArray=function palindrome(array){
    var newarray=array.filter(str=>{
        var reversed=str.split("").reverse().join("");
        if(str===reversed)return str});
    return newarray}
console.log(palindromeArray(array))
/* IIFE */
(function () {
	var array=["mou","pep","gazza","nitin"];
	var newarray=array.filter(str=>{
        var reversed=str.split("").reverse().join("");
        if(str===reverse)return str});
    console.log(newarray)}) ()


/* 6.Return median of two sorted arrays of same size*/

var array1=[1,2,3,4,5,6];
var array2=[4,5,7,8,8,9];

/* Anonymous */
var median=function medianarray(array1,array2){
    var newarray = array1.concat(array2)
    newarray = newarray.sort(function(a,b){return a-b} )
    len = newarray.length;
    let m = len/2;
    let n = m+1
    let s = (newarray[m] +newarray[n]) /2   

   console.log(s)
    
}
median(array1,array2)


/* IIFE */
(function(){
	var array1=[1,2,3,4,5,6];
    var array2=[4,5,7,8,8,9];

  var newarray = array1.concat(array2)
    newarray = newarray.sort(function(a,b){return a-b} )
    len = newarray.length;
    let m = len/2;
    let n = m+1
    let s = (newarray[m] +newarray[n]) /2   

   console.log(s)
    
})()
/* 7.Remove duplicates from an array*/

var array=["mou","pep","tyson","reds","pep","leo","reds"];
/* Anonymous */

var unique=function removedup(array){
    var newArray=[...new Set(array)];
    return newArray;
  }
  console.log(unique(array))

/* IIFE */
(function () {
	var array=["mou","pep","tyson","reds","pep","leo","reds"];
	
    var newarray=[...new Set(array)];
    console.log(newarray)
}) ()



/* 8.Rotate an array by k times and return the rotated array*/

/* Anonymous */
var array=[1,2,3,4,5,6,7];
var rotatedArray=function rotate(array,k){
    let s;
    for(var i=0;i<k;i++){
        s = array.shift()
        array.push(s)
    }
    console.log(array)
}
rotatedArray(array,1)

/* IIFE */
(function () {
	 var array=[1,2,3,4,5,6,7];
	 let k=3
	  let s;
     for(var i=0;i<k;i++){
        s = array.shift()
        array.push(s)
    }
    console.log(array)

})()