## 启动命令
1. web: `npm run dev`

2. electron: `npm run electron-start`

[网易云接口文档](https://binaryify.github.io/NeteaseCloudMusicApi/#/)
`node app.js`

## ！注意
由于url-loader的解析，静态资源的引入需要用以下方法
1. js或html中： `require('@/...')`可相对也可绝对，相对去掉@
2. less中： `url('~@/...')`
