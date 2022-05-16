in the official examples sunflower's class PlantAdapter
val direction =
                HomeViewPagerFragmentDirections.actionViewPagerFragmentToPlantDetailFragment(
                    plant.plantId
                )
            view.findNavController().navigate(direction)