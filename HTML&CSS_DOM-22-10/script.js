var nav = document.createElement('ul')
nav.setAttribute('class','nav')
var l1 = document.createElement('a')
l1.setAttribute('href','index.html')
l1.innerHTML = " Random Number Generator "
l1.setAttribute('class','l1')
nav.appendChild(l1)
var l2 = document.createElement('a')
l2.setAttribute('href','index2.html')
l2.innerHTML = " DOB Manipulator "
l2.setAttribute('class','l2')
nav.appendChild(l2) 
document.body.appendChild(nav)










var div = document.createElement('div')
div.setAttribute('class','div1')
document.body.appendChild(div)

var label1 = document.createElement('label')
label1.setAttribute('for','label1')
label1.innerHTML='Unique 8 Digit Number is:   '
label1.setAttribute('class','label1')
div.append(label1)

var text1 = document.createElement('label')
text1.setAttribute('class','text1')
text1.setAttribute('id','text1')
div.appendChild(text1)

var button1 = document.createElement('input')
button1.setAttribute('type','button')
button1.value = 'Click Here'
button1.setAttribute('id','button1')
button1.setAttribute('class','button1')
button1.setAttribute('onclick','getnum(min,max)')
document.body.appendChild(button1)


function getnum(min,max){
    var min = 10000000;
    var max  = 99999999;
    var value = Math.floor(Math.random() * (max-min)+ min )
    var value2 = value.toString().split('');
    var result = new Set(value2)

    if(result.size != value2.length){
        getnum(min,max)
    } else {
        document.getElementById('text1').innerHTML = value
    }
    console.log(result)
}






















