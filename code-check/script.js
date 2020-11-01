
var div1 = document.createElement('div')
div1.classList.add('container','div1')
document.body.appendChild(div1)

// var table = document.createElement('table')
// div1.appendChild(table)
// var tablerow = document.createElement('tr')
// div1.appendChild(tablerow)
// var td1 = document.createElement('td')
// td1.innerHTML='dddd'
// tablerow.appendChild(td1)
// var td2 = document.createElement('td')
// td2.innerHTML='dddddrrrrddd'
// tablerow.appendChild(td2)
// var td3 = document.createElement('td')
// td3.innerHTML='dddwwwwwd'
// tablerow.appendChild(td3)


var displaydiv = document.createElement('div')
displaydiv.setAttribute('class','displaydiv')
displaydiv.setAttribute('id','displaydiv')
div1.appendChild(displaydiv)

var displaydiv2 = document.createElement('div')
displaydiv2.classList.add('card')
displaydiv2.setAttribute('id','displaydiv2')
div1.appendChild(displaydiv2)

var img1 = document.createElement('img')
img1.classList.add('img-thumbail')
div1.appendChild(img1)






var url = "https://restcountries.eu/rest/v2/all"

fetch(url)
.then((resp) => {
    return resp.json();
})
.then((result) => {
     
      var imgs = document.createElement('img')
      imgs.setAttribute('src','country[index].flag')
      document.body.append(imgs)
    
})

.catch((err) => {
    console.log(err)
});


















// function imgdisplay(country,index) {
//     imgdisp[index] = document.createElement('img')
//     imgdisp[index].classList.add('card-img-top')
//     imgdisp[index].setAttribute("src",country[0].flag)
//   }

// var imgdisp = document.getElementById('displaydiv2')
//       function imagenode(){
//         var imgdisp2 = document.createElement('img')
//         imgdisp2.src = "https://restcountries.eu/rest/v2/all"
//         return imgdisp2
//       }
//       for(var i=0;i<250;i++){
//           imgdisp.appendChild(imagenode())
//       }



// re.forEach(myimage)
//      function myimage(c,index){
//         //  document.getElementById("displaydiv2").innerHTML += `${c.flag} <br>`
//         var imagdisp = document.createElement('img')
//         imagdisp.setAttribute("src",c.flag[0])
//      }























