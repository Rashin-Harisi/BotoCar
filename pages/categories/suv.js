import carsData from "@/data/carsData";
import CarList from "@/components/templates/CarList";


function Suv() {
    const suvCars = carsData.filter((car)=> car.category === 'suv')
  return <CarList data={suvCars}/>
}

export default Suv