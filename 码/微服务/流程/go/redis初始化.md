consul获取到配置数据后进行初始化

```
//配置和获取是根据name来进行识别的，注意name需要唯一的。
redisdb.InitRedis(model.Conf.RedisSession, model.Conf.RedisCrawler)
// 初始化后就可以获取redis链接进行操作了
c := redisc.RedisSessionDB()
```

