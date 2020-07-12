// Save one string
let string = "a";

// A string can be written directly into localStorage
localStorage.setItem("myKey", string);
string = localStorage.getItem("myKey");
console.log("String data for myKey:", string);
localStorage.removeItem("myKey");

// Save multiple strings
let array = ["a", "b", "c"];

// An array has to be stringified before it can be written to the localStorage
let arrayAsString = JSON.stringify(array);
localStorage.setItem("otherKey", arrayAsString);

arrayAsString = localStorage.getItem("otherKey");

// The string has to be parsed to an array after loaded from localStorage
array = JSON.parse(arrayAsString);
console.log("Array data for otherKey:", array);

localStorage.removeItem("otherKey");

// Save multiple objects
let objectArray = [{ name: "Sonja" }, { name: "Ali" }, { name: "Joe" }];

// Same as with the array of strings
// an array of objects has to be stringified before written
let objectArrayAsString = JSON.stringify(objectArray);
localStorage.setItem("otherKey", objectArrayAsString);

objectArrayAsString = localStorage.getItem("otherKey");
// And we have to parse it again, to get the array of objects we started with
objectArray = JSON.parse(objectArrayAsString);
console.log("Array data for otherKey:", objectArray);
console.log("Name of second object:", objectArray[1].name);

localStorage.removeItem("otherKey");

// Update multiple objects
let petObjects = [
  { title: "Good Dog", url: "https://example.com" },
  { title: "Other Dog", url: "https://example.com" }
];

console.log("Initial objects:", petObjects);

// Save and load the data, with stringify/parse
localStorage.setItem("pets", JSON.stringify(petObjects));
let loadedPetObjects = JSON.parse(localStorage.getItem("pets"));

// Creating a new array
// it has the objects of the old array (loadedPetObjects) and a new object
let updatedPetObjects = [
  ...loadedPetObjects,
  { title: "Cute Cat", url: "https://example.com" }
];

console.log("Updated objects:", updatedPetObjects);

// stringify the new array before saving it
// we can simply override the existing value of the "pets" key
localStorage.setItem("pets", JSON.stringify(updatedPetObjects));

// some time later we load the data from the "pets" key
// and we have to parse it again, because it's saved as a string
let otherLoadedPetObjects = JSON.parse(localStorage.getItem("pets"));

// If we wanted to remove one item, we have to create yet a new array
// the filter method creates a new array from an existing one
// but it removes items that match a certain criteria
// in this case we keep all items that aren't at index 0
// only the "Good Dog" object is at index 0, so it gets removed
let otherUpdatedPetObjects = otherLoadedPetObjects.filter(
  (pet, index) => index !== 0
);

console.log("Second update:", otherUpdatedPetObjects);

// Helper functions to load an save arrays and objects

function persist(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function load(key) {
  return JSON.parse(localStorage.getItem(key));
}