import { useRouter } from "next/router";
import CarList from "../../components/templates/CarList";
import carsData from "../../data/carsData";

function FilteredCars() {
    const router= useRouter();

    const [min,max]= router.query.slug || [];

    const filteredCars = carsData.filter ((car)=> car.price > min && car.price < max)

    if (!filteredCars.length) return <h3>Not Found!</h3>

  return <CarList data={filteredCars}/>
}

export default FilteredCars