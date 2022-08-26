import { ValidatorFuroBigDecimal } from './ValidatorFuroBigDecimal.js'
import { ValidatorGoogleTypeMoney } from './ValidatorGoogleTypeMoney.js'
import { ValidatorGoogleProtobufInt64Value } from './ValidatorGoogleProtobufInt64Value.js'
import { ValidatorGoogleProtobufFloatValue } from './ValidatorGoogleProtobufFloatValue.js'
import { ValidatorFuroReference } from './ValidatorFuroReference.js'
import { ValidatorGoogleProtobufBoolValue } from './ValidatorGoogleProtobufBoolValue.js'
import { ValidatorGoogleProtobufTimestamp } from './ValidatorGoogleProtobufTimestamp.js'
import { ValidatorGoogleTypeDate } from './ValidatorGoogleTypeDate.js'
import { ValidatorFuroFatString } from './ValidatorFuroFatString.js'
import { ValidatorFuroFatNumeric } from './ValidatorFuroFatNumeric.js';

import { ValidatorRegistry } from '../ValidatorRegistry.js'


/**
 * Validators for furo base types and google well known types
 */
export class BaseSpecValidators {
  /**
   * Register all validators. This should be done in your init phase of your app.
   * ```js
   * import {BaseSpecValidators} from '@furo/framework/src/BaseSpecValidators/RegisterAll.js';
   *
   * BaseSpecValidators.registerAll()
   * ```
   *
   */
  static registerAll() {
    ValidatorRegistry.register('google.type.Money', ValidatorGoogleTypeMoney)

    ValidatorRegistry.register('google.type.Date', ValidatorGoogleTypeDate)
    ValidatorRegistry.register('furo.type.Date', ValidatorGoogleTypeDate)

    ValidatorRegistry.register(
      'google.protobuf.Int32Value',
      ValidatorGoogleProtobufInt64Value,
    )
    ValidatorRegistry.register(
      'google.protobuf.UInt32Value',
      ValidatorGoogleProtobufInt64Value,
    )
    ValidatorRegistry.register(
      'google.protobuf.Int64Value',
      ValidatorGoogleProtobufInt64Value,
    )
    ValidatorRegistry.register(
      'google.protobuf.UInt64Value',
      ValidatorGoogleProtobufInt64Value,
    )

    ValidatorRegistry.register(
      'google.protobuf.DoubleValue',
      ValidatorGoogleProtobufFloatValue,
    )
    ValidatorRegistry.register(
      'google.protobuf.FloatValue',
      ValidatorGoogleProtobufFloatValue,
    )

    ValidatorRegistry.register('furo.BigDecimal', ValidatorFuroBigDecimal)

    ValidatorRegistry.register(
      'google.protobuf.BoolValue',
      ValidatorGoogleProtobufBoolValue,
    )

    ValidatorRegistry.register('furo.Reference', ValidatorFuroReference)

    ValidatorRegistry.register(
      'google.protobuf.Timestamp',
      ValidatorGoogleProtobufTimestamp,
    )

    ValidatorRegistry.register('furo.fat.String', ValidatorFuroFatString)
    ValidatorRegistry.register('furo.fat.Float', ValidatorFuroFatNumeric)
    ValidatorRegistry.register('furo.fat.Int32', ValidatorFuroFatNumeric)
    ValidatorRegistry.register('furo.fat.Int64', ValidatorFuroFatNumeric)
    ValidatorRegistry.register('furo.fat.Uint32', ValidatorFuroFatNumeric)
    ValidatorRegistry.register('furo.fat.Uint64', ValidatorFuroFatNumeric)
    ValidatorRegistry.register('furo.fat.Double', ValidatorFuroFatNumeric)

    ValidatorRegistry.register('google.protobuf.StringValue', ValidatorFuroFatString)
    ValidatorRegistry.register('google.protobuf.DoubleValue', ValidatorFuroFatNumeric)
    ValidatorRegistry.register('google.protobuf.Int32Value', ValidatorFuroFatNumeric)
    ValidatorRegistry.register('google.protobuf.Int64Value', ValidatorFuroFatNumeric)
    ValidatorRegistry.register('google.protobuf.FloatValue', ValidatorFuroFatNumeric)
    ValidatorRegistry.register('google.protobuf.UInt64Value', ValidatorFuroFatNumeric)
    ValidatorRegistry.register('google.protobuf.UInt32Value', ValidatorFuroFatNumeric)

  }
}
