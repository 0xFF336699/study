haproxy的temp.conf

consul {


  address = "39.104.71.56:8500"

  token = "xxxxx-xxxx-xxxx-xxxx-xxxx" // 这个需要在consul的acl里生成，或者偷懒直接用consul的server master token，但是这不安全。

}

