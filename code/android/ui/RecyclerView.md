记得需要加

```
                lv.setLayoutManager(new LinearLayoutManager(
                        getContext(), LinearLayoutManager.VERTICAL, false));
```

跟其它内容一起滚动

https://stackoverflow.com/questions/27083091/recyclerview-inside-scrollview-is-not-working

```


use `NestedScrollView` instead of `ScrollView`

Please go through [NestedScrollView reference document](https://developer.android.com/reference/android/support/v4/widget/NestedScrollView.html) for more information.

and add `recyclerView.setNestedScrollingEnabled(false);` to your `RecyclerView`
```





```
<ScrollView>
  <LinearLayout> (vertical - this is the only child of scrollview)
     <SomeViews>
     <RecyclerView> (layout_height=wrap_content)
     <SomeOtherViews>
The workaround is the wrap the RecyclerView with RelativeLayout. Don't ask me how I found this workaround!!! ¯\_(ツ)_/¯

<RelativeLayout
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:descendantFocusability="blocksDescendants">

    <android.support.v7.widget.RecyclerView
        android:layout_width="match_parent"
        android:layout_height="wrap_content" />

</RelativeLayout>
```

以上两个方案都能实现，但是创建时都比较卡。

