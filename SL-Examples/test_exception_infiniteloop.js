
/**
 * Test for infinite loop. 
 * 
 * This loop would be terminated in a given duration (e.g. 10 seconds) from service layer.
 */

var ServiceLayerContext = require('ServiceLayerContext.js');


/**
 * Entry function for the http POST request.
 * POST /b1s/v1/script/{{partner name}}/{{script name}}
 * 
 */
function POST() {
    var i = 0;
    var j = 1;
    while (i < j) {
        console.log("in the loop");
    }
}
