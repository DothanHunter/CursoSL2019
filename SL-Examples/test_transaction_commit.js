
/**
 * Create an order and create a delivery based on the order in one transaciton.
 * 
 */

var ServiceLayerContext = require('ServiceLayerContext.js');
var http = require('HttpModule.js');
var Order = require('EntityType/Document.js');
var DeliveryNote = require('EntityType/Document.js');

/* 
 * Entry function for the http POST request.
 * 
 * POST /b1s/v1/script/{{partner name}}/{{script name}}
 * 
 */
function POST() {
    var order = new Order();
            
    order.CardCode = 'c1';
    order.DocDate = new Date();
    order.DocDueDate = new Date();

    var line = new Order.DocumentLine();
    line.ItemCode = 'i1';
    line.Quantity = 1;
    line.UnitPrice = 10;
            
    var line2 = new Order.DocumentLine();
    line2.ItemCode = 'i2';
    line2.Quantity = 1;
    line2.UnitPrice = 10;
            
    order.DocumentLines = new Order.DocumentLineCollection();
    order.DocumentLines.add(line);
    order.DocumentLines.add(line2);
    
    var slContext = new ServiceLayerContext();
    
    //start the transaction
    slContext.startTransaction();
    console.log(JSON.stringify(order));
    var ret1 = slContext.Orders.add(order);
    if (!ret1.isOK()) {
        slContext.rollbackTransaction();
        return http.response.send(http.HttpStatus.HTTP_BAD_REQUEST, ret1.body);
    }
    
    //get the newly created order from the response body.
    var newOrder = Order.create(ret1.body);
    
    //create a delivery based on the order
    var deliveryNote = new DeliveryNote();
    deliveryNote.DocDate = newOrder.DocDate;
    deliveryNote.DocDueDate = newOrder.DocDueDate;
    deliveryNote.CardCode = newOrder.CardCode;
    deliveryNote.DocumentLines = new DeliveryNote.DocumentLineCollection();
    for (var lineNum = 0; lineNum < order.DocumentLines.length; ++lineNum) {
        var line = new DeliveryNote.DocumentLine();
        line.BaseType = 17;
        line.BaseEntry = newOrder.DocEntry;
        line.BaseLine = lineNum;
        deliveryNote.DocumentLines.add(line);
    }
    
    var ret2 = slContext.DeliveryNotes.add(deliveryNote);
    if (!ret2.isOK()) {
        slContext.rollbackTransaction();
        return http.response.send(http.HttpStatus.HTTP_BAD_REQUEST, ret2.body);
    }
    slContext.commitTransaction();
    
    var ret = {
        "Order": { "DocEntry": ret1.body.DocEntry, "DocNum": ret1.body.DocNum },
        "DeliveryNote": { "DocEntry": ret2.body.DocEntry, "DocNum": ret2.body.DocNum }
    };
    return http.response.send(http.HttpStatus.HTTP_OK, ret);

}                  
