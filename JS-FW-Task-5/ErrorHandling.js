var request = new XMLHttpRequest() 

request.open('GET', 'https://restcountries.eu/rest/v2/all', true);
request.send();

request.onload = function() {

    var data = JSON.parse(this.response) 
    var newdata = {}
    var newarr = []

    try {
	alert('Test 1') // Message executed
	regdata  // error1

   alert('Message not executed')  //Message won't be executed
}
   catch(err) {
  	alert(err.Message)  //Message executed
  }
    for(var i=0;i<data.length;i++){
   	  newdata.name=data[i].name
      newdata.capital = data[i].capital
      newdata.flag = data[i].flag
      console.log(newdata)                    // output generated
  }

   
   
      
   };
