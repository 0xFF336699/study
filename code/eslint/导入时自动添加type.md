# auto import with type

```js
如果在.eslintrc的rules里添加了
"@typescript-eslint/consistent-type-imports": "error",
就会导致导入type时要求添加type文字

可以在vscode的全局设置里添加这段
"editor.codeActionsOnSave": {
        "source.fixAll": "explicit",
        "source.fixAll.eslint": "explicit"
    },
```
