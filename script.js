
// arrays---->it is variable which can store more than one value  .  like srting,number etc ;

// the general syntax of an array is -->  var array = [ element0,element1, elementN....]

var names = ["srinu", "sravan", "vengal", "pavan"];
console.log(names);//--to print all the elemts.
console.log(names[1]);//--> to print operticular element.

//length of an array-->refers to the number of elemets in an array.
console.log(names.length);
//{length-1}-->is index value.
  
// if i need to add another name to this array.then
names.push("bhargavi");
console.log(names);

names.unshift("bhargavi");//--->to add an element in stating of an array.
console.log(names);

names.pop();//--->to remove last element from an array.
console.log(names);

names.shift();//--->to remove first element from an array.
console.log(names);


//SPLICE
//array.splice(startindex,deleting count, "element1", ... "elementN")---> general syntax of an array.

names.splice(0,1);//--->to delete an element in the starting point.
console.log(names);

names.splice(1,0, "srinu","bhargavi" );//--->to add  elements in the starting point.
console.log(names);

names.splice(1, 1, "ram", "mr cool");//-->to add two elemts and removing one element.
console.log(names);

//SLICE
//array.slice(startIndex, endIndex);
 var newArray = names.slice(1,3);
 console.log(newArray);


 var list1 = ["dog","cat","birds"];
 var list2 = ["lion","tiger"];
 var animals = list1.concat(list2);
 
 console.log(animals);

