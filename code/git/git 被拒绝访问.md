Connection reset by 20.205.243.160 port 443


可以试试在.ssh/config文件里添加
注意替换对于的端口号  

Host github.com
User git
ProxyCommand connect -H 127.0.0.1:端口号 %h %p

