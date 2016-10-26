'use strict';

var time = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var allStores = [];
var table = document.getElementById('tbl');
function Store(storeName, minCustomer, maxCustomer, avgCookiesSale) {
  allStores.push(this);
  console.log('allStores', allStores);
  console.log('this', this);
  console.log('Store', storeName, minCustomer, maxCustomer, avgCookiesSale);
  this.name = storeName;
  this.minCust = minCustomer;
  this.maxCust = maxCustomer;
  this.cookies = avgCookiesSale;
  this.daily = [];
  this.total = 0;
  this.randomNumCust = function() {
    console.log('randomNumCust');
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  };
  this.renderHTMLSales = function(){
    console.log('renderHTMLSales');
    this.calcCookieSales();
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    td.innerText = this.name;
    tr.appendChild(td);
    for (var i = 0; i < time.length; i++) {
      var td = document.createElement('td');
      td.innerText = this.daily[i];
      tr.appendChild(td);
    }
    var td = document.createElement('td');
    td.innerText = this.total;
    tr.appendChild(td);
    table.appendChild(tr);
  };
  this.calcCookieSales = function(){
    console.log('calcCookieSales');
    for (var i = 0; i < time.length; i++) {
      var hourlyTotal = Math.floor(this.randomNumCust() * this.cookies);
      this.total += hourlyTotal;
      this.daily[i] = hourlyTotal;
    }
  };
};

var h1 = document.createElement('h1');
h1.innerText = 'All Cookie Stores';
var main = document.getElementsByTagName('main')[0];
main.appendChild(h1);

var store1 = new Store('1st and Pike', 23, 65, 6.3);
var store2 = new Store('SeaTac Airport', 3, 24, 1.2);
var store3 = new Store('Seattle Center', 11, 38, 3.7);
var store4 = new Store('Capital Hill', 20, 38, 2.3);
var store5 = new Store('Alki', 2, 16, 4.6);
console.log('allStores: ', allStores);

main.appendChild(table);
var tr = document.createElement('tr');
table.appendChild(tr);
var td = document.createElement('td');
console.log('td', td);
tr.appendChild(td);
for (var i = 0; i < time.length; i++) {
  var td = document.createElement('td');
  td.innerText = time[i];
  tr.appendChild(td);
}
var td = document.createElement('td');
td.innerText = 'Total';
tr.appendChild(td);
console.log('td', td);
for (var i = 0; i < allStores.length; i++) {
  allStores[i].renderHTMLSales();
}
