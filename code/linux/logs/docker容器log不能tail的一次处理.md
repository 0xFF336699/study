经查 docker logs是走journald的

systemctl restart systemd-journald

重启提示磁盘已满

df -h

df -i

显示磁盘都够

lsof |grep deleted

显示有journal目录下有一批log没有实际删除掉

然后用下面方法

vi /etc/sysctl.conf 增加 fs.inotify.max_user_watches = 262144

sysctl -p

systemctl daemon-reload

然后重启journald成功

systemctl restart systemd-journald	