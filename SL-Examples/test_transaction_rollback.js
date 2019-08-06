
/**
 * Create an item twice in one transaction and rollback this transaction.
 *
 */

var ServiceLayerContext = require('ServiceLayerContext.js');
var Item = require('EntityType/Item.js');
var http = require('HttpModule.js');

var now = new Date();
var one_item_code = "my_item_" + now.getMonth() + now.getDate();


/*
 * Entry function for the http POST request.
 *
 * POST /b1s/v1/script/{{partner name}}/{{script name}}
 * 
 */

function POST() {
    var slContext = new ServiceLayerContext();
    slContext.startTransaction();
    
    var item = new Item();
    item.ItemCode = one_item_code;
    
    console.log("the first time to add item:" + item.ItemCode);
    var res = slContext.Items.add(item);
    if (!res.isOK()) {
        return slContext.rollbackTransaction(function () {
            throw http.ScriptException(http.HttpStatus.HTTP_BAD_REQUEST, "Item already exist!!!");
        });
    }
    
    console.log("the second time to add item:" + item.ItemCode);
    res = slContext.Items.add(item);
    
    if (res.isOK()) {//duplicate exception is expected
        slContext.commitTransaction(function () {
            throw http.ScriptException(http.HttpStatus.HTTP_INTERNAL_SERVER_ERROR, "No way to be here!!!");
        });
    }
    
    slContext.rollbackTransaction();
    if (slContext.Items.get(one_item_code).isOK()) {//Check if the item is created.
        throw http.ScriptException(http.HttpStatus.HTTP_INTERNAL_SERVER_ERROR, "Item should not exist!!!");
    }
    http.response.send(http.HttpStatus.HTTP_OK, { "result": "rollback", "cause": "duplicate exception: " + res.getErrMsg() });
}

