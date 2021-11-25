参考

http://jartto.wang/2019/07/13/use-electron-5/



yarn create-react-app project-name

cd project-name

yarn add electron --dev

```
yarn add electron electron-builder --dev
```

```
yarn add wait-on concurrently --dev
yarn add cross-env electron-is-dev
```

添加ant design

参考

https://ant.design/docs/react/use-with-create-react-app-cn



```
官方文档
"scripts": {
-   "start": "react-scripts start",
-   "build": "react-scripts build",
-   "test": "react-scripts test",
+   "start": "craco start",
+   "build": "craco build",
+   "test": "craco test",
}
因为使用的是electron，替换这个的时候需要注意 craco的位置


    "release": "yarn craco build && electron-builder --publish=always",
    "build": "yarn craco build && yarn electron-build",
    "start": "concurrently  \"cross-env BROWSER=none yarn craco start  react-start\" \"wait-on http://localhost:3000 && electron .\"",
```





非全局安装启动

```bash
node_modules\.bin\electron.cmd ./build/electron.js
```



创建流程2

https://juejin.im/post/6844904150405218317



git clone https://github.com/electron/electron-quick-start

npm install concurrently wait-on craco cross-env --save-dev



yarn add concurrently wait-on craco cross-env --save-dev





```
"dev": "concurrently \"wait-on http://192.168.177.180:3006 && electron .\" \"cross-env BROWSER=none npm start\""
```