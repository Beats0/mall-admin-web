# mall-ui

## 更新 vue cli, 使用vue v2.6.14

## 自行配置env文件, 默认使用minio上传文件

[OSS文件配置](https://www.macrozheng.com/mall/architect/mall_arch_10.html#minio)

修改 `env` 文件和 `config` 文件即可
```
// 使用ali oss: true, 使用minio: false
VUE_APP_useOss = true
// vue 代理接口
VUE_APP_baseURL = /api/mall-admin
// vue 代理后端地址
VUE_APP_backendURL = http://localhost:8201
// ali oss对外服务的访问域名
VUE_APP_ossUploadUrl = http://macro-oss.oss-cn-shenzhen.aliyuncs.com
// minio地址
VUE_APP_minioUploadUrl = http://localhost:8201/api/mall-admin/minio/upload
```

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn dev
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### 项目布局

``` lua
src -- 源码目录
├── api -- axios网络请求定义
├── assets -- 静态图片资源文件
├── components -- 通用组件封装
├── icons -- svg矢量图片文件
├── router -- vue-router路由配置
├── store -- vuex的状态管理
├── styles -- 全局css样式
├── utils -- 工具类
└── views -- 前端页面
    ├── home -- 首页
    ├── layout -- 通用页面加载框架
    ├── login -- 登录页
    ├── oms -- 订单模块页面
    ├── pms -- 商品模块页面
    └── sms -- 营销模块页面
```
