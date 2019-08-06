/**
 *  * Read the current session data.
 *  *
 *  */


/**
 *  * Entry function for the http GET request.
 *  *
 *  * GET /b1s/v1/script/{{partner name}}/{{script name}}
 *  *
 *  */
var http = require('HttpModule.js');
function GET() {
    var sessionInfo = {};

    sessionInfo['user'] = session.getProperty('user');
    sessionInfo['company'] = session.getProperty('company');
    sessionInfo['timeout'] = session.getProperty('timeout');
    sessionInfo['maxOperationsPerTransaction'] = session.getProperty('maxOperationsPerTransaction');
    sessionInfo['server'] = session.getProperty('server');
    sessionInfo['version'] = session.getProperty('version');

    var props = session.getPropertyNames();
    if (!props) {
        throw http.ScriptException(http.HttpStatus.HTTP_BAD_REQUEST, "properties not found in the session object");
    }
    sessionInfo['props'] = props;
    
    for (var prop in sessionInfo) {
        if (sessionInfo.hasOwnProperty(prop)) {
            if (!sessionInfo[prop]) {
                throw http.ScriptException(http.HttpStatus.HTTP_BAD_REQUEST, "property value should not be null in the session object");
            }
        }
    }
    http.response.send(http.HttpStatus.HTTP_OK, sessionInfo);
}
