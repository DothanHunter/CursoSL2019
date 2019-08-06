

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.TrackingNoteItem = function () {
}
SAPB1.TrackingNoteItem.prototype = new SAPB1.ComplexType();
SAPB1.TrackingNoteItem.prototype.constructor = SAPB1.TrackingNoteItem;
SAPB1.TrackingNoteItem.TrackingNoteNumber = { valueOf: function(){return 'TrackingNoteNumber';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.TrackingNoteItem.TrackingNoteLineNumber = { valueOf: function(){return 'TrackingNoteLineNumber';}, Type: 'Edm.Int32', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.TrackingNoteItem.ItemCCDNumber = { valueOf: function(){return 'ItemCCDNumber';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TrackingNoteItem.ItemCode = { valueOf: function(){return 'ItemCode';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TrackingNoteItem.Quantity = { valueOf: function(){return 'Quantity';}, Type: 'Edm.Double', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TrackingNoteItem.prototype.TrackingNoteNumber = new Number();
SAPB1.TrackingNoteItem.prototype.TrackingNoteLineNumber = new Number();
SAPB1.TrackingNoteItem.prototype.ItemCCDNumber = new String();
SAPB1.TrackingNoteItem.prototype.ItemCode = new String();
SAPB1.TrackingNoteItem.prototype.Quantity = new Number();



SAPB1.TrackingNoteItem.create = function (rawObject) {
    var instance = new SAPB1.TrackingNoteItem();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.TrackingNoteItem.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.TrackingNoteItem;
