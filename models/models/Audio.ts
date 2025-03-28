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
 * @interface Audio
 */
export interface Audio {
  /**
   *
   * @type {string}
   * @memberof Audio
   */
  readonly url: string
}

/**
 * Check if a given object implements the Audio interface.
 */
export function instanceOfAudio(value: object): value is Audio {
  if (!("url" in value) || value["url"] === undefined) return false
  return true
}

export function AudioFromJSON(json: any): Audio {
  return AudioFromJSONTyped(json, false)
}

export function AudioFromJSONTyped(json: any, ignoreDiscriminator: boolean): Audio {
  if (json == null) {
    return json
  }
  return {
    url: json["url"]
  }
}

export function AudioToJSON(json: any): Audio {
  return AudioToJSONTyped(json, false)
}

export function AudioToJSONTyped(value?: Omit<Audio, "url"> | null, ignoreDiscriminator: boolean = false): any {
  if (value == null) {
    return value
  }

  return {}
}
