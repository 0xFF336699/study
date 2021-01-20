```
获取文件夹名字
https://stackoverflow.com/questions/52877815/vscode-snippet-transform-to-determine-the-containing-directory

之前四个\\\\一直没匹配上，是因为正则写错了.*[\\\\|\\/]+

"stripLastDirectory": {
    "prefix": "lsd",
    "body": [
      "${TM_DIRECTORY/.*[\\\\|\\/]+(.*)/$1/}"
    ],
},
```



```
去掉-_ 改为驼峰
https://stackoverflow.com/questions/48104851/snippet-regex-match-arbitrary-number-of-groups-and-transform-to-camelcase/51228186#51228186

它是把第一个字符提取出来改小写的

"test": {
    "prefix": "test",
    "body": [
        "${1:${TM_FILENAME_BASE/^(.)([a-zA-Z0-9]*)([-_.])(.*)/${1:/downcase}${2}${4:/pascalcase}/}}"
    ]
}
```