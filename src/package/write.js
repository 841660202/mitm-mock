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
exports.writeContent = exports.readContent = exports.writeMock = void 0;
var map = new Map();
var mkdirp = require("mkdirp");
var fs_1 = require("fs");
// options is optional
var pwd = process.cwd();
console.log(pwd);
var mockDir = pwd + "/src/mock";
console.log(mockDir);
function writeMock(_a) {
    var method = _a.method, url = _a.url, data = _a.data;
    return __awaiter(this, void 0, void 0, function () {
        var res, a, fileName, path;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, mkdirp(mockDir)];
                case 1:
                    res = _b.sent();
                    console.log("文件路径", res);
                    a = url.split('/') || [];
                    fileName = '';
                    if (a.length > 2) {
                        fileName = a.splice(1, 2).join('-');
                    }
                    path = mockDir + "/" + fileName + ".ts";
                    console.log("文件名", path);
                    // 写入文件
                    writeContent({ method: method, url: url, path: path, data: data });
                    return [2 /*return*/];
            }
        });
    });
}
exports.writeMock = writeMock;
// 读取原有内容
function readContent(path) {
    // 数据要拼接，而不是覆盖
    var content = fs_1.readFileSync(path, 'utf8');
    var result = content.replace('export default', '');
    return result || '';
}
exports.readContent = readContent;
// 写入内容
function writeContent(_a) {
    var method = _a.method, url = _a.url, path = _a.path, data = _a.data;
    return __awaiter(this, void 0, void 0, function () {
        var _data, content;
        return __generator(this, function (_b) {
            _data = JSON.parse(readContent(path));
            console.log(_data);
            _data[method + " " + url] = data;
            content = JSON.stringify(_data, null, "\t");
            fs_1.writeFileSync(path, "export default " + content, 'utf-8');
            return [2 /*return*/];
        });
    });
}
exports.writeContent = writeContent;
