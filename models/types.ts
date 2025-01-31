export type InvoiceStatus = 'Draft' | 'Saved' | 'Unpaid' | 'Cancelled' | 'Paid' | 'Return' | 'ReturnIssued';
export enum ModelNameEnum {
  Account = 'Account',
  AccountingLedgerEntry = 'AccountingLedgerEntry',
  AccountingSettings = 'AccountingSettings',
  Address = 'Address',
  Batch= 'Batch',
  Color = 'Color',
  Currency = 'Currency',
  GetStarted = 'GetStarted',
  Defaults = 'Defaults',
  Item = 'Item',
  ItemPrice = 'ItemPrice',
  UOM = 'UOM',
  UOMConversionItem = 'UOMConversionItem',
  JournalEntry = 'JournalEntry',
  JournalEntryAccount = 'JournalEntryAccount',
  Misc = 'Misc',
  NumberSeries = 'NumberSeries',
  Lead = 'Lead',
  Party = 'Party',
  Payment = 'Payment',
  PaymentFor = 'PaymentFor',
  PriceList = 'PriceList',
  PrintSettings = 'PrintSettings',
  PrintTemplate = 'PrintTemplate',
  PurchaseInvoice = 'PurchaseInvoice',
  PurchaseInvoiceItem = 'PurchaseInvoiceItem',
  SalesInvoice = 'SalesInvoice',
  SalesInvoiceItem = 'SalesInvoiceItem',
  SalesQuote = 'SalesQuote',
  SalesQuoteItem = 'SalesQuoteItem',
  SerialNumber = 'SerialNumber',
  SetupWizard = 'SetupWizard',
  Tax = 'Tax',
  TaxDetail = 'TaxDetail',
  TaxSummary = 'TaxSummary',
  PatchRun = 'PatchRun',
  SingleValue = 'SingleValue',
  InventorySettings = 'InventorySettings',
  SystemSettings = 'SystemSettings',
  StockMovement = 'StockMovement',
  StockMovementItem = 'StockMovementItem',
  StockLedgerEntry = 'StockLedgerEntry',
  Shipment = 'Shipment',
  ShipmentItem = 'ShipmentItem',
  PurchaseReceipt = 'PurchaseReceipt',
  PurchaseReceiptItem = 'PurchaseReceiptItem',
  Location = 'Location',
  CustomForm = 'CustomForm',
  CustomField = 'CustomField',
  POSSettings = 'POSSettings',
  POSShift = 'POSShift'
}

export type ModelName = keyof typeof ModelNameEnum;
