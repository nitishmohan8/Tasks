var request = new XMLHttpRequest() 

request.open('GET', 'https://restcountries.eu/rest/v2/all', true)


request.onload = function() {

    var jsonData = JSON.parse(this.response) 
    var flag = [] 
   for(var i=0;i<jsonData.length;i++){
   	console.log(jsonData[i].flag)
   }
    
    
    };



request.send();