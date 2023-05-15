import path from 'path'
import fs from 'fs'
import cjs from '@rollup/plugin-commonjs'
import ts from 'rollup-plugin-typescript2'
const pkgPath = path.resolve(__dirname, '../../packages')
const disPatch = path.resolve(__dirname, '../../dist/node_modules')

// 解析包路径
function resolvePkgPath(pkgName, isDist) {
  if (isDist) {
    return `${disPatch}/${pkgName}`
  }
  return `${pkgPath}/${pkgName}`
}

// 解析packagejson 获取包路径
function getPackageJSON(pkgName) {
  // 包路径
  const path = `${resolvePkgPath(pkgName)}/package.json`
  const str = fs.readFileSync(path, { encoding: 'utf-8' })
  return JSON.parse(str)
}

// 获取所有基础的rollup plugin
function getBaseRollupPlugins({ typescript = {} } = {}) {
  return [cjs(), ts(typescript)]
}

export { resolvePkgPath, getPackageJSON, getBaseRollupPlugins }
