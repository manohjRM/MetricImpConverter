const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){

  suite('Testing input number', ()=>{
    test("Whole Number Input", (done)=>{
        let input = "89mi";
        assert.equal(convertHandler.getNum(input), 89);
        done();
    })

    test("Decimal Number Input", (done)=>{
        let input = "8.9mi";
        assert.equal(convertHandler.getNum(input), 8.9);
      done();
    })

    test("Fraction Number Input", (done)=>{
        let input = "1/2mi";
        assert.equal(convertHandler.getNum(input), 0.5);
      done();
    })

    test("Fraction Number with decimal Input", (done)=>{
        let input = "1.5/2mi";
        assert.equal(convertHandler.getNum(input), 0.75);
      done();
    })

    test("Double fraction Input", (done)=>{
        let input = "1.5/2/3mi";
        assert.equal(convertHandler.getNum(input), undefined);
      done();
    })

    test("No Input error", (done)=>{
        let input = "";
        assert.equal(convertHandler.getNum(input), 1);
      done();
    })
  })

  suite('Testing input unit', ()=>{
    test("Valid input unit", (done)=>{
        let input = "32mi";
        assert.equal(convertHandler.getUnit(input), "mi");
      done();
    })

    test("Invalid input unit", (done)=>{
        let input = "32emi";
        assert.equal(convertHandler.getUnit(input), undefined);
      done();
    })

    test("Correct return unit", (done)=>{
        let input = "mi";
        assert.equal(convertHandler.getReturnUnit(input), "km");
      done();
    })

    test("Spellout correct unit", (done)=>{
        let i = ['mi','lbs','kg','km','L','gal'];
        let j = ['miles','pounds','kilograms','kilometers','liters','gallons']
        let input = "mi";
        assert.equal(convertHandler.spellOutUnit(input), "miles");
        i.forEach((element, idx)=>{
          assert.equal(convertHandler.spellOutUnit(element), j[idx]);
        })
      done();
    })
  })

  suite('Testing conversion logics', ()=>{
    test("Convert gal to L", (done)=>{
        let num = 20;
        let unit = "gal";
        const galToL = 3.78541;
        assert.equal(convertHandler.convert(num, unit), (num*galToL).toFixed(5));
      done();
    })

    test("Convert L to gal", (done)=>{
        let num = 20;
        let unit = "L";
        const galToL = 3.78541;
        assert.equal(convertHandler.convert(num, unit), (num/galToL).toFixed(5));
      done();
    })

    test("Convert mi to km", (done)=>{
        let num = 20;
        let unit = "mi";
        const miToKm = 1.60934;
        assert.equal(convertHandler.convert(num, unit), (num*miToKm).toFixed(5));
      done();
    })

    test("Convert km to mi", (done)=>{
        let num = 20;
        let unit = "km";
        const miToKm = 1.60934;
        assert.equal(convertHandler.convert(num, unit), (num/miToKm).toFixed(5));
      done();
    })

    test("Convert lbs to kg", (done)=>{
        let num = 20;
        let unit = "lbs";
        const lbsToKg = 0.453592;
        assert.equal(convertHandler.convert(num, unit), (num*lbsToKg).toFixed(5));
      done();
    })

    test("Convert kg to lbs", (done)=>{
        let num = 20;
        let unit = "kg";
        const lbsToKg = 0.453592;
        assert.equal(convertHandler.convert(num, unit), (num/lbsToKg).toFixed(5));
      done();
    })
  })

});