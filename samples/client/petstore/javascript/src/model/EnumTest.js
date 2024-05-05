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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/OuterEnum'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./OuterEnum'));
  } else {
    // Browser globals (root is window)
    if (!root.SwaggerPetstore) {
      root.SwaggerPetstore = {};
    }
    root.SwaggerPetstore.EnumTest = factory(root.SwaggerPetstore.ApiClient, root.SwaggerPetstore.OuterEnum);
  }
}(this, function(ApiClient, OuterEnum) {
  'use strict';

  /**
   * The EnumTest model module.
   * @module model/EnumTest
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>EnumTest</code>.
   * @alias module:model/EnumTest
   * @class
   * @param enumStringRequired {module:model/EnumTest.EnumStringRequiredEnum} 
   */
  var exports = function(enumStringRequired) {
    this.enumStringRequired = enumStringRequired;
  };

  /**
   * Constructs a <code>EnumTest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EnumTest} obj Optional instance to populate.
   * @return {module:model/EnumTest} The populated <code>EnumTest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('enum_string'))
        obj.enumString = ApiClient.convertToType(data['enum_string'], 'String');
      if (data.hasOwnProperty('enum_string_required'))
        obj.enumStringRequired = ApiClient.convertToType(data['enum_string_required'], 'String');
      if (data.hasOwnProperty('enum_integer'))
        obj.enumInteger = ApiClient.convertToType(data['enum_integer'], 'Number');
      if (data.hasOwnProperty('enum_number'))
        obj.enumNumber = ApiClient.convertToType(data['enum_number'], 'Number');
      if (data.hasOwnProperty('outerEnum'))
        obj.outerEnum = OuterEnum.constructFromObject(data['outerEnum']);
    }
    return obj;
  }

  /**
   * @member {module:model/EnumTest.EnumStringEnum} enumString
   */
  exports.prototype.enumString = undefined;

  /**
   * @member {module:model/EnumTest.EnumStringRequiredEnum} enumStringRequired
   */
  exports.prototype.enumStringRequired = undefined;

  /**
   * @member {module:model/EnumTest.EnumIntegerEnum} enumInteger
   */
  exports.prototype.enumInteger = undefined;

  /**
   * @member {module:model/EnumTest.EnumNumberEnum} enumNumber
   */
  exports.prototype.enumNumber = undefined;

  /**
   * @member {module:model/OuterEnum} outerEnum
   */
  exports.prototype.outerEnum = undefined;



  /**
   * Allowed values for the <code>enumString</code> property.
   * @enum {String}
   * @readonly
   */
  exports.EnumStringEnum = {
    /**
     * value: "UPPER"
     * @const
     */
    UPPER: "UPPER",

    /**
     * value: "lower"
     * @const
     */
    lower: "lower",

    /**
     * value: ""
     * @const
     */
    empty: ""
  };


  /**
   * Allowed values for the <code>enumStringRequired</code> property.
   * @enum {String}
   * @readonly
   */
  exports.EnumStringRequiredEnum = {
    /**
     * value: "UPPER"
     * @const
     */
    UPPER: "UPPER",

    /**
     * value: "lower"
     * @const
     */
    lower: "lower",

    /**
     * value: ""
     * @const
     */
    empty: ""
  };


  /**
   * Allowed values for the <code>enumInteger</code> property.
   * @enum {Number}
   * @readonly
   */
  exports.EnumIntegerEnum = {
    /**
     * value: 1
     * @const
     */
    _1: 1,

    /**
     * value: -1
     * @const
     */
    _1_2: -1
  };


  /**
   * Allowed values for the <code>enumNumber</code> property.
   * @enum {Number}
   * @readonly
   */
  exports.EnumNumberEnum = {
    /**
     * value: 1.1
     * @const
     */
    _11: 1.1,

    /**
     * value: -1.2
     * @const
     */
    _12: -1.2
  };

  return exports;

}));