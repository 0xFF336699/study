```
takeown /f C:\cygwin /r /d y
icacls c:\cygwin /t /grant everyone:F
del c:\cygwin
```