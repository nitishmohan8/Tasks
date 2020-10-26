document.body.setAttribute('class','main')

var block1 = document.createElement('div')
block1.setAttribute('class','block1')

var block1part1 = document.createElement('div')
block1part1.innerHTML="Starter Template Lacodeid"


var span1 = document.createElement('span')
span1.setAttribute('class','span1')

var block1button1 = document.createElement('button')
block1button1.setAttribute('type','button')
block1button1.setAttribute('class','button1')
block1button1.innerHTML = 'Home'

var span2 = document.createElement('span')
span2.setAttribute('class','span2')
var block1button2 = document.createElement('button')
block1button2.setAttribute('type','button')
block1button2.setAttribute('class','button2')
block1button2.innerHTML = 'About'


var span3 = document.createElement('span')
span3.setAttribute('class','span3')
var block1button3 = document.createElement('button')
block1button3.setAttribute('type','button')
block1button3.setAttribute('class','button3')
block1button3.innerHTML = 'Contact'





span1.append(block1button1)
span2.append(block1button2)
span3.append(block1button3)
block1part1.append(span1,span2,span3)
block1.append(block1part1)

document.body.append(block1)


var block2 = document.createElement('div')
block2.setAttribute('class','block2')
document.body.append(block2)

var block2part1 = document.createElement('div')
block2part1.innerHTML="Jumbotron heading"
block2part1.setAttribute('class','block2part1')
block2.appendChild(block2part1)

var block2part2 = document.createElement('div')
block2part2.setAttribute('class','block2part2')
var content1=document.createElement('p')
content1.innerHTML= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
block2part2.appendChild(content1)
var content2 = document.createElement('p')
content2.innerHTML = "incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"
block2part2.appendChild(content2)
var content3 = document.createElement('p')
content3.innerHTML = "exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
block2part2.appendChild(content3)
block2.append(block2part2)


var block2part3 = document.createElement('button')
block2part3.setAttribute('type','button')
block2part3.setAttribute('class','button4')
block2part3.setAttribute('id','button4')
block2part3.innerHTML = 'Sign Up Today'
block2part3.setAttribute = ("onlick","landingpage()")
block2.appendChild(block2part3)

function landingpage(){
    var page = document.createElement("a")
    page.setAttribute("href","index1.html")
    block2.appendChild(page)
}



var block2part4 = document.createElement('button')
block2part4.setAttribute('type','button')
block2part4.setAttribute('class','button5')
block2part4.innerHTML = 'Launch Demo Modal'
block2.appendChild(block2part4)



var subheading1 = document.createElement('div')
subheading1.innerHTML = "Subheading"
subheading1.setAttribute('class','subheading1')
document.body.appendChild(subheading1)



var subcontent1 = document.createElement('div')
subcontent1.innerHTML = "Lorem ipsum dolor sit amet, et dolore magna aliqua. loremmmodo ipsum lorem consequat"
subcontent1.setAttribute('class','subcontent1')
document.body.appendChild(subcontent1)

var subheading2 = document.createElement('div')
subheading2.innerHTML = "Subheading"
subheading2.setAttribute('class','subheading2')
document.body.appendChild(subheading2)



var subcontent2 = document.createElement('div')
subcontent2.innerHTML = "Lorem ipsum dolor sit amet, et dolore magna aliqua. loremmmodo ipsum lorem consequat"
subcontent2.setAttribute('class','subcontent2')
document.body.appendChild(subcontent2)



var subheading3 = document.createElement('div')
subheading3.innerHTML = "Subheading"
subheading3.setAttribute('class','subheading3')
document.body.appendChild(subheading3)


var subcontent3 = document.createElement('div')
subcontent3.innerHTML = "Lorem ipsum dolor sit amet, et dolore magna aliqua. loremmmodo ipsum lorem consequat"
subcontent3.setAttribute('class','subcontent3')
document.body.appendChild(subcontent3)

var subheading4 = document.createElement('div')
subheading4.innerHTML = "Subheading"
subheading4.setAttribute('class','subheading4')
document.body.appendChild(subheading4)


var subcontent4 = document.createElement('div')
subcontent4.innerHTML = "Lorem ipsum dolor sit amet, et dolore magna aliqua. loremmmodo ipsum lorem consequat"
subcontent4.setAttribute('class','subcontent4')
document.body.appendChild(subcontent4)

var subheading5 = document.createElement('div')
subheading5.innerHTML = "Subheading"
subheading5.setAttribute('class','subheading5')
document.body.appendChild(subheading5)


var subcontent5 = document.createElement('div')
subcontent5.innerHTML = "Lorem ipsum dolor sit amet, et dolore magna aliqua. loremmmodo ipsum lorem consequat"
subcontent5.setAttribute('class','subcontent5')
document.body.appendChild(subcontent5)

var subheading6 = document.createElement('div')
subheading6.innerHTML = "Subheading"
subheading6.setAttribute('class','subheading6')
document.body.appendChild(subheading6)


var subcontent6 = document.createElement('div')
subcontent6.innerHTML = "Lorem ipsum dolor sit amet, et dolore magna aliqua. loremmmodo ipsum lorem consequat"
subcontent6.setAttribute('class','subcontent6')
document.body.appendChild(subcontent6)

var footerf = document.createElement('div')
footerf.innerHTML = "Starter codeid.com @2017"

footerf.setAttribute('class','footerf')
document.body.append(footerf)




