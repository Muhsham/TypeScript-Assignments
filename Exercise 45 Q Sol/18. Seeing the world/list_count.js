//Exercise 18 Country to be Visited
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var places_visit = ['Turkey', 'Russia', 'Italy', 'Australia', 'New Zealand'];
console.log("original order:", places_visit);
console.log("Alphabetical order:", __spreadArray([], places_visit, true).sort());
//console.log("Original Order after sorting:" , places_visit);
console.log("reverse alphabetical order:", __spreadArray([], places_visit, true).sort().reverse());
places_visit.reverse();
console.log("Reversed order:", places_visit);
places_visit.reverse();
console.log("Restored to original order:", places_visit);
places_visit.sort();
console.log("Sorted in alphabetical order:", places_visit);
places_visit.sort(function (a, b) { return b.localeCompare(a); });
console.log("reverse alphabetical order:", __spreadArray([], places_visit, true).sort().reverse());
