Select book ids as PostgreSQL array:

```
var ids []int
err := db.Model((*Book)(nil)).ColumnExpr("array_agg(id)").Select(pg.Array(&ids))
// SELECT array_agg(id) FROM "books"
```