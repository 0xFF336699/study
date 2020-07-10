```
<?xml version="1.0" encoding="utf-8"?>
<FrameLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:minHeight="?android:attr/listPreferredItemHeight"
    android:descendantFocusability="blocksDescendants" //需要
    >

    <Button
        android:id="@+id/btn_btn"
        android:layout_width="match_parent"
        android:layout_height="60dp"
        android:text="Button"
        android:focusable="false"//需要
        android:clickable="false"//需要/>
</FrameLayout>
```

原因似乎是button这种组件抢了gridview的焦点和事件，导致父级没有响应click事件。。。。