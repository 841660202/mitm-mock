// const express = require('express')
// const config = require('./config')
// const app = express()
// const superagent = require('superagent');
// app.get('/api/*', (req, res) => {
//   const { url, method, headers } = req
//   console.log(url, method)
//   switch (method) {
//     case 'GET':
//       superagent
//         .get(`${config.remoteServer}${url.replace('api', config.prefix)}`)
//         // 设置些需要的头
//         .set('Content-Type', 'application/json;charset=UTF-8')
//         // set cookie字段
//         .set('Cookie', headers.cookie)
//         .set('warehouseId', headers.warehouseid)
//         .end((_err, _res) => {
//           res.send(_res?.text)
//         });
//       break;

//     case 'POST':
//       superagent
//         .post(`${config.remoteServer}${url.replace('api', config.prefix)}`)
//         .set('Content-Type', 'application/json;charset=UTF-8')
//         // set cookie字段
//         .set('Cookie', headers.cookie)
//         .set('warehouseId', headers.warehouseid)
//         .end((_err, _res) => {
//           res.send(_res?.text)
//         });
//       break;

//     default:
//       break;
//   }

// })

// app.listen(config.port, () => console.log(`Example app listening on port ${config.port}!`))