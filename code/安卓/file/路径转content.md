
        val videoFile = File(path)

        MediaScannerConnection.scanFile(AccessibilityModel.service, arrayOf(videoFile.absolutePath), null,
            OnScanCompletedListener { path: String?, uri: Uri ->
                val p = uri.toString()
                val file = File(p)
                val n = AccessibilityModel.service?.contentResolver?.delete(
                    MediaStore.Images.Media.EXTERNAL_CONTENT_URI,
                    MediaStore.Images.Media.DATA + "=?", arrayOf<String>(p)
                ) //删除系统缩略图

                val b = file.delete() //删除SD中图片
                println("$n $b")
            })


  https://stackoverflow.com/a/53349110/14858018

  