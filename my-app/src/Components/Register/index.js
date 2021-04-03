import React /*, { useEffect }*/ from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { useTheme } from './../../Context/ThemeContext';
import { postRequest } from '../../Client';

import { Container } from './../Layout';
import { Text } from './../DataDisplay';
import { Button, Input } from './../Inputs';

const Register = () => {
  const theme = useTheme();
  const history = useHistory();

  const [error, setError] = React.useState([]);

  const [form, setForm] = React.useState({
    firstname: '',
    lastname: '',
    email: '',
    pwd: '',
    tel: '',
    age: '',
    gender: '',
    target: '',
  });

  const updateForm = (value, field) => {
    setForm({ ...form, [field]: value });
  };

  const formControl = [
    {
      key: 'firstname',
      title: 'Prénom *',
      placeholder: 'Prénom',
      value: form.firstname,
      setValue: (e) => updateForm(e, 'firstname'),
      errorHandling: (val) => {
        const trimValue = val.trim();
        if (trimValue.length < 2) return 'Vous devez renseigner votre prénom';
        return undefined;
      },
    },
    {
      key: 'lastname',
      title: 'Nom*',
      placeholder: 'Nom',
      value: form.lastname,
      setValue: (e) => updateForm(e, 'lastname'),
      errorHandling: (val) => {
        const trimValue = val.trim();
        if (trimValue.length < 2) return 'Vous devez reseigner votre nom';
        return undefined;
      },
    },
    {
      key: 'age',
      title: 'Age*',
      placeholder: 'Age',
      type: 'number',
      value: form.age,
      setValue: (e) => updateForm(e, 'age'),
      errorHandling: (val) => {
        if (val < 18) return 'Vous devez avoir au moins 18 ans';
        return undefined;
      },
    },
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
        const mdp = val.trim();
        if (mdp.length < 8)
          return `Vous devez renseigner un mot de passe d'au moins 8 caractères.`;
        return undefined;
      },
    },
    {
      key: 'tel',
      title: 'Téléphone *',
      placeholder: 'Numéro de téléphone',
      type: 'tel',
      value: form.tel,
      setValue: (e) => updateForm(e, 'tel'),
      errorHandling: (val) => {
        if (val.length !== 10)
          return 'Vous devez renseigner un numéro de téléphone valide';
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

  const muiTheme = createMuiTheme({
    palette: {
      primary: {
        main: theme.secondary,
      },
      secondary: {
        main: theme.secondary,
      },
      text: {
        primary: theme.defaultText,
        secondary: theme.secondaryText,
      },
      background: {
        paper: theme.dark2,
      },
    },
  });

  const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: '#FFFFFF',
      },
      '& .MuiSvgIcon-root': {
        color: '#FFFFFF',
      },
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 220,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

  const classes = useStyles();

  return (
    <Container
      align="center"
      style={{
        padding: '100px',
      }}
    >
      {formControl.map((field, idx) => {
        const err = error.find((e) => e.key === field.key);
        return (
          <div key={field.key} style={{ padding: '15px' }}>
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
      <ThemeProvider theme={muiTheme}>
        <FormControl
          variant="outlined"
          className={classes.formControl}
          border="white"
        >
          <InputLabel id="demo-simple-select-outlined-label" color="primary">
            Genre
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={form.gender}
            label="Genre"
            className={classes.root}
            onChange={(event) => updateForm(event.target.value, 'gender')}
          >
            <MenuItem value=""> </MenuItem>
            <MenuItem value="MALE">Homme</MenuItem>
            <MenuItem value="FEMALE">Femme</MenuItem>
            <MenuItem value="AGENDER">Non genré</MenuItem>
            <MenuItem value="GENDERFLUID">Genre fluide</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">
            Cherche
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={form.target}
            label="Cherche"
            className={classes.root}
            onChange={(event) => updateForm(event.target.value, 'target')}
          >
            <MenuItem value=""> </MenuItem>
            <MenuItem value={'MALE'}>Homme</MenuItem>
            <MenuItem value={'FEMALE'}>Femme</MenuItem>
            <MenuItem value={'AGENDER'}>Non genré</MenuItem>
            <MenuItem value={'GENDERFLUID'}>Genre fluide</MenuItem>
          </Select>
        </FormControl>
      </ThemeProvider>
      <Button
        backgroundColor={theme.primary}
        borderRadius="4px"
        width="220px"
        height="50px"
        border={`none`}
        style={{ padding: '10px' }}
        hover
        onClick={async () => {
          if (checkError() === true) {
            postRequest(form);
            history.push('/');
          }
          console.log(form);
        }}
      >
        <Container align="center">
          <Text fontSize="0px" color={theme.defaultText} bold>
            Inscription
          </Text>
        </Container>
      </Button>
    </Container>
  );
};

export default Register;
