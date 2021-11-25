

```
class和属性，waiting似乎必须是双引号,但是有时候似乎单独一个class和一个属性无所谓有没有引号或者单双引号，以后继续琢磨。
let images = Dom7(element + ` ${lazyImageContainerSelector}[data-image-status="waiting"]`);
```

https://www.jquery123.com/category/selectors/attribute-selectors/

1、多条件选择器
用途：使用多个条件同时选择多个标签

用法：$(“条件1，条件2，条件3，……，条件n “);

特征：多个条件在“”内用逗号隔开；

用例：$(“div#id,span.tip,p”); //同时选择id为“id”的div标签,class为“tip”的span标签和p标签；

2、相对选择器
用途：使用第二个参数选出相对元素，从而不影响其他具有相同条件的元素

用法：$(“条件1”,条件2)；

特征：两个参数

用例：

$("td",(this)).css(“background”,”red”);


//当前tr的td元素背景变红，其他tr中的td不变；

3、层次选择器
用途：选择后代节点

用法：$(“条件1 条件2 条件3”);

特征：双引号之内，条件之间用空格隔开；

用例：$(“#com ul li”);

//选择Id为com的元素中的UL里面的所有li节点；

jQuery 选择同时包含两个class的元素的实现方法

<element class="a b">


?
1. 交集选择： $(".a.b")   --选择同时包含a和b的元素。

2. 并集选择：$(".a, .b")  --选择包含a或者包含b的元素。



根据多个属性选择E[attr=val][attr=val] 

$("div[title='ttt'][class='aaaa']").click()



所有div元素下所有属性title值是等于ttt并且属性class等于aaaa的元素
————————————————
版权声明：本文为CSDN博主「Houzhyan」的原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/h330531987/article/details/78350377