var PaymentCheck = require('ComplexType/PaymentCheck')
var PaymentCheckCollection = require('ComplexType/PaymentCheckCollection')
var PaymentInvoice = require('ComplexType/PaymentInvoice')
var PaymentInvoiceCollection = require('ComplexType/PaymentInvoiceCollection')
var PaymentCreditCard = require('ComplexType/PaymentCreditCard')
var PaymentCreditCardCollection = require('ComplexType/PaymentCreditCardCollection')
var PaymentAccount = require('ComplexType/PaymentAccount')
var PaymentAccountCollection = require('ComplexType/PaymentAccountCollection')
var BillOfExchange = require('ComplexType/BillOfExchange')
var WithholdingTaxCertificatesData = require('ComplexType/WithholdingTaxCertificatesData')
var WithholdingTaxCertificatesDataCollection = require('ComplexType/WithholdingTaxCertificatesDataCollection')
var CashFlowAssignment = require('ComplexType/CashFlowAssignment')
var CashFlowAssignmentCollection = require('ComplexType/CashFlowAssignmentCollection')
var Payments_ApprovalRequest = require('ComplexType/Payments_ApprovalRequest')
var Payments_ApprovalRequestCollection = require('ComplexType/Payments_ApprovalRequestCollection')
var WithholdingTaxDataWTX = require('ComplexType/WithholdingTaxDataWTX')
var WithholdingTaxDataWTXCollection = require('ComplexType/WithholdingTaxDataWTXCollection')

