给远程主机加上自己的pubkey，实现无密码操作  
ssh-copy-id -i ~/.ssh/id_rsa.pub root@远程主机  

把远程主机的文件夹拉到自己的本地来
rsync -avzP --delete root@远程主机:/work/docker/pg-fdw/data/snacks-sqls/sqls/ /work/docker/pg-fdw/data/snacks-sqls/sqls/

