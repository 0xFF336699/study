```
Future to(Future<dynamic> f){
  return f.then((value){
    return Future.value([null, value]);
  }).catchError((err){
    return Future.value([err, null]);
  });
}
```