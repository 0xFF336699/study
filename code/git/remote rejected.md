```aidl
报错
 ! [remote rejected] floatpanel -> floatpanel (failure)
 
 解决
 执行
 git config --bool core.bare true
  git push --set-upstream origin floatpanel
  git config --unset core.bare
```
