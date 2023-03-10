

```aidl

const cb = `
                                    <label className="checkbox">
                                        <input id="permissionCheckBox" type="checkbox"/>
                                        <i className="icon-checkbox"></i>
                                    </label>`
        const params = {
            text:"温馨提示",
            content:`如果要看教程请点击确认，如果要直接进入设置请点击取消<br/>${cb}以后直接进设置，不再显示此弹框`,
            buttons:[
                {
                    text:"取消",
                    onClick:()=>{
                        console.log("11111111")
                        d.close();
                    }
                },
                {
                    text:"看教程",
                    onClick:()=>{
                        readCheckBox();
                        f7.view.main.router.navigate(routeMap.AndroidSystemPermissionsRouter);
                        d.close();
                    }
                },
                {
                    text:"去设置",
                    onClick:()=>{
                        readCheckBox();
                        appJsBridge.callOpenAccessibility()
                        d.close();
                    }
                }
            ]
        }
        var d = f7.dialog.create(params);
        d.open();

        const readCheckBox = ()=>{
            let isChecked = Dom7("#permissionCheckBox").is(":checked");
            console.log("ooooooooooooo666666666666", isChecked)
            if(isChecked){
                localStorage.setItem("permissionManagerAssessibilityShowDialog", isChecked.toString())
            }
            // console.log("ooooooooooooo666666666666", Dom7("#permissionCheckBox"))
        }
        
        
```
