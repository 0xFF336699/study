Intent xiaomiBackGroundIntent = new Intent();
xiaomiBackGroundIntent.setAction("miui.intent.action.APP_PERM_EDITOR");
xiaomiBackGroundIntent.addCategory(Intent.CATEGORY_DEFAULT);
xiaomiBackGroundIntent.putExtra("extra_pkgname", context.getPackageName());

https://juejin.cn/post/6844903893625733128
在答复里面看到的，还没验证过，暂留一下