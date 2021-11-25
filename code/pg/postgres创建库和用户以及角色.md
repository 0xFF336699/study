pg各种权限
- 创建可以创建表和添加删除字段的角色，例如snacks；
- 创建可以读写删更表的（select delete update insert)的角色， 例如snacks_user;
- 创建用户，例如我或者某个开发者，例如zj；
- 进入snacks数据库
- 给数据库主用户snacks赋权 可以全部操作  
- 再给snacks_user赋权 可以增删改查，但是不能创建/删除表或字段。  
- 再把zj加入到snacks_user角色
- 以后就可以用snacks角色创建删除表了。
- 有新开发者就加入到snacks_user角色就行。

如果一个角色拥有的all privileges权限的删除方法  
- 先把权限给zj，REASSIGN OWNED BY snacks TO zj;
- 然后执行这个，含义还不懂。drop owned by snacks;
- 然后 drop role snacks;
- 删除角色权限 revoke  ALL PRIVILEGES ON DATABASE snacks from  group_snacks;  



 创建容器

```
dockerrm pg-ig-crawler  && \
docker run -itd --name pg-ig-crawler \
-p 11001:5432 \
-v /work/ig/pg/crawler/pw:/pw  \
-v /work/ig/pg/crawler/data:/var/lib/postgresql/data \
-e POSTGRES_PASSWORD_FILE=/pw \
-l "SERVICE_TAGS=墙外ig爬虫数据库" \
-l  "SERVICE_NAME=pg-ig-crawler" \
postgres:12.1-alpine
```



初始创建操作 dev数据库

- 进入pg 
> su - postgres or  su -l postgres -s /bin/bash  
> psql  
- 创建用户
> 
>
> create user zj with password   'sXEDOlq';    
> create user snacks with password   'lzB9MBqVnHi';      
> create user partner with password 'gJwxp1EqJNT9DfARP7fXhFMU';    
> 注意，postgres的密码是  
> jk5GcAw1C


- 创建角色
>create role snacks_user;

 alter role role_tel login;  

create database xx;  



- 权限操作需要进入数据库  
> \c snacks  

- 给角色赋权 
> GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO snacks_user;--可能这行没管用   
> GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO snacks_user;  
> GRANT ALL ON ALL sequences in schema public to snacks_user;  

- 给用户赋予角色的权限 
> grant snacks_user to zj;
> grant snacks_user to partner;

- 注意，每次在创建表之后需要执行下面两行代码，原因可能是因为创建者不是这个角色。
> GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO snacks_user;  
> GRANT ALL ON ALL sequences in schema public to snacks_user; 

---------------------

初始创建操作 prod数据库
- 进入pg 
> su - postgres  
> psql  
- 创建用户
> create user snacks with password   'ez7ssgK'; 
>  create user partner with password 'nuq2yPjVgejfscliPIdziwLREXj';

>  create user prod with password 'uC2BExgo';  
>  create user web with password 'KOr6u';  

>  create user micro with password 'lpHBo';    

> 注意，postgres的密码是  
> TE  

> grant snacks_user to partner;  
> grant snacks_user to prod;  
>  grant snacks_user to web;  
