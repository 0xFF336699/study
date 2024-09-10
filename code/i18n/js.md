# js i18n

```js


"userMessagesUnread_other": "Hello <b>{{name}}</b>, age=<i>{{age}}</i>, you have {{count}} unread messages.  <strong>Go to messagesss</strong>."


function MyComponent() {
  const name = 'abc'
  const count = 3
  const age = 22
  const {t} = useTranslation()
  return (
    <Trans i18nKey={'pages.href-setting.components.GlobalSetting.content.userMessagesUnread'} count={count}
    values={{name, count, age}}
    components={{b:<b/>, i:<i/>, strong:<strong/>}}>
    </Trans>
  );
}
```

实现代码提示
see <https://carljin.com/posts/i18next-react-typescript/>

```js
import "i18next";
import { localeTransitions } from "./loadLangsToResouerce.ts";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "zh-CN";
    resources: (typeof localeTransitions)["zh-CN"];
  }
}
```

代码提示2  
see <https://juejin.cn/post/7029624032517423134>  
