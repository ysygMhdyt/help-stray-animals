import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';
import cat1 from "../static/cat-p1.jpg";

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Three Newborn Cats',
    description: 'Discovered in a construction site',
    imageUrl:
    cat1,
    address: '789 Songhu Rd, Shanghai, 200434',
    location: {
      lat: 40.7484405,
      lng: -73.9878584
    },
    category: 'Cats',
    creator: 'u1'
  },
  {
    id: 'p2',
    title: 'Emp. State Building',
    description: 'One of the most famous sky scrapers in the world!',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
    address: '20 W 34th St, New York, NY 10001',
    location: {
      lat: 40.7484405,
      lng: -73.9878584
    },
    category: 'Dogs',
    creator: 'u2',
  }
];

const AnimalPlaces = () => {
  const animal = useParams().animal;
  const loadedPlaces = DUMMY_PLACES.filter(place => place.category === animal);
  return <PlaceList items={loadedPlaces} />;
};

export default AnimalPlaces;
