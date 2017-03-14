'use strict';

var openingHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Total'];

var body = document.getElementsByTagName('body')[0];

var firstAndPike = {
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
  storeLocation: '1st and Pike',
  saleEachHour: [],
  randomCust: function () {
    return Math.floor(Math.random() * (  ((this.maxCust - this.minCust) + 1) - this.minCust));
  },
  salePerDay: function () {
    var totalCookies = 0;
    for (var i = 0; i < openingHours.length -1; i++) {
      this.saleEachHour.push(Math.round(this.randomCust() * this.avgCookieSale));
      totalCookies += this.saleEachHour[i];
    }
    this.saleEachHour.push(totalCookies);
    console.log(this.saleEachHour);
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
  //  console.log(hourList);

    body.appendChild(storeList);
  }
}

firstAndPike.creatListItems();

/*var seaTacAirport = {
  minCust: 3,
  maxCust: 24,
  avgCookieSale: 1.2,
  randomCust: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },
  saleEachHour: function () {
    var totalSaleByHour = [];
    for (var i = 0; i < openingHours; i++) {
      totalSaleByHour.push(Math.round(this.randomCust() * this.avgCookieSale));
    }
    return totalSaleByHour;
  }
}

var seattleCenter = {
  minCust: 11,
  maxCust: 38,
  avgCookieSale: 3.7,
  randomCust: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },
  saleEachHour: function () {
    var totalSaleByHour = [];
    for (var i = 0; i < openingHours; i++) {
      totalSaleByHour.push(Math.round(this.randomCust() * this.avgCookieSale));
    }
    return totalSaleByHour;
  }
}

var capitalHill = {
  minCust: 20,
  maxCust: 38,
  avgCookieSale: 2.3,
  randomCust: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },
  saleEachHour: function () {
    var totalSaleByHour = [];
    for (var i = 0; i < openingHours; i++) {
      totalSaleByHour.push(Math.round(this.randomCust() * this.avgCookieSale));
    }
    return totalSaleByHour;
  }
}

var alki = {
  minCust: 2,
  maxCust: 16,
  avgCookieSale: 4.6,
  randomCust: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },
  saleEachHour: function () {
    var totalSaleByHour = [];
    for (var i = 0; i < openingHours; i++) {
      totalSaleByHour.push(Math.round(this.randomCust() * this.avgCookieSale));
    }
    return totalSaleByHour;
  }
}*/
