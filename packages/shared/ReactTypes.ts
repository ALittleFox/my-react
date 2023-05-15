
export type Type = any
export type Key = any
export type Ref = any
export type Props = any
export type ElementType = any

/**
*  @desc: interface ReactElement
* $$typeof: symbol | number
* type: Type
* key: Key
* props: Props
* ref: Ref
*/
export interface ReactElementType {
  $$typeof: symbol | number
  type: ElementType
  key: Key
  props: Props
  ref: Ref,
  __mark: string
}
