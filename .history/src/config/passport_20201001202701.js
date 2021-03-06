const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User');

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, async(email, password, done) => {
    // Match email´s user
    const user = await User.findOne({ email });
    if (!user) {
        return done(null, false, { message: 'not user found' });
    } else {
        //Match password´s user
        const match = await user.matchPassword(password);
        if (match) {
            return done(null, user);
        } else {
            return done(null, false, { message: 'incorrect password' });
        }
    }
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async(id, done) => {
    await User.findById(id, (err, user) => {
        done(err, user);
    });
})