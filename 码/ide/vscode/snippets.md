```
获取文件夹名字
https://stackoverflow.com/questions/52877815/vscode-snippet-transform-to-determine-the-containing-directory

之前四个\\\\一直没匹配上，是因为正则写错了.*[\\\\|\\/]+

"stripLastDirectory": {
    "prefix": "lsd",
    "body": [
      "${TM_DIRECTORY/.*[\\\\|\\/]+(.*)/$1/}"
    ],
},

文件夹名字改驼峰
"body":"${TM_DIRECTORY/.*[\\\\|\\/]+(.)([a-zA-Z0-9]*)([-_.]*)(.*)/${1:/downcase}${2}${4:/pascalcase}/}"
```



```
去掉-_ 改为驼峰
https://stackoverflow.com/questions/48104851/snippet-regex-match-arbitrary-number-of-groups-and-transform-to-camelcase/51228186#51228186

它是把第一个字符提取出来改小写的

"test": {
    "prefix": "test",
    "body": [
        "${1:${TM_FILENAME_BASE/^(.)([a-zA-Z0-9]*)([-_.])(.*)/${1:/downcase}${2}${4:/pascalcase}/}}"
    ]
}
```







```
"tminit": {
  "prefix": "3init",
  "body": [
    "package ${TM_DIRECTORY/.*[\\\\\\\\|\\\\/]+(.*)/$1/}",
    "",
    "func init() {",
    "	request.AddMember(tms.T${TM_DIRECTORY/.*[\\\\\\\\|\\\\/]+(.)([a-zA-Z0-9]*)([-_.]*)(.*)/${1:/upcase}${2}${4:/pascalcase}/}, tms.M${1:${TM_FILENAME_BASE/^(.)([a-zA-Z0-9]*)([-_.]*)(.*)/${1:/upcase}${2}${4:/pascalcase}/}}, ${TM_FILENAME_BASE/^(.)([a-zA-Z0-9]*)([-_.]*)(.*)/${1:/downcase}${2}${4:/pascalcase}/}Handler, ${TM_FILENAME_BASE/^(.)([a-zA-Z0-9]*)([-_.]*)(.*)/${1:/downcase}${2}${4:/pascalcase}/}RequestBodyShellParser)",
    "}",
    "",
    "type ${TM_FILENAME_BASE/^(.)([a-zA-Z0-9]*)([-_.]*)(.*)/${1:/downcase}${2}${4:/pascalcase}/}RequestBody struct{",
    "	Num string `json:\"num\"`",
    "}",
    "",
    "type ${TM_FILENAME_BASE/^(.)([a-zA-Z0-9]*)([-_.]*)(.*)/${1:/downcase}${2}${4:/pascalcase}/}RequestBodyShell struct{",
    "	Body *${TM_FILENAME_BASE/^(.)([a-zA-Z0-9]*)([-_.]*)(.*)/${1:/downcase}${2}${4:/pascalcase}/}RequestBody",
    "}",
    "",
    "func ${TM_FILENAME_BASE/^(.)([a-zA-Z0-9]*)([-_.]*)(.*)/${1:/downcase}${2}${4:/pascalcase}/}RequestBodyShellParser(bs []byte) (error, interface{})   {",
    "	data := new(${TM_FILENAME_BASE/^(.)([a-zA-Z0-9]*)([-_.]*)(.*)/${1:/downcase}${2}${4:/pascalcase}/}RequestBodyShell)",
    "	err := json.Unmarshal(bs, data)",
    "	return err, data.Body",
    "}",
    "func ${TM_FILENAME_BASE/^(.)([a-zA-Z0-9]*)([-_.]*)(.*)/${1:/downcase}${2}${4:/pascalcase}/}Handler(rd *request.RequestData) (err error, headerCode int, res *request.ResData)  {",
    "	resBody := &${TM_FILENAME_BASE/^(.)([a-zA-Z0-9]*)([-_.]*)(.*)/${1:/downcase}${2}${4:/pascalcase}/}ResultBody{}",
    "	res = &request.ResData{Data: resBody, IsOK: false, ErrMsg: \"\",}",
    "	err, uuid, toReturn := router_session.CheckIsExperssXiaochengxuWithReturn(rd.R, resBody)",
    "	if toReturn {",
    "		return",
    "	}",
    "	body := rd.BodyStruct.(*${TM_FILENAME_BASE/^(.)([a-zA-Z0-9]*)([-_.]*)(.*)/${1:/downcase}${2}${4:/pascalcase}/}RequestBody)",
    "	if body == nil{",
    "		resBody.Msg = \"no body\"",
    "		return ",
    "	}",
    "	var tx *pg.Tx",
    "	isRollBack := true",
    "	defer func() {",
    "		if tx == nil{",
    "			return",
    "		}",
    "		if isRollBack{",
    "			tx.Rollback()",
    "		}else{",
    "			tx.Commit()",
    "		}",
    "	}()",
    "	tx, err = pgdbs.MainPg.Begin()",
    "	if err != nil{",
    "		fmt.Println(\"router handle error\", rd.Team, rd.Member, rd.RequestIndex, \"pgdbs.MainPg.Begin error\", err.Error())",
    "		return ",
    "	}",
    "	",
    "	isRollBack = false",
    "	resBody.IsOk = true",
    "	return",
    "}",
    "",
    "type ${TM_FILENAME_BASE/^(.)([a-zA-Z0-9]*)([-_.]*)(.*)/${1:/downcase}${2}${4:/pascalcase}/}ResultBody struct {",
    "	IsOk bool   `json:\"is_ok\"`",
    "	Msg  string `json:\"msg\"`",
    "}",
    "",
    "func (this *${TM_FILENAME_BASE/^(.)([a-zA-Z0-9]*)([-_.]*)(.*)/${1:/downcase}${2}${4:/pascalcase}/}ResultBody) SetMsg(msg string) {",
    "	this.Msg = msg",
    "}",
    ""
  ],
  "description": "tminit"
}
```





```
package ${TM_DIRECTORY/.*[\\\\|\\/]+(.*)/$1/}

