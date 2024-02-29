

```
新版本改成
pg.PrintPgSql = true


	if PrintPgSql{
		println("pg sql is", string(bytes))
	}
writeQueryMsg
在github.com\go-pg\pg\messages.go425行
```





```

F:\work\gopath\src\github.com\go-pg\pg\internal\pool\conn.go
// 这里为啥外部调用不到？
var DebugPrintSql = false
func (cn *Conn) WithWriter(timeout time.Duration, fn func(wb *WriteBuffer) error) error {
   _ = cn.setWriteTimeout(timeout)

   if DebugPrintSql{
      fmt.Print("debug sql is ", string(cn.wb.Bytes))
   }
```

```
F:\work\gopath\src\github.com\go-pg\pg\messages.go
var DebugPrintSql = false
func writeQueryMsg(buf *pool.WriteBuffer, fmter orm.Formatter, query interface{}, params ...interface{}) error {
   buf.StartMessage(queryMsg)
   bytes, err := appendQuery(fmter, buf.Bytes, query, params...)
   if err != nil {
      buf.Reset()
      return err
   }
   if DebugPrintSql{
      fmt.Print("debug sql is ", string(bytes))
   }
```

```
F:\work\gopath\src\github.com\go-pg\pg\messages.go
这里可能是返回数据的地方
func readSimpleQueryData(rd *internal.BufReader, mod interface{}) (*result, error) {
   var res result
   var firstErr error
   for {
```