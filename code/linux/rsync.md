给远程主机加上自己的pubkey，实现无密码操作  
ssh-copy-id -i ~/.ssh/id_rsa.pub root@远程主机  

把远程主机的文件夹拉到自己的本地来
rsync -avzP --delete root@远程主机:/work/docker/pg-fdw/data/snacks-sqls/sqls/ /work/docker/pg-fdw/data/snacks-sqls/sqls/





另外，使用rsync一定要注意的一点是**，源路径如果是一个目录的话，带上尾随斜线和不带尾随斜线是不一样的，不带尾随斜线表示的是整个目录包括目录本身，带上尾随斜线表示的是目录中的文件，不包括目录本身。**例如：

```
[root@xuexi ~]# rsync -a /etc /tmp
[root@xuexi ~]# rsync -a /etc/ /tmp
```

第一个命令会在/tmp目录下创建etc目录，而第二个命令不会在/tmp目录下创建etc目录，源路径/etc/中的所有文件都直接放在/tmp目录下。