
/**
 * Test for runtime exception
 * 
 */

var ServiceLayerContext = require('ServiceLayerContext.js');
//var Bank = require('EntityType/Bank.js');


/**
 * Entry function for the http POST request.
 * POST /b1s/v1/script/{{partner name}}/{{script name}}
 * 
 */
function POST() {
    var bank = new Bank(); //exception happens as missing require Bank.js
    bank.BankCode = 'bank01';
    var res = new ServiceLayerContext().Banks.add(bank);
    if (!res.isOK) {
        console.log("add bank failure");
    }
}
