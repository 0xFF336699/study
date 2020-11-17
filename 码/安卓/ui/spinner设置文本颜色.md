```
TextView tv = (TextView) sp_shelf.findViewById(android.R.id.text1);
tv.setTextColor(Color.WHITE);
需要在有值了之后才能设置，不然tv会是null

```

```
下拉框内文本颜色在styles.xml里添加这个
<style name="SpinnerWhiteText" parent="Widget.AppCompat.Light.DropDownItem.Spinner">
    <item name="android:paddingStart">0dp</item>
    <item name="android:paddingEnd">0dp</item>
    <item name="android:textColor">#FF000000</item>
    <item name="android:textSize">12sp</item>
</style>

然后
                                android:theme="@style/SpinnerWhiteText"
```