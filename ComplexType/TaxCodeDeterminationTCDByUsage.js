
var TaxCodeDeterminationTCDByUsageTypeEnum = require('EnumType/TaxCodeDeterminationTCDByUsageTypeEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.TaxCodeDeterminationTCDByUsage = function () {
}
SAPB1.TaxCodeDeterminationTCDByUsage.prototype = new SAPB1.ComplexType();
SAPB1.TaxCodeDeterminationTCDByUsage.prototype.constructor = SAPB1.TaxCodeDeterminationTCDByUsage;
SAPB1.TaxCodeDeterminationTCDByUsage.AbsId = { valueOf: function(){return 'AbsId';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.TaxCodeDeterminationTCDByUsage.UsageCode = { valueOf: function(){return 'UsageCode';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxCodeDeterminationTCDByUsage.TaxCode = { valueOf: function(){return 'TaxCode';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxCodeDeterminationTCDByUsage.ExpTaxCode = { valueOf: function(){return 'ExpTaxCode';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxCodeDeterminationTCDByUsage.Type = { valueOf: function(){return 'Type';}, Type: 'TaxCodeDeterminationTCDByUsageTypeEnum', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxCodeDeterminationTCDByUsage.prototype.AbsId = new Number();
SAPB1.TaxCodeDeterminationTCDByUsage.prototype.UsageCode = new Number();
SAPB1.TaxCodeDeterminationTCDByUsage.prototype.TaxCode = new String();
SAPB1.TaxCodeDeterminationTCDByUsage.prototype.ExpTaxCode = new String();
SAPB1.TaxCodeDeterminationTCDByUsage.prototype.Type = new String();


SAPB1.TaxCodeDeterminationTCDByUsage.TaxCodeDeterminationTCDByUsageTypeEnum = TaxCodeDeterminationTCDByUsageTypeEnum

SAPB1.TaxCodeDeterminationTCDByUsage.create = function (rawObject) {
    var instance = new SAPB1.TaxCodeDeterminationTCDByUsage();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.TaxCodeDeterminationTCDByUsage.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.TaxCodeDeterminationTCDByUsage;
