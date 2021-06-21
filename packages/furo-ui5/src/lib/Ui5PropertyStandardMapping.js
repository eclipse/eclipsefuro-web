/**
 * Standard mapping set for Furo UI5 properties
 *
 * TODO: remove as soon the edit renderers are implemented
 * Applies:
 * - standard attribute mappings
 * - standard label mappings
 * - Event handling
 *
 *
 */
export class Ui5PropertyStandardMapping {
  static typeMap = {
    'google.type.Date': 'furo-ui5-data-date-picker-labeled',
    'furo.type.Date': 'furo-ui5-data-date-picker-labeled',
    'google.protobuf.StringValue': 'furo-ui5-data-text-input-labeled',
    'google.protobuf.FloatValue': 'furo-ui5-data-number-input-labeled',
    'google.protobuf.Int32Value': 'furo-ui5-data-number-input-labeled',
    'google.protobuf.UInt32Value': 'furo-ui5-data-number-input-labeled',
    'google.protobuf.BoolValue': 'furo-ui5-data-checkbox-input-labeled',
    'furo.StringProperty': 'furo-ui5-data-text-input-labeled',
    'furo.IntegerProperty': 'furo-ui5-data-number-input-labeled',
    'furo.NumberProperty': 'furo-ui5-data-number-input-labeled',
    'furo.StringOptionProperty': 'furo-ui5-data-collection-dropdown-labeled',
    'furo.fat.String': 'furo-ui5-data-text-input-labeled',
    'furo.fat.Int32': 'furo-ui5-data-number-input-labeled',
    'furo.fat.Int64': 'furo-ui5-data-number-input-labeled',
    'furo.fat.Bool': 'furo-ui5-data-checkbox-input-labeled',
  };
}
