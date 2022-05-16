
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