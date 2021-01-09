// /api/userInfo/getInfo GET
// /api/userInfo/getInfo GET
// /api/supplier/mapping/list?pageSize=0 GET
// /api/manufacturer/info/product/group/list GET
// /api/product/info/list/get?currentPage=1&pageSize=10 GET

const map = new Map();
import * as fs from 'fs'
import * as mkdirp from 'mkdirp'
import * as glob from "glob";
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { IWrite } from 'd';
// options is optional
const pwd = process.cwd()
console.log(pwd)
const mockDir = `${pwd}/src/mock`
console.log(mockDir)

export async function writeMock({ method, url, data }: IWrite) {
  // 生成文件夹
  const res = await mkdirp(mockDir)
  console.log("文件路径", res)
  // url生成文件名
  const a = url.split('/') || [];
  let fileName: string = '';
  if (a.length > 2) {
    fileName = a.splice(1, 2).join('-')
  }
  const path = `${mockDir}/${fileName}.ts`
  console.log("文件名", path)
  // 写入文件
  writeContent({ method, url, path, data })
  // 更新缓存map
}

// 读取原有内容
export function readContent(path) {
  // 数据要拼接，而不是覆盖
  const content = readFileSync(path, 'utf8');
  const result = content.replace('export default', '')
  return result || ''

}
// 写入内容
export async function writeContent({ method, url, path, data }: IWrite) {
  // 数据要拼接，而不是覆盖

  let _data = {}
  if (existsSync(path)) {
    _data = JSON.parse(readContent(path))
  }
  console.log(_data)
  _data[`${method} ${url}`] = data
  const content = JSON.stringify(_data, null, "\t")
  writeFileSync(path, `export default ${content}`, 'utf-8');
}