func init() {
	request.AddMember(tms.T${TM_DIRECTORY/.*[\\\\|\\/]+(.)([a-zA-Z0-9]*)([-_.]*)(.*)/${1:/upcase}${2}${4:/pascalcase}/}, tms.M${1:${TM_FILENAME_BASE/^(.)([a-zA-Z0-9]*)([-_.]*)(.*)/${1:/upcase}${2}${4:/pascalcase}/}}, ${TM_FILENAME_BASE/^(.)([a-zA-Z0-9]*)([-_.]*)(.*)/${1:/downcase}${2}${4:/pascalcase}/}Handler, ${TM_FILENAME_BASE/^(.)([a-zA-Z0-9]*)([-_.]*)(.*)/${1:/downcase}${2}${4:/pascalcase}/}RequestBodyShellParser)
}

type ${TM_FILENAME_BASE/^(.)([a-zA-Z0-9]*)([-_.]*)(.*)/${1:/downcase}${2}${4:/pascalcase}/}RequestBody struct{
	Num string `json:"num"`
}

type ${TM_FILENAME_BASE/^(.)([a-zA-Z0-9]*)([-_.]*)(.*)/${1:/downcase}${2}${4:/pascalcase}/}RequestBodyShell struct{
	Body *${TM_FILENAME_BASE/^(.)([a-zA-Z0-9]*)([-_.]*)(.*)/${1:/downcase}${2}${4:/pascalcase}/}RequestBody
}

func ${TM_FILENAME_BASE/^(.)([a-zA-Z0-9]*)([-_.]*)(.*)/${1:/downcase}${2}${4:/pascalcase}/}RequestBodyShellParser(bs []byte) (error, interface{})   {
	data := new(${TM_FILENAME_BASE/^(.)([a-zA-Z0-9]*)([-_.]*)(.*)/${1:/downcase}${2}${4:/pascalcase}/}RequestBodyShell)
	err := json.Unmarshal(bs, data)
	return err, data.Body
}
func ${TM_FILENAME_BASE/^(.)([a-zA-Z0-9]*)([-_.]*)(.*)/${1:/downcase}${2}${4:/pascalcase}/}Handler(rd *request.RequestData) (err error, headerCode int, res *request.ResData)  {
	resBody := &${TM_FILENAME_BASE/^(.)([a-zA-Z0-9]*)([-_.]*)(.*)/${1:/downcase}${2}${4:/pascalcase}/}ResultBody{}
	res = &request.ResData{Data: resBody, IsOK: false, ErrMsg: "",}
	err, uuid, toReturn := router_session.CheckIsExperssXiaochengxuWithReturn(rd.R, resBody)
	if toReturn {
		return
	}
	body := rd.BodyStruct.(*${TM_FILENAME_BASE/^(.)([a-zA-Z0-9]*)([-_.]*)(.*)/${1:/downcase}${2}${4:/pascalcase}/}RequestBody)
	if body == nil{
		resBody.Msg = "no body"
		return 
	}
	var tx *pg.Tx
	isRollBack := true
	defer func() {
		if tx == nil{
			return
		}
		if isRollBack{
			tx.Rollback()
		}else{
			tx.Commit()
		}
	}()
	tx, err = pgdbs.MainPg.Begin()
	if err != nil{
		fmt.Println("router handle error", rd.Team, rd.Member, rd.RequestIndex, "pgdbs.MainPg.Begin error", err.Error())
		return 
	}
	
	isRollBack = false
	resBody.IsOk = true
	return
}

type ${TM_FILENAME_BASE/^(.)([a-zA-Z0-9]*)([-_.]*)(.*)/${1:/downcase}${2}${4:/pascalcase}/}ResultBody struct {
	IsOk bool   `json:"is_ok"`
	Msg  string `json:"msg"`
}

func (this *${TM_FILENAME_BASE/^(.)([a-zA-Z0-9]*)([-_.]*)(.*)/${1:/downcase}${2}${4:/pascalcase}/}ResultBody) SetMsg(msg string) {
	this.Msg = msg
}

```

