var displaytext = document.createElement('div')
displaytext.setAttribute('class','div1')
displaytext.setAttribute('id','div1')
document.body.append(displaytext)

var displaytext2 = document.createElement('div')
displaytext2.setAttribute('class','div2')
displaytext2.setAttribute('id','div2')
document.body.append(displaytext2)

var displaytext3 = document.createElement('div')
displaytext3.setAttribute('class','div3')
displaytext3.setAttribute('id','div3')
document.body.append(displaytext3)

var displaytext4 = document.createElement('div')
displaytext4.setAttribute('class','div4')
displaytext4.setAttribute('id','div4')
document.body.append(displaytext4)

function display(){
    setTimeout(function(){
        document.getElementById('div1').innerHTML = '10'
    setTimeout(function(){
        document.getElementById('div1').innerHTML = '9'
        setTimeout(function(){
            document.getElementById('div1').innerHTML = '8'
            setTimeout(function(){
                document.getElementById('div1').innerHTML = '7'
                setTimeout(function(){
                    document.getElementById('div1').innerHTML = '6'
                    setTimeout(function(){
                        document.getElementById('div1').innerHTML = '5'
                        setTimeout(function(){
                            document.getElementById('div1').innerHTML = '4'
                            setTimeout(function(){
                                document.getElementById('div1').innerHTML = '3'
                                setTimeout(function(){
                                    document.getElementById('div1').innerHTML = '2'
                                    setTimeout(function(){
                                        document.getElementById('div1').innerHTML = '1'
                                        setTimeout(function(){
                                            document.getElementById('div1').innerHTML = '0'
                                            setTimeout(function(){
                                                document.getElementById('div1').innerHTML = 'HAPPY'
                                                document.getElementById('div2').innerHTML = 'INDEPENDENCE'
                                                document.getElementById('div3').innerHTML = 'DAY!'
                                                
                                            },1000)

    },1000) //0
},1000) //1
},1000) //2
},1000) //3
},1000) //4
},1000) //5
},1000) //6
},1000) //7
},1000) //8
},1000) //9
},1000) //10
} 
display()