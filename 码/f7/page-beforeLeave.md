```
页面在进入或退出之前响应
var page ={async(routeTo, routeFrom, resolve, reject){}
,beforeLeave: function (routeTo, routeFrom, resolve, reject) {
                    console.log('bbbbbbbbbbbbbbbbbbbb', routeTo);
                    console.log('ddddddddddddddddddddd', routeFrom);
                    resolve();
                }
                
                routes = [
  {
    path: 'profile',
    url: 'profile.html',
    beforeEnter: function (routeTo, routeFrom, resolve, reject) {
      if (/* some condition to check user is logged in */) {
        resolve();
      } else {
        // don't allow to visit this page for unauthenticated users
        reject();
      }
    },

  },
  {
    path: 'profile-edit',
    url: 'profile.html',
    beforeLeave: function (routeTo, routeFrom, resolve, reject) {
      if (/* user didn't save edited form */) {
        app.dialog.confirm(
          'Are you sure you want to leave this page without saving data?',
          function () {
            // proceed navigation
            resolve();
          },
          function () {
            // stay on page
            reject();
          }
        )
      } else {
        resolve();
      }
    }
  }
]
```