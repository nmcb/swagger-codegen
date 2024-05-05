/*
 * Swagger Petstore
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * OpenAPI spec version: 1.0.0
 * Contact: apiteam@swagger.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.33-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient';

/**
 * The EnumArrays model module.
 * @module model/EnumArrays
 * @version 1.0.0
 */
export class EnumArrays {
  /**
   * Constructs a new <code>EnumArrays</code>.
   * @alias module:model/EnumArrays
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>EnumArrays</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EnumArrays} obj Optional instance to populate.
   * @return {module:model/EnumArrays} The populated <code>EnumArrays</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new EnumArrays();
      if (data.hasOwnProperty('just_symbol'))
        obj.justSymbol = ApiClient.convertToType(data['just_symbol'], 'String');
      if (data.hasOwnProperty('array_enum'))
        obj.arrayEnum = ApiClient.convertToType(data['array_enum'], ['String']);
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>justSymbol</code> property.
 * @enum {String}
 * @readonly
 */
EnumArrays.JustSymbolEnum = {
  /**
   * value: ">="
   * @const
   */
  GREATER_THAN_OR_EQUAL_TO: ">=",

  /**
   * value: "$"
   * @const
   */
  DOLLAR: "$"
};

/**
 * @member {module:model/EnumArrays.JustSymbolEnum} justSymbol
 */
EnumArrays.prototype.justSymbol = undefined;

/**
 * Allowed values for the <code>arrayEnum</code> property.
 * @enum {String}
 * @readonly
 */
EnumArrays.ArrayEnumEnum = {
  /**
   * value: "fish"
   * @const
   */
  fish: "fish",

  /**
   * value: "crab"
   * @const
   */
  crab: "crab"
};

/**
 * @member {Array.<module:model/EnumArrays.ArrayEnumEnum>} arrayEnum
 */
EnumArrays.prototype.arrayEnum = undefined;

