// reactElement
import { REACT_ELEMENT_TYPE } from 'shared/ReactSymbols'
import { Type, Key, Ref, Props, ElementType,ReactElementType } from 'shared/ReactTypes'

// reactelement 的装配函数
const ReactElement = function (
  type: Type,
  key: Key,
  ref: Ref,
  props: Props
): ReactElementType {
  const element = {
    // 
    $$typeof: REACT_ELEMENT_TYPE,
    type,
    key,
    ref,
    props,
    // 自定义 字段
    __mark: 'dot-c '
  }
  return element
}

/**
 * @desc 实现jsx函数
 * @param type 组件的type
 * @param config 组件的config 需要注意 key ref 这两个 props
 * @param maybeChildren 
 */
export const jsx = (
  type: ElementType,
  config: any,
  ...maybeChildren: any
): ReactElementType => {
  // 没有传key 默认null
  let key: Key = null
  const props: Props = {}
  let ref: Ref = null
  // 遍历prop
  for (const prop in config) {
    const val = config[prop]

    // 处理key
    if (prop === 'key') {
      if (val !== undefined) {
        // key转为字符串
        key = '' + key
      }
      continue
    }
    //
    if (prop === 'ref') {
      if (val !== undefined) {
        ref = val
      }
      continue
    }
    // 是否是 config 自己的 props（排除原型上的）
    if ({}.hasOwnProperty.call(config, prop)) {
      props[prop] = val
    }
  }
  // 处理 child
  // 拿到child的长度
  const maybeChildrenLength = maybeChildren.length
  if (maybeChildrenLength) {
    // Children 长度为一时候，
    if (maybeChildrenLength === 1) {
      props.children = maybeChildren[0]
    } else {
      // 多个Children时候
      props.children = maybeChildren
    }
  }

  // 返回一个ReactElement
  return ReactElement(type, key, ref, props)
}

export const jsxDEV =  (
  type: ElementType,
  config: any,
  // ...maybeChildren: any
): ReactElementType => {
  // 没有传key 默认null
  let key: Key = null
  const props: Props = {}
  let ref: Ref = null
  // 遍历prop
  for (const prop in config) {
    const val = config[prop]

    // 处理key
    if (prop === 'key') {
      if (val !== undefined) {
        // key转为字符串
        key = '' + key
      }
      continue
    }
    //
    if (prop === 'ref') {
      if (val !== undefined) {
        ref = val
      }
      continue
    }
    // 是否是 config 自己的 props（排除原型上的）
    if ({}.hasOwnProperty.call(config, prop)) {
      props[prop] = val
    }
  }
  // // 处理 child
  // // 拿到child的长度
  // const maybeChildrenLength = maybeChildren.length
  // if (maybeChildrenLength) {
  //   // Children 长度为一时候，
  //   if (maybeChildrenLength === 1) {
  //     props.children = maybeChildren[0]
  //   } else {
  //     // 多个Children时候
  //     props.children = maybeChildren
  //   }
  // }

  // 返回一个ReactElement
  return ReactElement(type, key, ref, props)
}
