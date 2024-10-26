# 焦点

```html
Blocked aria-hidden on a <button> element because the element that just received focus must not be hidden from assistive technology users. Avoid using aria-hidden on a focused element or its ancestor. Consider using the inert attribute instead, which will also prevent focus. For more details, see the aria-hidden section of the WAI-ARIA specification at
```

遇到一次一个按钮A点击后弹出一个dialog，dialog内有个选项是删除包含按钮A的容器的，导致了这个抛错，解决方法是在按钮A点击时把按钮A的焦点取消
