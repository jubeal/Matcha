import React from 'react';
import { useHistory } from 'react-router-dom';

import { useTheme } from './../../Context/ThemeContext';
import { AuthService } from './../../Client';

import { Container } from './../Layout';
import { Text } from './../DataDisplay';
import { Button, Input } from './../Inputs';

const Login = () => {
  const theme = useTheme();
  const authService = new AuthService();
  const history = useHistory();

  const [error, setError] = React.useState([]);

  const [form, setForm] = React.useState({
    email: '',
    pwd: '',
  });

  const updateForm = (value, field) => {
    setForm({ ...form, [field]: value });
  };

  const formControl = [
    {
      key: 'email',
      title: 'Adresse email *',
      type: 'email',
      placeholder: 'Email',
      value: form.email,
      setValue: (e) => updateForm(e, 'email'),
      errorHandling: (mail) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(mail).toLowerCase()))
          return 'Vous devez renseigner une adresse email valide';
        return undefined;
      },
    },
    {
      key: 'pwd',
      title: 'Mot de passe *',
      placeholder: 'Mot de passe',
      type: 'password',
      value: form.pwd,
      setValue: (e) => updateForm(e, 'pwd'),
      errorHandling: (val) => {
        return undefined;
      },
    },
  ];

  const checkError = () => {
    const newErrors = formControl
      .map((field) => {
        return {
          key: field.key,
          errorMsg: field.errorHandling(field.value),
        };
      })
      .filter((err) => err.errorMsg !== undefined);
    if (newErrors.length > 0) {
      setError(newErrors);
      return false;
    }
    if (form.gender === '' || form.target === '') {
      return false;
    }
    return true;
  };

  return (
    <Container>
      {formControl.map((field, idx) => {
        const err = error.find((e) => e.key === field.key);
        return (
          <div key={field.key} style={{ paddingBottom: '30px' }}>
            <Input
              color={theme.defaultText}
              backgroundColor={theme.dark2}
              borderRadius="4px"
              border={`1px solid ${theme.defaultText}`}
              fontSize="16px"
              error={err !== undefined}
              errorMsg={err?.errorMsg}
              title={field.title}
              defaultValue={field.value}
              placeholder={field.placeholder}
              onChange={field.setValue}
              type={field.type}
              focus
              focusBorderColor={theme.secondary}
              padding="10px"
            />
          </div>
        );
      })}
      <Button
        backgroundColor={theme.primary}
        borderRadius="4px"
        width="220px"
        height="50px"
        border={`none`}
        style={{ padding: '5px' }}
        hover
        onClick={async () => {
          if (checkError() === true) {
            const res = await authService.login(form);
            if (res) {
              history.push('/profile');
            } else {
              console.log(res);
            }
          }
        }}
      >
        <Container align="center">
          <Text fontSize="0px" color={theme.defaultText} bold>
            Connexion
          </Text>
        </Container>
      </Button>
    </Container>
  );
};

export default Login;
