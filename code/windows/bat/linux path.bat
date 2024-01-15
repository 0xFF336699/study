@echo off

set p=%1
set x=%p:\=/%

echo /%x:~0,1%%x:~2%

echo /%x:~0,1%%x:~2%>%systemroot%\temp\clip.txt
clip<%systemroot%\temp\clip.txt


