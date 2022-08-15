
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