export const config = {
  // remoteServer: 'https://3pb-api-dev.weimeng-hosp.com', // 换成你后端项目的服务器地址
  heads: ['warehouseid', 'cookie'], // 请求头设置，取哪些字段作为请求头
  remoteServer: 'https://am-dev.weimeng-hosp.com', // 换成你后端项目的服务器地址
  port: 3031, // 此项目所启动的服务器端口
  prefix: 'api', // proxy替换标记
  mock: '/mock-am-ding', // 产出
  startIdx: 2, // /api/v1/user/points、/api/v1/user/currentUser
  len: 3, // 截取接口 len 长度生成接口所在文件的文件名
}
