import carsData from "@/data/carsData";
import CarList from "@/components/templates/CarList";


function sedan() {
    const sedanCars = carsData.filter((car)=> car.category === 'sedan')
  return <CarList data={sedanCars}/>
}

export default sedan