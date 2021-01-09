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
import { config } from "../config/index";
// @ts-ignore
import { IWrite } from 'commonType';
// options is optional
const pwd = process.cwd()
const mockDir = `${pwd}/src${config.mock}`

export async function writeMock({ method, url, data }: IWrite) {
  // 生成文件夹
  console.log(mockDir)
  const res = await mkdirp(mockDir)
  // url生成文件名
  const a = url.split('/') || [];
  let fileName: string = '';
  if (a.length > config.len) {
    fileName = a.splice(config.startIdx, config.len).join('-')
  }
  const path = `${mockDir}/${fileName}.ts`
  // 写入文件
  writeContent({ method, url, path, data })
  // TODO:更新缓存map
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
  _data[`${method} ${url}`] = data
  const content = JSON.stringify(_data, null, "\t")
  writeFileSync(path, `export default ${content}`, 'utf-8');
}


