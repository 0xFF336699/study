```dart
过滤且返回带类型应该使用whereType
var objects = [1, "a", 2, "b", 3];
var ints = objects.whereType<int>();
```

```dart
生成新类型
var stuff = <dynamic>[1, 2];
var reciprocals = stuff.map<double>((n) => 1 / n);
```