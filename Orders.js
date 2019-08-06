var ServiceLayerContext = require('ServiceLayerContext.js');
var http = require('HttpModule.js');

//The entry function for http request with the GET method
function GET(){
    var key = http.request.getEntityKey();
    if (!key) {
        throw http.ScriptException(http.HttpStatus.HTTP_BAD_REQUEST, "No se especifco la key en la url");
    }

    var slContext = new ServiceLayerContext();
    var dataSrvRes = slContext.Orders.get(key);
    if (!dataSrvRes.isOK()) {
        http.response.send(http.HttpStatus.HTTP_NOT_FOUND, dataSrvRes.body);
    } else {
        http.response.send(http.HttpStatus.HTTP_OK, dataSrvRes.body);
    }
}

//The entry function for http request with the POST method
function POST(){

}

//The entry function for http request with the PATCH method
function PATCH(){

}

//The entry function for http request with the DELETE method
function DELETE(){
    var key = http.request.getEntityKey();
    if (!key) {
        throw http.ScriptException(http.HttpStatus.HTTP_BAD_REQUEST, "No se especifco la key en la url");
    }

    var slContext = new ServiceLayerContext();
    var dataSrvRes = slContext.Orders.remove(key);
    if (dataSrvRes.isOK()) {
        http.response.send(http.HttpStatus.HTTP_NO_CONTENT, dataSrvRes.body);
    } else {
        http.response.send(http.HttpStatus.HTTP_BAD_REQUEST, dataSrvRes.body);
    }
}
