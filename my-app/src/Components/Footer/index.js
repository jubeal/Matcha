import React from 'react';
import { useHistory } from 'react-router-dom';

import { useTheme } from './../../Context/ThemeContext';

import { Container } from './../Layout';
import { Text } from './../DataDisplay';

const Footer = () => {
    const theme = useTheme();

    const elements = [
        <Text color={theme.light} variant="small">
            Footer Matchas
        </Text>
    ]
}