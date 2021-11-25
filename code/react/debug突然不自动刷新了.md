根目录创建.env文件，添加

```
CHOKIDAR_USEPOLLING=true
FAST_REFRESH = false
```



https://stackoverflow.com/questions/43274925/development-server-of-create-react-app-does-not-auto-refresh/56638813



上面方案无效

https://segmentfault.com/q/1010000015790221/a-1020000015840549

const renderApp = () => ReactDOM.render(
  <App />,
  document.getElementById('root')
);

function run() {
  renderApp();
  if (module.hot) {
    module.hot.accept(renderApp);
  }
}

run();

这个有效果了

