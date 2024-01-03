.wslconfig现在是这样

[wsl]
networkingMode=mirrored

[experimental]
autoMemoryReclaim=gradual  
useWindowsDnsCache=true
hostAddressLoopback=true
firewall=true
autoProxy=false


又添加了

netsh interface portproxy add v4tov4 listenport=80 listenaddress=0.0.0.0 connectport=80 connectaddress= 172.19.70.19


netsh interface portproxy add v4tov4 listenport=8500 listenaddress=0.0.0.0 connectport=8500 connectaddress= 172.19.70.19


netsh interface portproxy add v4tov4 listenport=443 listenaddress=0.0.0.0 connectport=443 connectaddress= 172.19.70.19

8500端口是consul的  

172.19.70.19是容器的ip  
用 ip addr show 查看  

