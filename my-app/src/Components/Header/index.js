import React from 'react';
import { useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { useTheme } from './../../Context/ThemeContext';

import { Container } from './../Layout';
import { Text } from './../DataDisplay';

const Header = () => {
  const theme = useTheme();
  const history = useHistory();

  const rubriques = [
    <Text
      //style={{ fontFamily: 'Dancing Script, cursive' }}
      variant="h1"
      color={theme.light}
      bold
      hover
      hoverColor={theme.secondary}
      onClick={() => history.push('/')}
    >
      Matcha
    </Text>,
  ];

  return (
    <Container
      style={{ flex: '0' }}
      row
      backgroundColor={theme.primary}
      justify="center"
      align="stretch"
      noWrap
    >
      {rubriques.map((elements) => (
        <Container
          style={{
            padding: '20px',
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
