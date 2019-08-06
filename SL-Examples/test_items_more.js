
/**
 * Perform the CRUD operations on an item from existing data.
 * 
 */
var ServiceLayerContext = require('ServiceLayerContext.js');
var Item = require('EntityType/Item.js');
var http = require('HttpModule.js');

var now = new Date();
var test_item_code = "test_item_" + now.getMonth() + now.getDate();


/* 
 * Entry function for the http POST request.
 *
 * POST /b1s/v1/script/{{partner name}}/{{script name}}
 * 
 */
function POST() {
    var slContext = new ServiceLayerContext();
    var ret = [];
    
    var item = new Item();
    item.ItemCode = test_item_code;
    
    var dataSrvRes = slContext.Items.add(item);
    if (!dataSrvRes.isOK()) {
        throw http.ScriptException(http.HttpStatus.HTTP_BAD_REQUEST, "create entity failure")
    }
    ret.push({ "operation": dataSrvRes.operation, "status": dataSrvRes.status });
    
    var key = test_item_code;
    var dataSrvRes = slContext.Items.get(key);
    if (!dataSrvRes.isOK()) {
        throw http.ScriptException(http.HttpStatus.HTTP_INTERNAL_SERVER_ERROR, "retrieve entity failure")
    }
    ret.push({ "operation": dataSrvRes.operation, "status": dataSrvRes.status });
    
    item.ItemName = 'new_item_name';
    dataSrvRes = slContext.update("Items", item, key);//equivalent to slContext.Items.update(item, key);
    if (!dataSrvRes.isOK()) {
        throw http.ScriptException(http.HttpStatus.HTTP_INTERNAL_SERVER_ERROR, "update entity failure")
    }
    ret.push({ "operation": dataSrvRes.operation, "status": dataSrvRes.status });
    
    dataSrvRes = slContext.remove("Items", key);//equivalent to slContext.Items.remove(key);
    if (!dataSrvRes.isOK()) {
        throw http.ScriptException(http.HttpStatus.HTTP_INTERNAL_SERVER_ERROR, "delete entity failure")
    }
    ret.push({ "operation": dataSrvRes.operation, "status": dataSrvRes.status });
    
    http.response.send(http.HttpStatus.HTTP_OK, ret);
}
