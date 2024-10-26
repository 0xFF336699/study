# git push --set-upstream origin

```html
当我们在使用 Git 切换新分支时，每次推送代码时都需要使用

git push --set-upstream origin <branch>

将本地分支与远程分支关联，否则 Git 就不知道我们想要将代码推送到哪个远程分支。虽然这样做可以保证推送的准确性，但是在切换分支时频繁使用该命令会显得繁琐和不便。

为了避免频繁使用 --set-upstream 参数，我们可以通过配置 Git 的默认行为来优化推送流程。常用的两个配置命令如下：

git config --global --add push.default current：该命令将 push.default 设置为 current，即默认推送与当前分支同名的远程分支。这个设置适合在本地每次创建新分支并在远程仓库中创建同名分支的情况下使用。
git config --global --add push.autoSetupRemote true：该命令将 push.autoSetupRemote 设置为 true，即 Git 会自动将本地分支与远程分支关联。这个设置可以让 Git 在推送分支时自动设置 upstream，避免了每次推送时需要手动设置 upstream 的麻烦。这个设置适合在团队推送策略是在本地创建分支后直接推送到远程的情况下使用。
需要注意的是，在设置这些默认行为之前，需要先了解自己的工作流程和团队的推送策略，并且需要谨慎考虑这些设置对整个团队的影响。如果不确定这些设置是否适合自己的工作流程，可以先在本地试用一段时间，再决定是否将其应用到整个团队。
```
