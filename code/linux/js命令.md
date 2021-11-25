

远程执行js命令修改json

```shell
cd /F/work/express/java/expresshouse3/app
versionCode=$(awk '/versionCode/{print $2}' build.gradle)
echo $versionCode
versionName=$(awk '/versionName/{print $2}' build.gradle)
echo $versionName

cd /F/work/gopath/src/shangwoa/express/apps/post-house

com="cd /work/goshangwoa/express/apps/post-house; jq  '.apk.version_name = ${versionName}| .apk.version_code = ${versionCode}' local.conf.json > 'tmp' && mv 'tmp' local.conf.json && docker restart express-house"
echo $com
ssh root@39.104.71.56 ${com}

主要就这一行
jq  '.apk.version_name = ${versionName}| .apk.version_code = ${versionCode}' local.conf.json > 'tmp' && mv 'tmp' local.conf.json


创建使用变量
jq --argjson vn ${versionName} '.apk.version_name = $vn' /work/goshangwoa/express/apps/post-house/local.conf.json > 'tmp' && mv 'tmp' /work/goshangwoa/express/apps/post-house/local.conf.json
```