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
import type { Meme } from "./Meme"
import { MemeFromJSON, MemeFromJSONTyped, MemeToJSON, MemeToJSONTyped } from "./Meme"

/**
 *
 * @export
 * @interface Bookmarking
 */
export interface Bookmarking {
  /**
   *
   * @type {number}
   * @memberof Bookmarking
   */
  readonly id: number
  /**
   *
   * @type {number}
   * @memberof Bookmarking
   */
  bookmarkId: number
  /**
   *
   * @type {number}
   * @memberof Bookmarking
   */
  memeId: number
  /**
   *
   * @type {Meme}
   * @memberof Bookmarking
   */
  readonly meme: Meme
}

/**
 * Check if a given object implements the Bookmarking interface.
 */
export function instanceOfBookmarking(value: object): value is Bookmarking {
  if (!("id" in value) || value["id"] === undefined) return false
  if (!("bookmarkId" in value) || value["bookmarkId"] === undefined) return false
  if (!("memeId" in value) || value["memeId"] === undefined) return false
  if (!("meme" in value) || value["meme"] === undefined) return false
  return true
}

export function BookmarkingFromJSON(json: any): Bookmarking {
  return BookmarkingFromJSONTyped(json, false)
}

export function BookmarkingFromJSONTyped(json: any, ignoreDiscriminator: boolean): Bookmarking {
  if (json == null) {
    return json
  }
  return {
    id: json["id"],
    bookmarkId: json["bookmark_id"],
    memeId: json["meme_id"],
    meme: MemeFromJSON(json["meme"])
  }
}

export function BookmarkingToJSON(json: any): Bookmarking {
  return BookmarkingToJSONTyped(json, false)
}

export function BookmarkingToJSONTyped(
  value?: Omit<Bookmarking, "id" | "meme"> | null,
  ignoreDiscriminator: boolean = false
): any {
  if (value == null) {
    return value
  }

  return {
    bookmark_id: value["bookmarkId"],
    meme_id: value["memeId"]
  }
}
