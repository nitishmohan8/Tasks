// Problem 0 : Part A

var cat = {
 name: 'Fluffy',
 activities: ['play', 'eat cat food'],
 catFriends: [
 {
 name: 'bar',
 activities: ['be grumpy', 'eat bread omblet'],
 weight: 8,
 furcolor: 'white'
 }, 
 {
 name: 'foo',
 activities: ['sleep', 'pre-sleep naps'],
 weight: 3
 }
 ]
}

//1.Add height and weight to Fluffy

var addHeigthtWidth=function(height,width){
    cat["height"]=height;
    cat["width"]=width;
}
addHeigthtWidth(23,23);
console.log(cat);

//2.Fluffy name is spelled wrongly. Update it to Fluffyy

var chnageName=function(name){cat.name=name};
 changeName("Fluffyy");
 console.log(cat.name);

//3.List all the activities of Fluffyy’s catFriends.

var catFriendsActivities=function(){
    for(var i=0;i<cat.catFriends.length;i++){
    for(var j=0;j<cat.catFriends[i].activities.length;j++){
    console.log(cat.catFriends[i].activities[j]);}}
}
catFriendsActivities();

//4.Print the catFriends names.

var catfriendsname=function(){
    for(var i=0;i<cat.catFriends.length;i++){
    console.log(cat.catFriends[i].name);}
}
catFriendsName();

//5.Print the total weight of catFriends

var catweight=function(){
    var weight=0
    for(var i=0;i<cat.catFriends.length;i++){
    weight+=cat.catFriends[i].weight;
    }
    console.log(weight);
}
catweight();

//6.Print the total activities of all cats (op:6)

var activitiesCount=function(){
    var count=cat.activities.length;
    for(var i=0;i<cat.catFriends.length;i++){
    count+=cat.catFriends[i].activities.length;
    }
    console.log(count);
}

activitiesCount();

//7.Add 2 more activities to bar & foo cats

var add=function(activity1,activity2){
    for(var i=0;i<cat.catFriends.length;i++){
    cat.catFriends[i].activities[cat.catFriends[i].activities.length]=activity1;
    cat.catFriends[i].activities[cat.catFriends[i].activities.length]=activity2;
    console.log(cat.catFriends[i].activities);
    }
}

add("playing","eating");

//8.Update the fur color of bar

var changecolor=function(color){
    cat["furcolor"]=color
    console.log(cat.furcolor);
};

changecolor("bar");
console.log(cat);

//Problem 0 : Part B

var myCar = {
 make: 'Bugatti',
 model: 'Bugatti La Voiture Noire',
 year: 2019,
 accidents: [
 {
 date: '3/15/2019',
 damage_points: '5000',
 atFaultForAccident: true
 },
 {
 date: '7/4/2022',
 damage_points: '2200',
 atFaultForAccident: true
 },
 {
 date: '6/22/2021',
 damage_points: '7900',
 atFaultForAccident: true
 }
 ]
}

//1. Loop over the accidents array. Change atFaultForAccident from true to false.


function atfault(){
    for(var i=0;i<myCar.accidents.length;i++){
        myCar.accidents[i].atFaultForAccident=false;
    }
    console.log(myCar.accidents)
}

atfault();

//2. Print the dated of my accidents

function dated(){
    for(var i=0;i<myCar.accidents.length;i++){
    console.log(myCar.accidents[i].date);
    }
}

dated();

