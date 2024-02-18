获取当前包名

groovyScript("String[] p=_editor.getVirtualFile().getPath().split('/');String prevLast = p[p.length-2];")  


例如  
team  
concat("T", capitalize(groovyScript("String[] p=_editor.getVirtualFile().getPath().split('/');String prevLast = p[p.length-2];")))  
member  
concat("M", capitalize(groovyScript("String[] p=_editor.getVirtualFile().getPath().split('/');String prevLast = p[p.length-2];")),capitalize(fileNameWithoutExtension()))

clipboard()

acl acl_websites_shangwoa hdr(host) -i websites.shangwoa.com
use_backend websites_shangwoa if acl_websites_shangwoa



# domain is websites.shangwoa.com
acl acl_ hdr(host) -i websites.shangwoa.com
use_backend backend_ if acl_


# domain is websites.shangwoa.com
acl acl_ hdr(host) -i websites.shangwoa.com
use_backend backend_ if acl_


# domain is websites.shangwoa.com
acl acl______________________ hdr(host) -i websites.shangwoa.com
use_backend backend______________________ if acl______________________
bb

consul.server.qiwoa.com

web.droid.qiwoa.com

html.droid.qiwoa.com



acl acl_html_droid_qiwoa_com hdr(host) -i html.droid.qiwoa.com
use_backend backend_html_droid_qiwoa_com if acl_html_droid_qiwoa_com

crt /data/ssl/html.droid.qiwoa.com.pem

backend backend_html_droid_qiwoa_com

	mode http
	balance roundrobin
	{{range service "容器名字"}}
	server {{.ID}} {{.Address}}:{{.Port}}
	{{end}}

export Ali_Key="LTAI5tLxeB63E1kifgHyDUM5" \
export Ali_Secret="jFSLW5UiNaYqVigp8UtGkBjCIvV06W" &&\
/root/.acme.sh/acme.sh  --set-default-ca  --server  letsencrypt --issue --force --keylength   ec-256  --dns dns_ali -d html.droid.qiwoa.com  --debug 2 &&\
cat /root/.acme.sh/html.droid.qiwoa.com_ecc/fullchain.cer /root/.acme.sh/html.droid.qiwoa.com_ecc/html.droid.qiwoa.com.key | tee /root/docker/haproxy/data/ssl/html.droid.qiwoa.com.pem \
docker restart haproxy

