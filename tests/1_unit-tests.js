const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){

    test("Whole Number Input", ()=>{
        let input = "89mi";
        assert.equal(convertHandler.getNum(input), 89);
    })

    test("Decimal Number Input", ()=>{
        let input = "8.9mi";
        assert.equal(convertHandler.getNum(input), 8.9);
    })

    test("Fraction Number Input", ()=>{
        let input = "1/2mi";
        assert.equal(convertHandler.getNum(input), 0.5);
    })

    test("Fraction Number with decimal Input", ()=>{
        let input = "1.5/2mi";
        assert.equal(convertHandler.getNum(input), 0.75);
    })

    test("Double fraction Input", ()=>{
        let input = "1.5/2/3mi";
        assert.equal(convertHandler.getNum(input), undefined);
    })

    test("No Input error", ()=>{
        let input = "";
        assert.equal(convertHandler.getNum(input), 1);
    })

    test("Valid input unit", ()=>{
        let input = "32mi";
        assert.equal(convertHandler.getUnit(input), "mi");
    })

    test("Invalid input unit", ()=>{
        let input = "32emi";
        assert.equal(convertHandler.getUnit(input), undefined);
    })

    test("Correct return unit", ()=>{
        let input = "mi";
        assert.equal(convertHandler.getReturnUnit(input), "km");
    })

    test("Spellout correct unit", ()=>{
        let input = "mi";
        assert.equal(convertHandler.spellOutUnit(input), "miles");
    })

    test("Convert gal to L", ()=>{
        let num = 20;
        let unit = "gal";
        const galToL = 3.78541;
        assert.equal(convertHandler.convert(num, unit), (num*galToL).toFixed(5));
    })

    test("Convert L to gal", ()=>{
        let num = 20;
        let unit = "L";
        const galToL = 3.78541;
        assert.equal(convertHandler.convert(num, unit), (num/galToL).toFixed(5));
    })

    test("Convert mi to km", ()=>{
        let num = 20;
        let unit = "mi";
        const miToKm = 1.60934;
        assert.equal(convertHandler.convert(num, unit), (num*miToKm).toFixed(5));
    })

    test("Convert km to mi", ()=>{
        let num = 20;
        let unit = "km";
        const miToKm = 1.60934;
        assert.equal(convertHandler.convert(num, unit), (num/miToKm).toFixed(5));
    })

    test("Convert lbs to kg", ()=>{
        let num = 20;
        let unit = "lbs";
        const lbsToKg = 0.453592;
        assert.equal(convertHandler.convert(num, unit), (num*lbsToKg).toFixed(5));
    })

    test("Convert kg to lbs", ()=>{
        let num = 20;
        let unit = "kg";
        const lbsToKg = 0.453592;
        assert.equal(convertHandler.convert(num, unit), (num/lbsToKg).toFixed(5));
    })

});