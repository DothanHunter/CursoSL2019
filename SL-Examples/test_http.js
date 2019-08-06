var http = require('HttpModule.js');


/**
 * Entry function for the http PATCH request.
 *
 * PATCH /b1s/v1/script/{{partner name}}/{{script name}}('i001')?param1=val1 & param2=val2
 * test-header:test-value
 *
 * { "ItemCode": "test_item_0702"}
 */

function PATCH() {
    console.log("testing the http request and http response API...")
    
    var ret = {};
    ret.requestContent = http.request.getJsonObj();
    ret.method = http.request.getMethod();
    ret.contentType = http.request.getContentType();
    ret.paramNames = http.request.getParameterNames();
    ret.paramObj = {};

    if (ret.paramNames && ret.paramNames.length > 0) {
        ret.paramNames.forEach(function (param) {
            ret.paramObj[param] = http.request.getParameter(param);
        });
    }
    ret.key = http.request.getEntityKey();
    http.response.setContentType(http.ContentType.APPLICATION_JSON);
    http.response.setStatus(http.HttpStatus.HTTP_OK);
    http.response.setContent(ret);
    
    var val = http.request.getHeader("test-header");
    if (val) {
        http.response.setHeader("test-header", val);
    }
    http.response.send();
}
