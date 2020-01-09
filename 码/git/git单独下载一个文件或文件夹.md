mkdir 03 && \
cd 03 &&\
git init && \
git remote add origin git@github.com:0xFF336699/shangwoa.com.git && \
git config core.sparsecheckout true && \
echo io2/connect_test.go >> .git/info/sparse-checkout &&\
git pull origin master