```
oq := tx.Model(&stock)
q := oq.Table(stockTab)
inserted := false
inserted, err = q.Model(&stock).Column("id").Where("name = ?name").OnConflict("DO NOTHING").Returning("id").SelectOrInsert()
```

