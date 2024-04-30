import Location from '../icons/Location';
import styles from './Card.module.css';
import Link from 'next/link';

function Card(props) {
    const {id,name,model,year,distance,location,image,price}=props;

  return (
    <Link href={`/cars/${id}`}>
        <img src={image} className={styles.image} />
        <h4 className={styles.title}>{`${name} ${model}`}</h4>
        <p className={styles.details}>{`${year} . ${distance}`}</p>
        <div className={styles.footer}>
            <p className={styles.price}>$ {price}</p>
            <div className={styles.location}>
                <p>{location}</p>
                <Location/>
            </div>
        </div>

    </Link>
  )
}

export default Card;