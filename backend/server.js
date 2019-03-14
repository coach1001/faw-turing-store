const express = require('express'),
    app = express(),
    passport = require('passport'),
    authentication = require('./configuration/passport-configuration');

authentication(passport);

app.use(passport.initialize());

app.get('/', (req, res) => {
    res.json({
        status: 'session cookie not set'
    });
});

app.get('/authentication/google', passport.authenticate('google', {
    scope: ['https://www.googleapis.com/auth/userinfo.profile']
}));

// app.get('/callbacks/authentication/google',
//     passport.authenticate('google', {
//         failureRedirect: '/'
//     }),
//     (req, res) => { }
// );

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});