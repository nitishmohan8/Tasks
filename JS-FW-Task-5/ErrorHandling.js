var request = new XMLHttpRequest() 

request.open('GET', 'https://restcountries.eu/rest/v2/all', true);
request.send();

request.onload = function() {

    var data = JSON.parse(this.response) 
    var newdata = {}
    var newarr = []

    try {
	alert('Message executed')
	regdata

   alert('Message not executed')
}catch(err) {
  	alert(err.Message)
  }
    for(var i=0;i<data.length;i++){
   	  newdata.name=data[i].name
      newdata.capital = data[i].capital
      newdata.flag = data[i].flag
      console.log(newdata)
  }

   
   
      
   };
