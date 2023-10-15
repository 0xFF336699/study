# usage: bash win2linux_path.sh "C:\Users\asus\Anaconda3"

win_path=$1 # 脚本的第一个参数就是windows路径
#win_path="C:\Users\asus\Anaconda3" # 一个示例路径


tmp_path=${win_path/:/} # 将冒号删掉
tmp_path=${tmp_path//\\/\/} # 将\\替换为/

disk_id=${tmp_path:0:1} # 取出第一个字母，也就是C盘的C，冒号后面第一个0指的是从下标为0的地方开始提取，第二个冒号后面的1表示提取一个字母
disk_id=$(echo $disk_id | tr [:upper:] [:lower:]) # 大写转小写
#echo $disk_id

other_path=${tmp_path:1} # 路径中除了磁盘以外的部分

linux_path=${disk_id}${other_path} # 需要将/mnt/接在路径最前方
echo "windows path is "${win_path}
echo "linux path is "${linux_path}
echo "/"${linux_path} | clip