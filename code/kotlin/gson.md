
        val type = object :TypeToken<ArrayList<RecipientData>>(){}.type
        val list = gson.fromJson<ArrayList<RecipientData>>(js, type)  
        