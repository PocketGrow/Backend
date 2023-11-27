const register = require('./register');
const login = require('./login');

module.exports = {
    paths: {
        "/auth/register": {
            ...register
        },
        "/auth/login": {
            ...login
        }
    }
}