if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoChangeLogEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoChangeLogEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoChangeLogEnum.prototype.constructor = SAPB1.BoChangeLogEnum;
SAPB1.BoChangeLogEnum.clProductionOrders = new SAPB1.BoChangeLogEnum('clProductionOrders', 'clProductionOrders');
SAPB1.BoChangeLogEnum.clInventoryGeneralExit = new SAPB1.BoChangeLogEnum('clInventoryGeneralExit', 'clInventoryGeneralExit');
SAPB1.BoChangeLogEnum.clIncomingExciseInvoice = new SAPB1.BoChangeLogEnum('clIncomingExciseInvoice', 'clIncomingExciseInvoice');
SAPB1.BoChangeLogEnum.clCorrectionPurchaseInvoiceReversal = new SAPB1.BoChangeLogEnum('clCorrectionPurchaseInvoiceReversal', 'clCorrectionPurchaseInvoiceReversal');
SAPB1.BoChangeLogEnum.clDeliveryNotes = new SAPB1.BoChangeLogEnum('clDeliveryNotes', 'clDeliveryNotes');
SAPB1.BoChangeLogEnum.clAdminInfo = new SAPB1.BoChangeLogEnum('clAdminInfo', 'clAdminInfo');
SAPB1.BoChangeLogEnum.clServiceCalls = new SAPB1.BoChangeLogEnum('clServiceCalls', 'clServiceCalls');
SAPB1.BoChangeLogEnum.clFinancePeriods = new SAPB1.BoChangeLogEnum('clFinancePeriods', 'clFinancePeriods');
SAPB1.BoChangeLogEnum.clInventoryTransferRequests = new SAPB1.BoChangeLogEnum('clInventoryTransferRequests', 'clInventoryTransferRequests');
SAPB1.BoChangeLogEnum.clPurchaseDeliveryNotes = new SAPB1.BoChangeLogEnum('clPurchaseDeliveryNotes', 'clPurchaseDeliveryNotes');
SAPB1.BoChangeLogEnum.clCustomerEquipmentCards = new SAPB1.BoChangeLogEnum('clCustomerEquipmentCards', 'clCustomerEquipmentCards');
SAPB1.BoChangeLogEnum.clCreditNotes = new SAPB1.BoChangeLogEnum('clCreditNotes', 'clCreditNotes');
SAPB1.BoChangeLogEnum.clStockTransfers = new SAPB1.BoChangeLogEnum('clStockTransfers', 'clStockTransfers');
SAPB1.BoChangeLogEnum.clPurchaseDownPayments = new SAPB1.BoChangeLogEnum('clPurchaseDownPayments', 'clPurchaseDownPayments');
SAPB1.BoChangeLogEnum.clCreditCards = new SAPB1.BoChangeLogEnum('clCreditCards', 'clCreditCards');
SAPB1.BoChangeLogEnum.clWarehouses = new SAPB1.BoChangeLogEnum('clWarehouses', 'clWarehouses');
SAPB1.BoChangeLogEnum.clPickLists = new SAPB1.BoChangeLogEnum('clPickLists', 'clPickLists');
SAPB1.BoChangeLogEnum.clAdditionalExpenses = new SAPB1.BoChangeLogEnum('clAdditionalExpenses', 'clAdditionalExpenses');
SAPB1.BoChangeLogEnum.clSalesTaxInvoice = new SAPB1.BoChangeLogEnum('clSalesTaxInvoice', 'clSalesTaxInvoice');
SAPB1.BoChangeLogEnum.clUsers = new SAPB1.BoChangeLogEnum('clUsers', 'clUsers');
SAPB1.BoChangeLogEnum.clIncomingPayments = new SAPB1.BoChangeLogEnum('clIncomingPayments', 'clIncomingPayments');
SAPB1.BoChangeLogEnum.clCorrectionInvoiceReversal = new SAPB1.BoChangeLogEnum('clCorrectionInvoiceReversal', 'clCorrectionInvoiceReversal');
SAPB1.BoChangeLogEnum.clItemGroups = new SAPB1.BoChangeLogEnum('clItemGroups', 'clItemGroups');
SAPB1.BoChangeLogEnum.clUDO = new SAPB1.BoChangeLogEnum('clUDO', 'clUDO');
SAPB1.BoChangeLogEnum.clPurchaseOrders = new SAPB1.BoChangeLogEnum('clPurchaseOrders', 'clPurchaseOrders');
SAPB1.BoChangeLogEnum.clVendorPayments = new SAPB1.BoChangeLogEnum('clVendorPayments', 'clVendorPayments');
SAPB1.BoChangeLogEnum.clPurchaseCreditNotes = new SAPB1.BoChangeLogEnum('clPurchaseCreditNotes', 'clPurchaseCreditNotes');
SAPB1.BoChangeLogEnum.clChartOfAccounts = new SAPB1.BoChangeLogEnum('clChartOfAccounts', 'clChartOfAccounts');
SAPB1.BoChangeLogEnum.clCorrectionInvoice = new SAPB1.BoChangeLogEnum('clCorrectionInvoice', 'clCorrectionInvoice');
SAPB1.BoChangeLogEnum.clHouseBankAccounts = new SAPB1.BoChangeLogEnum('clHouseBankAccounts', 'clHouseBankAccounts');
SAPB1.BoChangeLogEnum.clReturns = new SAPB1.BoChangeLogEnum('clReturns', 'clReturns');
SAPB1.BoChangeLogEnum.clOutgoingExciseInvoice = new SAPB1.BoChangeLogEnum('clOutgoingExciseInvoice', 'clOutgoingExciseInvoice');
SAPB1.BoChangeLogEnum.clEmployeesInfo = new SAPB1.BoChangeLogEnum('clEmployeesInfo', 'clEmployeesInfo');
SAPB1.BoChangeLogEnum.clVatGroups = new SAPB1.BoChangeLogEnum('clVatGroups', 'clVatGroups');
SAPB1.BoChangeLogEnum.clPurchaseTaxInvoice = new SAPB1.BoChangeLogEnum('clPurchaseTaxInvoice', 'clPurchaseTaxInvoice');
SAPB1.BoChangeLogEnum.clDownPayments = new SAPB1.BoChangeLogEnum('clDownPayments', 'clDownPayments');
SAPB1.BoChangeLogEnum.clBusinessPartners = new SAPB1.BoChangeLogEnum('clBusinessPartners', 'clBusinessPartners');
SAPB1.BoChangeLogEnum.clOrders = new SAPB1.BoChangeLogEnum('clOrders', 'clOrders');
SAPB1.BoChangeLogEnum.clItems = new SAPB1.BoChangeLogEnum('clItems', 'clItems');
SAPB1.BoChangeLogEnum.clProductTrees = new SAPB1.BoChangeLogEnum('clProductTrees', 'clProductTrees');
SAPB1.BoChangeLogEnum.clCorrectionPurchaseInvoice = new SAPB1.BoChangeLogEnum('clCorrectionPurchaseInvoice', 'clCorrectionPurchaseInvoice');
SAPB1.BoChangeLogEnum.clExternalBankOperationCodes = new SAPB1.BoChangeLogEnum('clExternalBankOperationCodes', 'clExternalBankOperationCodes');
SAPB1.BoChangeLogEnum.clInventoryGeneralEntry = new SAPB1.BoChangeLogEnum('clInventoryGeneralEntry', 'clInventoryGeneralEntry');
SAPB1.BoChangeLogEnum.clWithholdingTaxCodes = new SAPB1.BoChangeLogEnum('clWithholdingTaxCodes', 'clWithholdingTaxCodes');
SAPB1.BoChangeLogEnum.clJournalEntries = new SAPB1.BoChangeLogEnum('clJournalEntries', 'clJournalEntries');
SAPB1.BoChangeLogEnum.clPurchaseInvoices = new SAPB1.BoChangeLogEnum('clPurchaseInvoices', 'clPurchaseInvoices');
SAPB1.BoChangeLogEnum.clPurchaseReturns = new SAPB1.BoChangeLogEnum('clPurchaseReturns', 'clPurchaseReturns');
SAPB1.BoChangeLogEnum.clInternalBankOperationCodes = new SAPB1.BoChangeLogEnum('clInternalBankOperationCodes', 'clInternalBankOperationCodes');
SAPB1.BoChangeLogEnum.clPurchaseQuotation = new SAPB1.BoChangeLogEnum('clPurchaseQuotation', 'clPurchaseQuotation');
SAPB1.BoChangeLogEnum.clQuotations = new SAPB1.BoChangeLogEnum('clQuotations', 'clQuotations');
SAPB1.BoChangeLogEnum.clMaterialRevaluation = new SAPB1.BoChangeLogEnum('clMaterialRevaluation', 'clMaterialRevaluation');
SAPB1.BoChangeLogEnum.clPeriodCategory = new SAPB1.BoChangeLogEnum('clPeriodCategory', 'clPeriodCategory');
SAPB1.BoChangeLogEnum.clInvoices = new SAPB1.BoChangeLogEnum('clInvoices', 'clInvoices');
SAPB1.BoChangeLogEnum.clBillOfExchange = new SAPB1.BoChangeLogEnum('clBillOfExchange', 'clBillOfExchange');

module.exports = SAPB1.BoChangeLogEnum;
