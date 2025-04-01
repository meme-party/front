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

/**
 * * `Text` - Text
 * * `Image` - Image
 * * `Video` - Video
 * * `Audio` - Audio
 * @export
 */
export const TypeEnum = {
  Text: "Text",
  Image: "Image",
  Video: "Video",
  Audio: "Audio"
} as const
export type TypeEnum = (typeof TypeEnum)[keyof typeof TypeEnum]

export function instanceOfTypeEnum(value: any): boolean {
  for (const key in TypeEnum) {
    if (Object.prototype.hasOwnProperty.call(TypeEnum, key)) {
      if (TypeEnum[key as keyof typeof TypeEnum] === value) {
        return true
      }
    }
  }
  return false
}

export function TypeEnumFromJSON(json: any): TypeEnum {
  return TypeEnumFromJSONTyped(json, false)
}

export function TypeEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): TypeEnum {
  return json as TypeEnum
}

export function TypeEnumToJSON(value?: TypeEnum | null): any {
  return value as any
}

export function TypeEnumToJSONTyped(value: any, ignoreDiscriminator: boolean): TypeEnum {
  return value as TypeEnum
}
