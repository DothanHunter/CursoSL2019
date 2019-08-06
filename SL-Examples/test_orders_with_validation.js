/**
 * Do some validations before create an order 
 *  
 */
var ServiceLayerContext = require('ServiceLayerContext.js');
var http = require('HttpModule.js');
var Order = require('EntityType/Document.js');
var Item = require('EntityType/Item.js');

/**
 * Entry function for the http POST request.
 * POST /b1s/v1/script/{{partner name}}/{{script name}}
 * 
 * {
        "CardCode": "c1",
        "DocDate": "2016-07-11",
        "DocDueDate": "2016-07-11",
        "DocumentLines": [
            {
                "ItemCode": "i1",
                "UnitPrice": 10,
                "Quantity": 1
            },
            {
                "ItemCode": "i2",
                "UnitPrice": 10,
                "Quantity": 1
            }
        ]
 *  }
 */
 
 
function POST() {
    var order = http.request.getJsonObj();
    if (!order) {
        throw http.ScriptException(http.HttpStatus.HTTP_BAD_REQUEST, "fail to get the content of JSON format from the request payload");
    }

    var slContext = new ServiceLayerContext();
    
    //added logic to validate if each item exists and the item stock is enough.
    order.DocumentLines.forEach(function (line) {
        var dataSvcRes = slContext.Items.get(line.ItemCode);
        if (!dataSvcRes.isOK()) {
            throw new http.ScriptException(http.HttpStatus.HTTP_NOT_FOUND, "item not found");
        } else {
			var item = dataSvcRes.body;
            if (item.QuantityOnStock < line.Quantity) {
                throw new http.ScriptException(http.HttpStatus.HTTP_BAD_REQUEST, "not enough items on stock");
            }
        }
    });

    var dataSrvRes = slContext.Orders.add(order);
    if (dataSrvRes.isOK()) {
        http.response.send(http.HttpStatus.HTTP_CREATED, dataSrvRes.body);
    } else {
        http.response.send(http.HttpStatus.HTTP_BAD_REQUEST, dataSrvRes.body);
    }
}
