import React from 'react';
import { useHistory } from 'react-router-dom';

import { AuthService, getUserByIdRequest } from './../../Client';

import { Container } from './../Layout';
import { Text } from './../DataDisplay';
//import { Button } from './../Inputs';

const Profile = () => {
  const history = useHistory();
  const authService = new AuthService();

  if (!authService.loggedIn()) {
    history.push('/');
  }

  console.log(getUserByIdRequest(authService.getProfile().id));
  const {
    firstname,
    lastname,
    age,
    email,
    tel,
    description,
  } = getUserByIdRequest(authService.getProfile().id);

  return (
    <Container
      row
      style={{ width: '100%' }}
      justify="space-around"
      align="center"
    >
      <Container style={{ padding: '10px', heigth: '100%' }}>
        <img src="default_picture.jpg" alt="profil" width="300" heigth="300" />
      </Container>

      <Container style={{ width: '50%' }} justify="flex-start">
        <Text>Prénom : {firstname}</Text>
        <Text>Nom de Famille : {lastname}</Text>
        <Text>Age : {age}</Text>
        <Text>Adresse mail : {email}</Text>
        <Text>Numéro de Téléphone : {tel}</Text>
        <Text>Description : {description}</Text>
      </Container>
    </Container>
  );
};

export default Profile;
