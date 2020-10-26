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


var div1 = document.createElement("div")
div1.id = 'div1'
document.body.append(div1)

var input = document.createElement('input')
input.setAttribute('id','input')
input.setAttribute('type','date')
input.setAttribute('class','input')
div1.appendChild(input)

var br1 = document.createElement('br')
div1.appendChild(br1)

var button1 = document.createElement('input')
button1.id='button1'
button1.type = 'button'
button1.class='button1'
button1.value = "Click Here"
button1.setAttribute('onclick','display()')
div1.appendChild(button1)

var displaydata = document.createElement('div')
displaydata.setAttribute('id','displaydata')
displaydata.setAttribute('class','displaydata')
document.body.append(displaydata)

function display(){
    var inputvalue = document.getElementById('input').value;

    if(Date.parse(inputvalue)){
        var inputdate = new Date(inputvalue)
        var currentdate = new Date();

        var milliseconds = parseInt(currentdate.getTime()) - parseInt(inputdate.getTime());
        var seconds = compute(milliseconds,1000)
        var mins = compute(seconds,60)
        var hour = compute(mins,60)
        var day = compute(hour,24)
        var month = monthly(inputdate,currentdate)
        var year = yearly(inputdate,currentdate)

        displaydata.innerHTML =`
        Year Difference: ${year} <br>
        Month Difference: ${month} <br>
        Day Difference: ${day} <br>
        Hour Difference: ${hour} <br>
        Mins Difference: ${mins} <br>
        Seconds Difference: ${seconds} <br>
        MilliSeconds Difference: ${milliseconds} <br>   
        `
        

    } 
    else {
        displaydata.innerHTML = 'Give a valid DOB'
        
    }
}

function compute(value1,value2){
 return Math.floor(value1/value2)
}

function yearly (value1,value2){
    var date1 = new Date(value1)
    var date2 = new Date(value2)
    return date2.getFullYear() - date1.getFullYear()
}

function monthly(value1,value2){
    var year = yearly(value1,value2)
    var month = year*12 + (value2.getMonth() - value1.getMonth())
    return month
}