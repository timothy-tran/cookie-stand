'use strict';

var openingHours = ['Store/Hour', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var storeName = [['1st and Pike', 23, 65, 6.3], ['SeaTac Airport', 3, 24, 1.2], ['Seattle Center', 11, 38, 3.7], ['Capital Hill', 20, 38, 2.3], ['Alki', 2, 16, 4.6]];

var body = document.getElementsByTagName('body')[0];
var myTable = document.createElement('table');
var elForm = document.getElementById('inputForm');
body.appendChild(myTable);
var tableB = document.createElement('tbody');
//var tRow = document.createElement('tr');
var totalByHour = [];
var totalSaleHolder = [];
var sumSaleArray = [];
var hourList;

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
}

tableHeading();

function CookiesStore (location, min, max, avg) {

  this.minCust = min;
  this.maxCust = max;
  this.avgCookieSale = avg;
  this.storeLocation = location;
  this.saleEachHour = [];
  this.randomCust = function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + 1) + this.minCust;
  };
  this.salePerHour = function () {
    for (var i = 0; i < openingHours.length -1; i++) {
      this.saleEachHour.push(Math.round(this.randomCust() * this.avgCookieSale));
    }
  };

  this.createStore = function() {
    this.salePerHour();
    var tableRow = document.createElement('tr');
    var storeArea = document.createElement('th');
    storeArea.textContent = this.storeLocation;
    tableRow.appendChild(storeArea);
    for (var i = 0; i < openingHours.length - 1; i++) {
      var hourList = document.createElement('td');
      hourList.textContent = this.saleEachHour[i];
      tableRow.appendChild(hourList);
    };
    tableB.appendChild(tableRow);
    myTable.appendChild(tableB);
  }
}

function newStore () {
  for (var k = 0; k < openingHours.length - 1; k++) {
    totalByHour[k] = 0;
  }
  for (var i = 0; i < storeName.length; i++) {
    var makeStore = new CookiesStore(storeName[i][0], storeName[i][1], storeName[i][2], storeName[i][3]);
    makeStore.createStore();
    sumSaleArray = makeStore.saleEachHour;
    addStore();
  };
totalSale();
}

function addStore () {
  for (var j = 0; j < openingHours.length - 1; j++) {
      totalByHour[j] += sumSaleArray[j];
  };
}

function submitForm(event) {
  event.preventDefault();
  var newStoreForm = event.target;
  var newPlace = event.target.addName.value;
  var minNum = event.target.addMin.value;
  var maxNum = event.target.addMax.value;
  var avgNum = event.target.addAvg.value;
  if (minNum > maxNum) {
    alert('The Number of Minimun Customer can\'t be greater than Number of Maximun Customer.');
  } else {
    var myForm = new CookiesStore(newPlace, minNum, maxNum, avgNum);
    myForm.createStore();
    alert('The new store is successfully added!');
    sumSaleArray = myForm.saleEachHour;
    addStore();
    totalSale();
  }
  elForm.reset();
}

function totalSale () {
  var tRow = document.createElement('tr');
  var storeArea = document.createElement('th');
  storeArea.textContent = 'Total';
  tRow.appendChild(storeArea);
  for (var i = 0; i < openingHours.length - 1; i++) {
    var hourList = document.createElement('td');
    hourList.textContent = totalByHour[i];
    tRow.appendChild(hourList);
  };
  tableB.appendChild(tRow);
  myTable.appendChild(tableB);
};

newStore();
elForm.addEventListener('submit', submitForm);
