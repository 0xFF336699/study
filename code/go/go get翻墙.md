export https_proxy=http://127.0.0.1:10809

export http_proxy=http://127.0.0.1:10809
git config --global http.proxy 'http://127.0.0.1:10809'
git config --global https.proxy 'http://127.0.0.1:10809'



--------

配置goproxy ，七牛提供

export GOPROXY=https://goproxy.cn