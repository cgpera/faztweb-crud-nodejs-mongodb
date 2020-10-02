const usersCtrl = {};

const passport = require('passport');

const User = require('../models/User');

usersCtrl.renderSignUpForm = (req, res) => {
    res.render('users/signup');
};

usersCtrl.signup = async(req, res) => {
    const { name, email, password, confirm_password } = req.body;
    const errors = [];
    if (password !== confirm_password) {
        errors.push({ text: 'Passwords don´t match' });
    }
    if (password.length < 4) {
        errors.push({ text: 'Password must be at least 4 chars' });
    }
    if (errors.length > 0) {
        res.render('users/signup', {
            errors,
            name,
            email,
            password,
            confirm_password
        });
    } else {
        const user = await User.findOne({ email: email });
        if (user) {
            req.flash('error_msg', 'El email ya está en uso');
            res.redirect('/users/signup');
        } else {
            const newUser = new User({ name, email, password })
            newUser.password = await newUser.encryptPassword(password);
            await newUser.save();
            req.flash('success_msg', 'Usuario creado...');
            res.redirect('/users/signin');
        }
    }
};

usersCtrl.renderSigninForm = (req, res) => {
    res.render('users/signin');
};

usersCtrl.signin = passport.authenticate('local', {
    failureRedirect: '/users/signin',
    successRedirect: '/notes',
    failureFlash: true
});

usersCtrl.logout = (req, res) => {
    res.send('logout');
};

module.exports = usersCtrl;