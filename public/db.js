const indexedDB = 
window.indexedDB ||
  window.mozIndexedDB ||
  window.webkitIndexedDB ||
  window.msIndexedDB;

let db;

const budgetDB = "budgetDB";
const request = indexedDB.open('budgetDB', 1);


request.onsuccess = event => {
    
var data = event.target.result;
    console.log(event.result);
    
var requestUpdate = objectStore.put(data);
    requestUpdate.onsuccess = function(event) {
console.log(event) };
  };
  request.onsuccess = event => {
    console.log(event.result);
  };
var objectStore = db.createObjectStore("customers", { keyPath: "name" });

  objectStore.createIndex("name", "name", { unique: false}, { autoIncrement : true });
  objectStore.createIndex("email", "email", { unique: true }, { autoIncrement : true });
 objectStore.transaction.oncomplete = function(event) {
var customerObjectStore = db.transaction("customers", "readwrite").objectStore("customers");
    customerData.forEach(function(customer) {
      customerObjectStore.add(customer); }); };
const customerData = [
    {name: "Tom", email: "tom@tom.com"},
    {name: "Sandra", email: "Sandra@sandra.com"}
];
db.transaction("customers").objectStore("customers").get("Tom").onsuccess = function(event) {
    console.log("The Customer's email is: " + event.target.result.email);
  };
objectStore.openCursor().onsuccess = function(event) {
    var cursor = event.target.result;
    if (cursor) {
      console.log("Name for " + cursor.key + " is " + cursor.value.name);
      cursor.continue();
    }};

