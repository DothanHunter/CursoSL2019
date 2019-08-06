
/**
 * Perform the CRUD operations on an Order from existing data
 */
var ServiceLayerContext = require('ServiceLayerContext.js');
var http = require('HttpModule.js');
var Order = require('EntityType/Document.js');

/* 
 * Entry function for the http POST request.
 * 
 * POST /b1s/v1/script/{{partner name}}/{{script name}}
 * 
 */

function POST() {
    var slContext = new ServiceLayerContext();
    var ret = [];
    
    var order = new Order();
    order.CardCode = 'c2';
    order.DocDueDate = new Date();// get the current date: "2016-07-01T09:19:37.542Z"
    order.DocDate = new Date();
    order.DocumentLines = new Order.DocumentLineCollection();
    for (var j = 1; j <= 2; ++j) {
        var line = new Order.DocumentLine();
        line.ItemCode = 'i' + j;
        line.Quantity = 1;
        line.UnitPrice = 10;
        order.DocumentLines.add(line);
    }
    var dataSrvRes = slContext.Orders.add(order);
    if (!dataSrvRes.isOK()) {
        throw http.ScriptException(http.HttpStatus.HTTP_BAD_REQUEST, "create entity failure")
    }
    ret.push({ "operation": dataSrvRes.operation, "status": dataSrvRes.status });
    
    var key = dataSrvRes.body.DocEntry;
    dataSrvRes = slContext.Orders.get(key);
    if (!dataSrvRes.isOK()) {
        throw http.ScriptException(http.HttpStatus.HTTP_INTERNAL_SERVER_ERROR, "retrieve entity failure")
    }
    ret.push({ "operation": dataSrvRes.operation, "status": dataSrvRes.status });

    
    order.Comments = 'updated by script';
    dataSrvRes = slContext.Orders.update(order, key);
    if (!dataSrvRes.isOK()) {
        throw http.ScriptException(http.HttpStatus.HTTP_INTERNAL_SERVER_ERROR, "update entity failure")
    }
    ret.push({ "operation": dataSrvRes.operation, "status": dataSrvRes.status });
    
    
    dataSrvRes = slContext.Orders.remove(key);
    if (dataSrvRes.isOK()) { //delete an order is not allowed
        throw http.ScriptException(http.HttpStatus.HTTP_METHOD_NOT_ALLOWED, "delete order succeed!!!")
    }
    ret.push({ "operation": dataSrvRes.operation, "status": dataSrvRes.status });
    
    http.response.send(http.HttpStatus.HTTP_OK, ret);
}
