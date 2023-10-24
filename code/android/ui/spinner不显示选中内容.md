文件: R.layout.simple_spinner_item

<?xml version="1.0" encoding="utf-8"?>
<TextView xmlns:android="http://schemas.android.com/apk/res/android"
          android:id="@android:id/text1"
          android:layout_width="match_parent"
          android:layout_height="wrap_content"
          android:ellipsize="marquee"
          android:singleLine="true"
          android:textAlignment="inherit"
          android:textSize="16sp"/>
1
2
3
4
5
6
7
8
9
这样在初始化Adapter的时候将

 mAdapter = new ArrayAdapter<String>(this, android.R.layout.simple_spinner_item, mList); 
1
变成

 mAdapter = new ArrayAdapter<String>(this, R.layout.simple_spinner_item, mList);
1
使用本地的布局文件修改textsize=”16sp”
————————————————

原文链接：https://blog.csdn.net/yili270/article/details/51706321