
/**
 * Create an order and create a delivery based on the order in one transaciton.
 * 
 */

var ServiceLayerContext = require('ServiceLayerContext.js');
var http = require('HttpModule.js');
var BusinessPartner = require('EntityType/BusinessPartner.js');

/* 
 * Entry function for the http POST request.
 * 
 * {
  "operation": "POST",
  "list": [
    {
      "CardCode": "c001",
      "CardName": "c001"
    },
    {
      "CardCode": "c002",
      "CardName": "c002"
    },
    ...
  ]
}
 */
function POST() {
    
    var slContext = new ServiceLayerContext();
    var obj = http.request.getJsonObj();

    if (!obj.operation || !obj.list || !(obj.list instanceof Array)) {
        throw http.ScriptException(http.HttpStatus.HTTP_BAD_REQUEST, "invalid format of payload");
    }

    var bpList = obj.list;

    slContext.startTransaction();
    
    if (obj.operation === 'POST') {
        for (var i = 0; i < bpList.length; ++i) {
            var res = slContext.BusinessPartners.add(bpList[i]);
            if (!res.isOK()) {
                slContext.rollbackTransaction();
                throw http.ScriptException(http.HttpStatus.HTTP_BAD_REQUEST, res.getErrMsg());
            }
        }
    } else {
        for (var i = 0; i < bpList.length; ++i) {
            var res = slContext.BusinessPartners.delete(bpList[i].CardCode);
            if (!res.isOK()) {
                slContext.rollbackTransaction();
                throw http.ScriptException(http.HttpStatus.HTTP_BAD_REQUEST, res.getErrMsg());
            }
        }
    }
    slContext.commitTransaction();

    http.response.setContentType(http.ContentType.TEXT_PLAIN);
    http.response.send(http.HttpStatus.HTTP_OK, "transaction committed");
}
