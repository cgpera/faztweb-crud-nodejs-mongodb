const usersCtrl = {};

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
            // res.redirect('/users/signup');
            res.render('users/signup', {
                errors,
                name,
                email,
                password,
                confirm_password
            });
        } else {
            const newUser = new User({ name, email, password });
            req.flash('success_msg', 'Usuario creado...');
            await newUser.save();
            res.redirect('/users/signin');
        }
    }
};

usersCtrl.renderSigninForm = (req, res) => {
    res.render('users/signin');
};

usersCtrl.signin = (req, res) => {
    res.send('signin');
};

usersCtrl.logout = (req, res) => {
    res.send('logout');
};

module.exports = usersCtrl;