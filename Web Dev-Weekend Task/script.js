var main = document.createElement('div')
main.classList.add('tabclass')

document.body.append(main)


var form = document.createElement('form')
form.setAttribute('method','GET')
form.setAttribute('id','myform')

main.append(form)




// FULLNAME//
var fullnamelabel = document.createElement('label')
fullnamelabel.setAttribute('for','fullnamelabel')
fullnamelabel.setAttribute('class','label1')
fullnamelabel.innerHTML='Full Name:'
form.appendChild(fullnamelabel)

var fullnameimage = document.createElement('img')
fullnameimage.src = "user.png"
fullnameimage.classList.add( 'userimage')
form.appendChild(fullnameimage)

var fullname = document.createElement('input')
fullname.type = 'text'
fullname.id = 'fullname'

fullname.setAttribute('placeholder','Full Name')
fullname.setAttribute('class','text1')
fullname.setAttribute('required',true)

form.appendChild(fullname)

var break1 = document.createElement('br')
form.appendChild(break1)

//Address Line 1//
var addressline1label = document.createElement('label')
addressline1label.setAttribute('for','addressline1label')
addressline1label.setAttribute('class','label2')
addressline1label.innerHTML='Address Line 1:'
form.appendChild(addressline1label)

var addressline1img = document.createElement('img')
addressline1img.src = "address.png"
addressline1img.classList.add('addressimage')
form.appendChild(addressline1img)

var addressline1 = document.createElement('input')
addressline1.type = 'text'
addressline1.setAttribute('placeholder','Address Line 1')
addressline1.setAttribute('class', 'text2')
addressline1.setAttribute('required',true)
form.appendChild(addressline1)

var break2 = document.createElement('br')
form.appendChild(break2)

//Address Line 2//

var addressline2label = document.createElement('label')
addressline2label.setAttribute('for','addressline2label')
addressline2label.setAttribute('class','label3')
addressline2label.innerHTML='Address Line 2:'
form.appendChild(addressline2label)

var addressline2img = document.createElement('img')
addressline2img.src = "address.png "
addressline2img.classList.add('addressimage2')
form.appendChild(addressline2img)

var addressline2 = document.createElement('input')
addressline2.type = 'text'
addressline2.setAttribute('placeholder','Address Line 2')
addressline2.setAttribute('class', 'text3')
addressline2.setAttribute('required',true)

form.appendChild(addressline2)

var break3 = document.createElement('br')
form.appendChild(break3)

//City//

var citylabel = document.createElement('label')
citylabel.setAttribute('for','citylabel')
citylabel.setAttribute('class','label4')
citylabel.innerHTML='City:'
form.appendChild(citylabel)

var cityimg = document.createElement('img')
cityimg.src = "city.png "
cityimg.classList.add( 'cityimage')
form.appendChild(cityimg)

var city = document.createElement('input')
city.type = 'text'
city.setAttribute('placeholder','City')
city.setAttribute('class', 'text4')
city.setAttribute('required', 'true')
form.appendChild(city)

var break4 = document.createElement('br')
form.appendChild(break4)

// State/Province/Region //
var statelabel = document.createElement('label')
statelabel.setAttribute('for','statelabel')
statelabel.setAttribute('class','label5')
statelabel.innerHTML='State/Province/Region:'
form.appendChild(statelabel)

var stateimg = document.createElement('img')
stateimg.src = "state.jpg "
stateimg.classList.add( 'stateimage')
form.appendChild(stateimg)

var state = document.createElement('input')
state.type = 'text'
state.setAttribute('placeholder','State/Province/Region')
state.setAttribute('required', 'true')

state.setAttribute('class', 'text5')
form.appendChild(state)

var break5 = document.createElement('br')
form.appendChild(break5)

//Postal Code/Zip //

var postalcodelabel = document.createElement('label')
postalcodelabel.setAttribute('for','postalcodelabel')
postalcodelabel.setAttribute('class','label6')
postalcodelabel.innerHTML='Postal Code/ZIP:'
form.appendChild(postalcodelabel)

var postalcodeimg = document.createElement('img')
postalcodeimg.src = "postal.png "
postalcodeimg.classList.add( 'postalimage')
form.appendChild(postalcodeimg)

var postalcode = document.createElement('input')
postalcode.type = 'text'
postalcode.setAttribute('placeholder','Postal Code/ZIP')
postalcode.setAttribute('required', 'true')

