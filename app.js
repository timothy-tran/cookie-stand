'use strict';

var firstAndPike = {
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
  randomCust: function () {
    do {
      randonNum = Math.floor((Math.random() * 10) + 1);
    } while (randomNum < minCust || randomNum > maxCust);
    return randomNum;
  }
  totalSale: function () {
    for (var i = 0; i < 15; i++) {
      totalSaleByHour[i] = randomCust() * avgCookieSale;
    }
  }
}

/*
var seattleCenter = {
  minCust: 11;
  maxCust: 38;
  avgCookieSale: 3.7;
  for (var i = 0; i < 15; i++) {
    var randonNum = Math.floor((Math.random() * 10) + 1);
    totalSale[i] = randonNum * avgCookieSale;
  }
}

var capitalHill = {
  minCust: 20;
  maxCust: 38;
  avgCookieSale: 2.3;
  for (var i = 0; i < 15; i++) {
    var randonNum = Math.floor((Math.random() * 10) + 1);
    totalSale[i] = randonNum * avgCookieSale;
  }
}

var alki = {
  minCust: 2;
  maxCust: 16;
  avgCookieSale: 4.6;
  for (var i = 0; i < 15; i++) {
    var randonNum = Math.floor((Math.random() * 10) + 1);
    totalSale[i] = randonNum * avgCookieSale;
  }
}
*/
