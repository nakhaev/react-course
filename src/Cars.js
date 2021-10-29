import React from 'react';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import Car from './Car/Car';

const Cars = (props) => {
    const {data, showCars, deleteHandler, onChangeName} = props;
    let cars = null

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

    return cars;
}

export default Cars;
