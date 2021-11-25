```

curl https://get.acme.sh | sh -s email=0xFF336699@gmail.com

export Ali_Key=""

export Ali_Secret=""

acme.sh --issue --keylength   ec-256  --dns dns_ali -d a.test.baobeidaola.com  --debug 2

cat /root/.acme.sh/a.test.baobeidaola.com_ecc/fullchain.cer /root/.acme.sh/a.test.baobeidaola.com_ecc/a.test.baobeidaola.com.key | tee /root/docker/haproxy/data/ssl/a.test.baobeidaola.com.pem

docker restart haproxy


#--keylength   ec-256 haproxy使用 
#--ecc  haproxy使用

#强制更新
haproxy renew 
acme.sh --renew --ecc -d a.test.baobeidaola.com --force

#删除
acme.sh  --remove  -d a.test.baobeidaola.com && \
rm -rf /root/.acme.sh/a.test.baobeidaola.com_ecc/

```