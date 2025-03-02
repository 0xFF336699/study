# 加载ns并使用

```js
if (!fanfanloI18n.hasLoadedNamespace('droid-project/project/manager/content')) {
        await fanfanloI18n.loadNamespaces(['droid-project/project/manager/content']);
      }
      const t = fanfanloI18n.getFixedT(null, 'droid-project/project/manager/content');
      toast.success(t('edit-project-info-utils.projectSaved'));
      ```
