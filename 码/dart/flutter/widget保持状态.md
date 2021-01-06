#### AutomaticKeepAliveClientMixin

AutomaticKeepAliveClientMixin 这个 Mixin 是 Flutter 为了保持页面设置的。哪个页面需要保持页面状态，就在这个页面进行混入。

不过使用使用这个 Mixin 是有几个先决条件的：

- 使用的页面必须是 StatefulWidget，如果是 StatelessWidget 是没办法办法使用的。
- 其实只有两个前置组件才能保持页面状态：PageView 和 IndexedStack。
- 重写 wantKeepAlive 方法，如果不重写也是实现不了的。





```
 这样来实现侦听窗口是否在活动状态
class _UserPageState extends State<UserPage> with WidgetsBindingObserver {
  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    WidgetsBinding.instance.addObserver(this);
  }
@override
void dispose() {
  WidgetsBinding.instance.removeObserver(this);
  super.dispose();
}
@override
void didChangeAppLifecycleState(AppLifecycleState state) {
  super.didChangeAppLifecycleState(state);
  switch(state){
    case AppLifecycleState.inactive:
      break;
    case AppLifecycleState.paused:
      break;
    case AppLifecycleState.resumed:
      checkIsNotificationEnabled();
      break;
    case AppLifecycleState.detached:
      break;
  }
}
}
```