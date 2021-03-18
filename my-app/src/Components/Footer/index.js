import React from 'react';
//import { useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { useTheme } from './../../Context/ThemeContext';

import { Container } from './../Layout';
import { Text } from './../DataDisplay';

const Footer = () => {
    const theme = useTheme();
    //const history = useHistory();

    const elements = [
        <Text color={theme.light} variant="small">
            Footer Matcha
        </Text>
    ];
    return (
        <Container
            style = {{ flex: '0' }}
            row
            backgroundColor={theme.primary}
            justify='center'
            align='center'
            noWrap
        >
            {elements.map((element) =>(
                <Container
                    key={uuidv4()}
                    style={{
                        padding: '20px',
                        paddingLeft: '25px',
                        paddingRight: '25px',
                    }}
                    noWrap
                >
                    {element}
                </Container>
            ))}
        </Container>
    )
}

export default Footer;
