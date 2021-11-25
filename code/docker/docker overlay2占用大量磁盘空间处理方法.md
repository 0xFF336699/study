https://blog.csdn.net/wo541075754/article/details/104118002

```
 find . -type f -size +800M
 先查找一下大文件
```

在使用docker时，往往会出现磁盘空间不足，导致该问题的通常原因是因为docker中部署的系统输出了大量的日志内容。

此时，可通过手动或定时任务进行清除。

针对/var/lib/docker/overlay2空间占用很大网上提供了很多解决方案，其中有些误导的说法需要去迁移路径等操作。其实磁盘空间的占用和overlay没关系（它的usage和真实的disk usage相同），它只是一个docker的虚拟文件系统，真实的文件系统是前者/dev/vda1,可以看到路径所指为根目录，所以你要去找是哪里出现了垃圾。

通常情况下与overlay2的同级目录下会有如下的目录：

```
[root@iZ docker]# ls
builder  buildkit  containerd  containers  image  network  overlay2  plugins  runtimes  swarm  tmp  trust  volumes
12
```

而往往占用大量空间的日志文件位于containers下，该目录下存在如下目录：

```
[root@iZ containers]# ls
123ace927dc96745bac8ae09d0feddbdef853ff089c831bc80547b2d1115b0ac  635619a5ce22b551c5c75095b8b01647b9a02c839be64cd465e1542bfbec8ee6  a979b62fc10ab0ac54af4799d40c2c5865099883ff124012328ab3a8587c1dda
12
```

在目录中会存在以目录名为前缀，以“-json.log”为后缀的目录文件。使用如下命令会看到该文件的大小：

```
ll -h
1
```

然后可使用如下命令对该文件的内容进行清理：

```
cat /dev/null > *-json.log
1
```

清理完成可不重启服务，但如果允许建议重启一下docker服务。

在此执行df -h命令之后，你会发现overlay2所占的磁盘空间已经减小。

关于清理的操作可参考文章：《[LINUX CENTOS /VAR/LIB/DOCKER/CONTAINER目录导致系统存储爆满，占用大量存储解决方案](http://www.choupangxia.com/2019/09/15/linux-centos-var-lib-docker-container目录导致系统存储爆满，占用大量存储解/)》

原文链接：《[docker overlay2占用大量磁盘空间处理方法](http://www.choupangxia.com/2020/01/30/docker-overlay2/)》





bwg3直接这样

echo /dev/null >/var/lib/docker/containers/86ea8b6787e947ac105191ede392062507c3b47d4692b09de0d262b02adbbe7a/86ea8b6787e947ac105191ede392062507c3b47d4692b09de0d262b02adbbe7a-json.log