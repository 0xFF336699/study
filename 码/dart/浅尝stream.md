```
import 'dart:async';

void main() {
  testStream();
}


class WebEvent {
  String type;
  int code;
  String res;
  WebEvent(this.type, this.code, this.res);
}

Function testStream(){
  StreamController<WebEvent> controller = StreamController();
//将单订阅流转化为广播流
  Stream<WebEvent> stream = controller.stream.asBroadcastStream();
  
  stream.where((WebEvent event){
    print("a event type is ${event.type}");
    return event.type == "interface 1";
  }).listen((event){
    print("listen 1 data is ${event}");
  });
  stream.where((WebEvent event){
    print("b event type is ${event.type}");
    return event.type == "interface 2";
  }).listen((event){
    print("listen 2 data is ${event}");
  });

  controller.sink.add(WebEvent("interface 2", 200, '{"list":[],"isOK":true}'));
//  controller.sink.add(123);
  controller.sink.add(WebEvent("interface 1", 200, '{"list":[{"name":"me"}],"isOK":true}'));
}
```