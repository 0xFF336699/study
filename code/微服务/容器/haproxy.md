华北2 8g内存那台

```


dockerrm haproxy && \
docker run -itd --name haproxy \
-p 80:80 -p 443:443 -p 8201:8201 -p 8211:8211 \
-p 8221:8221 -p 8231:8231 -p 8501:8501 \
-v /root/docker/haproxy/data:/data:z    \
-l "SERVICE_80_TAGS=二零二一四月二十六号haproxy" \
-l "SERVICE_80_NAME=HB-ha" \
-l "SERVICE_8201_NAME=HB-ha-pg-ig" \
-l "SERVICE_8201_TAGS=pg-ig"  \
-l "SERVICE_8211_NAME=HB-ha-redis-ig" \
-l "SERVICE_8211_TAGS=redis-ig" \
-l SERVICE_8221_IGNORE=true  \
-l SERVICE_8231_IGNORE=true  \
-l SERVICE_8501_IGNORE=true \
haproxy-consul-template:0.0.1


```

