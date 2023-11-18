const users = require('app/controllers/user.server.controller.js');

module.exports = function(app) {
    app.route('/users').post(user.create);
};