postalcode.setAttribute('class', 'text6')

form.appendChild(postalcode)

var break6 = document.createElement('br')
form.appendChild(break6)

//Country//
var countrylabel = document.createElement('label')
countrylabel.setAttribute('for','countrylabel')
countrylabel.setAttribute('class','label7')
countrylabel.innerHTML='Country:'
form.appendChild(countrylabel)

var countryimg = document.createElement('img')
countryimg.src = "country.png"
countryimg.classList.add( 'countryimage')
form.appendChild(countryimg)

var country = document.createElement('select')


country.setAttribute('name','country')
country.id=('country')
country.setAttribute('class', 'text7')

var option1 = document.createElement('option')
option1.value = 'Afghanistan'
option1.innerHTML = 'Afghanistan'
country.appendChild(option1)

var option2 = document.createElement('option')
option2.value = 'Bangladesh'
option2.innerHTML = 'Bangladesh'
country.appendChild(option2)

var option3 = document.createElement('option')
option3.value = 'China'
option3.innerHTML = 'China'
country.appendChild(option2)

var option4 = document.createElement('option')
option4.value = 'Denmark'
option4.innerHTML = 'Denmark'
country.appendChild(option2)

var option5 = document.createElement('option')
option5.value = 'Ethopia'
option5.innerHTML = 'Ethopia'
country.appendChild(option1)

var option6 = document.createElement('option')
option6.value = 'France'
option6.innerHTML = 'France'
country.appendChild(option6)


var option7 = document.createElement('option')
option7.value = 'Germany'
option7.innerHTML = 'Germany'
country.appendChild(option7)

var option8 = document.createElement('option')
option8.value = 'India'
option8.innerHTML = 'India'
country.appendChild(option8)

var option9 = document.createElement('option')
option9.value = 'USA'
option9.innerHTML = 'USA'
country.appendChild(option9)

var option10 = document.createElement('option')
option10.value = 'United Kingdom'
option10.innerHTML = 'United Kingdom'
country.appendChild(option10)

var option11 = document.createElement('option')
option11.value = 'Spain'
option11.innerHTML = 'Spain'
country.appendChild(option11)

var option12 = document.createElement('option')
option12.value = 'Russia'
option12.innerHTML = 'Russia'
country.appendChild(option12)

form.appendChild(country)
var break7 = document.createElement('br')
form.appendChild(break7)

//Email//
var emaillabel = document.createElement('label')
emaillabel.setAttribute('for','emaillabel')
emaillabel.setAttribute('class','label8')
emaillabel.innerHTML='Email:'
form.appendChild(emaillabel)

var emailimg = document.createElement('img')
emailimg.src = "user.png "
emailimg.classList.add( 'emailimage')
form.appendChild(emailimg)

var email = document.createElement('input')
email.type = 'email'
email.setAttribute('placeholder','Email')
email.setAttribute('required', 'true')

email.setAttribute('class', 'text8')
form.appendChild(email)

var break8 = document.createElement('br')
form.appendChild(break8)

//Phone Number//
var phonenumberlabel = document.createElement('label')
phonenumberlabel.setAttribute('for','phonenumberlabel')
phonenumberlabel.setAttribute('class','label9')
phonenumberlabel.innerHTML='Phone Number:'
form.appendChild(phonenumberlabel)

var phonenumberimg = document.createElement('img')
phonenumberimg.src = "user.png "
phonenumberimg.classList.add( 'phoneimage')
form.appendChild(phonenumberimg)

var phonenumber = document.createElement('input')
phonenumber.type = 'tel'
phonenumber.setAttribute('minlength','10')
phonenumber.setAttribute('maxlength','10')
phonenumber.setAttribute('required', 'true')


phonenumber.setAttribute('placeholder','Phone Number')
phonenumber.setAttribute('class', 'text9')
form.appendChild(phonenumber)

var break9 = document.createElement('br')
form.appendChild(break9)




//Button//
var button1 = document.createElement('input')
button1.type = 'submit'
button1.id = 'button1'
button1.value = 'Submit'
button1.setAttribute('class','buttonstyle')
//button1.setAttribute('onclick','display()')

form.appendChild(button1)



// function display(){
    
//     alert("Thank You for Submitting the form")
//     document.location.reload()
    
// }


//var test = document.createElement('i')
//test.setAttribute('class','far fa-address-book')

//document.body.append(test)
//console.log(test)