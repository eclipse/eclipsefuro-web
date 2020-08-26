/**
 * Standard mapping set for Furo UI5 properties
 * Applies:
 * - standard attribute mappings
 * - standard label mappings
 * - Event handling
 *
 *
 */
export class Ui5PropertyStandardMapping {

  static typeMap = {
    'google.type.Date': 'furo-ui5-data-date-picker',
    'google.protobuf.StringValue': 'furo-ui5-data-text-input',
    'google.protobuf.FloatValue': 'furo-ui5-data-number-input',
    'google.protobuf.Int32Value': 'furo-ui5-data-number-input',
    'google.protobuf.UInt32Value': 'furo-ui5-data-number-input',
    'google.protobuf.BoolValue': 'furo-ui5-data-checkbox-input',
    'furo.StringProperty': 'furo-ui5-data-text-input',
    'furo.IntegerProperty': 'furo-ui5-data-number-input',
    'furo.NumberProperty': 'furo-ui5-data-number-input',
    'furo.StringOptionProperty': 'furo-ui5-data-collection-dropdown',
    'furo.fat.String': 'furo-ui5-data-text-input',
    'furo.fat.Int32': 'furo-ui5-data-number-input',
    'furo.fat.Int64': 'furo-ui5-data-number-input',
    'furo.fat.Bool': 'furo-ui5-data-checkbox-input',
  }
}
