```
export function createSchema1(id: keyof typeof i18nData.role.data, fun: RoleCheckFun, extra?: { [key in keyof IRoleSchemaRole]?:  IRoleSchemaRole[key]}): IRoleSchemaRole {
    return _.merge({
        id, fun,
        get name() {
            return i18nData.role.data[id].shortName
        },
        get desc() {
            return i18nData.role.data[id].desc
        },
        get example() {
            return i18nData.role.data[id].example
        },
    }, extra);
}

extra?: { [key in keyof IRoleSchemaRole]?:  IRoleSchemaRole[key]}
这样可以限定参数extra的key value只能跟IRoleSchemaRole对应了
注意需要加？，不然成必须得有全部属性了。

```