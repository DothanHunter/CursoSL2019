
/**
 * Perform the query operations on the orders
 * 
 */
var ServiceLayerContext = require('ServiceLayerContext.js');
var http = require('HttpModule.js');


/* 
 * Entry function for the http GET request.
 * 
 * GET /b1s/v1/script/{{partner name}}/{{script name}}
 * 
 */
function GET() {
    var queryOption = "$select=CardName, CardCode & $filter=contains(CardCode, 'c1') & $top=5 & $orderby=CardCode";
    var slContext = new ServiceLayerContext();
    var retCaseSensitive = slContext.BusinessPartners.query(queryOption);
    var retCaseInsensitive = slContext.query("BusinessPartners", queryOption, true);

    http.response.setStatus(http.HttpStatus.HTTP_OK);
    http.response.setContent({ "CaseSensitive": retCaseSensitive.toArray(), "CaseInsensitive": retCaseInsensitive.toArray() });
    http.response.send();
}

