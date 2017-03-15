'use strict';

var openingHours = [' ', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var storeName = ['1st and Pike', 'SeaTac Airport', 'Seattle Center', 'Capital Hill', 'Alki'];
var body = document.getElementsByTagName('body')[0];
var myTable = document.createElement('table');

function tableHeading () {
  var tableHead = document.createElement('thead');
  var tableRow = document.createElement('tr');
  for (var i = 0; i < openingHours.length; i++) {
    var storeHour = document.createElement('th');
    storeHour.textContent = openingHours[i];
    tableRow.appendChild(storeHour);
  }
  tableHead.appendChild(tableRow);
  myTable.appendChild(tableHead);
  body.appendChild(myTable);
}

tableHeading();
/*
function CookiesStore (min, max, avg, location) {
  this.minCust = min;
  this.maxCust = max;
  this.avgCookieSale = avg;
  this.storeLocation = location;
  this.saleEachHour = [];
  this.randomCust = function () {
    return Math.floor(Math.random() * (  ((this.maxCust - this.minCust) + 1) + this.minCust));
  };
  this.salePerDay = function () {
    var totalCookies = 0;
    for (var i = 0; i < openingHours.length -1; i++) {
      this.saleEachHour.push(Math.round(this.randomCust() * this.avgCookieSale));
      totalCookies += this.saleEachHour[i];
      console.log(totalCookies);
    }
    this.saleEachHour.push(totalCookies);
  };
  this.creatListItems = function() {
    this.salePerDay();

    var storeList = document.createElement('tr');
    for (var i = 0; i < openingHours.length; i++) {
      var storeName = document.createElement('th');
      storeName.textContent = this.storeName;
      body.appendChild(storeName);
      var hourList = document.createElement('td');
      hourList.textContent = openingHours[i] + ': ' + this.saleEachHour[i];
      storeList.appendChild(hourList);
    };
    body.appendChild(storeList);
  }
}

var firstAndPike = new CookiesStore(23, 65, 6.3, storeName[0]);
var seaTacAirport = new CookiesStore(3, 24, 1.2, storeName[1]);
var seattleCenter = new CookiesStore(11, 38, 3.7, storeName[2]);
var capitalHill = new CookiesStore(20, 38, 2.3, storeName[3]);
var alki = new CookiesStore(2, 16, 4.6, storeName[4]);
firstAndPike.creatListItems();
seaTacAirport.creatListItems();
seattleCenter.creatListItems();
capitalHill.creatListItems();
alki.creatListItems();
*/
