/* PROBLEM 0 PART A*/


/* . Add height and weight to Fluffy */

function heightweight(a,b){
    cat.height=a
    cat.weight =b
}
heightweight(5,8)

/* .Fluffy name is spelled wrongly. Update it to Fluffyy */

cat.name = 'Fluffyy'


/* .List all the activities of Fluffyy’s catFriends. */

var catFriendsActivities=function(){
    for(var i=0;i<cat.catFriends.length;i++){
    for(var j=0;j<cat.catFriends[i].activities.length;j++){
    console.log(cat.catFriends[i].activities[j]);}}
}

catFriendsActivities();




/*Print the catFriends names. */

var friendsname = function(){
    for(var i=0;i<cat.catFriends.length;i++){
        console.log(cat.catFriends[i].name)
    }
}

friendsname()

/*Print the total weight of catFriends */
var weightcheck = function(){
    var sum = 0;
    for(var i=0;i<cat.catFriends.length; i++){
        sum = sum + cat.catFriends[i].weight
    }
    console.log(sum)
}

weightcheck()
/*Print the total activities of all cats (op:6) */

var activitiescheck = function(){
    var count = cat.activities.length
    for(var i=0;i<cat.catFriends.length;i++){
        count += cat.catFriends[i].activities.length
        }
    
console.log(count)
    
}
activitiescheck();
/*Add 2 more activities to bar & foo cats */
var activitiesadd = function(){
    cat.catFriends[0].activities.push('drink')
    cat.catFriends[1].activities.push('drink')
    cat.catFriends[0].activities.push('play')
     cat.catFriends[1].activities.push('sleep')
    
}
activitiesadd();

console.log(cat)
/*Update the fur color of bar */

cat.catFriends[0].furcolor = 'Yellow'

/* PROBLEM 0 PART B */

/*1. Loop over the accidents array. Change atFaultForAccident from true to false.*/
for(var i=0;i<myCar.accidents.length;i++){
    myCar.accidents[i].atFaultForAccident = 'false'
}
console.log(myCar)



/*2. Print the dated of my accidents*/

for(var i=0;i<myCar.accidents.length;i++){
    console.log(myCar.accidents[i].date)
}


/* PROBLEM 1 */
function onlyobj (){
    var arr =[]
    for(var i in obj){
        arr.push(obj[i])
    }
    console.log(arr)
}
onlyobj();

/* PROBLEM 2 */
function onlyobj (){
    var arr =[]
    for(var i in obj){
        arr.push(i)
    }
    console.log(arr)
}
onlyobj();

/*PROBLEM 3 */
function onlyobj (){
    var arr =[]
    for(var i in obj){
        arr.push([i,obj[i]])
    }
    console.log(arr)
}
onlyobj();

/*PROBLEM 4 */
function transform (){
    var arr ={}
   arr[obj[0]] = obj[obj.length -1]
    console.log(arr)
}
transform();

/* PROBLEM 5 */

var arr = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];
var object ={}
for(var i=0;i<arr.length;i++)
    object[arr[i][0]]=arr[i][1];
console.log(object)

/* PROBLEM 6 */
 var newarr =[]
for(var i=0;i<arr.length;i++){
    var newobj = Object.fromEntries(arr[i])
    newarr.push(newobj)
}

console.log(newarr)

/* PROBLEM 7 */
function assertObjectsEqual(actual, expected, testName){
var flag=1;
 for(var i in expected){
     if(expected[i]===actual[i])
     flag = flag*1;
     else 
     flag= flag*0;
 }
 if(flag===1)console.log("Passed");
 else{
     console.log("FAILED [my test] Expected ",expected,"but got", actual);
 }
}
assertObjectsEqual(actual, expected, 'detectequality');


/*PROBLEM 8 */
function chksecurityQuestions(securityQuestions,ques,answer) {

 for(var i = 0;i<securityQuestions.length;i++){
     if(securityQuestions[i].question === ques && securityQuestions[i].expectedAnswer === answer)
     return true 
     
 }
     return false;
 
}

/*PROBLEM 9 */
function minor(){
     var arr =[]
     for(i=0;i<students.length;i++){
         if(students[i].age > 20){
            arr.push(students[i].name)
         }
     }
     console.log(arr)
 }
minor()