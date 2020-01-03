```
drop table if exists x;
create table x(
uuid character varying default replace(uuid_generate_v1mc()::text, '-', ''),
name text
);
insert into x (name) values('b');
select * from x;
```