# 函数使用TKV的方式

```js
function watchProperty<T, K extends keyof T>(target: T, prop: K): T[K] {
    return target[prop]
}
```
