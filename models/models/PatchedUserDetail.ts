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
import type { SocialAccount } from "./SocialAccount"
import {
  SocialAccountFromJSON,
  SocialAccountFromJSONTyped,
  SocialAccountToJSON,
  SocialAccountToJSONTyped
} from "./SocialAccount"

/**
 * UserSerializer를 확장하여 소셜 계정 정보를 포함
 * @export
 * @interface PatchedUserDetail
 */
export interface PatchedUserDetail {
  /**
   *
   * @type {number}
   * @memberof PatchedUserDetail
   */
  readonly pk?: number
  /**
   *
   * @type {string}
   * @memberof PatchedUserDetail
   */
  readonly email?: string
  /**
   *
   * @type {Array<SocialAccount>}
   * @memberof PatchedUserDetail
   */
  readonly socialAccount?: Array<SocialAccount>
}

/**
 * Check if a given object implements the PatchedUserDetail interface.
 */
export function instanceOfPatchedUserDetail(value: object): value is PatchedUserDetail {
  return true
}

export function PatchedUserDetailFromJSON(json: any): PatchedUserDetail {
  return PatchedUserDetailFromJSONTyped(json, false)
}

export function PatchedUserDetailFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedUserDetail {
  if (json == null) {
    return json
  }
  return {
    pk: json["pk"] == null ? undefined : json["pk"],
    email: json["email"] == null ? undefined : json["email"],
    socialAccount:
      json["social_account"] == null ? undefined : (json["social_account"] as Array<any>).map(SocialAccountFromJSON)
  }
}

export function PatchedUserDetailToJSON(json: any): PatchedUserDetail {
  return PatchedUserDetailToJSONTyped(json, false)
}

export function PatchedUserDetailToJSONTyped(
  value?: Omit<PatchedUserDetail, "pk" | "email" | "social_account"> | null,
  ignoreDiscriminator: boolean = false
): any {
  if (value == null) {
    return value
  }

  return {}
}
