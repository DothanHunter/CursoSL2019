
/**
 * Test for compile-time exception
 *
 */

var Document = require('EntityType/Document.js');

/**
 * Entry function for the http POST request.
 * POST /b1s/v1/script/{{partner name}}/{{script name}}
 * 
 */
function POST() {
    //type mistake: ';' should be ','
    var line = Document.DocumentLine.create( {
        ItemCode: 'i001'; Quantity: 2, UnitPrice: 10
    });

    var lines = new Document.DocumentLineCollection();
    lines.add(line);
}

