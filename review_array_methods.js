// 1. Create an array with 10 objects, each of them should have a "name" property and a "URL" property and a "number" property.

const webList = [
    { name: "Estefania Robel", 
      URL: "www.estefaniarobel.com" , 
      number: 33854 },
    { name: "Donnell Rowe", 
      URL: "https://www.donnellrowe.org" , 
      number: 26818 },
    { name: "Forest Lehner", 
      URL: "http://www.fosterslehner.de", 
      number: 54383 },
    { name: "Randy Steuber", 
      URL: "http://www.randySt.com" , 
      number: 62791 },
    { name: "Alaina Carroll", 
      URL: "https://www.alainacarrol.com", 
      number: 18226 },
    { name: "Kobe Schimmel", 
      URL: "www.kobe.com" , 
      number: 99336 },
    { name: "Angeline Harber", 
      URL: "https://www.angeharber.org", 
      number: 53049 },
    { name: "Mara Collins", 
      URL: "www.maracollins.com", 
      number: 9334 },
    { name: "Garrick Murphy", 
      URL: "http://www.murphy.org", 
      number: 37782 },
    { name: "Elbert Cruickshank", 
      URL: "https://www.elbertCruickshank.edu", 
      number: 44787 },
]


// 2. Then based on the array, create a new array that contains just the names.

const webListNames = webList.map(n => n.name);

console.log(webListNames);
 // prints:
//  [
//     'Estefania Robel',
//     'Donnell Rowe',
//     'Forest Lehner',
//     'Randy Steuber',
//     'Alaina Carroll',
//     'Kobe Schimmel',
//     'Angeline Harber',
//     'Mara Collins',
//     'Garrick Murphy',
//     'Elbert Cruickshank'
//   ]


// 3. Go through the array and check each individual URL property - if the URL starts with "http", print the URL. Otherwise, print "Invalid URL for" and the value of the name property.
const string = "hola que bueno que viniste";


webList.forEach(function(x) {
    if (x.URL.indexOf("http") >= 0) {
      console.log(x.URL);

    } else {
      console.log(`Invalid URL for ${x.name}`);
    } 
});

//it prints: 
// Invalid URL for Estefania Robel
// https://www.donnellrowe.org
// http://www.fosterslehner.de
// http://www.randySt.com
// https://www.alainacarrol.com
// Invalid URL for Kobe Schimmel
// https://www.angeharber.org
// Invalid URL for Mara Collins
// http://www.murphy.org
// https://www.elbertCruickshank.edu

console.log("------------------------")
// 4. Sort the array based on the "number" property to a random order.

console.log(webList.sort(() => Math.random() - 0.5));
//this is to shuffle the array list

console.log("------------------------")

// 5. Sort the array based on the "number" property, with the lowest number first.

const WebListMinToMax = webList.sort(function(a, b) {
    return a.number - b.number;
});
//this will order the array sorting the key-value number: from smallest to biggest

console.log(WebListMinToMax);

console.log("------------------------")
// 6. Sort the array based on the "number" property, with the highest number first.

const webListMaxToMin = webList.sort(function(a, b) {
    return b.number - a.number;
});
//this will order the array sorting the key-value number: from  biggest to smallest
console.log(webListMaxToMin);

console.log("------------------------")
// 7. Based on the array, create a string with all of the names of the people in the array separated by a comma and then replace the last comma with the string `" and "`.

const webListNames1 = webList.map(n => n.name);
//recovering the array of names I did above

const lastName = webListNames1.pop();
console.log(webListNames1.join(", ")+" and "+ lastName);
//prints:
//Kobe Schimmel, Randy Steuber, Forest Lehner, Angeline Harber, Elbert Cruickshank, Garrick Murphy, Estefania Robel, Donnell Rowe, Alaina Carroll and Mara Collins





