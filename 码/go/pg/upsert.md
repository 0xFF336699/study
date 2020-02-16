```
res, err :=tx.Model(t).OnConflict("(tag) do update").Set("posts=excluded.posts || ?", pg.Array([]string{post.UUID})).Set("posts_len=excluded.posts_len + 1").Set("update_time=now()").Insert()

sql := `insert into tags_post_info (tag, posts, posts_len) values ('` + tag + `', '{` + post.UUID +`}', 1)` +
				`on conflict(tag) do update ` +
				`set posts=excluded.posts || ?, posts_len=EXCLUDED.posts_len + 1`
			res, err:=tx.Exec(sql, pg.Array([]string{post.UUID}))
```

excluded是已经存在的那条数据