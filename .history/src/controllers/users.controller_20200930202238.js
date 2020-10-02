const usersCtrl = {};

usersCtrl.renderSignUpForm = (req, res) => {
    res.render('users/signup');
};

usersCtrl.signup = (req, res) => {
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
            errors
        });
    } else {
        res.send('signup successfully');
    }
    req.flash('error_msg', '')
    res.send('ok');
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