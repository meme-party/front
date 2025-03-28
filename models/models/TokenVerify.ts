/* tslint:disable */
/* eslint-disable */
/**
 * Dionysus API
 * Meme Project
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: dev.shinkeonkim@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from "../runtime"
/**
 *
 * @export
 * @interface TokenVerify
 */
export interface TokenVerify {
  /**
   *
   * @type {string}
   * @memberof TokenVerify
   */
  token: string
}

/**
 * Check if a given object implements the TokenVerify interface.
 */
export function instanceOfTokenVerify(value: object): value is TokenVerify {
  if (!("token" in value) || value["token"] === undefined) return false
  return true
}

export function TokenVerifyFromJSON(json: any): TokenVerify {
  return TokenVerifyFromJSONTyped(json, false)
}

export function TokenVerifyFromJSONTyped(json: any, ignoreDiscriminator: boolean): TokenVerify {
  if (json == null) {
    return json
  }
  return {
    token: json["token"]
  }
}

export function TokenVerifyToJSON(json: any): TokenVerify {
  return TokenVerifyToJSONTyped(json, false)
}

export function TokenVerifyToJSONTyped(value?: TokenVerify | null, ignoreDiscriminator: boolean = false): any {
  if (value == null) {
    return value
  }

  return {
    token: value["token"]
  }
}
