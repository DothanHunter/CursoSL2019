var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.InventoryOpeningBalanceLineCollection = function () {
}

SAPB1.InventoryOpeningBalanceLineCollection.prototype = new SAPB1.Collection();
SAPB1.InventoryOpeningBalanceLineCollection.prototype.constructor = SAPB1.InventoryOpeningBalanceLineCollection;
//override the default one.    
SAPB1.InventoryOpeningBalanceLineCollection.get = function (index) {
    return SAPB1.InventoryOpeningBalanceLine.create(this.array[index]);
}

SAPB1.InventoryOpeningBalanceLineCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.InventoryOpeningBalanceLineCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.InventoryOpeningBalanceLine.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.InventoryOpeningBalanceLineCollection;
