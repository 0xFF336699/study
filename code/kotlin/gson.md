
        val type = object :TypeToken<ArrayList<RecipientData>>(){}.type  
        val list = gson.fromJson<ArrayList<RecipientData>>(js, type)    
        上面在快递员打电话项目中出现release版抛出Missing type parameter错误的情况，
        经搜索改为  
        
        val type = TypeToken.getParameterized(ArrayList::class.java, RecipientData::class.java).type  
        val list = gson.fromJson<ArrayList<RecipientData>>(js, type)  
        现在看起来没再抛出这个错误了  
        https://www.androidbugfix.com/2022/02/caused-by-javalangruntimeexception.html  



        val conf:ScanSettingViewModelConfData = gson.fromJson(s, ScanSettingViewModelConfData::class.java)
        
        val t = object:TypeToken<ScanSettingViewModelConfData>(){}.type
        val data2:ScanSettingViewModelConfData = gson.fromJson(s, object:TypeToken<ScanSettingViewModelConfData>(){}.type)



        val type = object :TypeToken<HashMap<String, ParcelData>>(){}.type
        val map = gson.fromJson<HashMap<String, ParcelData>>(js, type)