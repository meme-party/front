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
 * @interface TagCategory
 */
export interface TagCategory {
  /**
   *
   * @type {number}
   * @memberof TagCategory
   */
  readonly id: number
  /**
   *
   * @type {string}
   * @memberof TagCategory
   */
  name: string
}

/**
 * Check if a given object implements the TagCategory interface.
 */
export function instanceOfTagCategory(value: object): value is TagCategory {
  if (!("id" in value) || value["id"] === undefined) return false
  if (!("name" in value) || value["name"] === undefined) return false
  return true
}

export function TagCategoryFromJSON(json: any): TagCategory {
  return TagCategoryFromJSONTyped(json, false)
}

export function TagCategoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): TagCategory {
  if (json == null) {
    return json
  }
  return {
    id: json["id"],
    name: json["name"]
  }
}

export function TagCategoryToJSON(json: any): TagCategory {
  return TagCategoryToJSONTyped(json, false)
}

export function TagCategoryToJSONTyped(
  value?: Omit<TagCategory, "id"> | null,
  ignoreDiscriminator: boolean = false
): any {
  if (value == null) {
    return value
  }

  return {
    name: value["name"]
  }
}
