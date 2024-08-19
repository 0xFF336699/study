```


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