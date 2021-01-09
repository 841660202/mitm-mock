import * as express from 'express';
import { json, urlencoded } from 'body-parser';
import * as cors from 'cors';
import * as morgan from 'morgan';
import * as superagent from 'superagent';
import { config } from './config/index'
import { readMock } from './mock-package/read'
import { writeMock } from './mock-package/write'
class App {
    public app: express.Application;
    constructor() {
        this.app = express();
        this.config();
        this.readToMap();
        // 引入路由
        // this.app.get('/', (req, res) => {
        //     res.send({ message: 'hello express' });
        // });
        this.app.get('/api/*', async (req, res) => {
            const { url, method, headers } = req
            console.log(method, url)
            switch (method) {
                case 'GET':
                    try {
                        // 发送请求
                        const _res = await superagent
                            .get(`${config.remoteServer}${url.replace('api', config.prefix)}`)
                            // 设置些需要的头
                            .set('Content-Type', 'application/json;charset=UTF-8')
                            // set cookie字段
                            .set('Cookie', headers.cookie)
                            .set('warehouseId', headers.warehouseid)
                        // 更新mock数据
                        writeMock({
                            method,
                            url,
                            data: JSON.parse(_res?.text)
                        })
                        res.send(_res?.text)
                    } catch (error) {
                        res.send(error)
                    }
                    break;

                case 'POST':
                    superagent
                        .post(`${config.remoteServer}${url.replace('api', config.prefix)}`)
                        .set('Content-Type', 'application/json;charset=UTF-8')
                        // set cookie字段
                        .set('Cookie', headers.cookie)
                        .set('warehouseId', headers.warehouseid)
                        .end((_err, _res) => {
                            res.send(_res?.text)
                        });
                    break;

                default:
                    break;
            }

        })
    }
    private config() {
        //开启 cors
        this.app.use(cors());
        //支持  application/json类型 发送数据
        this.app.use(json());
        //支持 application/x-www-form-urlencoded 发送数据
        this.app.use(urlencoded({ extended: false }));
        //日志中间件
        // this.app.use(morgan('dev'));
    }
    private readToMap() {
        console.log("启动read to map")
        // readMock()
        // 本来计划，有缓存的就不在更新，

        // （使用场景： 考虑到假设已经有100个接口，现在一个接口更新了，没必要将100个接口重新更新一次）
        // 所以这个缓存是无效的，没必要的，

        // TODO: 可以开发成配置的 useMapCache
        // 当启用时，已缓存的不在更新，仅更新未缓存的接口（使用场景： 新开发模块了，这样速度可以得到显著提升）
        // 当关闭后，认为是需要将缓存进行更新最新（使用场景： 接口返回数据格式调整了）
    }
}
export default new App().app;
