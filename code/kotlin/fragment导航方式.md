fragment在不使用navigation的情况下可以这样处理返回键事件
//        requireActivity().getOnBackPressedDispatcher().addCallback(getViewLifecycleOwner()){if(isVisible) findNavController().navigateUp() else parentFragmentManager.popBackStack() }
