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



mkdir -p /work/website/express-doc/ && \
cd /work/website/express-doc &&\
git init && \
git remote add origin git@github.com:0xFF336699/express-web-docs.git && \
git config core.sparsecheckout true && \
echo build >> .git/info/sparse-checkout &&\

echo .gitignore >> .git/info/sparse-checkout &&\

git fetch origin &&\

git pull origin main


mkdir -p /work/baobeidaola/website/ && \
cd /work/baobeidaola/website/ &&\
git init && \
git remote add origin git@gitee.com:shangwoa-express/baobeidaola-website.git && \
git config core.sparsecheckout true && \
echo build/ >> .git/info/sparse-checkout &&\

echo .gitignore >> .git/info/sparse-checkout &&\


git fetch origin &&\

git pull origin master

git checkout -b develop origin/develop

git status
