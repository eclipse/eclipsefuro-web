/**
 * Standard Set of Type Renderers
 * For every supported type a simple rendering component for value display purposes is provided.
 *
 * List of Types:
 * - string
 * - bool
 * - int32
 * - int64
 * - uint32
 * - uint64
 * - float
 * - double
 * - furo.Link
 * - furo.type.Money
 * - furo.type.Date
 * - furo.Reference
 * - furo.fat.Bool
 * - furo.fat.Double
 * - furo.fat.Float
 * - furo.fat.Int32
 * - furo.fat.Int64
 * - furo.fat.String
 * - furo.fat.Uint32
 * - furo.fat.Uint64
 * - google.type.Color
 * - google.type.Date
 * - google.type.Money
 * - google.type.TimeOfDay
 * - google.protobuf.Timestamp
 *
 */

import './display-string.js';
import './display-int32.js';
import './display-uint32.js';
import './display-int64.js';
import './display-uint64.js';
import './display-double.js';
import './display-float.js';

import './display-furo-fat-string.js';
import './display-furo-link.js';
import './display-furo-type-money.js';
import './display-furo-type-date.js';
import './display-furo-reference.js';

import './display-google-type-money.js';
import './display-google-type-date.js';
