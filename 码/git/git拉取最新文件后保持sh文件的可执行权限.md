在.git文件夹里创建钩子 post-checkout post-merge文件，把下面内容粘贴进去  
```bash
#!/bin/sh
chmod -R 755 /root/docker/pg-fdw/data/snacks-sqls/command/make-backup.sh
chmod -R 755 /root/docker/pg-fdw/data/snacks-sqls/command/master-push.sh
chmod -R 755 /root/docker/pg-fdw/data/snacks-sqls/command/restore.sh

```

因为每次钩子会把文件赋权为可执行，这时候是跟git上的文件有差异的，所以git在下一次pull的时候会提示本地有更新，需要commit或者stash，这种情况下如果本地所有的修改是可以放弃的，则可以  
git reset --hard origin/master  //先恢复本地文件（这次恢复不会触发钩子执行赋权）
git pull origin master  //到源上去拉取最新的（这次会触发钩子执行赋权）