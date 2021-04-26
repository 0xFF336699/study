场景：个人余额会频繁扣款，在db里写入充值和扣款的log，在redis里放余额以供快速访问。



postgres表，字段 uuid，amount，redis_updated

redis userUuidAmount kv字段 记录这个人的余额，userUuidset set字段，记录pg里的uuid 用来校验pg的这次充值是否已经同步到redis里了

扫描器，用来扫描pg里是否有未redis_updated的数据



充值成功后向pg写入一条log

然后向redis写入充值数额

为了保证原子操作，所以用lua操作redis

下面是redis的lua伪脚本

```
if(redis.call('sismember', 'userUuidSet', 'pgUuid')){
	retrun;
}else{
	local v = redis.call('get', 'userUuidAmount');
	redis.call('set', 'userUuidAmount', v + amount);
	redis.call('sadd', 'userUuidSet', 'pgUuid')
}
```

redis完成后对pg进行update。如果一切正常就没事了。

如果对pg进行update失败，譬如操作redis后的服务挂掉了

则可以利用一个扫描服务，间隔一段时间扫描pg里未完成的充值操作，

**重复扫描校验操作开始：**发现pg里有未完成的，

就再次向redis写入，redis里有set集合进行判断，所以如果未写入就会继续操作，如果已写入就会return掉，

redis操作完成后会再次尝试修改pg的redis_updated字段，

如果不成功就会再次循环上面“**重复扫描校验操作开始**”和之后的流程



歪歪方案：用pg的fdw写redis，这个流程还是会需要上面扫描器的，只是第一个步骤相对来说可以更加原子化一点，这个用法有些另类，同事共事时会挺难理解。

