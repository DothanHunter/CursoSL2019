

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.SalesOpportunitiesCompetitionItem = function () {
}
SAPB1.SalesOpportunitiesCompetitionItem.prototype = new SAPB1.ComplexType();
SAPB1.SalesOpportunitiesCompetitionItem.prototype.constructor = SAPB1.SalesOpportunitiesCompetitionItem;
SAPB1.SalesOpportunitiesCompetitionItem.RowNo = { valueOf: function(){return 'RowNo';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunitiesCompetitionItem.Competition = { valueOf: function(){return 'Competition';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunitiesCompetitionItem.Details = { valueOf: function(){return 'Details';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunitiesCompetitionItem.SequenceNo = { valueOf: function(){return 'SequenceNo';}, Type: 'Edm.Int32', Index: 3, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunitiesCompetitionItem.WonOrLost = { valueOf: function(){return 'WonOrLost';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunitiesCompetitionItem.prototype.RowNo = new Number();
SAPB1.SalesOpportunitiesCompetitionItem.prototype.Competition = new Number();
SAPB1.SalesOpportunitiesCompetitionItem.prototype.Details = new String();
SAPB1.SalesOpportunitiesCompetitionItem.prototype.SequenceNo = new Number();
SAPB1.SalesOpportunitiesCompetitionItem.prototype.WonOrLost = new String();



SAPB1.SalesOpportunitiesCompetitionItem.create = function (rawObject) {
    var instance = new SAPB1.SalesOpportunitiesCompetitionItem();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.SalesOpportunitiesCompetitionItem.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.SalesOpportunitiesCompetitionItem;
