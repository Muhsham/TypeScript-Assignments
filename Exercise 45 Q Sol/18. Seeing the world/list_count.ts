//Exercise 18 Country to be Visited

let places_visit: string[] = ['Turkey', 'Russia', 'Italy', 'Australia', 'New Zealand'];
console.log("original order:", places_visit);

console.log("Alphabetical order:", [...places_visit].sort());

//console.log("Original Order after sorting:" , places_visit);

console.log("reverse alphabetical order:", [...places_visit].sort().reverse());

places_visit.reverse();
console.log("Reversed order:", places_visit);

places_visit.reverse();
console.log("Restored to original order:", places_visit);

places_visit.sort();
console.log("Sorted in alphabetical order:", places_visit);

places_visit.sort((a, b) => b. localeCompare(a));
console.log("reverse alphabetical order:", [...places_visit].sort().reverse());