import React, { useState } from 'react';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import Car from './Car/Car';

const Cars = (props) => {

    const {history} = props;

    const [data, setData] = useState([
        {name: 'Ford', year: 2018},
        {name: 'Audi', year: 2016},
        {name: 'Mazda', year: 2010}
    ]);

    const [showCars, setShowCars] = useState(true);

    let cars = null

    const onChangeName = (name, index) => {
        const cars = [...data];
        cars[index].name = name;
        setData(cars);
    }

    const deleteHandler = (index) => {
        const cars = [ ...data];
        cars.splice(index, 1);
        setData(cars);
    }


    const toggleCarsHandler = () => {
        setShowCars(prevState => {
            return !prevState;
        })
    }

    const goToHome = () => {
        history.push({pathname: '/', search: '?try=to&add=queries', hash: '#check'})
    }

    if (showCars) {
        cars = (data||[]).map((car, index) => {
            return (
                <ErrorBoundary key={index}>
                    <Car
                        index={index}
                        name={car.name}
                        year={car.year}
                        onDelete={(index) => deleteHandler(index)}
                        onChangeName={(event) => onChangeName(event.target.value, index)}
                    />
                </ErrorBoundary>
            )
        })
    }
    return (
        <div style={{width: 400, margin: 'auto'}}>
            <button style={{margin: '10px 0'}} className={'AppButton'} onClick={goToHome} >Back to home</button>
            <button style={{margin: '10px 0'}} className={'AppButton'} onClick={toggleCarsHandler} >Toggle cars</button>
            {cars}
        </div>
    )
}

export default Cars;
