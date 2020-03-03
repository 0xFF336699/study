在windows里，pgadmin之类的管理工具执行sql，当间隔几分钟后再执行，会先显示执行，过会儿再显示连接已经断了，然后需要重新执行sql才行

需要修改postgresql.conf文件的

tcp_keepalives_idle = 60		# TCP_KEEPIDLE, in seconds; 默认是0



参见

http://www.postgres.cn/docs/10/runtime-config-connection.html

https://superuser.com/questions/622264/how-to-keep-connection-alive-in-pgadmin

