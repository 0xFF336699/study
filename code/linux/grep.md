正则排除

```
 logs ig-web-data-prod 5000 | grep -v '本次请求处理总耗时\|google.com/bot.html\|120.244.208.136\|66.249.73\|66.249.71'

获取某个接口调用
  logs xiaochengxu-shangwoa 4000 | grep  -nE '^2021-06-29T(.+)team: session member is login used time'

获取某个接口某日的访问量
 logs2 xiaochengxu-shangwoa 4000 | grep -c  -nE '^2021-06-29T(.+)team: session member is login used time'
 
 logs2 xiaochengxu-shangwoa 4000 | grep -c  -nE '^2021-06-30'
查找错误单号
  logs express-house-prod 1000000 | grep -a -A 5 '包裹不存在' | grep -a -P '\d{5,}'  | grep -a -P '\d{5,}'

   logs express-house-prod 1000000 | grep -a -A 5 '包裹不存在' | grep -a -P '\d{5,}'  | grep -a -P 'barcode=.\d{5,}' | grep -a -P '\d{5,}' -o 

    logs xiaochengxu-shangwoa 10000| grep -v 'wx_tracking' | grep -A 2 -B 20 '未成功'

    
```

```
linux命令---grep命令
简介
　　grep (global search regular expression(RE) and print out the line,全面搜索正则表达式并把行打印出来)是一种强大的文本搜索工具，它能使用正则表达式搜索文本，并把匹配的行打印出来。

　　Unix的grep家族包括grep、egrep和fgrep。egrep和fgrep的命令只跟grep有很小不同。egrep是grep的扩展，支持更多的re元字符， fgrep就是fixed grep或fast grep，它们把所有的字母都看作单词，也就是说，正则表达式中的元字符表示回其自身的字面意义，不再特殊。linux使用GNU版本的grep。它功能更强，可以通过-G、-E、-F命令行选项来使用egrep和fgrep的功能。

　　grep的工作方式是这样的，它在一个或多个文件中搜索字符串模板。如果模板包括空格，则必须被引用，模板后的所有字符串被看作文件名。搜索的结果被送到标准输出，不影响原文件内容。grep可用于shell脚本，因为grep通过返回一个状态值来说明搜索的状态，如果模板搜索成功，则返回0，如果搜索不成功，则返回1，如果搜索的文件不存在，则返回2。我们利用这些返回值就可进行一些自动化的文本处理工作。

 

命令格式：grep [option] pattern file

复制代码
grep的常用选项：

-V： 打印grep的版本号

-E： 解释PATTERN作为扩展正则表达式，也就相当于使用egrep。 或操作

-F :   解释PATTERN作为固定字符串的列表，由换行符分隔，其中任何一个都要匹配。也就相当于使用fgrep。

-G:   将范本样式视为普通的表示法来使用。这是默认值。加不加都是使用grep。

匹配控制选项：

-e :  使用PATTERN作为模式。这可以用于指定多个搜索模式，或保护以连字符（ - ）开头的图案。指定字符串做为查找文件内容的样式。   

-f :  指定规则文件，其内容含有一个或多个规则样式，让grep查找符合规则条件的文件内容，格式为每行一个规则样式。

-i :  搜索时候忽略大小写

-v:  反转匹配，选择没有被匹配到的内容。

-w：匹配整词，精确地单词,单词的两边必须是非字符符号(即不能是字母数字或下划线)

-x：仅选择与整行完全匹配的匹配项。精确匹配整行内容(包括行首行尾那些看不到的空格内容都要完全匹配)

-y：此参数的效果和指定“-i”参数相同。

一般输出控制选项：

-c： 抑制正常输出;而是为每个输入文件打印匹配线的计数。

--color [= WHEN]：让关键字高亮显示，如--color=auto

-L：列出文件内容不符合指定的范本样式的文件名称

-l : 列出文件内容符合指定的范本样式的文件名称。

-m num：当匹配内容的行数达到num行后,grep停止搜索,并输出停止前搜索到的匹配内容

-o: 只输出匹配的具体字符串,匹配行中其他内容不会输出

-q：安静模式,不会有任何输出内容,查找到匹配内容会返回0,未查找到匹配内容就返回非0

-s：不会输出查找过程中出现的任何错误消息，-q和-s选项因为与其他系统的grep有兼容问题，shell脚本应该避免使用-q和-s，并且应该将标准和错误输出重定向到/dev/null 代替。

输出线前缀控制：

-b：输出每一个匹配行(或匹配的字符串)时在其前附加上偏移量(从文件第一个字符到该匹配内容之间的字节数)

-H：在每一个匹配行之前加上文件名一起输出(针对于查找单个文件),当查找多个文件时默认就会输出文件名

-h：禁止输出上的文件名的前缀。无论查找几个文件都不会在匹配内容前输出文件名

--label = LABEL：显示实际来自标准输入的输入作为来自文件LABEL的输入。这是特别在实现zgrep等工具时非常有用，例如gzip -cd foo.gz | grep --label = foo -H的东西。看到 也是-H选项。

-n：输出匹配内容的同时输出其所在行号。

-T：初始标签确保实际行内容的第一个字符位于制表位上，以便对齐标签看起来很正常。在匹配信息和其前的附加信息之间加入tab以使格式整齐。

上下文线控制选项：

-A num：匹配到搜索到的行以及该行下面的num行

-B num：匹配到搜索到的行以及该行上面的num行

-C num：匹配到搜索到的行以及上下各num行

文件和目录选择选项：

-a： 处理二进制文件，就像它是文本;这相当于--binary-files = text选项。不忽略二进制的数据。  

 --binary-files = TYPE：如果文件的前几个字节指示文件包含二进制数据，则假定该文件为类型TYPE。默认情况下，TYPE是二进制的，grep通常输出一行消息二进制文件匹配，或者如果没有匹配则没有消息。如果TYPE不匹配，grep假定二进制文件不匹配;这相当于-I选项。如果TYPE是文本，则grep处理a二进制文件，如果它是文本;这相当于-a选项。警告：grep --binary-files = text可能会输出二进制的垃圾，如果输出是一个终端和如果可能有讨厌的副作用终端驱动程序将其中的一些解释为命令。

-D：如果输入文件是设备，FIFO或套接字，请使用ACTION处理。默认情况下，读取ACTION，这意味着设备被读取，就像它们是普通文件一样。如果跳过ACTION，设备为 默默地跳过。

-d:  如果输入文件是目录，请使用ACTION处理它。默认情况下，ACTION是读的，这意味着目录被读取，就像它们是普通文件一样。如果跳过ACTION，目录将静默跳过。如果ACTION是recurse，grep将递归读取每个目录下的所有文件;这是相当于-r选项。

--exclude=GLOB：跳过基本名称与GLOB匹配的文件（使用通配符匹配）。文件名glob可以使用*，？和[...]作为通配符，和\引用通配符或反斜杠字符。搜索其文件名和GLOB通配符相匹配的文件的内容来查找匹配使用方法:grep -H --exclude=c* "old" ./*  c*是通配文件名的通配符./* 指定需要先通配文件名的文件的范围,必须要给*,不然就匹配不出内容,(如果不给*,带上-r选项也可以匹配)

--exclude-from = FILE：在文件中编写通配方案,grep将不会到匹配方案中文件名的文件去查找匹配内容

--exclude-dir = DIR：匹配一个目录下的很多内容同时还要让一些子目录不接受匹配,就使用此选项。

 --include = GLOB：仅搜索其基本名称与GLOB匹配的文件（使用--exclude下所述的通配符匹配）。

-R ,-r :以递归方式读取每个目录下的所有文件; 这相当于-d recurse选项。

其他选项：

--line-buffered： 在输出上使用行缓冲。这可能会导致性能损失。

--mmap：启用mmap系统调用代替read系统调用

-U：将文件视为二进制。

-z：将输入视为一组行，每一行由一个零字节（ASCII NUL字符）而不是a终止新队。与-Z或--null选项一样，此选项可以与排序-z等命令一起使用来处理任意文件名。




如果在只是想匹配模式的上下几行，grep可以实现。
 
$grep -5 'parttern' inputfile //打印匹配行的前后5行
 
$grep -C 5 'parttern' inputfile //打印匹配行的前后5行
 
$grep -A 5 'parttern' inputfile //打印匹配行的后5行
 
$grep -B 5 'parttern' inputfile //打印匹配行的前5行

查看mysql慢日志中ip地址为192.168.0.10发送过来的SQL语句的后面三行

tail -50 /usr/local/mysql/data/sql-slow.log |grep -3 '192.168.0.10'  
匹配php错误日志中某一个字段

　　2，tail -100 /data/logs/php/php_error_5.3.log  | grep  "Memcache::get()";

查看某一个文件第5行和第10行

 sed -n '5,10p' filename 这样你就可以只查看文件的第5行到第10行。

 
```
