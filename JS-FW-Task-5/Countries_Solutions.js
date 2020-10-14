/* using filter function getting countries from asia content  */



var request = new XMLHttpRequest() 

request.open('GET', 'https://restcountries.eu/rest/v2/all', true);
request.send();

request.onload = function() {

    var data = JSON.parse(this.response) 
    var regnew = data.filter(reg => reg.region == 'Asia')
   	console.log(regnew)
   }
    
   ;


/* get all countries with population of less than 2 lacs using filter function */
var request = new XMLHttpRequest() 

request.open('GET', 'https://restcountries.eu/rest/v2/all', true);
request.send();

request.onload = function() {

    var data = JSON.parse(this.response) 
    var popnew = data.filter(pop => pop.population > 200000)
   	console.log(popnew)
   }
    
   ;


/* print name,capital,flag using forEach function */
var request = new XMLHttpRequest() 

request.open('GET', 'https://restcountries.eu/rest/v2/all', true);
request.send();

request.onload = function() {

    var data = JSON.parse(this.response) 
    var newdata = {}
    var newarr = []
    
    for(var i=0;i<data.length;i++){
   	  newdata.name=data[i].name
      newdata.capital = data[i].capital
      newdata.flag = data[i].flag
      console.log(newdata)
  }

   
   
      
   };