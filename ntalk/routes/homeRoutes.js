module.exports = function(app) {
    var home = app.controllers.homeController;
    app.get('/', home.index);
};
