function Unit (number, building, sqft, rent) {
  this.number = number;
  this.building = building;
  this.sqft = sqft;
  this.rent = rent;
  // set params above as instance variables
  // Unit has also a tenant
  this.tenant = null;
}

Unit.prototype.available = function(){
  // Returns true if unit is available, otherwise false
  // if (this.tenant.length === 0) {
  //   return true;
  // }
  // else {
  //   return false;
  // }
  return (!this.tenant);
};

// export the module
module.exports = Unit;

