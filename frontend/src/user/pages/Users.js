import React, { useEffect, useState } from 'react';

import UsersList from '../components/UsersList';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import Card from '../../shared/components/UIElements/Card';
import AnimalItem from '../components/AnimalItem';
import CatPic from '../../shared/static/cat.JPG';
import DogPic from '../../shared/static/dog.JPG';
import OtherPic from '../../shared/static/others.JPG';
import { useHttpClient } from '../../shared/hooks/http-hook';
import './Users.css';

const Users = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedUsers, setLoadedUsers] = useState();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const responseData = await sendRequest(
          'http://localhost:5000/api/users'
        );

        setLoadedUsers(responseData.users);
      } catch (err) {}
    };
    fetchUsers();
  }, [sendRequest]);

  const Animals = [
    {
        id: 'a1',
        name: 'Cats',
        image: CatPic,
        // places: 1
    },
    {
        id: 'a2',
        name: 'Dogs',
        image: DogPic,
        // places: 1
    },
    {
        id: 'a0',
        name: 'Others',
        image: OtherPic,
        // places: 0
    }];

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      <Card className="basic">
        <p>Discover stray animals and share their photos and locations, so that others can also lend a helping hand!</p>
        <h3>Join us now!</h3>
        <h3 className="section__title">Categories include:</h3>
        <div className="category">{Animals.map(animal => (
            <AnimalItem
                key={animal.id}
                image={animal.image}
                name={animal.name}
                placeCount={animal.places}
            />
        ))}</div>
      </Card>
      <Card className="basic">
      <h2 className="section__title">Users:</h2>
      {!isLoading && loadedUsers && <UsersList items={loadedUsers} />}
      </Card>
      <Card className="news">
          <h2>News:</h2>
          <div>More features are under development...</div>
      </Card>
    </React.Fragment>
  );
};

export default Users;
