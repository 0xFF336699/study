``` kotlin

    private lateinit var intentLauncher: StartActivityForResultLauncher
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        // 创建
        intentLauncher = StartActivityForResultLauncher(this)
        lifecycle.addObserver(intentLauncher)
    }
    private var _binding :FpPrinterBinding? = null
    private val binding get() = _binding!!
    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        _binding = FpPrinterBinding.inflate(inflater, container, false)
        binding.lifecycleOwner = this
        val view = binding.root
        binding.btnConnectBluetooth.setOnClickListener{
            val enableBtIntent = Intent(BluetoothAdapter.ACTION_REQUEST_ENABLE)
            // 调用
            intentLauncher.launch(enableBtIntent){ it->
                println("$it")
            }
        }
        return view
    }
    ```