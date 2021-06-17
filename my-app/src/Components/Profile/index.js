import React, { useEffect, useState, useMemo } from 'react';
import { useHistory } from 'react-router-dom';

import { AuthService, getUserByIdRequest } from './../../Client';

import { Container } from './../Layout';
import { Text } from './../DataDisplay';

const Profile = () => {
  const history = useHistory();
  const authService = useMemo(() => {
    return new AuthService();
  }, []);

  if (!authService.loggedIn()) {
    history.push('/');
  }

  const [infos, setInfos] = useState({});

  useEffect(() => {
    console.log('useEffect');
    getUserByIdRequest(authService.getProfile().id).then((result) => {
      console.log(`resultats : ${result}`);
      setInfos(result);
    });
  }, [authService]);

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
        <Text>Prénom : {infos.firstname}</Text>
        <Text>Nom de Famille : {infos.lastname}</Text>
        <Text>Age : {infos.age}</Text>
        <Text>Adresse mail : {infos.email}</Text>
        <Text>Numéro de Téléphone : {infos.tel}</Text>
        <Text>Description : {infos.description}</Text>
      </Container>
    </Container>
  );
};

export default Profile;
