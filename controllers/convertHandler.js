function checkfraction(value) {
  let splitArray = value.split("/");
  if (splitArray.length > 2) {
    return undefined;
  } else {
    return splitArray;
  }
}

function checkDecimal(value) {
  let splitArray = value.split(".");
  if (splitArray.length > 2) {
    return undefined;
  } else {
    return value;
  }
}

function ConvertHandler() {

  this.getNum = function(input) {
    //number can be whole number
    //number can be decimal number
    //number can be fraction number
    //number can have multiple fractions
    //number can have multiple decimals
    let result;
    let val = input.match(/[.\d\/]+/g) || ["1"];//separate the number from text
    let frac = checkfraction(val[0]);
    if (!frac) {
      return undefined;
    }
    // let num1 = checkDecimal(frac[0]);
    let num1 = frac[0];
    let num2 = frac[1] || 1;
    //fraction value may have decimal points
    // num2 = checkDecimal(num2);
    if (isNaN(num1) || isNaN(num2)) {
      return undefined;
    }

    result = parseFloat(num1) / parseFloat(num2);
    return result;
  };

  this.getUnit = function(input) {
    //unit may be in lowercase or uppercase
    //unit may not be gal, lbs, mi, L, kg, km
    let result;
    let regex = /[a-zA-Z]+/g;
    if (regex.test(input)) {
      var unit = (input.match(regex))[0].toLowerCase();
      if (unit == "gal") {
        result = "gal";
      } else if (unit == "lbs") {
        result = "lbs"
      } else if (unit == "mi") {
        result = "mi"
      } else if (unit == "l") {
        result = "L"
      } else if (unit == "kg") {
        result = "kg"
      } else if (unit == "km") {
        result = "km"
      } else {
        return undefined;
      }
    } else {
      return "invalid unit";
    }

    return result;
  };

  this.getReturnUnit = function(initUnit) {
    let result;
    // initUnit = initUnit.toLowerCase();
    if (initUnit == "gal") {
      result = "L";
    } else if (initUnit == "lbs") {
      result = "kg"
    } else if (initUnit == "mi") {
      result = "km"
    } else if (initUnit == "L") {
      result = "gal"
    } else if (initUnit == "kg") {
      result = "lbs"
    } else if (initUnit == "km") {
      result = "mi"
    } else{
      return "invalid unit";
    }
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    // unit = unit.toLowerCase();
    if (unit == "gal") {
      result = "gallons";
    } else if (unit == "lbs") {
      result = "pounds"
    } else if (unit == "mi") {
      result = "miles"
    } else if (unit == "L") {
      result = "liters"
    } else if (unit == "kg") {
      result = "kilograms"
    } else if (unit == "km") {
      result = "kilometers"
    } else {
      result = "don't know"
    }

    return result;
  };

  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    // initUnit = initUnit.toLowerCase();
    if (initUnit == "gal") {
      result = initNum * galToL;
    } else if (initUnit == "lbs") {
      result = initNum * lbsToKg;
    } else if (initUnit == "mi") {
      result = initNum * miToKm;
    } else if (initUnit == "L") {
      result = initNum / galToL;
    } else if (initUnit == "kg") {
      result = initNum / lbsToKg;
    } else if (initUnit == "km") {
      result = initNum / miToKm;;
    } else {
      return "invalid number and unit";
    }
    return parseFloat(result.toFixed(5));
  };

  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    // result = initNum+" "+this.spellOutUnit(initUnit)+" converts to "+returnNum+" "+this.spellOutUnit(returnUnit);
    result = `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
    return result;
  };

}

module.exports = ConvertHandler;
