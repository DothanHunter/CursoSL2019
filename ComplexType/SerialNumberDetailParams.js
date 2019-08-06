

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.SerialNumberDetailParams = function () {
}
SAPB1.SerialNumberDetailParams.prototype = new SAPB1.ComplexType();
SAPB1.SerialNumberDetailParams.prototype.constructor = SAPB1.SerialNumberDetailParams;
SAPB1.SerialNumberDetailParams.DocEntry = { valueOf: function(){return 'DocEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SerialNumberDetailParams.prototype.DocEntry = new Number();



SAPB1.SerialNumberDetailParams.create = function (rawObject) {
    var instance = new SAPB1.SerialNumberDetailParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.SerialNumberDetailParams.prototype.hasOwnProperty(prop)) {
                if (instance[prop] instanceof SAPB1.Collection) {
                    var collectionInstance = instance[prop].constructor.create(rawObject[prop]);
                    instance[prop] = collectionInstance;
                } else if (instance[prop] instanceof SAPB1.ComplexType) {
                    var complexInstance = instance[prop].constructor.create(rawObject[prop]);
                    instance[prop] = complexInstance;
                }
                else {
                    instance[prop] = rawObject[prop];
                }
            }
        }
    }
    return instance;
}


module.exports = SAPB1.SerialNumberDetailParams;
