'use strict';

var time = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function Store(storeName, minCustomer, maxCustomer, avgCookiesSale) {
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
    //  Calculate all the cookie sales
    this.calcCookieSales();
    var h2 = document.createElement('h2');
    h2.innerText = this.name;
    var main = document.getElementsByTagName('main')[0];
    main.appendChild(h2);

    // Attaching list items with cookie sales per hour
    var ul = document.createElement('ul');
    for (var i = 0; i < time.length; i++) {
      var li = document.createElement('li');
      li.innerText = time[i] + ': ' + this.daily[i] + ' cookies';
      ul.appendChild(li);
    }
    var li = document.createElement('li');
    li.innerText = this.total;
    ul.appendChild(li);
    // Append ul to the DOM
    main.appendChild(ul);
  };
  this.calcCookieSales = function(){
    console.log('calcCookieSales');
    for (var i = 0; i < time.length; i++) {
      var hourlyTotal = Math.floor(this.randomNumCust() * this.cookies);
      this.total = hourlyTotal + this.total;
      this.daily.push(hourlyTotal);
    }

    // Calculating and attaching total cookie sales
    // var totalSales = 0;
    // for (var i = 0; i < this.daily.length; i++){
    //   totalSales += this.daily[i];
    // }
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

store1.renderHTMLSales();
store2.renderHTMLSales();
store3.renderHTMLSales();
store4.renderHTMLSales();
store5.renderHTMLSales();

var table = document.createElement('table');
main.appendChild(table);
var tr = document.createElement('tr');
table.appendChild(tr);
var td = document.createElement('td');
for (var i = 0; i < time.length; i++) {
  var td = document.createElement('td');
  td.innerText = time[i];
  tr.appendChild(td);
}
var storeLocation = ['1st and pike', 'SeaTac Airport', 'Seattle Center', 'Capital Hill', 'Alki'];
document.write('<table>');
document.write('<tr><th>Location</th></tr>');

for(var i = 0; i < storeLocation.length; i++) {
  document.write('<tr><td>' + storeLocation[i] + '</td></tr>');
}

document.while('</table>') ;
