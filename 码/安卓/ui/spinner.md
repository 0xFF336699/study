```
viewHolder.sp_shelf.setAdapter(new ArrayAdapter<String>(context,
        android.R.layout.simple_list_item_1,
        ShelfModel.getInstance().getShelfNames()));
```