"use strict";
// /api/userInfo/getInfo GET
// /api/userInfo/getInfo GET
// /api/supplier/mapping/list?pageSize=0 GET
// /api/manufacturer/info/product/group/list GET
// /api/product/info/list/get?currentPage=1&pageSize=10 GET
exports.__esModule = true;
exports.readMock = void 0;
var map = new Map();
var glob = require("glob");
// options is optional
var pwd = process.cwd();
console.log(pwd);
var mockDir = pwd + "/mock";
function readMock() {
    console.log('hello');
    glob(mockDir + "/**.js", {}, function (err, files) {
        console.log(files);
        files.forEach(function (file) {
            var data = require(file);
            console.log('data', data);
        });
        // files is an array of filenames.
        // If the `nonull` option is set, and nothing
        // was found, then files is ["**/*.js"]
        // er is an error object or null.
    });
}
exports.readMock = readMock;
