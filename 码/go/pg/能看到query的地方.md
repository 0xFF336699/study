github.com/go-pg/pg/orm/format.go

302行，Formatter.append函数的最后一行是整理好返回的

在

github.com/go-pg/pg/orm/format_test.go

里有例子，147行方法TestFormatQuery里

```
var f orm.Formatter
```

```
got := f.FormatQuery(nil, test.q, test.params...)
```



got就是实际query





```
F:\work\gopath\src\shangwoa\ig2\common\pghook\hook.go

// 格式化query
func GetFormattedQuery(q string, params ...interface{}) []byte {
	return f.FormatQuery(nil, q, params...)
}
```

