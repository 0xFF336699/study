获取当前包名

groovyScript("String[] p=_editor.getVirtualFile().getPath().split('/');String prevLast = p[p.length-2];")  


例如  
team  
concat("T", capitalize(groovyScript("String[] p=_editor.getVirtualFile().getPath().split('/');String prevLast = p[p.length-2];")))  
member  
concat("M", capitalize(groovyScript("String[] p=_editor.getVirtualFile().getPath().split('/');String prevLast = p[p.length-2];")),capitalize(fileNameWithoutExtension()))



```aidl

譬如剪切板里是
/pageContents/actionList/tree/popOpenTools/children/a11yNodeRec
regularExpression(clipboard(), "[/]" ,".")
返回
.pageContents.actionList.tree.popOpenTools.children.a11yNodeRec
如果执行
groovyScript("return _1.replaceAll(/(^[.])/) { \"\";}", regularExpression(clipboard(), "[/]" ,"."))
或
groovyScript("return _1.substring(1)", regularExpression(clipboard(), "[/]" ,"."))
返回
pageContents.actionList.tree.popOpenTools.children.a11yNodeRec

这里groovyScript调用的是java.lang.String的方法
```
