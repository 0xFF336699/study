```
sql := `INSERT INTO user_registered
(mobile)
SELECT  ?
WHERE
    NOT EXISTS (
            SELECT id FROM user_registered WHERE mobile = ?
        ) returning *`
   bs := pghook.GetFormattedQuery(sql, body.Mobile, body.Mobile)
   sql = string(bs)
   var user app.RegisteredUser
   result, err := tx.QueryOne(&user, sql)
	if err != nil{
		tx.Rollback()
		if err == pg.ErrNoRows{
			// 已经存在
		}else{

		}
		return
	}
```



没有则插入，无论是否有都返回指定字段

```
with s as (
    select id, name
    from tab_name
    where name = 'a'
), i as (
    insert into tab_name ("name")
        select 'a'
        where not exists (select 1 from s)
        returning id, name
)
       select id, name
       from i
       union all
       select id, name
       from s;
```