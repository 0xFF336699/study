 先生成一下，couriercall是项目名，可以随便起 7300是有效期天数
 keytool -genkey -alias jwt -keyalg RSA -keysize 1024 -keystore couriercall.jks -validity 7300
遇到 
该单位的双字母国家/地区代码是什么?
填CN，输入y

 生成后会提示 
 生成的证书 使用的 1024 位 RSA 密钥 被视为存在安全风险。此密钥大小将在未来的更新中被禁用。
 用下面方法改一下
keytool -importkeystore -srckeystore couriercall.jks -destkeystore couriercall.jks -deststoretype pkcs12