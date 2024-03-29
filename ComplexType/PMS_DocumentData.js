
var PMDocumentTypeEnum = require('EnumType/PMDocumentTypeEnum')
var LineStatusTypeEnum = require('EnumType/LineStatusTypeEnum')
var AmountCatTypeEnum = require('EnumType/AmountCatTypeEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.PMS_DocumentData = function () {
}
SAPB1.PMS_DocumentData.prototype = new SAPB1.ComplexType();
SAPB1.PMS_DocumentData.prototype.constructor = SAPB1.PMS_DocumentData;
SAPB1.PMS_DocumentData.LineID = { valueOf: function(){return 'LineID';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.PMS_DocumentData.StageID = { valueOf: function(){return 'StageID';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PMS_DocumentData.DocType = { valueOf: function(){return 'DocType';}, Type: 'PMDocumentTypeEnum', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PMS_DocumentData.DocEntry = { valueOf: function(){return 'DocEntry';}, Type: 'Edm.Int32', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PMS_DocumentData.DocDate = { valueOf: function(){return 'DocDate';}, Type: 'Edm.DateTime', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PMS_DocumentData.Total = { valueOf: function(){return 'Total';}, Type: 'Edm.Double', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PMS_DocumentData.LineNumber = { valueOf: function(){return 'LineNumber';}, Type: 'Edm.Int32', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PMS_DocumentData.Status = { valueOf: function(){return 'Status';}, Type: 'LineStatusTypeEnum', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PMS_DocumentData.AmountCategory = { valueOf: function(){return 'AmountCategory';}, Type: 'AmountCatTypeEnum', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PMS_DocumentData.prototype.LineID = new Number();
SAPB1.PMS_DocumentData.prototype.StageID = new Number();
SAPB1.PMS_DocumentData.prototype.DocType = new String();
SAPB1.PMS_DocumentData.prototype.DocEntry = new Number();
SAPB1.PMS_DocumentData.prototype.DocDate = new String();
SAPB1.PMS_DocumentData.prototype.Total = new Number();
SAPB1.PMS_DocumentData.prototype.LineNumber = new Number();
SAPB1.PMS_DocumentData.prototype.Status = new String();
SAPB1.PMS_DocumentData.prototype.AmountCategory = new String();


SAPB1.PMS_DocumentData.PMDocumentTypeEnum = PMDocumentTypeEnum
SAPB1.PMS_DocumentData.LineStatusTypeEnum = LineStatusTypeEnum
SAPB1.PMS_DocumentData.AmountCatTypeEnum = AmountCatTypeEnum

SAPB1.PMS_DocumentData.create = function (rawObject) {
    var instance = new SAPB1.PMS_DocumentData();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.PMS_DocumentData.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.PMS_DocumentData;
