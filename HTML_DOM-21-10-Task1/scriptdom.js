var view = document.createElement('p')
view.setAttribute('type','view')
view.setAttribute('id','view')
view.classList.add('displayview')

document.body.append(view)


var cal_form = document.createElement('div')
cal_form.classList.add('maindiv')



var break1 = document.createElement('br')
cal_form.append(break1)

var num1 = document.createElement('button')
num1.setAttribute('type','button')
num1.setAttribute('id','button1')
num1.classList.add('btn','btn-primary','btn-lg','number')
num1.innerHTML = '1'
cal_form.append(num1)

var num2 = document.createElement('button')
num2.setAttribute('type','button')
num2.setAttribute('id','button2')
num2.classList.add('btn','btn-primary','btn-lg','number')
num2.innerHTML = '2'
cal_form.append(num2)

var num3 = document.createElement('button')
num3.setAttribute('type','button')
num3.setAttribute('id','button3')
num3.classList.add('btn','btn-primary','btn-lg','number')
num3.innerHTML = '3'
cal_form.append(num3)

var addition = document.createElement('button')
addition.setAttribute('type','button')
addition.setAttribute('id','button4')
addition.classList.add('btn','btn-warning','btn-lg','operator')
addition.innerHTML = '+'
cal_form.append(addition)

var break2 = document.createElement('br')
cal_form.append(break2)

var num4 = document.createElement('button')
num4.setAttribute('type','button')
num4.setAttribute('id','button5')
num4.classList.add('btn','btn-primary','btn-lg','number')
num4.innerHTML = '4'
cal_form.append(num4)

var num5 = document.createElement('button')
num5.setAttribute('type','button')
num5.setAttribute('id','button6')
num5.classList.add('btn','btn-primary','btn-lg','number')
num5.innerHTML = '5'
cal_form.append(num5)

var num6 = document.createElement('button')
num6.setAttribute('type','button')
num6.setAttribute('id','button7')
num6.classList.add('btn','btn-primary','btn-lg','number')
num6.innerHTML = '6'
cal_form.append(num6)

var subtraction = document.createElement('button')
subtraction.setAttribute('type','button')
subtraction.setAttribute('id','button8')
subtraction.classList.add('btn','btn-warning','btn-lg','operator' )
subtraction.innerHTML = '-'
cal_form.append(subtraction)

var break3 = document.createElement('br')
cal_form.append(break3)

var num7 = document.createElement('button')
num7.setAttribute('type','button')
num7.setAttribute('id','button9')
num7.classList.add('btn','btn-primary','btn-lg','number')
num7.innerHTML = '7'
cal_form.append(num7)

var num8 = document.createElement('button')
num8.setAttribute('type','button')
num8.setAttribute('id','button10')
num8.classList.add('btn','btn-primary','btn-lg','number')
num8.innerHTML = '8'
cal_form.append(num8)

var num9 = document.createElement('button')
num9.setAttribute('type','button')
num9.setAttribute('id','button11')
num9.classList.add('btn','btn-primary','btn-lg','number')
num9.innerHTML = '9'
cal_form.append(num9)

var multiplication = document.createElement('button')
multiplication.setAttribute('type','button')
multiplication.setAttribute('id','button12')
multiplication.classList.add('btn','btn-warning','btn-lg','operator')
multiplication.innerHTML = 'X'
cal_form.append(multiplication)

var break4 = document.createElement('br')
cal_form.append(break4)

var decimal = document.createElement('button')
decimal.setAttribute('type','button')
decimal.setAttribute('id','button13')
decimal.classList.add('btn','btn-primary','btn-lg','number')
decimal.innerHTML = '.'
cal_form.append(decimal)

var num0 = document.createElement('button')
num0.setAttribute('type','button')
num0.setAttribute('id','button14')
num0.classList.add('btn','btn-primary','btn-lg','number')
num0.innerHTML = '0'
cal_form.append(num0)

var clear = document.createElement('button')
clear.setAttribute('type','button')
clear.setAttribute('id','button15')
clear.classList.add('btn','btn-primary','btn-lg','design','operator')
clear.innerHTML = 'C'
cal_form.append(clear)

var divide = document.createElement('button')
divide.setAttribute('type','button')
divide.setAttribute('id','button16')
divide.classList.add('btn','btn-warning','btn-lg','operator')
divide.innerHTML = '/'
cal_form.append(divide)

var break5 = document.createElement('br')
cal_form.append(break5)

var equal = document.createElement('button')
equal.setAttribute('type','button')
equal.setAttribute('id','button17')
equal.classList.add('btn','btn-primary','btn-lg','design2','operator')
equal.innerHTML = '='
cal_form.append(equal)

var del = document.createElement('button')
del.setAttribute('type','button')
del.setAttribute('id','button18')
del.classList.add('btn','btn-primary','btn-lg','design','operator')
del.innerHTML = 'DEL'
cal_form.append(del)

var percentage = document.createElement('button')
percentage.setAttribute('type','button')
percentage.setAttribute('id','button19')
percentage.classList.add('btn','btn-warning','btn-lg','operator')
percentage.innerHTML = '%'
cal_form.append(percentage)



document.body.append(cal_form)










  

// function display(){
//   var disp =   document.getElementById('view')
//   disp.innerHTML = '1'
// }

// document.getElementById('button1').addEventListener("click",display())
