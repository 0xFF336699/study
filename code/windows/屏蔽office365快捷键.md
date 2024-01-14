管理员打开命令行  
REG ADD HKCU\Software\Classes\ms-officeapp\Shell\Open\Command /t REG_SZ /d rundll32



在Windows中使用Alt+Shift+Ctrl+Win会打开Office 365应用，禁用方法是：以管理员身份打开一个CMD窗口，执行如下命令：

REG ADD HKCU\Software\Classes\ms-officeapp\Shell\Open\Command /t REG_SZ /d rundll32

执行后，重启explorer进程。