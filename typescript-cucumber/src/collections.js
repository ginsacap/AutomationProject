//mySet.delete(2);
//mySet.delete(1);
// //mySet.clear();
// /** if (mySet.has('sankar'))
// {
//   console.log("Set has the name");
// }
// else {
//   console.log("Set does not have the name");
// }
//   console.log(mySet.size);
//    */
// for (let item of mySet)
// {
//   console.log(item);
// }
// for (let item1 of mySet.keys())
// {
//   console.log(item1);
// }
// myMap.set('fname', 'Sankar');
// myMap.set('lname', 'Ginjupalli');
// for (let item of myMap.keys())
// {
//   console.log(item);
//   }
// for (let item2 of myMap.values())
// {
//   console.log(item2);
//   }
console.log("Calling Set");
var mySet = new Set();
mySet.add(1);
mySet.add('sankar');
mySet.add(2);
mySet.add(2);
mySet.add("Ginjupalli");
mySet.add(3).add(4);
console.log(mySet.size);
mySet.forEach(setFunction);
function setFunction(value, key, callingSet) {
    console.log(key + "   " + value);
    console.log(mySet === callingSet);
}
console.log("Calling Map");
var myMap = new Map([
    ['fname', 'Sankar'],
    ['lname', 'Ginjupalli']
]);
myMap.forEach(mapFunction);
function mapFunction(value, key, callingMap) {
    console.log(key + "     " + value);
    console.log(myMap === callingMap);
}
