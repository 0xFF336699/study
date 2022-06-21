
判断属性是否已经初始化过了
open class Person {
    lateinit var str: String

    fun work() {
        if(::str.isInitialized) {
            println("str is isInitialized")
        } else {
            println("str is not isInitialized")
        }
    }
}