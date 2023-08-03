function ConvertHandler() {
  
  this.getNum = function(input) {
    let val = input.match(/[.\d\/]+/g) || ["1"];
    let flag = 1;
    let result;
    let n = val[0].split("/");
    if(n.length>2){
      //will have multiple fractions
      flag = 0;
    }
    if(flag==1){
      let n1 = n[0];
      let n2 = n[1] || 1;
      let d = parseFloat(n1)/parseFloat(n2);
      if(isNaN(n1) || isNaN(n2)){
        // If the value be like 2.2.2
        result = undefined;
      }else{
        result = d;
      }
      
    }else{
      result = undefined;
    }

    return result;
  };
  
  this.getUnit = function(input) {
    let result;
    var unit = (input.match(/[\[a-zA-Z]+/g)[0]).toLowerCase();
    
    if(unit == "gal"){
      result = "gal";
    }else if(unit == "lbs"){
      result = "lbs"
    }else if(unit == "mi"){
      result = "mi"
    }else if(unit == "l"){
      result = "L"
    }else if(unit == "kg"){
      result = "kg"
    }else if(unit == "km"){
      result = "km"
    }else{
      result = undefined;
    }
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    initUnit = initUnit.toLowerCase();
    if(initUnit == "gal"){
      result = "L";
    }else if(initUnit == "lbs"){
      result = "kg"
    }else if(initUnit == "mi"){
      result = "km"
    }else if(initUnit == "l"){
      result = "gal"
    }else if(initUnit == "kg"){
      result = "lbs"
    }else if(initUnit == "km"){
      result = "mi"
    }
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    unit = unit.toLowerCase();
    if(unit == "gal"){
      result = "gallons";
    }else if(unit == "lbs"){
      result = "pounds"
    }else if(unit == "mi"){
      result = "miles"
    }else if(unit == "l"){
      result = "liters"
    }else if(unit == "kg"){
      result = "kilograms"
    }else if(unit == "km"){
      result = "kilometers"
    }else{
      result="don't know"
    }
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    initUnit = initUnit.toLowerCase();
    if(initUnit == "gal"){
      result = initNum*galToL;
    }else if(initUnit == "lbs"){
      result = initNum*lbsToKg;
    }else if(initUnit == "mi"){
      result = initNum*miToKm;
    }else if(initUnit == "l"){
      result = initNum/galToL;
    }else if(initUnit == "kg"){
      result = initNum/lbsToKg;
    }else if(initUnit == "km"){
      result = initNum/miToKm;;
    }else{
      result = undefined;
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
