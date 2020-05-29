本地添加一个配置文件local.conf.json，项目启动时会加载这个文件

```
{
  "consul":{
    "acl":"ig",
    "token":"1de52262-bf25-5f46-6836-c76865545662",
    "host":"http://consul.ms.shangwoa.com/",
    "txn":"v1/txn"
  },
  "consul_keys": {
    "db_main": "express-dev/pg/main/main",
    "db_pg_opts": "express-dev/pg/main/opts",
    "redis_user": "express-dev/redis/db-express-house-user"
  },
  "proxy":{
    "host":"http://127.0.0.1:1081",
    "enabled":true
  },
  "web": {
    "static_paths": [
      {
        "directory": "F:\\work\\ig\\web\\react\\ig-web\\build",
        "path": ""
      }
    ]
  }
}
```

在main-model里设置对应变量ConsulKeys



```
package model_main

import (
   "github.com/go-pg/pg"
   "shangwoa.com/consul"
   "shangwoa.com/qqbot"
   "shangwoa.com/route"
   "shangwoa/express/common/models"
)

type ConsulKeys struct{
   DbMain    string `json:"db_main"`
   DbPgOpts  string `json:"db_pg_opts"`
   RedisUser string `json:"redis_user"`
}

type ConsulKVs struct{
   PgMain *consul.KVValue
   //PgMainGo *consul.KVValue
   PgMainOpts *pg.Options

   RedisUser *consul.KVRedis

}
type Conf struct {
   models.CommConf
   ConsulKeys *ConsulKeys `json:"consul_keys"`
   KVs *ConsulKVs
   KVsMap map[string]*consul.KV
}

type Model struct {
   Conf   *Conf
   Remote *models.CommRemoteCollection
   Bot *qqbot.Bot
   ENV string // snacks/common/const.go ENV_DEV ENV_PROD

   Web struct{
      StaticPaths []*route.StaticDirectory `json:"static_paths"`
   } `json:"web"`
}

var MImpl *Model = &Model{Conf:&Conf{
   KVsMap: map[string]*consul.KV{},
   KVs:&ConsulKVs{
      PgMain:     &consul.KVValue{},
      //PgMainGo:   &consul.KVValue{},
      PgMainOpts: &pg.Options{},
      RedisUser:&consul.KVRedis{},
}}}
```