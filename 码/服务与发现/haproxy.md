```

dockerrm haproxy && \
 docker run -itd --name haproxy \
-p 80:80 -p 8201:8201 -p 8211:8211 -p 8221:8221 -p 8231:8231 -p 8501:8501 \
--net=host \
-v /root/docker/haproxy/data:/data:z    \
-l "SERVICE_80_TAGS=墙外代理" \
-l "SERVICE_80_NAME=ha" \
-l "SERVICE_8201_NAME=CN2-ha-pg-ig"  \
-l "SERVICE_8201_TAGS=pg-ig"  \
-l "SERVICE_8211_NAME=CN2-ha-redis-ig" \
-l "SERVICE_8211_TAGS=redis-ig"  \
-l SERVICE_8221_IGNORE=true  \
 -l SERVICE_8231_IGNORE=true  \
 -l SERVICE_8501_IGNORE=true \
haproxy-consul-template:0.0.1


```

```
hdr_end是匹配泛域名
acl acl_cache_resource hdr_end(host) -i .ig.cache.losjkldsafkwuijwfy.xyz
  use_backend cache_resource if acl_cache_resource
  
  
hdr是匹配单域名
acl test_host hdr(host) -i www.test.com 
```

