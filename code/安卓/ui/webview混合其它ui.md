```
<FrameLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:clickable="true"
    android:focusableInTouchMode="true"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    tools:context="com.chanxiaojian.expresshouse.ui.barcodephotosview.BarcodePhotosView">

    <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:orientation="vertical"
        >

        <ScrollView
            android:layout_width="match_parent"
            android:layout_height="match_parent">
            <LinearLayout
                android:orientation="vertical"
                android:layout_width="match_parent"
                android:layout_height="wrap_content">

                <LinearLayout
                    android:layout_width="match_parent"
                    android:layout_height="wrap_content"
                    android:orientation="vertical"
                    android:id="@+id/ll_container">

                </LinearLayout>
                <LinearLayout
                    android:layout_width="match_parent"
                    android:layout_height="match_parent">

                    <WebView
                        android:id="@+id/wv_photos"
                        android:layout_width="match_parent"
                        android:layout_height="wrap_content" />
                </LinearLayout>
            </LinearLayout>
        </ScrollView>
    </LinearLayout>


</FrameLayout>
```