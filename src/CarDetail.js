import React from 'react';

const CarDetail = props => {
    console.log('props', props);
    return (
        <div style={{textAlign: 'center'}}>
            <h1>{props.match.params.name}</h1>

        </div>
    )
}
 export default CarDetail;
