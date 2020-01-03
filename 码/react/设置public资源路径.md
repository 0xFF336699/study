https://stackoverflow.com/questions/46235798/relative-path-in-index-html-after-build

```$xslt

// package.json
{
  "name": "your-project-name",
  "version": "0.1.0",
  "homepage": "./", # <--- Add this line ----
  ...
}
加个homepage字段就行
```