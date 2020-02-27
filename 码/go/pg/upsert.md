```
res, err :=tx.Model(t).OnConflict("(tag) do update").Set("posts=excluded.posts || ?", pg.Array([]string{post.UUID})).Set("posts_len=tags_post_info.posts_len + 1").Set("update_time=now()").Insert()

sql := `insert into tags_post_info (tag, posts, posts_len) values ('` + tag + `', '{` + post.UUID +`}', 1)` +
				`on conflict(tag) do update ` +
				`set posts=excluded.posts || ?, posts_len=EXCLUDED.posts_len + 1`
			res, err:=tx.Exec(sql, pg.Array([]string{post.UUID}))
```

```
tags_post_info是指已存在的数据
excluded是想要插入，但是被排重的数据
```

