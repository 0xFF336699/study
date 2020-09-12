mkdir -p /work/goshangwoa/ && \
cd /work/goshangwoa/ &&\
git init && \
git remote add origin git@gitee.com:shangwoa-snacks/shangwoa-go.git && \
git config core.sparsecheckout true && \
echo express/apps/xiaochengxu/main.z >> .git/info/sparse-checkout &&\

echo .gitignore >> .git/info/sparse-checkout &&\

echo express/apps/post-house/main.z >> .git/info/sparse-checkout &&\

git fetch origin &&\

git pull origin master





express/apps/xiaochengxu/main.z
express/apps/post-house/main.z