var BoRcptTypes = require('EnumType/BoRcptTypes')
var BoYesNoEnum = require('EnumType/BoYesNoEnum')
var BoBoeStatus = require('EnumType/BoBoeStatus')
var BoPaymentPriorities = require('EnumType/BoPaymentPriorities')
var BoORCTPaymentTypeEnum = require('EnumType/BoORCTPaymentTypeEnum')
var BoPaymentsObjectType = require('EnumType/BoPaymentsObjectType')
var PaymentsAuthorizationStatusEnum = require('EnumType/PaymentsAuthorizationStatusEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.Payment = function () {
}
SAPB1.Payment.prototype = new SAPB1.EntityType();
SAPB1.Payment.prototype.constructor = SAPB1.Payment;
SAPB1.Payment.prototype.keys.push('DocEntry');
SAPB1.Payment.DocNum = { valueOf: function(){return 'DocNum';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Payment.DocType = { valueOf: function(){return 'DocType';}, Type: 'BoRcptTypes', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Payment.HandWritten = { valueOf: function(){return 'HandWritten';}, Type: 'BoYesNoEnum', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Payment.Printed = { valueOf: function(){return 'Printed';}, Type: 'BoYesNoEnum', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Payment.DocDate = { valueOf: function(){return 'DocDate';}, Type: 'Edm.DateTime', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Payment.CardCode = { valueOf: function(){return 'CardCode';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Payment.CardName = { valueOf: function(){return 'CardName';}, Type: 'Edm.String', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Payment.Address = { valueOf: function(){return 'Address';}, Type: 'Edm.String', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Payment.CashAccount = { valueOf: function(){return 'CashAccount';}, Type: 'Edm.String', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Payment.DocCurrency = { valueOf: function(){return 'DocCurrency';}, Type: 'Edm.String', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Payment.CashSum = { valueOf: function(){return 'CashSum';}, Type: 'Edm.Double', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Payment.CheckAccount = { valueOf: function(){return 'CheckAccount';}, Type: 'Edm.String', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Payment.TransferAccount = { valueOf: function(){return 'TransferAccount';}, Type: 'Edm.String', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Payment.TransferSum = { valueOf: function(){return 'TransferSum';}, Type: 'Edm.Double', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Payment.TransferDate = { valueOf: function(){return 'TransferDate';}, Type: 'Edm.DateTime', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Payment.TransferReference = { valueOf: function(){return 'TransferReference';}, Type: 'Edm.String', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Payment.LocalCurrency = { valueOf: function(){return 'LocalCurrency';}, Type: 'BoYesNoEnum', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Payment.DocRate = { valueOf: function(){return 'DocRate';}, Type: 'Edm.Double', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Payment.Reference1 = { valueOf: function(){return 'Reference1';}, Type: 'Edm.String', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Payment.Reference2 = { valueOf: function(){return 'Reference2';}, Type: 'Edm.String', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Payment.CounterReference = { valueOf: function(){return 'CounterReference';}, Type: 'Edm.String', Index: 20, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Payment.Remarks = { valueOf: function(){return 'Remarks';}, Type: 'Edm.String', Index: 21, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Payment.JournalRemarks = { valueOf: function(){return 'JournalRemarks';}, Type: 'Edm.String', Index: 22, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Payment.SplitTransaction = { valueOf: function(){return 'SplitTransaction';}, Type: 'BoYesNoEnum', Index: 23, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Payment.ContactPersonCode = { valueOf: function(){return 'ContactPersonCode';}, Type: 'Edm.Int32', Index: 24, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Payment.ApplyVAT = { valueOf: function(){return 'ApplyVAT';}, Type: 'BoYesNoEnum', Index: 25, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Payment.TaxDate = { valueOf: function(){return 'TaxDate';}, Type: 'Edm.DateTime', Index: 26, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Payment.Series = { valueOf: function(){return 'Series';}, Type: 'Edm.Int32', Index: 27, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Payment.BankCode = { valueOf: function(){return 'BankCode';}, Type: 'Edm.String', Index: 28, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Payment.BankAccount = { valueOf: function(){return 'BankAccount';}, Type: 'Edm.String', Index: 29, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Payment.DiscountPercent = { valueOf: function(){return 'DiscountPercent';}, Type: 'Edm.Double', Index: 30, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Payment.ProjectCode = { valueOf: function(){return 'ProjectCode';}, Type: 'Edm.String', Index: 31, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Payment.CurrencyIsLocal = { valueOf: function(){return 'CurrencyIsLocal';}, Type: 'BoYesNoEnum', Index: 32, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Payment.DeductionPercent = { valueOf: function(){return 'DeductionPercent';}, Type: 'Edm.Double', Index: 33, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Payment.DeductionSum = { valueOf: function(){return 'DeductionSum';}, Type: 'Edm.Double', Index: 34, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Payment.CashSumFC = { valueOf: function(){return 'CashSumFC';}, Type: 'Edm.Double', Index: 35, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Payment.CashSumSys = { valueOf: function(){return 'CashSumSys';}, Type: 'Edm.Double', Index: 36, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Payment.BoeAccount = { valueOf: function(){return 'BoeAccount';}, Type: 'Edm.String', Index: 37, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Payment.BillOfExchangeAmount = { valueOf: function(){return 'BillOfExchangeAmount';}, Type: 'Edm.Double', Index: 38, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Payment.BillofExchangeStatus = { valueOf: function(){return 'BillofExchangeStatus';}, Type: 'BoBoeStatus', Index: 39, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Payment.BillOfExchangeAmountFC = { valueOf: function(){return 'BillOfExchangeAmountFC';}, Type: 'Edm.Double', Index: 40, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Payment.BillOfExchangeAmountSC = { valueOf: function(){return 'BillOfExchangeAmountSC';}, Type: 'Edm.Double', Index: 41, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Payment.BillOfExchangeAgent = { valueOf: function(){return 'BillOfExchangeAgent';}, Type: 'Edm.String', Index: 42, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Payment.WTCode = { valueOf: function(){return 'WTCode';}, Type: 'Edm.String', Index: 43, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Payment.WTAmount = { valueOf: function(){return 'WTAmount';}, Type: 'Edm.Double', Index: 44, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Payment.WTAmountFC = { valueOf: function(){return 'WTAmountFC';}, Type: 'Edm.Double', Index: 45, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Payment.WTAmountSC = { valueOf: function(){return 'WTAmountSC';}, Type: 'Edm.Double', Index: 46, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Payment.WTAccount = { valueOf: function(){return 'WTAccount';}, Type: 'Edm.String', Index: 47, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Payment.WTTaxableAmount = { valueOf: function(){return 'WTTaxableAmount';}, Type: 'Edm.Double', Index: 48, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Payment.Proforma = { valueOf: function(){return 'Proforma';}, Type: 'BoYesNoEnum', Index: 49, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Payment.PayToBankCode = { valueOf: function(){return 'PayToBankCode';}, Type: 'Edm.String', Index: 50, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Payment.PayToBankBranch = { valueOf: function(){return 'PayToBankBranch';}, Type: 'Edm.String', Index: 51, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Payment.PayToBankAccountNo = { valueOf: function(){return 'PayToBankAccountNo';}, Type: 'Edm.String', Index: 52, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Payment.PayToCode = { valueOf: function(){return 'PayToCode';}, Type: 'Edm.String', Index: 53, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Payment.PayToBankCountry = { valueOf: function(){return 'PayToBankCountry';}, Type: 'Edm.String', Index: 54, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Payment.IsPayToBank = { valueOf: function(){return 'IsPayToBank';}, Type: 'BoYesNoEnum', Index: 55, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Payment.DocEntry = { valueOf: function(){return 'DocEntry';}, Type: 'Edm.Int32', Index: 56, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.Payment.PaymentPriority = { valueOf: function(){return 'PaymentPriority';}, Type: 'BoPaymentPriorities', Index: 57, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Payment.TaxGroup = { valueOf: function(){return 'TaxGroup';}, Type: 'Edm.String', Index: 58, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Payment.BankChargeAmount = { valueOf: function(){return 'BankChargeAmount';}, Type: 'Edm.Double', Index: 59, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Payment.BankChargeAmountInFC = { valueOf: function(){return 'BankChargeAmountInFC';}, Type: 'Edm.Double', Index: 60, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Payment.BankChargeAmountInSC = { valueOf: function(){return 'BankChargeAmountInSC';}, Type: 'Edm.Double', Index: 61, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Payment.UnderOverpaymentdifference = { valueOf: function(){return 'UnderOverpaymentdifference';}, Type: 'Edm.Double', Index: 62, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Payment.UnderOverpaymentdiffSC = { valueOf: function(){return 'UnderOverpaymentdiffSC';}, Type: 'Edm.Double', Index: 63, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Payment.WtBaseSum = { valueOf: function(){return 'WtBaseSum';}, Type: 'Edm.Double', Index: 64, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Payment.WtBaseSumFC = { valueOf: function(){return 'WtBaseSumFC';}, Type: 'Edm.Double', Index: 65, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Payment.WtBaseSumSC = { valueOf: function(){return 'WtBaseSumSC';}, Type: 'Edm.Double', Index: 66, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Payment.VatDate = { valueOf: function(){return 'VatDate';}, Type: 'Edm.DateTime', Index: 67, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Payment.TransactionCode = { valueOf: function(){return 'TransactionCode';}, Type: 'Edm.String', Index: 68, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Payment.PaymentType = { valueOf: function(){return 'PaymentType';}, Type: 'BoORCTPaymentTypeEnum', Index: 69, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Payment.TransferRealAmount = { valueOf: function(){return 'TransferRealAmount';}, Type: 'Edm.Double', Index: 70, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Payment.DocObjectCode = { valueOf: function(){return 'DocObjectCode';}, Type: 'BoPaymentsObjectType', Index: 71, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Payment.DocTypte = { valueOf: function(){return 'DocTypte';}, Type: 'BoRcptTypes', Index: 72, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Payment.DueDate = { valueOf: function(){return 'DueDate';}, Type: 'Edm.DateTime', Index: 73, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Payment.LocationCode = { valueOf: function(){return 'LocationCode';}, Type: 'Edm.Int32', Index: 74, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Payment.Cancelled = { valueOf: function(){return 'Cancelled';}, Type: 'BoYesNoEnum', Index: 75, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Payment.ControlAccount = { valueOf: function(){return 'ControlAccount';}, Type: 'Edm.String', Index: 76, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Payment.UnderOverpaymentdiffFC = { valueOf: function(){return 'UnderOverpaymentdiffFC';}, Type: 'Edm.Double', Index: 77, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Payment.AuthorizationStatus = { valueOf: function(){return 'AuthorizationStatus';}, Type: 'PaymentsAuthorizationStatusEnum', Index: 78, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Payment.BPLID = { valueOf: function(){return 'BPLID';}, Type: 'Edm.Int32', Index: 79, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Payment.BPLName = { valueOf: function(){return 'BPLName';}, Type: 'Edm.String', Index: 80, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Payment.VATRegNum = { valueOf: function(){return 'VATRegNum';}, Type: 'Edm.String', Index: 81, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Payment.BlanketAgreement = { valueOf: function(){return 'BlanketAgreement';}, Type: 'Edm.Int32', Index: 82, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Payment.PaymentChecks = { valueOf: function(){return 'PaymentChecks';}, Type: 'PaymentCheck', Index: 83, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.Payment.PaymentInvoices = { valueOf: function(){return 'PaymentInvoices';}, Type: 'PaymentInvoice', Index: 84, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.Payment.PaymentCreditCards = { valueOf: function(){return 'PaymentCreditCards';}, Type: 'PaymentCreditCard', Index: 85, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.Payment.PaymentAccounts = { valueOf: function(){return 'PaymentAccounts';}, Type: 'PaymentAccount', Index: 86, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.Payment.BillOfExchange = { valueOf: function(){return 'BillOfExchange';}, Type: 'BillOfExchange', Index: 87, Nullable: true, IsArray: false, IsComplex: true };
SAPB1.Payment.WithholdingTaxCertificatesCollection = { valueOf: function(){return 'WithholdingTaxCertificatesCollection';}, Type: 'WithholdingTaxCertificatesData', Index: 88, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.Payment.CashFlowAssignments = { valueOf: function(){return 'CashFlowAssignments';}, Type: 'CashFlowAssignment', Index: 89, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.Payment.Payments_ApprovalRequests = { valueOf: function(){return 'Payments_ApprovalRequests';}, Type: 'Payments_ApprovalRequest', Index: 90, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.Payment.WithholdingTaxDataWTXCollection = { valueOf: function(){return 'WithholdingTaxDataWTXCollection';}, Type: 'WithholdingTaxDataWTX', Index: 91, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.Payment.prototype.DocNum = new Number();
SAPB1.Payment.prototype.DocType = new String();
SAPB1.Payment.prototype.HandWritten = new String();
SAPB1.Payment.prototype.Printed = new String();
SAPB1.Payment.prototype.DocDate = new String();
SAPB1.Payment.prototype.CardCode = new String();
SAPB1.Payment.prototype.CardName = new String();
SAPB1.Payment.prototype.Address = new String();
SAPB1.Payment.prototype.CashAccount = new String();
SAPB1.Payment.prototype.DocCurrency = new String();
SAPB1.Payment.prototype.CashSum = new Number();
SAPB1.Payment.prototype.CheckAccount = new String();
SAPB1.Payment.prototype.TransferAccount = new String();
SAPB1.Payment.prototype.TransferSum = new Number();
SAPB1.Payment.prototype.TransferDate = new String();
SAPB1.Payment.prototype.TransferReference = new String();
SAPB1.Payment.prototype.LocalCurrency = new String();
SAPB1.Payment.prototype.DocRate = new Number();
SAPB1.Payment.prototype.Reference1 = new String();
SAPB1.Payment.prototype.Reference2 = new String();
SAPB1.Payment.prototype.CounterReference = new String();
SAPB1.Payment.prototype.Remarks = new String();
SAPB1.Payment.prototype.JournalRemarks = new String();
SAPB1.Payment.prototype.SplitTransaction = new String();
SAPB1.Payment.prototype.ContactPersonCode = new Number();
SAPB1.Payment.prototype.ApplyVAT = new String();
SAPB1.Payment.prototype.TaxDate = new String();
SAPB1.Payment.prototype.Series = new Number();
SAPB1.Payment.prototype.BankCode = new String();
SAPB1.Payment.prototype.BankAccount = new String();
SAPB1.Payment.prototype.DiscountPercent = new Number();
SAPB1.Payment.prototype.ProjectCode = new String();
SAPB1.Payment.prototype.CurrencyIsLocal = new String();
SAPB1.Payment.prototype.DeductionPercent = new Number();
SAPB1.Payment.prototype.DeductionSum = new Number();
SAPB1.Payment.prototype.CashSumFC = new Number();
SAPB1.Payment.prototype.CashSumSys = new Number();
SAPB1.Payment.prototype.BoeAccount = new String();
SAPB1.Payment.prototype.BillOfExchangeAmount = new Number();
SAPB1.Payment.prototype.BillofExchangeStatus = new String();
SAPB1.Payment.prototype.BillOfExchangeAmountFC = new Number();
SAPB1.Payment.prototype.BillOfExchangeAmountSC = new Number();
SAPB1.Payment.prototype.BillOfExchangeAgent = new String();
SAPB1.Payment.prototype.WTCode = new String();
SAPB1.Payment.prototype.WTAmount = new Number();
SAPB1.Payment.prototype.WTAmountFC = new Number();
SAPB1.Payment.prototype.WTAmountSC = new Number();
SAPB1.Payment.prototype.WTAccount = new String();
SAPB1.Payment.prototype.WTTaxableAmount = new Number();
SAPB1.Payment.prototype.Proforma = new String();
SAPB1.Payment.prototype.PayToBankCode = new String();
SAPB1.Payment.prototype.PayToBankBranch = new String();
SAPB1.Payment.prototype.PayToBankAccountNo = new String();
SAPB1.Payment.prototype.PayToCode = new String();
SAPB1.Payment.prototype.PayToBankCountry = new String();
SAPB1.Payment.prototype.IsPayToBank = new String();
SAPB1.Payment.prototype.DocEntry = new Number();
SAPB1.Payment.prototype.PaymentPriority = new String();
SAPB1.Payment.prototype.TaxGroup = new String();
SAPB1.Payment.prototype.BankChargeAmount = new Number();
SAPB1.Payment.prototype.BankChargeAmountInFC = new Number();
SAPB1.Payment.prototype.BankChargeAmountInSC = new Number();
SAPB1.Payment.prototype.UnderOverpaymentdifference = new Number();
SAPB1.Payment.prototype.UnderOverpaymentdiffSC = new Number();
SAPB1.Payment.prototype.WtBaseSum = new Number();
SAPB1.Payment.prototype.WtBaseSumFC = new Number();
SAPB1.Payment.prototype.WtBaseSumSC = new Number();
SAPB1.Payment.prototype.VatDate = new String();
SAPB1.Payment.prototype.TransactionCode = new String();
SAPB1.Payment.prototype.PaymentType = new String();
SAPB1.Payment.prototype.TransferRealAmount = new Number();
SAPB1.Payment.prototype.DocObjectCode = new String();
SAPB1.Payment.prototype.DocTypte = new String();
SAPB1.Payment.prototype.DueDate = new String();
SAPB1.Payment.prototype.LocationCode = new Number();
SAPB1.Payment.prototype.Cancelled = new String();
SAPB1.Payment.prototype.ControlAccount = new String();
SAPB1.Payment.prototype.UnderOverpaymentdiffFC = new Number();
SAPB1.Payment.prototype.AuthorizationStatus = new String();
SAPB1.Payment.prototype.BPLID = new Number();
SAPB1.Payment.prototype.BPLName = new String();
SAPB1.Payment.prototype.VATRegNum = new String();
SAPB1.Payment.prototype.BlanketAgreement = new Number();
SAPB1.Payment.prototype.PaymentChecks = new PaymentCheckCollection();
SAPB1.Payment.prototype.PaymentInvoices = new PaymentInvoiceCollection();
SAPB1.Payment.prototype.PaymentCreditCards = new PaymentCreditCardCollection();
SAPB1.Payment.prototype.PaymentAccounts = new PaymentAccountCollection();
SAPB1.Payment.prototype.BillOfExchange = new BillOfExchange();
SAPB1.Payment.prototype.WithholdingTaxCertificatesCollection = new WithholdingTaxCertificatesDataCollection();
SAPB1.Payment.prototype.CashFlowAssignments = new CashFlowAssignmentCollection();
SAPB1.Payment.prototype.Payments_ApprovalRequests = new Payments_ApprovalRequestCollection();
SAPB1.Payment.prototype.WithholdingTaxDataWTXCollection = new WithholdingTaxDataWTXCollection();

SAPB1.Payment.PaymentCheck = PaymentCheck
SAPB1.Payment.PaymentCheckCollection = PaymentCheckCollection
SAPB1.Payment.PaymentInvoice = PaymentInvoice
SAPB1.Payment.PaymentInvoiceCollection = PaymentInvoiceCollection
SAPB1.Payment.PaymentCreditCard = PaymentCreditCard
SAPB1.Payment.PaymentCreditCardCollection = PaymentCreditCardCollection
SAPB1.Payment.PaymentAccount = PaymentAccount
SAPB1.Payment.PaymentAccountCollection = PaymentAccountCollection
SAPB1.Payment.BillOfExchange = BillOfExchange
SAPB1.Payment.WithholdingTaxCertificatesData = WithholdingTaxCertificatesData
SAPB1.Payment.WithholdingTaxCertificatesDataCollection = WithholdingTaxCertificatesDataCollection
SAPB1.Payment.CashFlowAssignment = CashFlowAssignment
SAPB1.Payment.CashFlowAssignmentCollection = CashFlowAssignmentCollection
SAPB1.Payment.Payments_ApprovalRequest = Payments_ApprovalRequest
SAPB1.Payment.Payments_ApprovalRequestCollection = Payments_ApprovalRequestCollection
SAPB1.Payment.WithholdingTaxDataWTX = WithholdingTaxDataWTX
SAPB1.Payment.WithholdingTaxDataWTXCollection = WithholdingTaxDataWTXCollection

SAPB1.Payment.BoRcptTypes = BoRcptTypes
SAPB1.Payment.BoYesNoEnum = BoYesNoEnum
SAPB1.Payment.BoBoeStatus = BoBoeStatus
SAPB1.Payment.BoPaymentPriorities = BoPaymentPriorities
SAPB1.Payment.BoORCTPaymentTypeEnum = BoORCTPaymentTypeEnum
SAPB1.Payment.BoPaymentsObjectType = BoPaymentsObjectType
SAPB1.Payment.PaymentsAuthorizationStatusEnum = PaymentsAuthorizationStatusEnum

SAPB1.Payment.create = function (rawObject) {
    var instance = new SAPB1.Payment();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.Payment.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.Payment;
