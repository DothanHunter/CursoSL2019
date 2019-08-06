var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.ExtendedTranslation_ItemLineCollection = function () {
}

SAPB1.ExtendedTranslation_ItemLineCollection.prototype = new SAPB1.Collection();
SAPB1.ExtendedTranslation_ItemLineCollection.prototype.constructor = SAPB1.ExtendedTranslation_ItemLineCollection;
//override the default one.    
SAPB1.ExtendedTranslation_ItemLineCollection.get = function (index) {
    return SAPB1.ExtendedTranslation_ItemLine.create(this.array[index]);
}

SAPB1.ExtendedTranslation_ItemLineCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.ExtendedTranslation_ItemLineCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.ExtendedTranslation_ItemLine.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.ExtendedTranslation_ItemLineCollection;
