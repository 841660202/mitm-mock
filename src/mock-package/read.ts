// /api/userInfo/getInfo GET
// /api/userInfo/getInfo GET
// /api/supplier/mapping/list?pageSize=0 GET
// /api/manufacturer/info/product/group/list GET
// /api/product/info/list/get?currentPage=1&pageSize=10 GET

const map = new Map();
import * as fs from 'fs'
import * as glob from "glob";
// options is optional
const pwd = process.cwd()
console.log(pwd)
const mockDir = `${pwd}/src/mock`
console.log(mockDir)

export function readMock() {
  console.log(123);
  console.log(pwd);
  // 读取json转化成对象
  // glob(`${mockDir}/**.json`, {}, function (err, files) {
  //   console.log(files)
  //   files.forEach(async (file) => {
  //     // const data = fs.readFileSync(file)
  //     const data = fs.readFileSync(file, 'utf8');
  //     const result = JSON.parse(data);
  //     console.log(result)
  //   })
  //   // files is an array of filenames.
  //   // If the `nonull` option is set, and nothing
  //   // was found, then files is ["**/*.js"]
  //   // er is an error object or null.
  // })
  // 读取常量，转化成对象
  glob(`${mockDir}/**.ts`, {}, function (err, files) {
    files.forEach(async (file) => {
      const data = fs.readFileSync(file, 'utf8');
      console.log(data)
      console.log(typeof data)
      const _data = data.replace('export default', '')
      const __data = JSON.parse(_data)
      // console.log(__data)
      // console.log(Object.keys(__data))
      for (const key in (__data || {})) {
        map.set(key, true)
      }

    })
    return map
  })
}


