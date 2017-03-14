'use strict';

var openingHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Total'];

var storeName = ['1st and Pike', 'SeaTac Airport', 'Seattle Center', 'Capital Hill', 'Alki'];
var body = document.getElementsByTagName('body')[0];

function cookiesStore (min, max, avg, location) {
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
    var storeName = document.createElement('h2');
    storeName.textContent = this.storeLocation;
    body.appendChild(storeName);
    var storeList = document.createElement('ul');
    for (var i = 0; i < openingHours.length; i++) {
      var hourList = document.createElement('li');
      hourList.textContent = openingHours[i] + ': ' + this.saleEachHour[i] + ' cookies.';
      storeList.appendChild(hourList);
    };
    body.appendChild(storeList);
  }
}

var firstAndPike = new cookiesStore(23, 65, 6.3, storeName[0]);
firstAndPike.creatListItems();
/*
var firstAndPike = {
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
  storeLocation: '1st and Pike',
  saleEachHour: [],
  randomCust: function () {
    return Math.floor(Math.random() * (  ((this.maxCust - this.minCust) + 1) + this.minCust));
  },
  salePerDay: function () {
    var totalCookies = 0;
    for (var i = 0; i < openingHours.length -1; i++) {
      this.saleEachHour.push(Math.round(this.randomCust() * this.avgCookieSale));
      totalCookies += this.saleEachHour[i];
    }
    this.saleEachHour.push(totalCookies);
  },
  creatListItems: function() {
    this.salePerDay();
    var storeName = document.createElement('h2');
    storeName.textContent = this.storeLocation;
    body.appendChild(storeName);
    var storeList = document.createElement('ul');
    for (var i = 0; i < openingHours.length; i++) {
      var hourList = document.createElement('li');
      hourList.textContent = openingHours[i] + ': ' + this.saleEachHour[i] + ' cookies.';
      storeList.appendChild(hourList);
    };
    body.appendChild(storeList);
  }
}

var seaTacAirport = {
  minCust: 3,
  maxCust: 24,
  avgCookieSale: 1.2,
  storeLocation: 'SeaTac Airport',
  saleEachHour: [],
  randomCust: function () {
    return Math.floor(Math.random() * (  ((this.maxCust - this.minCust) + 1) + this.minCust));
  },
  salePerDay: function () {
    var totalCookies = 0;
    for (var i = 0; i < openingHours.length -1; i++) {
      this.saleEachHour.push(Math.round(this.randomCust() * this.avgCookieSale));
      totalCookies += this.saleEachHour[i];
    }
    this.saleEachHour.push(totalCookies);
  },
  creatListItems: function() {
    this.salePerDay();
    var storeName = document.createElement('h2');
    storeName.textContent = this.storeLocation;
    body.appendChild(storeName);
    var storeList = document.createElement('ul');
    for (var i = 0; i < openingHours.length; i++) {
      var hourList = document.createElement('li');
      hourList.textContent = openingHours[i] + ': ' + this.saleEachHour[i] + ' cookies.';
      storeList.appendChild(hourList);
    };
    body.appendChild(storeList);
  }
}

var seattleCenter = {
  minCust: 11,
  maxCust: 38,
  avgCookieSale: 3.7,
  storeLocation: 'Seattle Center',
  saleEachHour: [],
  randomCust: function () {
    return Math.floor(Math.random() * (  ((this.maxCust - this.minCust) + 1) + this.minCust));
  },
  salePerDay: function () {
    var totalCookies = 0;
    for (var i = 0; i < openingHours.length -1; i++) {
      this.saleEachHour.push(Math.round(this.randomCust() * this.avgCookieSale));
      totalCookies += this.saleEachHour[i];
    }
    this.saleEachHour.push(totalCookies);
  },
  creatListItems: function() {
    this.salePerDay();
    var storeName = document.createElement('h2');
    storeName.textContent = this.storeLocation;
    body.appendChild(storeName);
    var storeList = document.createElement('ul');
    for (var i = 0; i < openingHours.length; i++) {
      var hourList = document.createElement('li');
      hourList.textContent = openingHours[i] + ': ' + this.saleEachHour[i] + ' cookies.';
      storeList.appendChild(hourList);
    };
    body.appendChild(storeList);
  }
}

var capitalHill = {
  minCust: 20,
  maxCust: 38,
  avgCookieSale: 2.3,
  storeLocation: 'Capital Hill',
  saleEachHour: [],
  randomCust: function () {
    return Math.floor(Math.random() * (((this.maxCust - this.minCust) + 1) + this.minCust));
  },
  salePerDay: function () {
    var totalCookies = 0;
    for (var i = 0; i < openingHours.length -1; i++) {
      this.saleEachHour.push(Math.round(this.randomCust() * this.avgCookieSale));
      totalCookies += this.saleEachHour[i];
    }
    this.saleEachHour.push(totalCookies);
  },
  creatListItems: function() {
    this.salePerDay();
    var storeName = document.createElement('h2');
    storeName.textContent = this.storeLocation;
    body.appendChild(storeName);
    var storeList = document.createElement('ul');
    for (var i = 0; i < openingHours.length; i++) {
      var hourList = document.createElement('li');
      hourList.textContent = openingHours[i] + ': ' + this.saleEachHour[i] + ' cookies.';
      storeList.appendChild(hourList);
    };
    body.appendChild(storeList);
  }
}

var alki = {
  minCust: 2,
  maxCust: 16,
  avgCookieSale: 4.6,
  storeLocation: 'Alki',
  saleEachHour: [],
  randomCust: function () {
    return Math.floor(Math.random() * (((this.maxCust - this.minCust) + 1) + this.minCust));
  },
  salePerDay: function () {
    var totalCookies = 0;
    for (var i = 0; i < openingHours.length -1; i++) {
      this.saleEachHour.push(Math.round(this.randomCust() * this.avgCookieSale));
      totalCookies += this.saleEachHour[i];
    }
    this.saleEachHour.push(totalCookies);
  },
  creatListItems: function() {
    this.salePerDay();
    var storeName = document.createElement('h2');
    storeName.textContent = this.storeLocation;
    body.appendChild(storeName);
    var storeList = document.createElement('ul');
    for (var i = 0; i < openingHours.length; i++) {
      var hourList = document.createElement('li');
      hourList.textContent = openingHours[i] + ': ' + this.saleEachHour[i] + ' cookies.';
      storeList.appendChild(hourList);
    };
    body.appendChild(storeList);
  }
}


firstAndPike.creatListItems();
seaTacAirport.creatListItems();
seattleCenter.creatListItems();
capitalHill.creatListItems();
alki.creatListItems();
*/
