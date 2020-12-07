array字段需要在描述里加上sql:",array"

```
AttachedMobiles []string `json:"attached_mobiles" sql:",array"`
```