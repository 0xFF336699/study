```
    StorageCheckModel.getInstance().addListenerByDomain(this, StorageCheckModel.operationBtnClicked,
            (IListener<DataEvent<StockVO>>)this::onOperationClicked);
```

this::onOperationClicked 这样每次是生成新的接口函数，所以在addEventListener时判断不了onOperationCLicked是同一个函数，导致重复侦听。

 解决办法可以是生产一个固定的

```
private IListener<DataEvent<StockVO>> onOperationClickedLambda = (DataEvent<StockVO> event)->onOperationClicked(event);
```

接口函数来使用。

