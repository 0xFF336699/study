omitempty



```
type Item struct {
  Id    int
  Items []Item `pg:"many2many:item_to_items,joinFK:sub_id"`
}
```