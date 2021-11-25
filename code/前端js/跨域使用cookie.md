先贴实际操作，后面是搜索到的帮助内容

前端Framework7

```
Framework7.request.setup({
    beforeOpen:function (xhr,parameters) {
        xhr.withCredentials = true;
    },
})
```

后端golang



```
h := r.Header.Get("Referer")
p, err := url.Parse(h)
if err != nil{
   w.WriteHeader(503)
   return
}
// post和get实际上是单独走的处理header
w.Header().Set("Access-Control-Allow-Origin", p.Scheme + "://" + p.Host)
w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
w.Header().Set("Access-Control-Allow-Credentials", "true")
```

下面是搜索到的内容

https://blog.csdn.net/qq_33358824/article/details/80694865

```
var xhr = new XMLHttpRequest();
xhr.addEventListener("abort", this.onAbort.bind(this));
xhr.addEventListener("load", this.onLoad.bind(this));
xhr.addEventListener("progress", this.onProgress.bind(this));
xhr.addEventListener("timeout", this.onTimeout.bind(this));
xhr.addEventListener("error", this.onError.bind(this));
xhr.withCredentials = true;
xhr.open("POST", this.endpoint, true);
xhr.setRequestHeader('content-type', 'text/plain');
xhr.send(JSON.stringify(data));
```

