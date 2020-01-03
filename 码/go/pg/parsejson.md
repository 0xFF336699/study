SuggestIds                 []string `json:"suggest_ids",sql:",array"`  
sql如果在前面则json解析成struct的时候解不出来这个数组。