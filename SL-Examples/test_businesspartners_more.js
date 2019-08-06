
/**
 * Perform the CRUD operations on a BusinessPartner from exsiting data.
 */

var ServiceLayerContext = require('ServiceLayerContext.js');
var BusinessPartner = require('EntityType/BusinessPartner.js');
var http = require('HttpModule.js');

var now = new Date();
var test_bp_code = "test_bp_" + now.getMonth() + now.getDate();

/**
 * Entry function for the http POST request.
 * POST /b1s/v1/script/{{partner name}}/{{script name}}
 * 
 */
function POST() {
    var slContext = new ServiceLayerContext();
    var ret = [];

    var bp = new BusinessPartner();
    bp.CardCode = test_bp_code;
    
    var dataSrvRes = slContext.BusinessPartners.add(bp);
    if (!dataSrvRes.isOK()) {
        throw http.ScriptException(http.HttpStatus.HTTP_BAD_REQUEST, "create entity failure")
    }
    ret.push({"operation": dataSrvRes.operation, "status": dataSrvRes.status});
    
    var key = test_bp_code;
    var dataSrvRes = slContext.BusinessPartners.get(key);
    if (!dataSrvRes.isOK()) {
        throw http.ScriptException(http.HttpStatus.HTTP_INTERNAL_SERVER_ERROR, "retrieve entity failure")
    }
    ret.push({ "operation": dataSrvRes.operation, "status": dataSrvRes.status });
    
    bp.CardName = 'new_bp_name';
    dataSrvRes = slContext.BusinessPartners.update(bp, key);
    if (!dataSrvRes.isOK()) {
        throw http.ScriptException(http.HttpStatus.HTTP_INTERNAL_SERVER_ERROR, "update entity failure")
    }
    ret.push({ "operation": dataSrvRes.operation, "status": dataSrvRes.status });
    
    dataSrvRes = slContext.BusinessPartners.remove(key);
    if (!dataSrvRes.isOK()) {
        throw http.ScriptException(http.HttpStatus.HTTP_INTERNAL_SERVER_ERROR, "delete entity failure")
    }
    ret.push({ "operation": dataSrvRes.operation, "status": dataSrvRes.status });
    
    http.response.send(http.HttpStatus.HTTP_OK, ret);
}

