
// var input = prompt("Enter your value")
// //var linkurl = "https://api.giphy.com/v1/gifs/search?api_key=ZU8iHC2ZuvpMG3ok8NdR5IEQRjsR0Fax&q=phosphate&limit=5&offset=0&rating=g&lang=en"
// var linkurl = "https://api.giphy.com/v1/gifs/search?api_key=ZU8iHC2ZuvpMG3ok8NdR5IEQRjsR0Fax&q="
// fetch(linkurl)
// .then((resp)=> {
//     return resp.json()
// })
// .then((result) => {
//     var searchvalue = input
//     console.log(searchvalue)
//     return fetch(linkurl + searchvalue + "&limit=5&offset=0&rating=g&lang=en")
//   console.log(result)
// })
// .then((newresult)=>{
//     return newresult.json()
// })
// .then((newresult2)=>{
//     newresult2.data.forEach(element =>
//         {
//             var display = document.createElement('object')
//             display.height = '200px'
//             display.width = '200px'
//             display.data = element.embed_url
//             document.body.append(display)
//         })
    
    
//     console.log(newresult2)
// })
// .catch((err) => console.log(err));



// let arr = ['height','width']
//             let val = ['400px','400px']
//             for(var i=0;i<arr.length;i++){
//                 display.setAttribute(arr[i],val[i])
//             }




var fixurl = "http://data.fixer.io/api/latest?access_key=d8bbdc0c5711a5459e56ba4597e4c920"
var url = "https://restcountries.eu/rest/v2/all"
var input = prompt('Enter country')

fetch(url)
.then((resp)=>{
    return resp.json()
})
.then((result) => {
        // var valuecode = input
        var codeinp = result[input].currencies[0].code
        return fetch(fixurl + '&symbols=' + codeinp)
} )
.then((result2) =>{
    return result2.json()
})
.then((result3) =>{
    
                    var display = document.createElement('div')
                    display.innerHTML = result3.rates[0]
                    document.body.append(display)
               
                console.log(result3)
    
})
.catch((err) => console.log(err));
