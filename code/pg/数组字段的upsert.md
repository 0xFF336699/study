```
insert into mobile_bind_user (mobile, attached_by_mobiles)
values ('13122221115', '{"131222211101"}')on conflict(mobile) do update
    set attached_by_mobiles=array_append( mobile_bind_user.attached_by_mobiles , '13122221118') ;
    
    这里要用mobile_bind_user.attached_by_mobiles 而不是excluded.attached_by_mobiles
```

参见

https://stackoverflow.com/questions/36359440/postgresql-insert-on-conflict-update-upsert-use-all-excluded-values