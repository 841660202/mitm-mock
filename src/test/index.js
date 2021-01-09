"use strict";
// import {readMock} from '../mock-package/read'
// console.log("hello")
// readMock()
exports.__esModule = true;
var write_1 = require("../mock-package/write");
write_1.writeMock({
    method: 'GET',
    url: '/api/manufacturer/info/product/group/save',
    data: {
        "success": "000000",
        "data": true
    }
});
