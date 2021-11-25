```
def poll(self, timeout=None):
    events = self._impl.poll(timeout)
    return [(self._fdmap[fd][0], fd, event) for fd, event in events]
```

```
(self._fdmap[fd][0], fd, event)
圆括号生成元组
for fd, event in events
元组里的fd和event是从for in 里来的
```



![image-20200406125625940](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200406125625940.png)

还有这种神奇的解构

