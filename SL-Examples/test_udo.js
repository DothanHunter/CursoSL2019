
/**
 * Perform the query operations on the orders
 * 
 */
var ServiceLayerContext = require('ServiceLayerContext.js');
var http = require('HttpModule.js');
var Item = require('EntityType/Item.js');


/* 
 * Entry function for the http GET request.
 * POST /b1s/v1/script/{{partner name}}/{{script name}}
 * 
 *  {
        "U_CustomerName": "c1",
        "U_DocTotal": 0,
        "MyOrderLinesCollection": [
            {
                "U_ItemName": "item1",
                "U_Price": 100,
                "U_Quantity": 3
            },
            {
                "U_ItemName": "item2",
                "U_Price": 80,
                "U_Quantity": 4
            }
        ]
    }
 */

function POST() {
//Before creating the UDO, users are allowed to add extra logic.
    var myOrder = http.request.getJsonObj();
    var slContext = new ServiceLayerContext();
    

//Example 1 : added logic to validate if each item exists and the item stock is enough.
    myOrder.MyOrderLinesCollection.forEach(function (line) {
        var dataSvcRes = slContext.Items.get(line.U_ItemName);
        if (!dataSvcRes.isOK()) {
            throw new http.ScriptException(http.HttpStatus.HTTP_NOT_FOUND, "item not found");
        } else {
            //Convert weak type to strong type by calling Item.create. The conversion is not a must.
            //You can also use dataSvcRes.body.QuantityOnStock
            var item = Item.create(dataSvcRes.body);
            if (item.QuantityOnStock < line.U_Quantity) {
                throw new http.ScriptException(http.HttpStatus.HTTP_BAD_REQUEST, "not enough items on stock");
            }
        }
    });

//Example 2 : added logic to calculate the DocTotal
    myOrder.U_DocTotal = 0;
    myOrder.MyOrderLinesCollection.forEach(function (line) {
        myOrder.U_DocTotal += (line.U_Price * line.U_Quantity);
    });
    
//add this UDO    
    var res = slContext.add("MyOrder", myOrder);
    if (res.isOK()) {
        http.response.send(http.HttpStatus.HTTP_CREATED, res.body);
    } else {
        http.response.send(http.HttpStatus.HTTP_BAD_REQUEST, res.body);
    }
}




