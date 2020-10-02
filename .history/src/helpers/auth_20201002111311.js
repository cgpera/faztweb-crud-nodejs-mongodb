const helpers = {};

helpers.isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        req.flash('error_msg', 'No autorizado');
        return next();
    }
    res.redirect('/users/signin')
}

module.exports = helpers;