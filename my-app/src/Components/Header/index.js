import React from 'react';
import { useHistory } from 'react-router-dom';

import { useTheme } from './../../Context/ThemeContext';

import { Container } from './../Layout';
import { Text } from './../DataDisplay';

const Header = () => {
    const theme = useTheme();
    const history = useHistory();

    const rubriques = [
        <Text
            variant='h1'
            color={theme.light}
            bold
            hover
            hoverColor={theme.secondary}
            onClick={() => history.push('/')}
        >
            Matcha
        </Text>
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
                    style = {{
                        padding: '20px',
                        paddingLeft: '25px',
                        paddingRight: '25px',
                    }}
                >
                    {elements}
                </Container>
            ))}
            </Container>
    );
};

export default Header;