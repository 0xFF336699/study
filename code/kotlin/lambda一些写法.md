
var f:()->Unit = ::saveUnanswered
fun saveUnanswered():Unit{
}

var f:()->Unit = this::saveUnanswered
fun saveUnanswered():Unit{
}


val call = { param: Int ->String
param.toString()
}

val call = { param: Int ->
param.toString()
}

// 传递方法给变量
var waitingScript: ((service:AccessibilityService) -> Unit)? = null
            AccessibilityModel.waitingScript = reader::run