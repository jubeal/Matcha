import React from 'react';
import { useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { useTheme } from './../../Context/ThemeContext';
import { getManyRequest } from '../../Client';

import { Container } from './../Layout';
import { Button } from './../Inputs';
import { Text } from './../DataDisplay';

const Header = () => {
  const theme = useTheme();
  const history = useHistory();

  const rubriques = [
    <Container key="spacing"></Container>,
    <Text
      variant="h1"
      color={theme.light}
      bold
      hover
      hoverColor={theme.secondary}
      onClick={() => history.push('/')}
    >
      Matcha
    </Text>,
    <Container
      style={{
        border: 'none',
        borderRadius: '10px',
        width: '33%',
      }}
      row
      justify="center"
      align="center"
      noWrap
    >
      <Container
        style={{
          padding: '5px',
          border: 'none',
          borderRadius: '10px',
        }}
      >
        <Button
          backgroundColor={theme.dark2}
          color={theme.defaultText}
          width="100%"
          border="none"
          borderRadius="10px"
          hover
          onClick={getManyRequest}
        >
          <Text
            variant="small"
            color={theme.defaultText}
            style={{ padding: '5px' }}
          >
            Connexion
          </Text>
        </Button>
      </Container>
      <Container
        style={{
          padding: '5px',
          border: 'none',
          borderRadius: '10px',
        }}
      >
        <Button
          backgroundColor={theme.dark2}
          color={theme.defaultText}
          border="none"
          width="100%"
          borderRadius="10px"
          hover
          onClick={() => history.push('/inscription')}
        >
          <Text variant="small" color="#FFFFFF" style={{ padding: '5px' }}>
            Inscription
          </Text>
        </Button>
      </Container>
    </Container>,
  ];

  return (
    <Container
      style={{ flex: '0' }}
      row
      backgroundColor={theme.primary}
      justify="space-between"
      align="stretch"
      noWrap
    >
      {rubriques.map((elements) => (
        <Container
          style={{
            padding: '20px',
            paddingLeft: '25px',
            paddingRight: '25px',
            width: '20%',
          }}
          key={uuidv4()}
          justify="center"
          align="center"
        >
          {elements}
        </Container>
      ))}
    </Container>
  );
};

export default Header;
