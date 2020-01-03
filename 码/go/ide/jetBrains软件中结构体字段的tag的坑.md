结构体的tag中间用空格间隔就行，  
如果错了，在goland和idea中都不报错，  
在play.golang.org里能看到错误./prog.go:16:2: struct field tag `sql2:",array",json:"suggest_ids"` not compatible with reflect.StructTag.Get: key:"value" pairs not separated by spaces  提示  

错误的例子  
SuggestIds []string `sql2:",array",json:"suggest_ids"`  
正确的
SuggestIds []string `sql2:",array" json:"suggest_ids"` 