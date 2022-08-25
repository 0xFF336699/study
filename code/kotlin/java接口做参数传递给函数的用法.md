
    接口函数无参
    unansweredAccessor.init(context, SharedPreferenceItem.Getter { ->"" })
    unansweredAccessor.init(context, { ->"" })
    unansweredAccessor.init(context){ ->"" }
    unansweredAccessor.init<String>(context){ ->"" }

    接口函数有参
     val adapter = HorizontalTagAdapter<String>(R.layout.string_with_delete_item, recipient.tags,
            { s->s })


    // 本质上它还是套壳 ，调用event还是得创建IListener用于卸载  
    phoneCallUtil.dispatcher.addListener(QueueCallEvent.QueueCallComplete, onQueueCallEvent)
    phoneCallUtil.dispatcher.addListener(QueueCallEvent.QueueCallChangeEvent, IListener<QueueCallEvent> { onQueueEvent(it) })

    private fun onQueueEvent(event: QueueCallEvent){
        queueCallEvent = event
        updateUI()
    }
    private val onQueueCallEvent = IListener<QueueCallEvent> {
        queueCallEvent = it
        updateUI()  
    }


    https://lankydan.dev/calling-java-functional-interfaces-from-kotlin

    
    
        this.addOnPropertyChangedCallback(object : OnPropertyChangedCallback() {
            override fun onPropertyChanged(sender: Observable?, propertyId: Int) {
                TODO("Not yet implemented")
            }
        })


class AccessiBilityListener(val packageName: String, val clsName:String, val onEvent: (event:AccessibilityEvent, info:AccessibilityNodeInfo) -> Unit) {}
// 注意双引号的用法
class BarcodeScanner {
    val listener2 = AccessiBilityListener("", "", ::onEvent)
    fun onEvent(event:AccessibilityEvent, root:AccessibilityNodeInfo){

    }
}

// 多函数接口传递

        val bl = service.dispatchGesture(
            GestureDescription.Builder()
                .addStroke(GestureDescription.StrokeDescription(path, 0, 100)).build(), object:
                AccessibilityService.GestureResultCallback() {
                override fun onCompleted(gestureDescription: GestureDescription?) {
                    super.onCompleted(gestureDescription)
                }

                override fun onCancelled(gestureDescription: GestureDescription?) {
                    super.onCancelled(gestureDescription)
                }
                                                                                                                                         }, null
        )