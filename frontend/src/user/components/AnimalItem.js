import React from 'react';
import { Link } from 'react-router-dom';

import Avatar from '../../shared/components/UIElements/Avatar';
import Card from '../../shared/components/UIElements/Card';
import './AnimalItem.css';

const AnimalItem = props => {
    return (
        <Card className="animal-item">
            {/* <Link to={`/${props.name}`}> */}
                <div className="animal-item__image">
                    <Avatar image={props.image} alt={props.name} />
                </div>
                <div className="animal-item__info">
                    <h2>{props.name}</h2>
                     {/* <h3>
                        {props.placeCount} {props.placeCount === 1 ? 'Place' : 'Places'}
                    </h3> */}
                </div>
            {/* </Link> */}
        </Card>

    );
};

export default AnimalItem;
