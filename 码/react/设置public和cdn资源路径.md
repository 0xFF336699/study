https://stackoverflow.com/questions/46235798/relative-path-in-index-html-after-build

```$xslt

// package.json
{
  "name": "your-project-name",
  "version": "0.1.0",
  "homepage": "./", # <--- Add this line ----
  ...
}
加个homepage字段就行
```



    cdn设置方法。注意，路径后面，&&前面不能有空格
    "build:dev": "set REACT_APP_CONF_NAME=conf.dev.js&& set PUBLIC_URL=http://a.ig-resource-dev.ig.qiniu.fanfanlo.com/ig-resource-dev-ig-qiniu-static-file-nicai/&& react-scripts build",
    "build:prod": "set REACT_APP_CONF_NAME=conf.prod.js&& set PUBLIC_URL=http://a.ig-resource-prod.ig.qiniu.shangwoa.com/ig-resource-dev-ig-qiniu-static-file-nicai/&& react-scripts build",