

/**
 * Perform the CRUD operations on an item from the request payload
 * 
 */

var ServiceLayerContext = require('ServiceLayerContext.js');
var Item = require('EntityType/Item.js');
var http = require('HttpModule.js');

/**
 * Entry function for the http POST request.
 * 
 * POST /b1s/v1/script/{{partner name}}/{{script name}}
 * 
 * {"ItemCode": "test_item_0702"}
 */
function POST() {
    var jsonObj = http.request.getJsonObj();
    if (!jsonObj) {
        throw http.ScriptException(http.HttpStatus.HTTP_BAD_REQUEST, "fail to get the content of JSON format from the request payload");
    }
    
    var slContext = new ServiceLayerContext();
    var dataSrvRes = slContext.Items.add(jsonObj);
    if (dataSrvRes.isOK()) {
        http.response.send(http.HttpStatus.HTTP_CREATED, dataSrvRes.body);
    } else {
        http.response.send(http.HttpStatus.HTTP_BAD_REQUEST, dataSrvRes.body);
    }
}


/**
 * Entry function for the http GET request.
 * 
 * GET /b1s/v1/script/{{partner name}}/{{script name}}('test_item_0702')
 * 
 */
function GET() {
    var key = http.request.getEntityKey();
    if (!key) {
        throw http.ScriptException(http.HttpStatus.HTTP_BAD_REQUEST, "Fail to get entity key from request URL");
    }
    
    var slContext = new ServiceLayerContext();
    var dataSrvRes = slContext.Items.get(key);
    if (!dataSrvRes.isOK()) {
        http.response.send(http.HttpStatus.HTTP_NOT_FOUND, dataSrvRes.body);
    } else {
        http.response.send(http.HttpStatus.HTTP_OK, dataSrvRes.body);
    }
}

/**
 * Entry function for the http PATCH request.
 * 
 * PATCH /b1s/v1/script/{{partner name}}/{{script name}}('test_item_0702')
 * 
 * {"ItemName": "new name"}
 */
function PATCH() {
    var key = http.request.getEntityKey();
    if (!key) {
        throw http.ScriptException(http.HttpStatus.HTTP_BAD_REQUEST, "Fail to get entity key from request URL");
    }

    var jsonObj = http.request.getJsonObj();
    if (!jsonObj) {
        throw http.ScriptException(http.HttpStatus.HTTP_BAD_REQUEST, "fail to get content of JSON format from the request payload");
    }

    var slContext = new ServiceLayerContext();
    var dataSrvRes = slContext.Items.update(jsonObj, key);
    if (dataSrvRes.isOK()) {
        http.response.send(http.HttpStatus.HTTP_NO_CONTENT, dataSrvRes.body);
    } else {
        http.response.send(http.HttpStatus.HTTP_BAD_REQUEST, dataSrvRes.body);
    }
}

/**
 * Entry function for the http DELETE request. 
 * 
 * DELETE /b1s/v1/script/{{partner name}}/{{script name}}('test_item_0702')
 * 
 */
function DELETE() {
    var key = http.request.getEntityKey();
    if (!key) {
        throw http.ScriptException(http.HttpStatus.HTTP_BAD_REQUEST, "Fail to get entity key from request URL");
    }
    var slContext = new ServiceLayerContext();
    var dataSrvRes = slContext.Items.remove(key);
    if (dataSrvRes.isOK()) {
        http.response.send(http.HttpStatus.HTTP_NO_CONTENT, dataSrvRes.body);
    } else {
        http.response.send(http.HttpStatus.HTTP_BAD_REQUEST, dataSrvRes.body);
    }
}
