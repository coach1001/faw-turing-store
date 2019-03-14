const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
module.exports = (passport) => {
    passport.serializeUser((user, done) => {
        done(null, user);
    });
    passport.deserializeUser((user, done) => {
        done(null, user);
    });
    passport.use(new GoogleStrategy({
        clientID: '1038954418644-80sp28ih0thd5h6lukmq7igce3kah0nt.apps.googleusercontent.com',
        clientSecret: 'OtAe3ppsaoAox3sd7ZM_RVj3',
        callbackURL: 'http://localhost:3001/callbacks/authentication/google'
        },
        (token, refreshToken, profile, done) => {
            return done(null, {
                profile: profile,
                token: token
            });
        }));
};
