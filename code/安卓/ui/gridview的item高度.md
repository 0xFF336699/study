```
    android:minHeight="?android:attr/listPreferredItemHeight"
```

最近一直纠结于ListView中每个Item中高度的问题，在网上只找出一个方法，就是在每个item里面加入图片，也就是ImageView，这样用图片来“撑”它的高度，这样实在是费劲，不可也可以解决问题

今天无意间看SDK里面的Demo，发现还有一种方法，如下黑色粗体所示



```
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:orientation="horizontal"
    android:layout_width="fill_parent"
    android:layout_height="fill_parent"
    android:minHeight="?android:attr/listPreferredItemHeight"
    >
    <TextView
        android:id="@+id/tv"
        android:layout_width="fill_parent" 
        android:layout_height="20dp" 
        android:text="@string/hello"
        />
</LinearLayout>
```

https://blog.csdn.net/mvpstevenlin/article/details/50986504



https://www.cnblogs.com/cheneasternsun/p/6080683.html