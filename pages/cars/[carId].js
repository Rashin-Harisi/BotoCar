import CarDetails from "@/components/templates/CarDetails";
import carsData from "@/data/carsData";
import { useRouter } from "next/router"

function CarDetail() {
    const router=useRouter();
    const {carId} = router.query
    const carDetail = carsData[carId - 1];
    
  return <CarDetails {...carDetail}/>
}

export default CarDetail