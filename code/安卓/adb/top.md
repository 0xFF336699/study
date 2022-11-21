adb shell top -m 20 -s 25

可见，我的adb shell top -s命令只支持0-X数字，默认9，猜测分别指代

0  ,1   ,3 ,4 ,5   ,6  ,7  ,8,9   ,10  ,11   ,12
PID,USER,PR,NI,VIRT,RES,SHR,S,%CPU,%MEM,TIME+,CMDLINE