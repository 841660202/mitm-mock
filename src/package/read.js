"use strict";
// /api/userInfo/getInfo GET
// /api/userInfo/getInfo GET
// /api/supplier/mapping/list?pageSize=0 GET
// /api/manufacturer/info/product/group/list GET
// /api/product/info/list/get?currentPage=1&pageSize=10 GET
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.readMock = void 0;
var map = new Map();
var fs = require("fs");
var glob = require("glob");
// options is optional
var pwd = process.cwd();
console.log(pwd);
var mockDir = pwd + "/src/mock";
console.log(mockDir);
function readMock() {
    console.log(123);
    console.log(pwd);
    // 读取json转化成对象
    glob(mockDir + "/**.json", {}, function (err, files) {
        var _this = this;
        console.log(files);
        files.forEach(function (file) { return __awaiter(_this, void 0, void 0, function () {
            var data, result;
            return __generator(this, function (_a) {
                data = fs.readFileSync(file, 'utf8');
                result = JSON.parse(data);
                console.log(result);
                return [2 /*return*/];
            });
        }); });
        // files is an array of filenames.
        // If the `nonull` option is set, and nothing
        // was found, then files is ["**/*.js"]
        // er is an error object or null.
    });
    // 读取常量，转化成对象
    glob(mockDir + "/**.ts", {}, function (err, files) {
        var _this = this;
        files.forEach(function (file) { return __awaiter(_this, void 0, void 0, function () {
            var data, _data, __data;
            return __generator(this, function (_a) {
                data = fs.readFileSync(file, 'utf8');
                console.log(data);
                console.log(typeof data);
                _data = data.replace('export default', '');
                __data = JSON.parse(_data);
                console.log(__data);
                console.log(Object.keys(__data));
                return [2 /*return*/];
            });
        }); });
    });
}
exports.readMock = readMock;
