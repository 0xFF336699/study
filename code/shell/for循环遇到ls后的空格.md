https://blog.csdn.net/dqswuyundong/article/details/7427467

for folder in `ls|tr " " "?"`
 do
 \# 如果所目录的情况
 folder=${folder//'?'/' '}

 cd "$folder"

done

 

 先把空格用特殊符号代替，然后替换即可。 使用cd时需要添加双引号。