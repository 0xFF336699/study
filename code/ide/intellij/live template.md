获取当前包名

groovyScript("String[] p=_editor.getVirtualFile().getPath().split('/');String prevLast = p[p.length-2];")  


例如  
team  
concat("T", capitalize(groovyScript("String[] p=_editor.getVirtualFile().getPath().split('/');String prevLast = p[p.length-2];")))  
member  
concat("M", capitalize(groovyScript("String[] p=_editor.getVirtualFile().getPath().split('/');String prevLast = p[p.length-2];")),capitalize(fileNameWithoutExtension()))

