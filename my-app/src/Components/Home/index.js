import React from 'react';
import { useHistory } from 'react-router-dom';
//import { v4 as uuidv4 } from 'uuid';

import { useTheme } from './../../Context/ThemeContext';
import { AuthService } from './../../Client';

import { Container } from './../Layout';
import { Text } from './../DataDisplay';
import { Button } from './../Inputs';
import Login from './../Login';

const Home = () => {
  const theme = useTheme();
  const history = useHistory();
  const authService = new AuthService();

  if (authService.loggedIn()) {
    history.push('/profile');
  }

  /*const rubriques = [
    <Container>
      <Login />
      <Container style={{ paddingTop: '60px' }}>
        <Button
          backgroundColor={theme.primary}
          borderRadius="4px"
          width="220px"
          height="50px"
          border={`none`}
          style={{ padding: '5px' }}
          hover
          onClick={() => history.push('/inscription')}
        >
          <Container align="center">
            <Text fontSize="0px" color={theme.defaultText} bold>
              Inscription
            </Text>
          </Container>
        </Button>
      </Container>
    </Container>,
  ];*/

  return (
    <Container
      style={{ width: '100%' }}
      row
      backgroundColor={theme.dark}
      justify="center"
      align="stretch"
      noWrap
    >
      <Container justify="center">
        <Login />
        <Container style={{ paddingTop: '60px' }}>
          <Button
            backgroundColor={theme.primary}
            borderRadius="4px"
            width="220px"
            height="50px"
            border={`none`}
            style={{ padding: '5px' }}
            hover
            onClick={() => history.push('/inscription')}
          >
            <Container align="center">
              <Text fontSize="0px" color={theme.defaultText} bold>
                Inscription
              </Text>
            </Container>
          </Button>
        </Container>
      </Container>
    </Container>
  );
};

export default Home;
