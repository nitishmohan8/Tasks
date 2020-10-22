

// var digit1 = document.getElementById('button1')

// var digit2 = document.getElementById('button2')
// var digit3 = document.getElementById('button3')
// var digit4 = document.getElementById('button5')
// var digit5 = document.getElementById('button6')
// var digit6 = document.getElementById('button7')
// var digit7 = document.getElementById('button9')
// var digit8 = document.getElementById('button10')
// var digit9 = document.getElementById('button11')
// var digit0 = document.getElementById('button14')
// var addops = document.getElementById('button4')
// var subops = document.getElementById('button8')
// var divops = document.getElementById('button16')
// var mulops = document.getElementById('button12')
// var deleteBtn = document.getElementById('button18')
// var deci = document.getElementById('button13')
// var modops = document.getElementById('button19')
// var clearBtn = document.getElementById('button15')
// var equal = document.getElementById('button17')
// var answer = document.querySelector('p')


//Number Class Click Command//

var first = document.getElementById('button1')
first.addEventListener("click",function(){
  var check = document.getElementById('view')
  check.innerText = '1'
})

var second = document.getElementById('button2')
second.addEventListener("click",function(){
  var check = document.getElementById('view')
  check.innerText = '2'
})

var third = document.getElementById('button3')
third.addEventListener("click",function(){
  var check = document.getElementById('view')
  check.innerText = '3'
})

var fourth = document.getElementById('button5')
fourth.addEventListener("click",function(){
  var check = document.getElementById('view')
  check.innerText = '4'
})

var fifth = document.getElementById('button6')
fifth.addEventListener("click",function(){
  var check = document.getElementById('view')
  check.innerText = '5'
})

var sixth = document.getElementById('button7')
sixth.addEventListener("click",function(){
  var check = document.getElementById('view')
  check.innerText = '6'
})

var seventh = document.getElementById('button9')
seventh.addEventListener("click",function(){
  var check = document.getElementById('view')
  check.innerText = '7'
})

var eight = document.getElementById('button10')
eight.addEventListener("click",function(){
  var check = document.getElementById('view')
  check.innerText = '8'
})

var ninth = document.getElementById('button11')
ninth.addEventListener("click",function(){
  var check = document.getElementById('view')
  check.innerText = '9'
})

var zero = document.getElementById('button14')
zero.addEventListener("click",function(){
  var check = document.getElementById('view')
  check.innerText = '0'
})

var deci = document.getElementById('button13')
deci.addEventListener("click",function(){
  var check = document.getElementById('view')
  check.innerText = '.'
})

//Operator Class Click Command//

var add = document.getElementById('button4')
add.addEventListener("click",function(){
  var check = document.getElementById('view')
  check.innerText = '+'
})

var sub = document.getElementById('button8')
sub.addEventListener("click",function(){
  var check = document.getElementById('view')
  check.innerText = '-'
})

var mul = document.getElementById('button12')
mul.addEventListener("click",function(){
  var check = document.getElementById('view')
  check.innerText = '*'
})

//CLEAR FUNCTION//
var clr = document.getElementById('button15')
clr.addEventListener("click",function(){
  var check = document.getElementById('view')
  check.innerText = ' '
})

var div = document.getElementById('button16')
div.addEventListener("click",function(){
  var check = document.getElementById('view')
  check.innerText = '/'
})

//Equal Function//
var eql = document.getElementById('button17')
eql.addEventListener("click",function(){
  var check = document.getElementById('view')
  check.innerText = ' '
})

//DELETE FUNCTION//
var del = document.getElementById('button18')
del.addEventListener("click",function(){
  var check = document.getElementById('view')
  check.innerText = ''
})


var mod = document.getElementById('button19')
mod.addEventListener("click",function(){
  var check = document.getElementById('view')
  check.innerText = '%'
})

document.addEventListener('keypress',function(k){
  var check = document.getElementById('view')
  if(k.keyCode == 48 || k.keyCode == 96){
      check.innerText = '0'
  } else if (k.keyCode == 49 || k.keyCode == 97) {
      check.innerText = '1'
   }else if (k.keyCode == 50 || k.keyCode == 98) {
      check.innerText = '2'
   }else if (k.keyCode == 51 || k.keyCode == 99) {
      check.innerText = '3'
   }else if (k.keyCode == 52 || k.keyCode == 100) {
      check.innerText = '4'
   }else if (k.keyCode == 53 || k.keyCode == 101) {
      check.innerText = '5'
   }else if (k.keyCode == 54 || k.keyCode == 102) {
      check.innerText = '6'
   }else if (k.keyCode == 55 || k.keyCode == 103) {
      check.innerText = '7'
   }else if (k.keyCode == 56 || k.keyCode == 104) {
      check.innerText = '8'
   }else if (k.keyCode == 57 || k.keyCode == 105) {
      check.innerText = '9'
   }else  {
      alert("You are pressing an invalid Key!!")
   }
});

