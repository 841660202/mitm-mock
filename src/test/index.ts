// import {readMock} from '../mock-package/read'
// console.log("hello")
// readMock()

import { writeMock } from "../mock-package/write";

writeMock({
  method: 'GET',
  url: '/api/manufacturer/info/product/group/save',
  data: {
    "success": "000000",
    "data": true
  }
})