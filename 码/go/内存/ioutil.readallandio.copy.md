用  
body, err := ioutil.ReadAll(resp.Body)  
不能自动销毁内存，pprof里能看到是底层的bytes没有释放  

改用  
_, err = io.Copy(w, resp.Body)  
暂时看内存增长已经很慢了  