'use strict';

var openingHours = 15;

var firstAndPike = {
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
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
  minCust: 11;
  maxCust: 38;
  avgCookieSale: 3.7;
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
  minCust: 20;
  maxCust: 38;
  avgCookieSale: 2.3;
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
  minCust: 2;
  maxCust: 16;
  avgCookieSale: 4.6;
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
