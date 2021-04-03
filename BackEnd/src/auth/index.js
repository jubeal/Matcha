import passport from 'passport';
import { localStrategy } from 'passport-local';
import { User, GenderEnum } from './../models';

passport.use(
    'signup',
    new localStrategy(
        {
            usernameField: 'email',
            passwordField: 'pwd'
        },
        async (email, pwd, done) => {
            try {
                const user = await User
            }
        }
    )
)