
/**
 * Test for users' exception
 * 
 */

var ServiceLayerContext = require('ServiceLayerContext.js');
var Order = require('EntityType/Document.js');
var http = require('HttpModule.js');


/**
 * Entry function for the http POST request.
 * POST /b1s/v1/script/{{partner name}}/{{script name}}
 * 
 */
function POST() {
    var slContext = new ServiceLayerContext();
    var res = slContext.Orders.get(10000);
    if (!res.isOK()) {
        throw new http.ScriptException(http.HttpStatus.HTTP_NOT_FOUND, "the given order is not found");
    }
    http.response.send(http.HttpStatus.HTTP_OK, "the given order is found");
}
