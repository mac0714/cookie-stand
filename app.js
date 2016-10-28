function getDailySalesProjections(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var time = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var store1 = {
  name: '1st and Pike',
  minCustomer: 23,
  maxCustomer: 65,
  avgCookies: 6.3,
  dailySales: [],
  dailyCustomers: [],
  calculateNumberCustomers: function() {
    return Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer;
  },
  calculateHourlySales: function(customer) {
    return customer * this.avgCookies;
  },
  calculateDailySale: function() {
    for(var i = 0; i < time.length; i++) {
      var customerThisHours = this.calculateNumberCustomers();
      console.log(time[i], customerThisHours);
      this.dailyCustomers.push(customerThisHours);
      var salesThisHours = this.calculateHourlySales(customerThisHours);
      console.log(salesThisHours);
      this.dailySales.push(salesThisHours);
    }
    console.log(this.dailyCustomers);
    console.log(this.dailySales);
  }
};
var store2 = {
  name: 'SeaTac Airport',
  minCustomer: 3,
  maxCustomer: 24,
  avgCookies: 1.2,
  dailySales: [],
  dailyCustomers: [],
  calculateNumberCustomers: function() {
    return Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer;
  },
  calculateHourlySales: function(customer) {
    return customer * this.avgCookies;
  },
  calculateDailySale: function() {
    for(var i = 0; i < time.length; i++) {
      var customerThisHours = this.calculateNumberCustomers();
      console.log(time[i], customerThisHours);
      this.dailyCustomers.push(customerThisHours);
      var salesThisHours = this.calculateHourlySales(customerThisHours);
      console.log(salesThisHours);
      this.dailySales.push(salesThisHours);
    }
    console.log(this.dailyCustomers);
    console.log(this.dailySales);
  }
};
var store3 = {
  name: 'Seattle Center',
  minCustomer: 11,
  maxCustomer: 38,
  avgCookies: 3.7,
  dailySales: [],
  dailyCustomers: [],
  calculateNumberCustomers: function() {
    return Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer;
  },
  calculateHourlySales: function(customer) {
    return customer * this.avgCookies;
  },
  calculateDailySale: function() {
    for(var i = 0; i < time.length; i++) {
      var customerThisHours = this.calculateNumberCustomers();
      console.log(time[i], customerThisHours);
      this.dailyCustomers.push(customerThisHours);
      var salesThisHours = this.calculateHourlySales(customerThisHours);
      console.log(salesThisHours);
      this.dailySales.push(salesThisHours);
    }
    console.log(this.dailyCustomers);
    console.log(this.dailySales);
  }
};

var store4 = {
  name: 'Capital Hill',
  minCustomer: 20,
  maxCustomer: 38,
  avgCookies: 2.3,
  dailySales: [],
  dailyCustomers: [],
  calculateNumberCustomers: function() {
    return Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer;
  },
  calculateHourlySales: function(customer) {
    return customer * this.avgCookies;
  },
  calculateDailySale: function() {
    for(var i = 0; i < time.length; i++) {
      var customerThisHours = this.calculateNumberCustomers();
      console.log(time[i], customerThisHours);
      this.dailyCustomers.push(customerThisHours);
      var salesThisHours = this.calculateHourlySales(customerThisHours);
      console.log(salesThisHours);
      this.dailySales.push(salesThisHours);
    }
    console.log(this.dailyCustomers);
    console.log(this.dailySales);
  }
};

var store5 = {
  name: 'Seattle Center',
  minCustomer: 2,
  maxCustomer: 16,
  avgCookies: 4.6,
  dailySales: [],
  dailyCustomers: [],
  calculateNumberCustomers: function() {
    return Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer;
  },
  calculateHourlySales: function(customer) {
    return customer * this.avgCookies;
  },
  calculateDailySale: function() {
    for(var i = 0; i < time.length; i++) {
      var customerThisHours = this.calculateNumberCustomers();
      console.log(time[i], customerThisHours);
      this.dailyCustomers.push(customerThisHours);
      var salesThisHours = this.calculateHourlySales(customerThisHours);
      console.log(salesThisHours);
      this.dailySales.push(salesThisHours);
    }
    console.log(this.dailyCustomers);
    console.log(this.dailySales);
  }
};
