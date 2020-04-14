```
FROM ubuntu
CMD [ "sh", "-c", "echo $HOME" ]
这个看似是跟docker exec sh "-c" "app param0 param1"是一致的
之前一直没明白的是 app param0 param1是在同一个引号里的
```